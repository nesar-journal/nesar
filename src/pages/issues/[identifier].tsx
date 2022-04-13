import { ParsedUrlQuery } from 'querystring';
import path from 'path';

import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';

import { getData } from '../../utils';

const DATA = getData();

interface IssueParams extends ParsedUrlQuery {
  identifier: string;
}

export const getStaticPaths: GetStaticPaths<IssueParams> = async () => {
  const issues = DATA.issues.ids;

  const paths = issues
    .map((identifier) => ({ params: { identifier } }))
  ;

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<IssueParams>) => {
  return {
    props: {
      data: DATA.issues.data[params?.identifier || ''],
    }
  };
};

const Issue: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
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
