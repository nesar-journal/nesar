import React, { ReactNode } from 'react';

import styles from './Layout.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import classnames from 'classnames';

type LayoutProps = {
  children: ReactNode;
  largeCover?: boolean;
  marginTop?: boolean;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    largeCover = false,
    marginTop = false,
  } = props;

  return (
    <>
      <div className={styles.layout}>
        <Header
          largeCover={largeCover}
        />

        <main className={classnames(styles.main, {
          [styles.marginTop]: marginTop,
        })}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
