import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';

import { getData } from '../../utils';

const DATA = getData();

export const getStaticProps = async () => {
  return {
    props: {
      issueIds: DATA.issues.ids,
      issues: DATA.issues.data,
    },
  };
};

const IssuesIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  issueIds,
  issues,
}) => {
  return (
    <>
      <Head>
        <title>Issues | NESAR</title>
      </Head>

      <ul>
        {
          issueIds.map((id) => {
            return (
              <li key={id}>{issues[id].title}</li>
            );
          })
        }
      </ul>
    </>
  );
}

export default IssuesIndex;
