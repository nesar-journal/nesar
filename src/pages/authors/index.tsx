import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import { getData } from '../../utils';

const DATA = getData();

export const getStaticProps = async () => {
  return {
    props: {
      authorsIds: DATA.authors.ids,
      authors: DATA.authors.data,
    },
  };
};

const AuthorsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  authorsIds,
  authors,
}) => {
  return (
    <>
      <Layout>
        <SEO
          title="Authors"
        />

        <Heading
          level={2}
          titleEnd={2}
        >
          Authors
        </Heading>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Institution</th>
              <th>VIAF</th>
            </tr>
          </thead>
          <tbody>
            {
              authorsIds.map((id) => {
                const authorData = authors[id];

                return (
                  <tr key={id}>
                    <td>
                      <Link
                        href={`/authors/${id}`}
                        passHref
                      >
                        <a>{authorData.displayName}</a>
                      </Link>
                    </td>
                    <td><a href={`mailto:${authorData.email}`}>{authorData.email}</a></td>
                    <td>{authorData.institution}</td>
                    <td>{authorData.viaf}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </Layout>
    </>
  );
};

export default AuthorsIndex;
