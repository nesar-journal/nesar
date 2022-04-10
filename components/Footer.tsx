import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './Footer.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.divider}></div>

      <footer className={styles.footer}>
        <Image
          alt="NESAR Logo"
          src="/assets/images/logo.png"
          width={240}
          height={53}
          quality={90}
        />
        <Image
          alt="University of Chicago Library Logo"
          src="/assets/images/uchicago-library.svg"
          width={155}
          height={43}
          unoptimized={true}
        />
      </footer>
    </>
  );
};

export default Home;
