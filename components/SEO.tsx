import Head from 'next/head';

type SEOProps = {
  title: string;
}

const SEO = (props: SEOProps) => {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="UPDATE_THIS_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
