import type { NextPage } from 'next';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="About"
        />

        <h3>Standalone Devanagari</h3>

        <div className="devanagari">
          सर्वे मानवाः जन्मना स्वतन्त्राः वैयक्तिकगौरवेण अधिकारेण च तुल्याः एव, सर्वेषां विवेकः आत्मसाक्षी च वर्तते, सर्वे परस्परं भ्रातृभावेन व्यवहरेयुः.
        </div>

        <hr />

        <h3>Standalone IAST</h3>

        <div className="iast">
          sarve mānavāḥ janmanā svatantrāḥ vaiyaktikagauraveṇa adhikāreṇa ca tulyāḥ eva, sarveṣāṃ vivekaḥ ātmasākṣī ca vartate, sarve parasparaṃ bhrātṛbhāvena vyavahareyuḥ.
        </div>

        <hr />

        <p>
          This is a test of inline <span className="devanagari">देवनागरी</span> and its romanization to <span className="iast">devanāgarī</span>.
        </p>
      </Layout>
    </>
  );
};

export default Home;
