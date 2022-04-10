import fs from 'fs';
import path from 'path';

import yaml from 'yaml';

import articlesIds from './utils/articles';
import issuesIds from './utils/issues';

const TARGET_ISSUES_FOLDER = './public/issues';
const TARGET_ARTICLES_FOLDER = './public/articles';

function makeFolder (folderPath: string) {
  fs.mkdirSync(folderPath, { recursive: true });
}

function deleteFolder (folderPath: string) {
  if (fs.existsSync(folderPath)) {
    try {
      fs.rmSync(folderPath, { recursive: true });
      console.log(`${folderPath} SUCCESSFULLY DELETED.`);
    } catch (error) {
      console.error(`ERROR WHILE DELETING ${folderPath}.`, error);
    }
  } else {
    console.log(`DIRECTORY ${folderPath} DOES NOT EXIST - SKIPPING DELETION.`);
  }
}

function copyFile (source: string, destination: string) {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination);
    console.log(`${source} SUCCESSFULLY COPIED.`);
  } else {
    console.log(`${source} DOES NOT EXIST - SKIPPING COPYING.`);
  }
}

function copyFiles (ids: string[], type: string) {
  ids.forEach(async (id) => {
    const metadataPath = path.join(process.cwd(), 'data', type, id, 'metadata.yml');

    if (fs.existsSync(metadataPath)) {
      const rawData = fs.readFileSync(metadataPath, { encoding: 'utf8', flag: 'r' });
      const data = yaml.parse(rawData);
      const { paths } = data;
      const { cover, pdf } = paths;
      const coverExtension = path.extname(cover);

      const sourceCoverPath = path.join(process.cwd(), 'data', type, id, cover);
      const sourcePdfPath = path.join(process.cwd(), 'data', type, id, pdf);

      const targetCoverPath = path.join(process.cwd(), 'public', type, `${id}${coverExtension}`);
      const targetPdfPath = path.join(process.cwd(), 'public', type, `${id}.pdf`);

      copyFile(sourceCoverPath, targetCoverPath);
      copyFile(sourcePdfPath, targetPdfPath);
    } else {
      console.log(`METADATA ${metadataPath} WAS NOT FOUND.`);
    }
  });
}

deleteFolder(TARGET_ISSUES_FOLDER);
deleteFolder(TARGET_ARTICLES_FOLDER);

makeFolder(TARGET_ISSUES_FOLDER);
makeFolder(TARGET_ARTICLES_FOLDER);

copyFiles(articlesIds, 'articles');
copyFiles(issuesIds, 'issues');
