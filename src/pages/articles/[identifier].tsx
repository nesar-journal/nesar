import { ParsedUrlQuery } from 'querystring';
import path from 'path';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Image from 'next/image';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

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
          src={`/articles/${data.identifier}/${data.paths.cover}`}
          layout="fixed"
          width={264}
          height={368}
          quality={90}
        />
        <div>{`/articles/${data.identifier}.pdf`}</div>

        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Layout>
    </>
  );
};

export default Article;
