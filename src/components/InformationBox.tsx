import { FunctionComponent, useState } from 'react';

import Link from 'next/link';

import classnames from 'classnames';

import Heading from './Heading';

import styles from './InformationBox.module.scss';

const InformationBoxTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabsContent = [
    {
      title: 'Authors',
      content: (
        <>
          <p>
            Please consider NESAR as a prestigious
            outlet through which to publish your
            research.
          </p>

          <p>
            Your work will receive expert peer-review,
            editorial care, and rapid turnaround. NESAR
            reaches an international readership both
            online and in print.
          </p>

          <Link href="/submit">
            <a className={classnames(styles.informationBoxLink, styles.addIcon)}>
              Add a Submission
            </a>
          </Link>
        </>
      ),
    },
    {
      title: 'Readers',
      content: (
        <>
          <p>
            P1
          </p>

          <p>
            P2
          </p>
        </>
      ),
    },
    {
      title: 'Librarians',
      content: (
        <>
          <p>
            P3
          </p>

          <p>
            P4
          </p>
        </>
      ),
    },
  ];

  function renderTabTriggers () {
    const titles = tabsContent.map((entry) => entry.title);

    return (
      <div>
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
      <Heading
        level={3}
        titleEnd={3}
      >
        Information
      </Heading>

      <InformationBoxTabs />
    </aside>
  );
};

export default InformationBox;
