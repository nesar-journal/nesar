import { Parser } from 'htmlparser2';

import { Index } from './types';
import { INDEX_PATH, getData, writeFile } from './utils';

function sanitize (input: string) {
  return (
    // remove leading and trailing spaces
    input
      .toLowerCase()                                                           // make lowercase
      .normalize('NFD')                                                        // decompose accents/diacritics
      .replace(/\p{Diacritic}/gu, '')                                          // strip out accents/diacritics
      .replaceAll('-', ' ')                                                    // convert hyphens to spaces
      .replace(/[\n\r]+/g, ' ')                                                // flatten newlines
      .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?|_+=0123456789–—↑…’‘“”\/\\]/g, '') // replace symbols
      .replaceAll('  ', ' ')                                                   // multiple spaces
      .trim()
  );
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
      const sanitizedTextWords = sanitize(text).split(' ');

      if (isLangTag) {
        sanitizedTextWords.forEach((word) => { if (!word.includes('http')) languageWords.push(word); });
      } else {
        sanitizedTextWords.forEach((word) => { if (!word.includes('http')) generalWords.push(word); });
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

function getIndex (): Index {
  const index: Index = {
    generalWords: {},
    languageWords: {},
  };

  const data         = getData();
  const articleIds   = data.articles.ids;

  articleIds.forEach((id) => {
    const articleData = data.articles.data[id];

    const { abstract, authors, translators, content, identifier, title } = articleData;

    const abstractWords = getWordsFromHTML(abstract);
    const authorWords   = getWordsFromHTML(authors.map((author) => author.displayName).join(' '));
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
      if (!index['generalWords'][word]) {
        index['generalWords'][word] = [ identifier ];
      } else {
        index['generalWords'][word].push(identifier);
      }
    });

    languageWords.forEach((word) => {
      if (!index['languageWords'][word]) {
        index['languageWords'][word] = [ identifier ];
      } else {
        index['languageWords'][word].push(identifier);
      }
    });
  });

  return index;
}

function compileIndex () {
  const index = getIndex();

  writeFile(INDEX_PATH, JSON.stringify(index, null, 2));
}

compileIndex();
