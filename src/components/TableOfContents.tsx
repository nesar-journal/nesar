import Link from 'next/link';

import urlSlug from 'url-slug';

import styles from './TableOfContents.module.scss';

type TocItem = {
  title: string;
  items?: TocItem[];
};

type TableOfContentsProps = {
  items: TocItem[];
};

// Mirrors the id-generation logic in Heading.tsx, so links here
// always match the ids that Heading actually renders.
function slugFor (title: string) {
  return urlSlug(title);
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  function renderList (list: TocItem[]) {
    return (
      <ul>
        {list.map((item) => (
          <li key={item.title}>
            <Link href={`#${slugFor(item.title)}`} legacyBehavior>
              {item.title}
            </Link>

            {item.items && renderList(item.items)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      {renderList(items)}
    </nav>
  );
};

export default TableOfContents;
