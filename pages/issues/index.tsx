import { GetStaticProps, InferGetStaticPropsType } from 'next';

import type { IssueProps } from './[slug]';

import issues from '../../utils/issues';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      issues,
    }
  };
};

export default function IssuesIndex (props: InferGetStaticPropsType<typeof getStaticProps>) {
  const issues = props.issues as IssueProps[];

  console.log(issues);

  return (
    <ul>
      {
        issues.map((issue) => {
          return (
            <li key={issue.identifier}>{issue.title}</li>
          );
        })
      }
    </ul>
  );
}
