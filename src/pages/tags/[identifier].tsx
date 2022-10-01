import { ParsedUrlQuery } from 'querystring';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import { getData } from '../../utils';

const DATA = getData();

interface TagParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<TagParams> = async () => {
  const paths = DATA.tags.ids.map((identifier) => ({ params: { identifier } }));

  return ({
    paths,
    fallback: false,
  });
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<TagParams>) => {
  const tagSlug = params?.identifier || '';

  return {
    props: {
      data: DATA.tags.data[tagSlug],
      issuesData: DATA.issues.data,
      articlesData: DATA.articles.data,
    }
  };
};

const TagPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  issuesData,
  articlesData,
}) => {
  function renderIssues () {
    if (data.issues) {
      return (
        <>
          <Heading
            level={3}
          >
            Issues
          </Heading>

          <ul>
            {
              data.issues.map((issueId) => {
                const issueData = issuesData[issueId];

                return (
                  <li key={issueId}>
                    <Link href={`/issues/${issueId}`}><a>{issueData.title}</a></Link>
                  </li>
                );
              })
            }
          </ul>
        </>
      );
    }

    return null;
  }

  function renderArticles () {
    if (data.articles) {
      return (
        <>
          <Heading
            level={3}
          >
            Articles
          </Heading>

          <ul>
            {
              data.articles.map((articleId) => {
                const articleData = articlesData[articleId];

                return (
                  <li key={articleId}>
                    <Link href={`/articles/${articleId}`}><a>{articleData.title}</a></Link>
                  </li>
                );
              })
            }
          </ul>
        </>
      );
    }

    return null;
  }

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

        {renderIssues()}
        {renderArticles()}
      </Layout>
    </>
  );
};

export default TagPage;
