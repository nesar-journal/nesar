import { useEffect, useState } from 'react';

import classnames from 'classnames';
import Sanscript from '@indic-transliteration/sanscript';

import styles from './TransliterationToggle.module.scss';

const SCRIPT_SCHEMA_MAPPING: { [key: string]: string} = {
  // list of scripts: https://en.wikipedia.org/wiki/ISO_15924#List_of_codes
  // list of schemas: https://github.com/indic-transliteration/sanscript.js#usage
  Deva: 'devanagari',
  Knda: 'kannada',
  Latn: 'iso',
  Mlym: 'malayalam',
  Taml: 'tamil',
  Telu: 'telugu',
}

const NON_LATIN_SCRIPTS = Object.keys(SCRIPT_SCHEMA_MAPPING).filter((script) => script !== 'Latn');

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

function getTextNodes (element: Element) {
  let node;
  let nodes = [];

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);

  while(node = walker.nextNode()) {
    nodes.push(node);
  }

  return nodes;
}

function transliterateTextElements (scriptFrom: string, scriptTo: string) {
  const schemeFrom = SCRIPT_SCHEMA_MAPPING[scriptFrom];
  const schemeTo   = SCRIPT_SCHEMA_MAPPING[scriptTo];

  const scriptInstances = document.querySelectorAll(`[data-script="${scriptFrom}"]`);

  scriptInstances.forEach((scriptInstance) => {
    const textElements = getTextNodes(scriptInstance);

    textElements.forEach((textElement) => {
      textElement.textContent = Sanscript.t(textElement.textContent || '', schemeFrom, schemeTo);
    });

    scriptInstance.setAttribute('data-script', scriptTo);
  });
}

function transliterateFromLatin () {
  NON_LATIN_SCRIPTS.forEach((script) => {
    transliterateTextElements('Latn', script);
  });
}

function transliterateToLatin () {
  NON_LATIN_SCRIPTS.forEach((script) => {
    transliterateTextElements(script, 'Latn');
  });
}

export default function TransliterationToggle () {
  const [ shouldTransliterate, setShouldTransliterate ] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTransliterationValue = localStorage.getItem('transliterate');

      if (storedTransliterationValue) {
        if (storedTransliterationValue === "1") {
          setShouldTransliterate(true);
          transliterateToLatin();
        } else {
          setShouldTransliterate(false);
          transliterateFromLatin();
        }
      }
    }
  }, [setShouldTransliterate]);

  function toggle () {
    setShouldTransliterate(!shouldTransliterate);

    if (typeof window !== "undefined") {
      localStorage.setItem('transliterate', shouldTransliterate ? '0' : '1');

      if (shouldTransliterate) {
        transliterateToLatin();
      } else {
        transliterateFromLatin();
      }
    }
  }

  return (
    <div className={styles.transliterationToggle}>
      <div
        className={classnames(styles.toggleItem, {
          [styles.selected]: !shouldTransliterate,
        })}
        onClick={toggle}
        title="Use original script"
      >अ</div>

      <div
        className={classnames(styles.toggleItem, {
          [styles.selected]: shouldTransliterate,
        })}
        onClick={toggle}
        title="Use transliterated script"
      >a</div>
    </div>
  );
}
