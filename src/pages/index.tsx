import type { NextPage } from 'next';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HomePage: NextPage = () => {
    return (
        <>
            <Layout largeCover>
                <SEO
                    title="Home"
                />

                <p><i>New Explorations in South Asia Research</i>, or <i>NESAR</i> (<span class="scriptWrapper" data-lang="kan" data-script="Latn" data-original="nesaṟ">nesaṟ</span> being a Kannada word for “sun”) is a totally <b>free</b> and <b>open-access</b> journal publishing original research of the highest quality in South Asian Studies, with a focus on the intellectual and expressive traditions of South India.</p>

                <Heading
                    level={2}
                    titleEnd={1}
                >
                    Hero Article
                </Heading>

                {/* hero article */}

                <Heading
                    level={2}
                    titleEnd={1}
                >
                    Featured Article
                </Heading>

                {/*   */}

                <Heading
                    level={2}
                    titleEnd={1}
                >
                    Latest Articles
                </Heading>

                {/* dynamically generate most recent  */}
                {/* exclude featured article  */}
            </Layout>
        </>
    );
};

export default HomePage;
