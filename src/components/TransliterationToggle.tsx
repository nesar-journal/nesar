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

// There are two preprocessing routines. The first
//   is for ANY transliteration that will be run on a string,
//   including for epigraphic texts ("close" transliteration).
// There are also special provisions for upadhmaniya and 
//   visarjaniya here, which are at the moment not handled
//   well by the indic-transliteration module.
function preprocessText  (script: string, content: string) {
  content = content.replace(/aï/g,"a####i")
		   .replace(/aü/g,"a####u")
		   .replace(/°/g,'');
  if (script == 'Knda') {
    content = content.replace(/([nmḷyl]) ([aāiīuūeēoō])/g,"$1$2")
		     .replace(/’ ([aāiīuūeēoō])/g,"$1");
  }
  if (script == 'Telu') {
    content = content.replace(/n̆/g,"m̐")
		     .replace(/’ ([aāiīuūeēoō])/g,"$1")
		     .replace(/[’:?]/g,"")
		     .replace(/([nmḷy]) ([aāiīuūeēoō])/g,"$1$2");
  }
  if (script == 'Taml') {
    content = content.replace(/([nmḷ]) ([aāiīuūeēoō])/g,"$1$2")
		     .replace(/’ ([aāiīuūeēoō])/g,"$1")
		     .replace(/ṉ ṟ/g,"ṉṟ");
  }
  else if (script == 'Deva') {
    content = content.replace(/ ’/g,"'")
		     .replace(/([rnmdg]) ([gṅjñḍṇdnbmhyvrlaāiīuūeēoō])/g,"$1$2")
		     .replace(/(ñ) (ch)/g,"$1$2")
		     .replace(/([kcṭtpśsṣ]) ([kcṭtpśsṣ])/g,"$1$2")
		     .replace(/([vy]) ([aāiīuūēeōo])/g,"$1$2")
		     .replace(/ \|\|/g," ॥")
		     .replace(/ \|/g," ।")
		     .replace(/f/g,"ᳶ ");
  }
  return content;
}

// The second preprocessing routine is for text in 
//    "loose" transcription, i.e., where it doesn't matter
//    what the original orthography is.
function preprocessTextAgain (script: string, content: string) {
  if (script == 'Knda') {
    content = content.replace(/m([pb])/g,"ṁ$1")
		     .replace(/n([td])/g,"ṁ$1")
		     .replace(/ṇ([ṭḍ])/g,"ṁ$1")
		     .replace(/ṅ([kg])/g,"ṁ$1")
		     .replace(/ñ([jc])/g,"ṁ$1");
  }
  return content;
}

function transliterateTextElements (language: string, fromLatin: boolean = false) {
  const languageInstances = document.querySelectorAll(`[data-nesar-lang="${language}"].scriptWrapper`);
  languageInstances.forEach((languageInstance) => {
    const originalContent = languageInstance.getAttribute('data-nesar-original') || '';
    // If you're going to Latin,
    if (!fromLatin) {
      // and you are not already in Latin,
      if (languageInstance.getAttribute('data-nesar-script') !== 'Latn') {
        // restore original content, which is always written in Latin script.
        languageInstance.textContent = originalContent;
        languageInstance.setAttribute('data-nesar-script', 'Latn');
      }
      // Otherwise,
    } else {
      // update with a version of the original content, which is always in Latin script,
      // transliterated into the target script.
      const sourceSchema = SCRIPT_SCHEMA_MAPPING['Latn'];
      const targetScript = LANGUAGE_SCRIPT_MAPPING[language];
      const targetSchema = SCRIPT_SCHEMA_MAPPING[targetScript];
      const preprocessed = preprocessText(targetScript,originalContent);
      const closeTranscriptionNode = languageInstance.closest('[data-nesar-transcription-type="close"]');
      var preprocessedtwo = (closeTranscriptionNode != null) ? preprocessed : preprocessTextAgain(targetScript,preprocessed);
      const replacementText = Sanscript.t(preprocessedtwo, sourceSchema, targetSchema);
      languageInstance.textContent = replacementText;
      languageInstance.textContent = punctuateTextElement(languageInstance,targetScript);
      languageInstance.setAttribute('data-nesar-script', targetScript);
    }
  });
}

function punctuateTextElement (instance: Element, script: string) {
  var replacementText = (instance.textContent) ? instance.textContent : "";
  const parent = instance.parentElement;
  if (instance.nextSibling?.nodeName == "SUP") {
    void(0);
  } else {
    if (parent && parent.classList.contains('l')) {
      if (!replacementText.endsWith("…")) {
        const grandparent = parent?.parentElement;
        if (grandparent && grandparent.classList.contains('lg')) {
	  if (parent?.nextElementSibling == null) {
	    if (script == "Deva") {
	      replacementText = replacementText + "॥";
	    }
	    else if (script == "Knda") {
	      replacementText = replacementText + " ॥";
	    }
	  }
	  else {
	    if (script == "Deva") {
	      replacementText = replacementText + "।";
	    }
	    else if (script == "Knda") {
	      replacementText = replacementText + " ।";
	    }
	  }
        }
      }
    }
    if (parent?.nodeName == "P") {
      if (!replacementText.endsWith("…")) {
	if (script == "Deva") {
	  replacementText = replacementText.replaceAll(".","।");
	}
        /* if (replacementText.endsWith(".")) {
	   replacementText = replacementText.substring(0,replacementText?.length - 1);
	 * }
	 * if (script == "Deva") {
	   replacementText = replacementText + "।";
	 * } else if (script == "Knda") {
	   replacementText = replacementText + ".";
	 * } */
      }
    }
  }
  return replacementText;
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
