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
  const authorId = params?.identifier || '';

  return {
    props: {
      data         : DATA.authors.data[authorId],
      articlesIds  : DATA.articles.ids,
      articlesData : DATA.articles.data,
      issuesIds    : DATA.issues.ids,
      issuesData   : DATA.issues.data,
      authorId,
    }
  };
};

const AuthorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articlesData,
  articlesIds,
  issuesData,
  issuesIds,
  authorId,
  data,
}) => {
  function renderIssues () {
    if (issuesIds && issuesData) {
      return (
        <>
          <Heading
            level={3}
          >
            Issues
          </Heading>

          {
            issuesIds.map((issueId) => {
              const issueData = issuesData[issueId];

              if (issueData.editors.map((editor) => editor.id).includes(authorId)) {
                return (
                  <li key={issueId}>
                    <Link href={`/issues/${issueId}`}><a>{issueData.title}</a></Link>
                  </li>
                );
              }
            })
          }
        </>
      );
    }

    return null;
  }

  function renderArticles () {
    if (articlesIds && articlesData) {
      return (
        <>
          <Heading
            level={3}
          >
            Articles
          </Heading>

          {
            articlesIds.map((articleId) => {
              const articleData = articlesData[articleId];

              if (articleData.authors.map((author) => author.id).includes(authorId)) {
                return (
                  <li key={articleId}>
                    <Link href={`/articles/${articleId}`}><a>{articleData.title}</a></Link>
                  </li>
                );
              }
            })
          }
        </>
      );
    }
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

export default AuthorPage;
