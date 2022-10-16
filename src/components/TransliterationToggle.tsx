import { useEffect, useState } from 'react';

import classnames from 'classnames';
import Sanscript from '@indic-transliteration/sanscript';

import styles from './TransliterationToggle.module.scss';

const LANGUAGE_SCRIPT_MAPPING: { [key: string]: string } = {
  // list of languages : https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // list of scripts   : https://en.wikipedia.org/wiki/ISO_15924#List_of_codes
  san: 'Deva',
  kan: 'Knda',
  mal: 'Mlym',
  tam: 'Taml',
  tel: 'Telu',
  hin: 'Deva',
};

const SCRIPT_SCHEMA_MAPPING: { [key: string]: string } = {
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

function transliterateTextElements (language: string, fromLatin: boolean = false) {
  const languageInstances = document.querySelectorAll(`[data-lang="${language}"]`);
  languageInstances.forEach((languageInstance) => {
    const originalContent = languageInstance.getAttribute('data-original') || '';

    // If you're going to Latin,
    if (!fromLatin) {
      // and you are not already in Latin,
      if (languageInstance.getAttribute('data-script') !== 'Latn') {
        // restore original content, which is always written in Latin script.
        languageInstance.textContent = originalContent;
        languageInstance.setAttribute('data-script', 'Latn');
      }
      // Otherwise,
    } else {
      // update with a version of the original content, which is always in Latin script,
      // transliterated into the target script.
      const sourceSchema = SCRIPT_SCHEMA_MAPPING['Latn'];
      const targetScript = LANGUAGE_SCRIPT_MAPPING[language];
      const targetSchema = SCRIPT_SCHEMA_MAPPING[targetScript];
      const replacementText = Sanscript.t(originalContent, sourceSchema, targetSchema);

      languageInstance.textContent = replacementText;
      languageInstance.setAttribute('data-script', targetScript);
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
  const [isLatinScript, setIsLatinScript] = useState(true);

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
