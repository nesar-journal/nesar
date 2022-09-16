import Link from 'next/link';

import { menuItems } from './Navbar';
import TransliterationToggle from './TransliterationToggle';

import styles from './Navmenu.module.scss';

type NavmenuProps = {}

const Navmenu = (props: NavmenuProps) => {
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

  return (
    <>
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
    </>
  );
};

export default Navmenu;
