import { Parser } from 'htmlparser2';

import { Cache } from './types';
import { CACHE_PATH, getData, writeFile } from './utils';

function sanitize (input: string) {
  return input
    .toLowerCase()                                                           // make lowercase
    .normalize('NFD')                                                        // decompose accents/diacritics
    .replace(/\p{Diacritic}/gu, '')                                          // strip out accents/diacritics
    .replaceAll('-', ' ')                                                    // convert hyphens to spaces
    .replace(/[\n\r]+/g, ' ')                                                // flatten newlines
    .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?|_+=0123456789–—↑…’‘“”\/\\]/g, '') // replace symbols
    .replaceAll('  ', ' ')                                                   // multiple spaces
    .trim()                                                                  // remove leading and trailing spaces
  ;
}

function getWordsFromHTML (html: string) {
  const generalWords: string[] = [];
  const languageWords: string[]  = [];

  let isLangTag = false;

  const parser = new Parser({
    onopentag (_name, attributes) {
      if (attributes['data-lang']) {
        isLangTag = true;
      }
    },
    ontext (text) {
      if (isLangTag) {
        sanitize(text).split(' ').forEach((word) => languageWords.push(word));
      } else {
        sanitize(text).split(' ').forEach((word) => generalWords.push(word));
      }
    },
    onclosetag (_tagname) {
      isLangTag = false;
    },
  });
  parser.write(html);
  parser.end();

  return { generalWords, languageWords };
}

function getCache (): Cache {
  const cache: Cache = {
    generalWords: {},
    languageWords: {},
  };

  const data         = getData();
  const articleIds   = data.articles.ids;

  articleIds.forEach((id) => {
    const articleData = data.articles.data[id];

    const { abstract, authors, content, identifier, title } = articleData;

    const abstractWords = getWordsFromHTML(abstract);
    const authorWords   = getWordsFromHTML(authors.join(' '));
    const contentWords  = getWordsFromHTML(content);
    const titleWords    = getWordsFromHTML(title);

    const generalWords = Array.from(new Set([ // make unique
      ...abstractWords.generalWords,
      ...authorWords.generalWords,
      ...contentWords.generalWords,
      ...titleWords.generalWords,
    ])).filter((word) => word.length > 2);

    const languageWords = Array.from(new Set([ // make unique
      ...abstractWords.languageWords,
      ...authorWords.languageWords,
      ...contentWords.languageWords,
      ...titleWords.languageWords,
    ])).filter((word) => word.length > 2);

    generalWords.forEach((word) => {
      if (!cache['generalWords'][word]) {
        cache['generalWords'][word] = [ identifier ];
      } else {
        cache['generalWords'][word].push(identifier);
      }
    });

    languageWords.forEach((word) => {
      if (!cache['languageWords'][word]) {
        cache['languageWords'][word] = [ identifier ];
      } else {
        cache['languageWords'][word].push(identifier);
      }
    });
  });

  return cache;
}

function compileCache () {
  const cache = getCache();

  writeFile(CACHE_PATH, JSON.stringify(cache, null, 2));
}

compileCache();
