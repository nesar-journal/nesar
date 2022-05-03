import type { NextPage } from 'next';
import Link from 'next/link';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AboutPage: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="About"
        />

        <Heading
          level={2}
        >
          About
        </Heading>

        <p>This journal is the product of ... .</p>

        <p>
          To see credits attributed for this site, please
          visit the <Link href={{ pathname: 'credits' }}>credits
          page</Link>.
        </p>

        <p>
          To ensure that your system is rendering the scripts
          correctly, please visit the <Link href={{ pathname: 'credits', hash: 'font-test' }} scroll>font
          test section</Link> of the credits page.
        </p>
      </Layout>
    </>
  );
};

export default AboutPage;
