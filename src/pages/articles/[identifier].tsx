import { useEffect } from 'react';

import { ParsedUrlQuery } from 'querystring';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
import SEO from '../../components/SEO';

import { getData } from '../../utils';

import styles from './[identifier].module.scss';

const DATA = getData();

interface ArticleParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<ArticleParams> = async () => {
  const articles = DATA.articles.ids;

  const paths = articles
    .map((identifier) => ({ params: { identifier } }))
  ;

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<ArticleParams>) => {
  return ({
    props: {
      data: DATA.articles.data[params?.identifier || ''],
    }
  });
};

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  // React seems to be stripping out these tags already, but just in case:
  const content           = data.content.replace(/<\/?body>|<\/?html>/g, '');
  const tocPattern        = /(<div class="nesar-toc">\s*?<ul>.*?<\/ul>\s*?<\/div>)/s;
  const tocMatch          = content.match(tocPattern);
  const tocContent        = tocMatch?.length ? tocMatch[0] : '';
  const contentWithoutToc = tocContent?.length ? content.replace(tocContent, '') : content;

  function renderToc () {
    if (tocContent) {
      return (
        <div className={styles.toc}
          dangerouslySetInnerHTML={{ __html: tocContent }}
        />
      );
    }

    return null;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();

        return (
          (rect.top >= 0)
          && (rect.left >= 0)
          && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
          && (rect.right <= (window.innerWidth || document.documentElement.clientWidth))
        );
      };

      window.addEventListener('scroll', () => {
        const toc = document.querySelectorAll<HTMLAnchorElement>('.nesar-toc a');
        if (toc?.length) {
          document.querySelectorAll('h2').forEach((heading) => {
            if (isInViewport(heading)) {
              const headingLink = heading.querySelector('a');
              if (headingLink) {
                const headerId = headingLink.id;

                toc.forEach((link) => {
                  if (link.href.includes(headerId)) {
                    link.classList.add('toc-active');
                  } else {
                    link.classList.remove('toc-active');
                  }
                });
              }
            }
          });
        }
      });

      document.querySelectorAll('.articleBody figure img').forEach((image) => {
        image.addEventListener('click', () => {
          let lightbox = document.createElement('div');

          lightbox.style.width = '98vw';
          lightbox.style.height = '98vh';
          lightbox.style.zIndex = '10000';
          lightbox.style.backgroundColor = 'rgba(222, 222, 222, 0.7)';
          lightbox.style.padding = '1vh 1vw';
          lightbox.style.margin = '1vh 1vw';
          lightbox.style.overflow = 'hidden';
          lightbox.style.position = 'fixed';
          lightbox.style.top = '0';
          lightbox.style.left = '0';

          lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
          });

          let imageElement = document.createElement('img');
          imageElement.src = (image as HTMLImageElement).src;
          imageElement.style.width = '100%';
          imageElement.style.height = '100%';
          imageElement.style.objectFit = 'contain';

          lightbox.appendChild(imageElement);

          document.body.appendChild(lightbox);
        });
      });
    }
  }, []);

  return (
    <>
      <Layout marginTop>
        <SEO
          title={data.title}
        />

        {renderToc()}

        <ResourceCard
          abstract={data.abstract}
          authors={data.authors}
          translators={data.translators}
          coverUrl={`/articles/${data.identifier}/${data.paths.cover}`}
          doi={data.doi}
          pdfUrl={`/articles/${data.identifier}/${data.paths.pdf}`}
          teiUrl={`/articles/${data.identifier}/${data.paths.tei}`}
          publicationDate={data.dates.publication}
          tags={data.tags}
          title={data.title}
          subtitle={data.subtitle}
          url={`/articles/${data.identifier}`}
          showTitleEnd
        />

        <div
          className="articleBody"
          dangerouslySetInnerHTML={{ __html: contentWithoutToc }}
        />
      </Layout>
    </>
  );
};

export default ArticlePage;
