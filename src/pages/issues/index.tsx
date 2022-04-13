import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

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
      <Layout>
        <SEO
          title="Issues"
        />

        <ul>
          {
            issueIds.map((id) => {
              return (
                <li key={id}>
                  <Link href={{ pathname: `/issues/${id}` }}>
                    {issues[id].title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </Layout>
    </>
  );
}

export default IssuesIndex;
