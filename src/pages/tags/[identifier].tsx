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
      return (<>
        <Heading
          level={3}
        >
          Issues
        </Heading>

        <ul>
          {
            data.issues.map((issueId) => {
              const { title, editors } = issuesData[issueId];

              return (
                (<li key={issueId}>
                  <>
                    <Link
                      href={`/issues/${issueId}`}
                      dangerouslySetInnerHTML={{ __html: title }}
                    /> (Editor{editors.length > 1 ? 's' : ''}: {
                      editors.map((editor) => editor.displayName).join(', ')
                    })
                  </>
                </li>)
              );
            })
          }
        </ul>
      </>);
    }

    return null;
  }

  function renderArticles () {
    if (data.articles) {
      return (<>
        <Heading
          level={3}
        >
          Articles
        </Heading>

        <ul>
          {
            data.articles.map((articleId) => {
              const { title, authors } = articlesData[articleId];

              return (
                <li key={articleId}>
                  <>
                    <Link
                      href={`/articles/${articleId}`}
                      dangerouslySetInnerHTML={{ __html: title }}
                    /> (Author{authors.length > 1 ? 's' : ''}: {
                      authors.map((author) => author.displayName).join(', ')
                    })
                  </>
                </li>
              );
            })
          }
        </ul>
      </>);
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
