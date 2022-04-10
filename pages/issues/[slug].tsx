import { ParsedUrlQuery } from 'querystring';
import path from 'path';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import issues from '../../utils/issues';

interface IssueParams extends ParsedUrlQuery {
  slug: string;
}

export type IssueProps = {
  abstract: string;
  doi: string;
  identifier: string;
  issue: number;
  paths: {
    cover: string;
    pdf: string;
  }
  tags: string[];
  title: string;
  type: string;
};

export const getStaticPaths: GetStaticPaths<IssueParams> = async () => {
  const paths = issues
    .map((slug) => ({ params: { slug } }))
  ;

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IssueParams;

  const data = (await import(`../../data/issues/${slug}/metadata.yml`)).default as IssueProps;

  return {
    props: {
      data,
    }
  };
};

const Issue = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data = props.data as IssueProps;
  const coverExtension = path.extname(data.paths.cover);

  return (
    <>
      <Head>
        <title>{data.title} | NESAR</title>
      </Head>

      <div>{data.title}</div>
      <div>{data.abstract}</div>
      <div>{data.doi}</div>
      <div>{data.tags.join(', ')}</div>
      <div>{`/issues/${data.identifier}${coverExtension}`}</div>
      <div>{`/issues/${data.identifier}.pdf`}</div>
    </>
  );
};

export default Issue;
