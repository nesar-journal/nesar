import { FunctionComponent } from 'react';

import Image from "next/image";
import Link from 'next/link';

import classnames from 'classnames';

import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
  return (<>
    <div className={styles.divider}></div>

    <footer className={styles.footer}>
      <div className={styles.item}>
        <Image
          className={styles.image}
          src="/assets/images/logo-wordmark.png"
          alt="NESAR Logo"
          width={552}
          height={122}
        />
      </div>

      <div className={classnames(styles.item, styles.text)}>
        <p>ISSN: 2834-3875</p>
        <p><Link href="/privacy">Privacy Policy</Link></p>
      </div>

      <div className={styles.item}>
        <Image
          className={styles.image}
          src="/assets/images/uchicago-library.svg"
          alt="University of Chicago Library Logo"
          width={207}
          height={57}
          unoptimized
        />
      </div>
    </footer>
  </>);
};

export default Footer;
