import Link from 'next/link';

import Search from './Search';
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
        (<li key={`navbar-${text}`}>
          <Link href={link} legacyBehavior>
            {text}
          </Link>
        </li>)
      );
    });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.top}>
        <Search />

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
  );
};

export default Navbar;
