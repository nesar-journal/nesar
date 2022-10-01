import type {
  InferGetStaticPropsType,
  NextPage,
} from 'next';

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

        {
          authorsIds.map((id) => {
            const authorData = authors[id];

            return (
              <div key={id}>
                <Heading
                  level={3}
                  link={`/authors/${id}`}
                  linkText={authorData.displayName}
                />

                <table>
                  <tbody>
                    <tr>
                      <th>Institution</th>
                      <td>{authorData.institution}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td><a href={`mailto:${authorData.email}`}>{authorData.email}</a></td>
                    </tr>
                    <tr>
                      <th>VIAF</th>
                      <td>{authorData.viaf}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        }
      </Layout>
    </>
  );
};

export default AuthorsIndex;
