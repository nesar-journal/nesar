import type { NextPage } from 'next';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <Layout largeCover>
        <SEO
          title="Home"
        />
      </Layout>
    </>
  );
};

export default Home;
