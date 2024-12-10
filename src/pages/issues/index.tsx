import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Heading from '../../components/Heading';
import InformationBox from '../../components/InformationBox';
import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
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

        <InformationBox />

        <Heading
          level={2}
          titleEnd={2}
        >
          All Issues
        </Heading>

        {
          issueIds.map((id) => {
            const issueData = issues[id];

            return (
              <div key={id}>
                <ResourceCard
                  abstract={issueData.abstract}
                  authors={issueData.editors}
                  coverUrl={issueData.paths.cover ? `/issues/${id}/${issueData.paths.cover}` : undefined}
                  pdfUrl={issueData.paths.pdf ? `/issues/${id}/${issueData.paths.pdf}` : undefined}
                  publicationDate={issueData.dates.publication}
                  tags={issueData.tags}
                  title={issueData.title}
                  url={`/issues/${id}`}
                />
              </div>
            );
          })
        }
      </Layout>
    </>
  );
};

export default IssuesIndex;
