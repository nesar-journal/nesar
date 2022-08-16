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

import styles from './[identifier].module.scss';

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

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <>
      <Layout>
        <SEO
          title={data.title}
        />

        <div className={styles.titleEnd}>
          {data.authors}
          {data.title}
        </div>

        <ResourceCard
          abstract={data.abstract}
          authors={data.authors}
          coverUrl={`/articles/${data.identifier}/${data.paths.cover}`}
          doi={data.doi}
          pdfUrl={`/articles/${data.identifier}/${data.paths.pdf}`}
          publicationDate={data.dates.publication}
          tags={data.tags}
          title={data.title}
          url={`/articles/${data.identifier}`}
          showTitleEnd
        />

        <div className='articleBody'
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Layout>
    </>
  );
};

export default ArticlePage;
