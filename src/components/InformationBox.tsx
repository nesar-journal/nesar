import { FunctionComponent, useState } from 'react';

import Link from 'next/link';

import classnames from 'classnames';

import ExternalLink from './ExternalLink';

import styles from './InformationBox.module.scss';

const InformationBoxTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabsContent = [
    {
      title: 'Readers',
      content: (
        <>
          <p>
            <em>NESAR</em> aims to publish research in South Asian Studies on a variety of topics, including but not limited to:
          </p>
          <ul>
            <li>literature, literary criticism, and literary history;</li>
            <li>traditions of performance;</li>
            <li>the history of art and architecture;</li>
            <li>philosophy and intellectual history;</li>
            <li>the history of religious ideas and movements;</li>
            <li>social and political thought.</li>
          </ul>

          <p>
            Articles are published in both HTML and PDF form on a rolling basis. <em>NESAR</em> also publishes issues on particular themes.
          </p>
        </>
      ),
    },
    {
      title: 'Authors',
      content: (
        <>
          <p>
            <em>NESAR</em> is open-access and will never charge fees to authors or readers for any reason. We welcome the following kinds of contributions:
          </p>

          <ul>
            <li><b>research articles</b>;</li>
            <li><b>book reviews</b>;</li>
            <li><b>research briefs</b>, i.e., shorter articles;</li>
            <li><b>translations</b> of important research articles in Indian languages into English.</li>
          </ul>

          <p>
            Submissions to NESAR are <b>peer-reviewed</b> by experts in the field.
            Accepted articles will receive meticulous editorial attention
            and will be prepared for online publication in PDF format (using LaTeX)
            and in HTML format. Published articles will reach a large
            international readership.
          </p>

          <p>
            Articles are published under <ExternalLink href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons</ExternalLink> licenses
            and authors will retain the copyright to their work.
          </p>

          <Link href="/submit">
            <a className={classnames(styles.informationBoxLink, styles.addIcon)}>
              Submission guidelines
            </a>
          </Link>

          <Link href="/translations"><a className={classnames(styles.informationBoxLink, styles.addIcon)}>Translation program</a></Link>
        </>
      ),
    },
    {
      title: 'Librarians',
      content: (
        <>
          <p>
            <i>NESAR</i> (ISSN: 2834-3875) is published on this website (<Link href="/">nesarjournal.org</Link>).
            Every article receives its own <ExternalLink href="https://www.doi.org/">DOI</ExternalLink>.
          </p>
        </>
      ),
    },
  ];

  function renderTabTriggers () {
    const titles = tabsContent.map((entry) => entry.title);

    return (
      <div>
        <span className={styles.tabPreface}>information for: </span>
        {titles.map((title, index) => {
          return (
            <span
              key={`information-box-${title}`}
              className={classnames(styles.tabTrigger, {
                [styles.active]: index === currentTabIndex,
              })}
              onClick={() => setCurrentTabIndex(index)}
            >
              {title}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <>
      {renderTabTriggers()}

      <div className={styles.tabContent}>
        {tabsContent[currentTabIndex].content}
      </div>
    </>
  );
};

const InformationBox: FunctionComponent = () => {
  return (
    <aside className={styles.informationBox}>
      <p style={{ fontSize: 125 + '%', lineHeight: 2 + 'rem' }}><b><em>New Explorations in South Asia Research</em></b> (<em>NESAR</em>) is a <b>free</b> and <b>open-access</b> journal publishing original research of the highest quality in <b>South Asian Studies</b>, with a focus on the intellectual and expressive traditions of South India.</p>

      <InformationBoxTabs />
    </aside>
  );
};

export default InformationBox;
