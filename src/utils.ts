import fs from 'fs';
import path from 'path';

import fuzzysort from 'fuzzysort';

import { ArticlesMapping, Data, Index, Matches } from './types';

// =====================
// ======= FILES =======
// =====================

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

export const DATA_PATH = path.resolve(process.cwd(), 'data.json');

export function getData (): Data {
  return readJSON(DATA_PATH);
}

// =====================
// ======= INDEX =======
// =====================

export const INDEX_PATH = path.resolve(process.cwd(), 'index.json');

function getIndex (): Index {
  return readJSON(INDEX_PATH);
}

export function queryIndexForMatches (query: string) {
  const matches: Matches = [];
  const articleTitles: ArticlesMapping = {};

  if (query.length > 2) {
    const DATA  = getData();
    const INDEX = getIndex();

    const generalWords  = Object.keys(INDEX.generalWords).map((word) => fuzzysort.prepare(word));
    const languageWords = Object.keys(INDEX.languageWords).map((word) => fuzzysort.prepare(word));

    // == SEPARATED MATCHES ==

    // const generalFuzzyMatches  = fuzzysort.go(query, generalWords, { limit: 20 }).map((match) => match.target);
    // const languageFuzzyMatches = fuzzysort.go(query, languageWords, { limit: 20 }).map((match) => match.target);

    // const generalWordsMatches: { searchTerm: string; results: string[] }[]  = [];
    // const languageWordsMatches: { searchTerm: string; results: string[] }[] = [];

    // generalFuzzyMatches.forEach((match) => {
    //   generalWordsMatches.push({
    //     searchTerm: match,
    //     results: INDEX.generalWords[match],
    //   });
    // });

    // languageFuzzyMatches.forEach((match) => {
    //   languageWordsMatches.push({
    //     searchTerm: match,
    //     results: INDEX.languageWords[match],
    //   });
    // });

    // == COMBINED MATCHES ==

    const fuzzyMatches  = fuzzysort.go(query, [...generalWords, ...languageWords], { limit: 20 }).map((match) => match.target);

    fuzzyMatches.forEach((match) => {
      matches.push({
        searchTerm: match,
        results: Array.from(new Set([ // make unique
          ...(INDEX.generalWords[match] || []),
          ...(INDEX.languageWords[match] || []),
        ])),
      });
    });

    matches.forEach((match) => {
      match.results.forEach((result) => {
        articleTitles[result] = DATA.articles.data[result].title;
      });
    });
  }

  return {
    articleTitles,
    matches,
  };
}
