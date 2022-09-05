import { useEffect, useState } from 'react';

import classnames from 'classnames';
import Sanscript from '@indic-transliteration/sanscript';

import styles from './TransliterationToggle.module.scss';

const LANGUAGE_SCRIPT_MAPPING: { [key: string]: string} = {
  // list of languages : https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // list of scripts   : https://en.wikipedia.org/wiki/ISO_15924#List_of_codes
  san: 'Deva',
  kan: 'Knda',
  mal: 'Mlym',
  tam: 'Taml',
  tel: 'Telu',
};

const SCRIPT_SCHEMA_MAPPING: { [key: string]: string} = {
  // list of scripts : https://en.wikipedia.org/wiki/ISO_15924#List_of_codes
  // list of schemas : https://github.com/indic-transliteration/sanscript.js#usage
  Deva: 'devanagari',
  Knda: 'kannada',
  Latn: 'iso',
  Mlym: 'malayalam',
  Taml: 'tamil',
  Telu: 'telugu',
};

const LANGUAGES = Object.keys(LANGUAGE_SCRIPT_MAPPING);

function removeAccents(input: string) {
  return input
    .replace(/á/g,"a")
    .replace(/à/g,"a")
    .replace(/ā`/g,"ā")
    .replace(/ā́/g,"ā")
    .replace(/ā́/g,"ā")
    .replace(/ḗ/g,"ē")
    .replace(/ē`/g,"ē")
    .replace(/ō`/g,"ō")
    .replace(/ō´/g,"ō")
    .replace(/ṓ/g,"ō")
    .replace(/ṑ/g,"ō")
    .replace(/í/g,"i")
    .replace(/ì/g,"i")
    .replace(/ī́/g,"ī")
    .replace(/ī`/g,"ī")
    .replace(/ú/g,"u")
    .replace(/ù/g,"u")
    .replace(/ū`/g,"ū")
    .replace(/ū́/g,"ū")
    .replace(/ū´/g,"ū")
    .replace(/ŕ̥/g,"r̥")
  ;
};

function transliterateTextElements (language: string, fromLatin: boolean = false) {
  const fromScript = fromLatin ? 'Latn' : LANGUAGE_SCRIPT_MAPPING[language];
  const toScript   = fromLatin ? LANGUAGE_SCRIPT_MAPPING[language] : 'Latn';

  const fromScheme = SCRIPT_SCHEMA_MAPPING[fromScript];
  const toScheme   = SCRIPT_SCHEMA_MAPPING[toScript];

  const languageInstances = document.querySelectorAll(`[data-lang="${language}"]`);

  languageInstances.forEach((languageInstance) => {
    // If you're going to Latin, but you're already in Latin,
    if (!fromLatin && languageInstance.getAttribute('data-script') === 'Latn') {
      // do nothing.
    } else {
      languageInstance.textContent = Sanscript.t(languageInstance.textContent || '', fromScheme, toScheme);
      languageInstance.setAttribute('data-script', toScript);
    }
  });
}

function transliterateFromLatin () {
  LANGUAGES.forEach((script) => {
    transliterateTextElements(script, true);
  });
}

function transliterateToLatin () {
  LANGUAGES.forEach((script) => {
    transliterateTextElements(script);
  });
}

export default function TransliterationToggle () {
  const [ isLatinScript, setIsLatinScript ] = useState(true);

  useEffect(() => {
    // On load, the text will be in the Latin script.
    // Here, we load the transliteration preference of the user from local
    // storage and we transliterate from the Latin script to Indian scripts if
    // necessary exactly one time on load.
    if (typeof window !== "undefined") {
      const storedTransliterationValue = localStorage.getItem('isLatinScript');
      if (storedTransliterationValue === '0') {
        setIsLatinScript(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLatinScript', isLatinScript ? '1' : '0');

      if (isLatinScript) {
        transliterateToLatin();
      } else {
        transliterateFromLatin();
      }
    }
  }, [isLatinScript]);

  function toggle () {
    setIsLatinScript(!isLatinScript);
  }

  return (
    <div className={styles.transliterationToggle}>
      <div
        className={classnames(styles.toggleItem, {
          [styles.selected]: !isLatinScript,
        })}
        onClick={toggle}
        title="Use original script"
      >अ</div>

      <div
        className={classnames(styles.toggleItem, {
          [styles.selected]: isLatinScript,
        })}
        onClick={toggle}
        title="Use transliterated script"
      >a</div>
    </div>
  );
}
