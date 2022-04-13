import Image from 'next/image';

import Navbar from './Navbar';

import styles from './Header.module.css';

type HeaderProps = {
  largeCover?: boolean;
}

const Header = (props: HeaderProps) => {
  const {
    largeCover = false,
  } = props;

  function renderLargeCover () {
    return (
      <Image
        alt="Cover"
        src="/assets/images/cover-large.png"
        layout="responsive"
        width={1000}
        height={487}
        quality={90}
        priority
      />
    );
  }

  function renderSmallCover () {
    return (
      <Image
        alt="Cover"
        src="/assets/images/cover-small.png"
        layout="responsive"
        width={1000}
        height={178}
        quality={90}
        priority
      />
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
      </header>
    </>
  );
};

export default Header;
