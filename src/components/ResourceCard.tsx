import Image from 'next/image';
import Link from 'next/link';

import classnames from 'classnames';

import styles from './ResourceCard.module.scss';
import ButtonLink from './ButtonLink';

import { Authors } from '../types';

type ResourceCardProps = {
  abstract: string;
  authors?: Authors;
  coverUrl: string;
  doi?: string;
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
    pdfUrl,
    publicationDate,
    showTitleEnd,
    tags,
    title,
    url,
  } = props;

  return (
    <>
      <div className={styles.resourceCard}>
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
          <div className={styles.pdfContainer}>
            <ButtonLink
              href={pdfUrl || '#'}
              text="PDF"
              downloadLink
            />
          </div>
          <div className={styles.publishedDate}>published: {publicationDate}</div>
        </div>
        <div>
          <div className={classnames({
            [styles.titleEnd]: showTitleEnd,
          })}>
            <div>
              {authors && <div className={styles.authors}>
                {authors.map((author) => {
                  return (
                    <Link
                      href={`/authors/${author.id}`}
                      key={author.id}
                      passHref
                    >
                      <a className={styles.authorLink}>
                        {author.displayName}
                      </a>
                    </Link>
                  );
                })}
              </div>}
              <Link href={url} passHref>
                <a className={styles.title}>
                  {title}
                </a>
              </Link>
            </div>
          </div>
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

          {doi && <div className={styles.doi}>{doi}</div>}
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
