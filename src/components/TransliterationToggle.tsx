import { useEffect, useState } from 'react';

import classnames from 'classnames';

import styles from './TransliterationToggle.module.scss';

export default function TransliterationToggle () {
  const [ shouldTransliterate, setShouldTransliterate ] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTransliterationValue = localStorage.getItem('transliterate');

      if (storedTransliterationValue) {
        setShouldTransliterate(storedTransliterationValue === "1");
      }
    }
  }, [setShouldTransliterate]);

  function toggle () {
    if (typeof window !== "undefined") {
      localStorage.setItem('transliterate', shouldTransliterate ? '0' : '1');
    }

    setShouldTransliterate(!shouldTransliterate);
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
