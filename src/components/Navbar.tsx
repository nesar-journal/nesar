import Link from 'next/link';

import styles from './Navbar.module.css';

type NavbarProps = {}

const Navbar = (props: NavbarProps) => {
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
            <li>
              <Link href={{ pathname: `/` }}>
                Home
              </Link>
            </li>
            <li>
              <Link href={{ pathname: `/issues` }}>
                Issues
              </Link>
            </li>
            <li>
              <Link href={{ pathname: `/about` }}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
