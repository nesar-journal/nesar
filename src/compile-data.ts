import fs from 'fs';
import path from 'path';

import yaml from 'yaml';

import {
  Data,
  IndexedArticlesData,
  IndexedIssuesData,
  IndexedAuthorsData,
} from './types';

import {
  DATA_PATH,
  readFile,
  writeFile,
} from './utils';

const authorsData = compileAuthorsData();

function getResourceIds (resource: string): string[] {
  const resourcePath = path.resolve(__dirname, '..', 'public', resource);

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
    const metadataPath = path.resolve(__dirname, '..', 'public', folderName, id, 'metadata.yml');

    if (fs.existsSync(metadataPath)) {
      const rawData = readFile(metadataPath);

      if (rawData) {
        const parsedData = yaml.parse(rawData);

        const { paths } = parsedData;

        if (paths) {
          const { content } = paths;

          const entryData = {
            ...parsedData,
          };

          if (folderName.includes('article')) {
            const contentPath = path.resolve(__dirname, '..', 'public', folderName, id, content);
            const contentData = readFile(contentPath);

            if (contentData) {
              (entryData)['content'] = contentData;
            }
          }

          if (entryData.authors) {
            entryData.authors = entryData.authors.map((authorId: string) => {
              return ({
                displayName: authorsData.data[authorId].displayName,
                id: authorId,
              });
            });
          }

          if (entryData.editors) {
            entryData.editors = entryData.editors.map((editorId: string) => {
              return ({
                displayName: authorsData.data[editorId].displayName,
                id: editorId,
              });
            });
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

function compileAuthorsData () {
  const authorsPath = path.resolve(__dirname, '..', 'public', 'authors.yml');

  const data: IndexedAuthorsData = {
    ids  : [],
    data : {},
  };

  if (fs.existsSync(authorsPath)) {
    const rawData = readFile(authorsPath);

    if (rawData) {
      const parsedData = yaml.parse(rawData);

      const ids = Object.keys(parsedData);
      ids.sort();

      data.ids  = ids;
      data.data = parsedData;
    }
  }

  return data;
}

function compileData () {
  const data: Data = {
    authors  : authorsData,
    articles : compileResourceData('articles') as IndexedArticlesData,
    issues   : compileResourceData('issues') as IndexedIssuesData,
  };

  writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

compileData();
