import type { NextPage } from 'next';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HomePage: NextPage = () => {
  return (
    <>
      <Layout largeCover>
        <SEO
          title="Home"
        />

        <Heading
          level={2}
          ornament={1}
        >
          Latest Issue
        </Heading>

        <Heading
          level={2}
          ornament={2}
          link="/issues"
          linkText="View All Issues"
        >Previous Issues</Heading>

      </Layout>
    </>
  );
};

export default HomePage;
