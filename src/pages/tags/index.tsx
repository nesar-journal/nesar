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
      tagIds: DATA.tags.ids,
      tagsData: DATA.tags.data,
    },
  };
};

const TagsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tagIds,
  tagsData,
}) => {
  return (
    <>
      <Layout>
        <SEO
          title="Tags"
        />

        <Heading
          level={2}
          titleEnd={2}
        >
          Tags
        </Heading>

        <ul>
          {tagIds.map((tagId) => {
            return (
              <li key={tagId}>
                <Link
                  href={`/tags/${tagId}`}
                  passHref
                >
                  <a>{tagsData[tagId].displayName}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default TagsIndex;
