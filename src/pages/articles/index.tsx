import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';

import { getData } from '../../utils';

const DATA = getData();

export const getStaticProps = async () => {
  return {
    props: {
      articleIds: DATA.articles.ids,
      articles: DATA.articles.data,
    },
  };
};

const ArticlesIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articleIds,
  articles,
}) => {
  return (
    <>
      <Head>
        <title>Articles | NESAR</title>
      </Head>

      <ul>
        {
          articleIds.map((id) => {
            return (
              <li key={id}>{articles[id].title}</li>
            );
          })
        }
      </ul>
    </>
  );
}

export default ArticlesIndex;
