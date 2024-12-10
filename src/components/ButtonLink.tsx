import { FunctionComponent } from 'react';

import Link from 'next/link';

import styles from './ButtonLink.module.scss';

type ButtonLinkProps = {
  text           : string;
  href         ? : string;
  downloadLink ? : boolean;
};

const ButtonLink: FunctionComponent<ButtonLinkProps> = (props) => {
  const { downloadLink, href, text } = props;

  if (!href) return null;

  return (
    <Link passHref href={href}>
      <div className={styles.buttonLink}>
        {downloadLink ? <span className={styles.downloadIcon}></span> : null}
        {text}
      </div>
    </Link>
  );
};

export default ButtonLink;
