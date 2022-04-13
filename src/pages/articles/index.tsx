import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

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
      <Layout>
        <SEO
          title="Articles"
        />

        <ul>
          {
            articleIds.map((id) => {
              return (
                <li key={id}>{articles[id].title}</li>
              );
            })
          }
        </ul>
      </Layout>
    </>
  );
}

export default ArticlesIndex;
