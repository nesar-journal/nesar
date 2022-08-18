import Link from 'next/link';

import classnames from 'classnames';

import styles from './Heading.module.css';

type HeadingProps = {
  children: string;
  hidden?: boolean;
  level: number;
  link?: string;
  linkText?: string;
  titleEnd?: number;
};

// TODO: replace with actual module
function slugify (text: string) {
  return text.toLowerCase().replace(/ /g, '-');
}

const Heading = (props: HeadingProps) => {
  const {
    children,
    hidden,
    level,
    link,
    linkText,
    titleEnd,
  } = props;

  function renderLink () {
    if (!link) return null;

    return (
      <>
        <Link href={{ pathname: link }}>
          {linkText}
        </Link>
      </>
    );
  }

  function getProps () {
    return {
      className: classnames(styles.heading, {
        hidden: hidden,
        [styles.titleEndOne]: titleEnd === 1,
        [styles.titleEndTwo]: titleEnd === 2,
      }),
      id: slugify(children),
    };
  }

  function getContent () {
    return (
      <>
        {children}

        {renderLink()}
      </>
    );
  }

  if (level === 1) return (<h1 {...getProps()}>{getContent()}</h1>);
  if (level === 2) return (<h2 {...getProps()}>{getContent()}</h2>);
  if (level === 3) return (<h3 {...getProps()}>{getContent()}</h3>);
  if (level === 4) return (<h4 {...getProps()}>{getContent()}</h4>);
  if (level === 5) return (<h5 {...getProps()}>{getContent()}</h5>);
  if (level === 6) return (<h6 {...getProps()}>{getContent()}</h6>);
  return null;
};

export default Heading;
