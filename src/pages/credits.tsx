import type { NextPage } from 'next';
import Link from 'next/link';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const CreditsPage: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Credits"
        />

        <Heading
          level={3}
        >
          Image Credits
        </Heading>

        The image used in the header banner is ... .

        <Heading
          level={3}
        >
          Font Credits
        </Heading>

        <p>This site uses the following fonts:</p>

        <ul>
          <li><Link href={{ pathname: 'https://adishila.com/fonts/' }}>Adishila</Link></li>
          <li><Link href={{ pathname: '#' }}>IndUni Courier New</Link></li>
          <li><Link href={{ pathname: '#' }}>IndUni Palatino</Link></li>
          <li><Link href={{ pathname: '#' }}>Noto Serif Kannada</Link></li>
        </ul>

        <Heading
          level={4}
        >
          Font Test
        </Heading>

        <Heading
          level={5}
        >
          Block Devanagari
        </Heading>

        <div data-language="san" data-script="Deva">
          सर्वे मानवाः जन्मना स्वतन्त्राः वैयक्तिकगौरवेण अधिकारेण च तुल्याः एव,<br />
          सर्वेषां विवेकः आत्मसाक्षी च वर्तते, सर्वे परस्परं भ्रातृभावेन व्यवहरेयुः.
        </div>

        <Heading
          level={5}
        >
          Inline Devanagari
        </Heading>

        <p>
          This is an example of some inline <span data-language="san" data-script="Deva">आत्मसाक्षीव्यवहरेयुः</span> so we can see how it looks.
        </p>

        <Heading
          level={5}
        >
          Block Kannada
        </Heading>

        <div data-language="kan" data-script="Knda">
          KANNADA
        </div>

        <Heading
          level={5}
        >
          Inline Kannada
        </Heading>

        <p>
          This is an example of some inline <span data-language="kan" data-script="Knda">KANNADA</span> so we can see how it looks.
        </p>

        <Heading
          level={5}
        >
          Block Tamil
        </Heading>

        <div data-language="tam" data-script="Taml">
          TAMIL
        </div>

        <Heading
          level={5}
        >
          Inline Tamil
        </Heading>

        <p>
          This is an example of some inline <span data-language="tam" data-script="Taml">TAMIL</span> so we can see how it looks.
        </p>

        <Heading
          level={5}
        >
          Block Romanization
        </Heading>

        <div data-language="san" data-script="Latn">
          sarve mānavāḥ janmanā svatantrāḥ vaiyaktikagauraveṇa adhikāreṇa ca tulyāḥ eva,<br />
          sarveṣāṃ vivekaḥ ātmasākṣī ca vartate, sarve parasparaṃ bhrātṛbhāvena vyavahareyuḥ
        </div>

        <Heading
          level={5}
        >
          Inline Romanization
        </Heading>

        <p>
          This is an example of some inline <span data-language="san" data-script="Latn">svatantrāḥ vaiyaktikagauraveṇa</span> so we can see how it looks.
        </p>
      </Layout>
    </>
  );
};

export default CreditsPage;
