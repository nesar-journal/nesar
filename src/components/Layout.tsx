import React, { ReactNode } from 'react';

import styles from './Layout.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
  children: ReactNode;
  largeCover?: boolean;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    largeCover = false,
  } = props;

  return (
    <>
      <div className={styles.layout}>
        <Header
          largeCover={largeCover}
        />

        <main className={styles.main}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
