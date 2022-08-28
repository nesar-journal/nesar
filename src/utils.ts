// =======================
// ======= GENERAL =======
// =======================

import fs from 'fs';
import path from 'path';

export function readFile (filePath: string) {
  try {
    return fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' }).toString();
  } catch (error) {
    console.error(`ERROR WHILE READING ${filePath}.\n`, error);
  }
}

export function readJSON (filePath: string) {
  try {
    const data = readFile(filePath);

    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`ERROR WHILE PARSING ${filePath}.\n`, error);
  }
}

export function writeFile (filePath: string, data: string) {
  try {
    fs.writeFileSync(path.resolve(filePath), data); // overwrites by default
    console.log(`${filePath} SUCCESSFULLY WRITTEN.\n`);
  } catch (error) {
    console.error(`ERROR WHILE WRITING ${filePath}.\n`, error);
  }
}

// ====================
// ======= DATA =======
// ====================

type Identifier = string;

type IssueIdentifier   = Identifier;
type ArticleIdentifier = Identifier;
type AuthorIdentifier = string;

enum ResourceType {
  Article     = 'article',
  Brief       = 'brief',
  Editorial   = 'editorial',
  Issue       = 'issue',
  Review      = 'review',
  Translation = 'translation',
}

type ResourceData = {
  type: ResourceType;

  identifier: ArticleIdentifier | IssueIdentifier;

  doi: string;

  title: string;

  abstract: string;

  dates: {
    publication: string;
  }

  paths: {
    cover: string;
    pdf: string;
  }

  tags: string[];
}

export type ArticleData = ResourceData & {
  authors: AuthorIdentifier[];

  paths: {
    content: string;
  }

  content: string;
}

export type IssueData = ResourceData & {
  issue: number;

  editors: AuthorIdentifier[];

  articles: ArticleIdentifier[];
}

export type AuthorData = {
  displayName : string;
  firstName   : string;
  lastName    : string;
  email       : string;
  institution : string;
  viaf        : string;
}

type ArticlesData = {
  [key: ArticleIdentifier]: ArticleData;
};

type IssuesData = {
  [key: IssueIdentifier]: IssueData;
};

type AuthorsData = {
  [key: AuthorIdentifier]: AuthorData;
};

export type IndexedArticlesData = {
  ids  : ArticleIdentifier[];
  data : ArticlesData;
}

export type IndexedIssuesData = {
  ids  : IssueIdentifier[];
  data : IssuesData;
}

export type IndexedAuthorsData = {
  ids  : AuthorIdentifier[];
  data : AuthorsData;
}

export type Data = {
  authors  : IndexedAuthorsData;
  articles : IndexedArticlesData;
  issues   : IndexedIssuesData;
};

export const DATA_PATH = path.resolve(process.cwd(), 'data.json');

export function getData (): Data {
  return readJSON(DATA_PATH);
}
