import Link from 'next/link';

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
        <div className={styles.search}>
          <input
            className={styles.input}
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH"
            type="text"
          />
        </div>

        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
