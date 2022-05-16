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

        <hr />

        <Heading
          level={3}
        >
          Font Credits
        </Heading>

        <p>This site uses the following fonts:</p>

        <ul>
          <li><Link href={{ pathname: 'https://adishila.com/fonts/' }}>Adishila</Link> (by Krishna Prasad G / Sri Suvidyendra Tirtha Swamiji under a custom license)</li>
          <li><Link href={{ pathname: 'https://bombay.indology.info/software/fonts/induni/index.html' }}>IndUni-C / IndUni-P</Link> (by John Smith / URW++ Design and Development Incorporated under the GNU General Public License)</li>
          <li><Link href={{ pathname: 'https://fonts.google.com/noto/specimen/Noto+Serif+Kannada' }}>Noto Serif Kannada</Link> (by Google under the Open Font License)</li>
        </ul>

        <hr />

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

        <hr />

        <Heading
          level={5}
        >
          Block Kannada
        </Heading>

        <div data-language="kan" data-script="Knda">
          ಕವಿರಾಜಮಾರ್ಗದ ಪ್ರತಿ ಪರಿಚ್ಛೇದದ ಕೊನೆಯಲ್ಲಿ 'ನೃಪತುಂಗ ದೇವಾನುಮತಪ್ಪ ಕವಿರಾಜಮಾರ್ಗದೊಳ್' ಎಂದು ಹೇಳುವುದರಿಂದ ಇದು ರಾಷ್ಟ್ರಕೂಟದೊರೆ ಅಮೋಘವರ್ಷ ನೃಪತುಂಗನ (ಕ್ರಿ.ಶ ೮೧೪-೮೭೭)ಕಾಲದಲ್ಲಿ ಹುಟ್ಟಿದುದದೆಂದು ನಿರ್ಧರಿಸಲಾಗಿದೆ. ಕವಿರಾಜಮಾರ್ಗ ಕೃತಿಯಲ್ಲಿ ಮೂರು ಪರಿಚ್ಛೇದಗಳಿವೆ. ಮೊದಲ ಪರಿಚ್ಛೇದದಲ್ಲಿ ಮಂಗಳಾಚರಣೆ, ಪೂರ್ವಕವಿಸ್ತುತಿ ಮೊದಲಾದ ಪೀಠಿಕಾಭಾಗದ ಪದ್ಯಗಳಾದ ಮೇಲೆ ನೃಪತುಂಗ ಕಾವ್ಯಾಭ್ಯಾಸದ ಅವಶ್ಯಕತೆ, ಕವಿತ್ವರಚನಾಶಕ್ತಿಯಿಂದ ಉಂಟಾಗುವ ಮಾರ್ಗ ಮೊದಲಾದ ವಿಷಯಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿದ್ದಾನೆ.
        </div>

        <Heading
          level={5}
        >
          Inline Kannada
        </Heading>

        <p>
          This is an example of some inline <span data-language="kan" data-script="Knda">ಕವಿರಾಜಮಾರ್ಗದ</span> so we can see how it looks.
        </p>

        <hr />

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
