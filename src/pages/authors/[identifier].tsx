import { ParsedUrlQuery } from 'querystring';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
import SEO from '../../components/SEO';

import { getData } from '../../utils';

const DATA = getData();

interface IssueParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<IssueParams> = async () => {
  const issues = DATA.issues.ids;

  const paths = issues
    .map((identifier) => ({ params: { identifier } }))
  ;

  return ({
    paths,
    fallback: false,
  });
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<IssueParams>) => {
  return {
    props: {
      data: DATA.issues.data[params?.identifier || ''],
      articlesData: DATA.articles.data,
    }
  };
};

const IssuePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articlesData,
  data,
}) => {
  return (
    <>
      <Layout>
        <SEO
          title={data.title}
        />

        <ResourceCard
          abstract={data.abstract}
          authors={data.editors}
          coverUrl={`/issues/${data.identifier}/${data.paths.cover}`}
          doi={data.doi}
          pdfUrl={`/issues/${data.identifier}/${data.paths.pdf}`}
          publicationDate={data.dates.publication}
          tags={data.tags}
          title={data.title}
          url={`/issues/${data.identifier}`}
        />

        <h2>Articles</h2>

        {
          data.articles.map((articleId) => {
            const articleData = articlesData[articleId];

            return (
              <ResourceCard
                abstract={articleData.abstract}
                authors={articleData.authors}
                coverUrl={`/articles/${articleId}/${articleData.paths.cover}`}
                doi={articleData.doi}
                key={articleId}
                pdfUrl={`/articles/${articleId}/${articleData.paths.pdf}`}
                publicationDate={articleData.dates.publication}
                tags={articleData.tags}
                title={articleData.title}
                url={`/articles/${articleId}`}
              />
            );
          })
        }
      </Layout>
    </>
  );
};

export default IssuePage;
