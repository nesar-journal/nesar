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
            <li>Home</li>
            <li>Archives</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
