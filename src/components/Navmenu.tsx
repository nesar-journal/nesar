import { useState } from 'react';

import Link from 'next/link';

import classnames from 'classnames';

import TransliterationToggle from './TransliterationToggle';

import { menuItems } from './Navbar';

import styles from './Navmenu.module.scss';

type NavmenuProps = {}

const Navmenu = (props: NavmenuProps) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  function renderLinks () {
    return menuItems.map((item) => {
      const { link, text } = item;

      return (
        <li key={`navmenu-${text}`}>
          <Link href={link}>
            {text}
          </Link>
        </li>
      );
    });
  }

  function renderMenuToggle () {
    return (
      <div
        className={styles.navmenuToggle}
        role="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={classnames(styles.navmenuToggleIcon, {
          [styles.navmenuOpen]   : isMenuOpen,
          [styles.navmenuClosed] : !isMenuOpen,
        })}/>
      </div>
    );
  }

  function renderNavmenu () {
    if (isMenuOpen) {
      return (
        <nav className={styles.navmenu}>
          <div className={styles.menu}>
            <ul className={styles.menuList}>
              {renderLinks()}
            </ul>
          </div>

          <div className={styles.transliterationToggle}>
            <TransliterationToggle />
          </div>
        </nav>
      );
    }

    return null;
  }

  return (
    <>
      {renderMenuToggle()}
      {renderNavmenu()}
    </>
  );
};

export default Navmenu;
