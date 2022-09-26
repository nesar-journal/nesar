import { ParsedUrlQuery } from 'querystring';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import { getData } from '../../utils';
import Heading from '../../components/Heading';
import Link from 'next/link';

const DATA = getData();

interface AuthorParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<AuthorParams> = async () => {
  const authorsIds = DATA.authors.ids;

  const paths = authorsIds
    .map((identifier) => ({ params: { identifier } }))
  ;

  return ({
    paths,
    fallback: false,
  });
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<AuthorParams>) => {
  return {
    props: {
      data: DATA.authors.data[params?.identifier || ''],
      articlesIds: DATA.articles.ids,
      articlesData: DATA.articles.data,
    }
  };
};

const AuthorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articlesData,
  articlesIds,
  data,
}) => {
  return (
    <>
      <Layout>
        <SEO
          title={data.displayName}
        />

        <Heading
          level={2}
          titleEnd={1}
        >
          {data.displayName}
        </Heading>


        <Heading
          level={3}
        >
          Articles
        </Heading>

        {
          articlesIds.map((articleId) => {
            const articleData = articlesData[articleId];

            if (articleData.authors.includes(data.displayName)) {
              return (
                <li key={articleId}>
                  <Link href={`/articles/${articleId}`}><a>{articleData.title}</a></Link>
                </li>
              );
            }
          })
        }
      </Layout>
    </>
  );
};

export default AuthorPage;
