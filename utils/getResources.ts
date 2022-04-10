import fs from 'fs';
import path from 'path';

function getResources (resource: string): string[] {
  const resourcePath = path.join(process.cwd(), 'data', resource);

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

export default getResources;
