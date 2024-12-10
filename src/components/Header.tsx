import Image from "next/image";
import Link from 'next/link';

import Navbar from './Navbar';
import Navmenu from './Navmenu';

import styles from './Header.module.scss';

type HeaderProps = {
  largeCover?: boolean;
}

const Header = (props: HeaderProps) => {
  const {
    largeCover = false,
  } = props;

  function renderLargeCover () {
    return (
      <Link
        href="/"
      >
        <Image
          alt="Cover"
          src="/assets/images/cover-large.png"
          width={1000}
          height={487}
          quality={90}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </Link>
    );
  }

  function renderSmallCover () {
    return (
      <Link
        href="/"
      >
        <Image
          alt="Cover"
          src="/assets/images/cover-small.png"
          width={1000}
          height={178}
          quality={90}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </Link>
    );
  }

  function renderImage () {
    if (largeCover) {
      return renderLargeCover();
    } else {
      return renderSmallCover();
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.coverImage}>
          {renderImage()}
        </div>

        <Navbar />
        <Navmenu />
      </header>
    </>
  );
};

export default Header;
