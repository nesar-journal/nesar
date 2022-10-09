import { ParsedUrlQuery } from 'querystring';

import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Heading from '../components/Heading';
import HeroCard from '../components/HeroCard';
import InformationBox from '../components/InformationBox';
import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import SEO from '../components/SEO';

import { getData } from '../utils';

const DATA = getData();

interface IssueParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<IssueParams>) => {
  return {
    props: {
      articlesData: DATA.articles.data,
    }
  };
};

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ articlesData }) => {
  const heroArticleIdentifier     = 'ollett-introducing-nesar';
  const featuredArticleIdentifier = 'ollett-images-of-language-mixture';
  const latestArticleIdentifier   = 'ollett-pierce-taylor-representing-kannada-text';

  const heroArticleData     = articlesData[heroArticleIdentifier];
  const featuredArticleData = articlesData[featuredArticleIdentifier];
  const latestArticleData   = articlesData[latestArticleIdentifier];

  return (
    <>
      <Layout largeCover>
        <SEO
          title="Home"
        />

        <InformationBox />

        <HeroCard
          coverUrl={`/articles/${heroArticleIdentifier}/${heroArticleData.paths.cover}`}
          title={heroArticleData.title}
          url={`/articles/${heroArticleIdentifier}`}
        />

        <Heading
          level={2}
          titleEnd={1}
        >
          Featured Article
        </Heading>

        <ResourceCard
          abstract={featuredArticleData.abstract}
          authors={featuredArticleData.authors}
          coverUrl={`/articles/${featuredArticleIdentifier}/${featuredArticleData.paths.cover}`}
          doi={featuredArticleData.doi}
          key={featuredArticleIdentifier}
          pdfUrl={`/articles/${featuredArticleIdentifier}/${featuredArticleData.paths.pdf}`}
          publicationDate={featuredArticleData.dates.publication}
          tags={featuredArticleData.tags}
          title={featuredArticleData.title}
          url={`/articles/${featuredArticleIdentifier}`}
        />

        <Heading
          level={2}
          titleEnd={1}
        >
          Latest Article
        </Heading>

        <ResourceCard
          abstract={latestArticleData.abstract}
          authors={latestArticleData.authors}
          coverUrl={`/articles/${latestArticleIdentifier}/${latestArticleData.paths.cover}`}
          doi={latestArticleData.doi}
          key={latestArticleIdentifier}
          pdfUrl={`/articles/${latestArticleIdentifier}/${latestArticleData.paths.pdf}`}
          publicationDate={latestArticleData.dates.publication}
          tags={latestArticleData.tags}
          title={latestArticleData.title}
          url={`/articles/${latestArticleIdentifier}`}
        />
      </Layout>
    </>
  );
};

export default HomePage;
