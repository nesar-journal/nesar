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
          coverUrl={data.paths.cover ? `/issues/${data.identifier}/${data.paths.cover}` : undefined}
          doi={data.doi}
          pdfUrl={data.paths.pdf ? `/issues/${data.identifier}/${data.paths.pdf}` : undefined}
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
                coverUrl={articleData.paths.cover ? `/articles/${articleId}/${articleData.paths.cover}` : undefined}
                doi={articleData.doi}
                key={articleId}
                pdfUrl={articleData.paths.pdf ? `/articles/${articleId}/${articleData.paths.pdf}` : undefined}
                publicationDate={articleData.dates.publication}
                tags={articleData.tags}
                title={articleData.title}
                subtitle={articleData.subtitle}
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
