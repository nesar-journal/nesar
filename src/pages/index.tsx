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

        <p>short description</p>

        <Heading
          level={2}
          titleEnd={1}
        >
          Hero Article
        </Heading>

        {/* hero article */}

        <Heading
          level={2}
          titleEnd={1}
        >
          Featured Article
        </Heading>

        {/*   */}

        <Heading
          level={2}
          titleEnd={1}
        >
          Latest Articles
        </Heading>

        {/* dynamically generate most recent  */}
        {/* exclude featured article  */}
      </Layout>
    </>
  );
};

export default HomePage;
