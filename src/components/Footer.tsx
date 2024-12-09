import { FunctionComponent } from 'react';

import Image from "next/image";
import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
  return (<>
    <div className={styles.divider}></div>
    <footer className={styles.footer}>
      <div className={styles.logobox}>
        <div className={styles.item}>
          <Image
            alt="NESAR Logo"
            src="/assets/images/logo-wordmark.png"
            width={240}
            height={53}
            quality={90}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className={styles.linkbox}>
          <p>ISSN: 2834-3875</p>
          <p><Link href="/privacy">Privacy Policy</Link></p>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          alt="University of Chicago Library Logo"
          src="/assets/images/uchicago-library.svg"
          width={155}
          height={43}
          unoptimized={true}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </footer>
  </>);
};

export default Footer;
