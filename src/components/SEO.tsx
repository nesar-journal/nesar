import Head from 'next/head';

import Heading from '../components/Heading';

type SEOProps = {
  cover?: string;
  coverAltText?: string;
  description?: string;
  title?: string;
  url?: string;
}

const SEO = (props: SEOProps) => {
  const {
    cover,
    coverAltText,
    description,
    title,
    url,
  } = props;

  const siteName = 'NESAR';
  const siteUrl = 'https://nesarjournal.org';
  const siteDescription = 'An open-access journal for South Asian studies, focusing on the languages, literature, art and philosophy of the subcontinent.';
  const siteLogo = `${siteUrl}/assets/images/logo.png`;
  const siteLogoDescription = 'The logo for the NESAR journal.'

  // set up defaults
  const tagDescription = description || siteDescription;
  const tagImageAltText = coverAltText || siteLogoDescription;
  const tagImageUrl = cover || siteLogo;
  const tagTitle = title ? `${title} | ${siteName}` : siteName;
  const tagUrl = url || siteUrl;

  return (
    <>
      <Head>
        {/* Standard */}
        <title>{tagTitle}</title>
        <meta name="title" content={tagTitle} />
        <meta name="description" content={tagDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={tagUrl} />
        <meta property="og:title" content={tagTitle} />
        <meta property="og:description" content={tagDescription} />
        <meta property="og:image" content={tagImageUrl} />
        <meta property="og:image:alt" content={tagImageAltText} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={tagUrl} />
        <meta property="twitter:title" content={tagTitle} />
        <meta property="twitter:description" content={tagDescription} />
        <meta property="twitter:image" content={tagImageUrl} />
        <meta property="twitter:image:alt" content={tagImageAltText} />

        {/* Other Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#19191C" />
        <link rel="canonical" href={tagUrl} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading level={1} hidden>{title || ''}</Heading>
    </>
  );
};

export default SEO;
