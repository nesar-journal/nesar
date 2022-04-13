import fs from 'fs';
import path from 'path';

import yaml from 'yaml';

import {
  DATA_PATH,

  Data,
  IndexedArticlesData,
  IndexedIssuesData,

  readFile,
  writeFile,
} from './utils';

function getResourceIds (resource: string): string[] {
  const resourcePath = path.join(process.cwd(), 'public', resource);

  const paths = fs
    .readdirSync(resourcePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // only include subdirectories
    .map((dirent) => dirent.name)
    .filter((name) => !name.startsWith('.')) // exclude hidden files
    .filter((name) => !name.includes('/')) // light sanitization
    .filter((name) => !name.includes(';')) // light sanitization
  ;

  return paths;
}

function compileResourceData (folderName: string) {
  const data: IndexedArticlesData | IndexedIssuesData = {
    ids  : [],
    data : {},
  };

  const ids = getResourceIds(folderName);

  data.ids = ids;

  ids.forEach((id) => {
    const metadataPath = path.join(process.cwd(), 'public', folderName, id, 'metadata.yml');

    if (fs.existsSync(metadataPath)) {
      const rawData = readFile(metadataPath);

      if (rawData) {
        const parsedData = yaml.parse(rawData);

        const { paths, type } = parsedData;

        if (paths) {
          const { content } = paths;

          const entryData = {
            ...parsedData,
          };

          if (type == 'article') {
            const contentPath = path.join(process.cwd(), 'public', folderName, id, content);
            const contentData = readFile(contentPath);

            if (contentData) {
              (entryData)['content'] = contentData;
            }
          }

          data.data[id] = entryData;
        }
      }
    } else {
      console.log(`METADATA ${metadataPath} WAS NOT FOUND.\n`);
    }
  });

  return data;
}

function compileData () {
  const data: Data = {
    articles : compileResourceData('articles') as IndexedArticlesData,
    issues   : compileResourceData('issues') as IndexedIssuesData,
  };

  writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

compileData();
