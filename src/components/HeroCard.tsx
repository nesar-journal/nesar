import { FunctionComponent } from 'react';

import Link from 'next/link';

import styles from './HeroCard.module.scss';

type HeroCardProps = {
  coverUrl?: string;
  title: string;
  url: string;
};

const HeroCard: FunctionComponent<HeroCardProps> = (props) => {
  const { coverUrl, title, url } = props;

  return (
    (<div
      className={styles.heroCard}
      style={{
        backgroundImage: `url(${coverUrl || "/assets/images/missing-image.jpg"})`,
      }}
    >
      <Link href={url} className={styles.title}>{title}</Link>
    </div>)
  );
};

export default HeroCard;
