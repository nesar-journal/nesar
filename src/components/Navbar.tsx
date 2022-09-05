import Link from 'next/link';

import TransliterationToggle from './TransliterationToggle';

import styles from './Navbar.module.scss';

type NavbarProps = {}

export const menuItems = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/issues',
    text: 'Issues',
  },
  {
    link: '/about',
    text: 'About',
  },
];

const Navbar = (props: NavbarProps) => {
  function renderLinks () {
    return menuItems.map((item) => {
      const { link, text } = item;

      return (
        <li key={`navbar-${text}`}>
          <Link href={{ pathname: link }}>
            {text}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.top}>
          <input
            className={styles.input}
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH"
            type="text"
          />

          <div className={styles.transliterationToggle}>
            <TransliterationToggle />
          </div>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.menuList}>
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
