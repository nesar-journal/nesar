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
          doi={data.doi}
          publicationDate={data.dates.publication}
          tags={data.tags}
          title={data.title}
          url={`/issues/${data.identifier}`}

          coverUrl={data.paths.cover ? `/issues/${data.identifier}/${data.paths.cover}` : undefined}
          pdfUrl={data.paths.pdf ? `/issues/${data.identifier}/${data.paths.pdf}` : undefined}
          teiUrl={data.paths.tei ? `/issues/${data.identifier}/${data.paths.tei}` : undefined}

        />

        <h2>Articles</h2>

        {
          data.articles.map((articleId) => {
            const articleData = articlesData[articleId];

            return (
              <ResourceCard
                key={articleId}
                abstract={articleData.abstract}
                authors={articleData.authors}
                doi={articleData.doi}
                publicationDate={articleData.dates.publication}
                tags={articleData.tags}
                title={articleData.title}
                subtitle={articleData.subtitle}
                url={`/articles/${articleId}`}

                coverUrl={articleData.paths.cover ? `/articles/${articleId}/${articleData.paths.cover}` : undefined}
                pdfUrl={articleData.paths.pdf ? `/articles/${articleId}/${articleData.paths.pdf}` : undefined}
                teiUrl={articleData.paths.tei ? `/issues/${articleId}/${articleData.paths.tei}` : undefined}
              />
            );
          })
        }
      </Layout>
    </>
  );
};

export default IssuePage;
