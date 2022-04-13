import { ParsedUrlQuery } from 'querystring';
import path from 'path';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout';
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

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<IssueParams>) => {
  return {
    props: {
      data: DATA.issues.data[params?.identifier || ''],
      articlesData: DATA.articles.data,
    }
  };
};

const Issue: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articlesData,
  data,
}) => {
  const coverExtension = path.extname(data.paths.cover);

  return (
    <>
      <Layout>
        <SEO
          title={data.title}
        />

        <div>{data.title}</div>
        <div>{data.abstract}</div>
        <div>{data.doi}</div>
        <div>{data.tags.join(', ')}</div>

        <Image
          alt="Cover"
          src={`/issues/${data.identifier}/${data.paths.cover}`}
          layout="fixed"
          width={264}
          height={368}
          quality={90}
        />

        <div>{`/issues/${data.identifier}.pdf`}</div>

        <h2>Articles</h2>

        <ul>
          {
            data.articles.map((articleId) => {
              return (
                <li key={articleId}>
                  <Link href={{ pathname: `/articles/${articleId}` }}>
                    {articlesData[articleId].title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </Layout>
    </>
  );
};

export default Issue;
