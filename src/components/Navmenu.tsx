import Link from 'next/link';

import styles from './Navmenu.module.css';

import { menuItems } from './Navbar';

type NavmenuProps = {}

const Navmenu = (props: NavmenuProps) => {
  function renderLinks () {
    return menuItems.map((item) => {
      const { link, text } = item;

      return (
        <li key={`navmenu-${text}`}>
          <Link href={{ pathname: link }}>
            {text}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <nav className={styles.navmenu}>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navmenu;
