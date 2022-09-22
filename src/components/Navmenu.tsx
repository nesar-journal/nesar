import { useState } from 'react';

import Link from 'next/link';

import classnames from 'classnames';

import ButtonLink from './ButtonLink';
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
          <ButtonLink
            text={text}
            href={link}
          />
        </li>
      );
    });
  }

  function renderMenuToggle () {
    return (
      <div className={classnames(styles.navmenuToggleContainer, {
        [styles.navmenuToggleContainerOpen]: isMenuOpen,
      })}>
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
      </div>
    );
  }

  function renderNavmenu () {
    if (isMenuOpen) {
      return (
        <nav className={styles.navmenu}>
          <ul className={styles.menuList}>
            {renderLinks()}
          </ul>

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
