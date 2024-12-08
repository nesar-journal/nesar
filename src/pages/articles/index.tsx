import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
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

        <Heading
          level={2}
          titleEnd={2}
        >
          All Articles
        </Heading>

        {
          articleIds.map((id) => {
            const articleData = articles[id];

            return (
              <div key={id}>
                <Link href={`/articles/${id}`}>
                  {articleData.title}
                </Link>

                <ResourceCard
                  abstract={articleData.abstract}
                  authors={articleData.authors}
		  translators={articleData.translators}
                  coverUrl={`/articles/${id}/${articleData.paths.cover}`}
                  pdfUrl={`/articles/${id}/${articleData.paths.pdf}`}
                  teiUrl={`/articles/${id}/${articleData.paths.tei}`}
                  publicationDate={articleData.dates.publication}
                  tags={articleData.tags}
                  title={articleData.title}
                  url={`/articles/${id}`}
                />
              </div>
            );
          })
        }
      </Layout>
    </>
  );
};

export default ArticlesIndex;
