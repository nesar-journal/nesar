import Image from 'next/image';
import Link from 'next/link';

import classnames from 'classnames';

import styles from './ResourceCard.module.scss';

type ResourceCardProps = {
  abstract: string;
  authors?: string[];
  coverUrl: string;
  doi?: string;
  horizontal?: boolean;
  pdfUrl?: string;
  publicationDate: string;
  tags: string[];
  title: string;
  url: string;
  showTitleEnd?: boolean;
};

const ResourceCard = (props: ResourceCardProps) => {
  const {
    abstract,
    authors,
    coverUrl,
    doi,
    horizontal,
    pdfUrl,
    publicationDate,
    tags,
    title,
    url,
  } = props;

  return (
    <>
      <div className={classnames(styles.resourceCard, {
        [styles.horizontal]: horizontal,
      })}>
        <div className={styles.coverContainer}>
          <div className={styles.coverImageContainer}>
            <Image
              alt="Cover"
              src={coverUrl}
              layout="fixed"
              width={264}
              height={368}
              quality={90}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles.pdf}>
            <span className={styles.pdfIcon}></span>
            <a href={pdfUrl}>PDF</a>
          </div>
          <div className={styles.publishedDate}>published: {publicationDate}</div>
        </div>
        {authors && <div className={styles.authors}>{authors.join(', ')}</div>}
        {doi && <div className={styles.doi}>{doi}</div>}
        <Link href={url} passHref>
          <a className={styles.title}>
            {title}
          </a>
        </Link>
        <div
          className={styles.abstract}
          dangerouslySetInnerHTML={{ __html: abstract }}
        />
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <span key={tag} className={styles.tag}>
                {/* <Link href={`/tags/${tag}`}>{tag}</Link> */}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
