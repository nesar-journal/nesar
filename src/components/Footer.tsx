import { FunctionComponent } from 'react';

import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <>
      <div className={styles.divider}></div>

      <footer className={styles.footer}>
        <div className={styles.item}>
          <Image
            alt="NESAR Logo"
            src="/assets/images/logo-wordmark.png"
            width={240}
            height={53}
            quality={90}
          />
        </div>
        <div className={styles.item}>
          <Image
            alt="University of Chicago Library Logo"
            src="/assets/images/uchicago-library.svg"
            width={155}
            height={43}
            unoptimized={true}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
