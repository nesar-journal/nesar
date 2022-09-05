import fs from 'fs';
import path from 'path';

import fuzzysort from 'fuzzysort';

import { Cache, Data } from './types';

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
// ======= CACHE =======
// =====================

export const CACHE_PATH = path.resolve(process.cwd(), 'cache.json');

function getCache (): Cache {
  return readJSON(CACHE_PATH);
}

export function queryCacheForMatches (query: string) {
  const CACHE = getCache();

  const generalWords  = Object.keys(CACHE.generalWords).map((word) => fuzzysort.prepare(word));
  const languageWords = Object.keys(CACHE.languageWords).map((word) => fuzzysort.prepare(word));

  // == SEPARATED MATCHES ==

  // const generalFuzzyMatches  = fuzzysort.go(query, generalWords, { limit: 20 }).map((match) => match.target);
  // const languageFuzzyMatches = fuzzysort.go(query, languageWords, { limit: 20 }).map((match) => match.target);

  // const generalWordsMatches: { searchTerm: string; results: string[] }[]  = [];
  // const languageWordsMatches: { searchTerm: string; results: string[] }[] = [];

  // generalFuzzyMatches.forEach((match) => {
  //   generalWordsMatches.push({
  //     searchTerm: match,
  //     results: CACHE.generalWords[match],
  //   });
  // });

  // languageFuzzyMatches.forEach((match) => {
  //   languageWordsMatches.push({
  //     searchTerm: match,
  //     results: CACHE.languageWords[match],
  //   });
  // });

  // == COMBINED MATCHES ==

  const fuzzyMatches  = fuzzysort.go(query, [...generalWords, ...languageWords], { limit: 20 }).map((match) => match.target);

  const matches: { searchTerm: string; results: string[] }[]  = [];

  fuzzyMatches.forEach((match) => {
    matches.push({
      searchTerm: match,
      results: Array.from(new Set([ // make unique
        ...(CACHE.generalWords[match] || []),
        ...(CACHE.languageWords[match] || []),
      ])),
    });
  });

  return matches;
}
