import { ParsedUrlQuery } from 'querystring';
import path from 'path';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';

import { getData } from '../../utils';

const DATA = getData();

interface ArticleParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<ArticleParams> = async () => {
  const articles = DATA.articles.ids;

  const paths = articles
    .map((identifier) => ({ params: { identifier } }))
  ;

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<ArticleParams>) => {
  return {
    props: {
      data: DATA.articles.data[params?.identifier || ''],
    }
  };
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  const coverExtension = path.extname(data.paths.cover);

  return (
    <>
      <Head>
        <title>{data.title} | NESAR</title>
      </Head>

      <div>{data.title}</div>
      <div>{data.abstract}</div>
      <div>{data.doi}</div>
      <div>{data.tags.join(', ')}</div>
      <div>{`/articles/${data.identifier}${coverExtension}`}</div>
      <div>{`/articles/${data.identifier}.pdf`}</div>

      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </>
  );
};

export default Article;
