import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { getData } from '../utils';

const DATA = getData();

export const getStaticProps = async () => {
  return {
    props: {
      authorsIds: DATA.authors.ids,
      authors: DATA.authors.data,
    },
  };
};

const AboutPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  authorsIds,
  authors,
}) => {
  function renderAuthorsInfo () {
    return (
      <>
        <Heading
          level={3}
        >
          Authors
        </Heading>

        <table className="authors">
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
                  <tr key={authorData.email}>
                    <td>{authorData.displayName}</td>
                    <td>{authorData.email}</td>
                    <td>{authorData.institution}</td>
                    <td>{authorData.viaf}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </>
    );
  }

  function renderPeople () {
    return (
      <>
        <Heading
          level={2}
          titleEnd={1}
        >
          People
        </Heading>

        <Heading
          level={3}
        >
          Editorial board
        </Heading>

        <dl>
          <dt>Editor</dt>
          <dd>Andrew Ollett</dd>
          <dt>Managing Editors</dt>
          <dd>Naresh Keerthi</dd>
          <dd>Shubha Shanthamurthy</dd>
        </dl>


        <Heading
          level={3}
        >
          Advisory board
        </Heading>

        <dl>
          <dt>Diwakar Acharya</dt>
          <dd>University of Oxford</dd>
          <dt>Richard Eaton</dt>
          <dd>University of Arizona</dd>
          <dt>Leslie Orr</dt>
          <dd>Concordia University</dd>
          <dt>David Shulman</dt>
          <dd>Hebrew University of Jerusalem (Emeritus)</dd>
          <dt>Eva Wilden</dt>
          <dd>University of Hamburg</dd>
        </dl>

        {renderAuthorsInfo()}
      </>
    );
  }

  function renderCredits () {
    return (
      <>
        <Heading
          level={2}
          titleEnd={1}
        >
          Credits
        </Heading>

        <p>This site was designed by <a href="https://www.penguinchilli.co.uk/#1" target="_blank" rel="noreferrer">Alex Bellingham</a> and developed for the web by Ravi S. Rāmphal.</p>


        <p>The image used in the header banner was taken by <a href="https://instagram.com/_spartan_photography"> Spartan Xozz</a>, downloaded from <a href="https://unsplash.com/photos/omx4dN1BfQ4"> Unsplash</a>, and used under the <a href="https://unsplash.com/license"> Unsplash License</a>.</p>

        <p>This site uses the following fonts:</p>

        <ul>
          <li><Link href={{ pathname: 'https://adishila.com/fonts/' }}>Adishila</Link> (by Krishna Prasad G / Sri Suvidyendra Tirtha Swamiji under a custom license)</li>
          <li><Link href={{ pathname: 'https://bombay.indology.info/software/fonts/induni/index.html' }}>IndUni-C / IndUni-P</Link> (by John Smith / URW++ Design and Development Incorporated under the GNU General Public License)</li>
          <li><Link href={{ pathname: 'https://fonts.google.com/noto/specimen/Noto+Serif+Kannada' }}>Noto Serif Kannada</Link> (by Google under the Open Font License)</li>
        </ul>
      </>
    );
  }

  function renderFontTest () {
    return (
      <>
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

        <div data-lang="san" data-script="Deva">
          सर्वे मानवाः जन्मना स्वतन्त्राः वैयक्तिकगौरवेण अधिकारेण च तुल्याः एव,<br />
          सर्वेषां विवेकः आत्मसाक्षी च वर्तते, सर्वे परस्परं भ्रातृभावेन व्यवहरेयुः.
        </div>

        <Heading
          level={5}
        >
          Inline Devanagari
        </Heading>

        <p>
          This is an example of some inline <span data-lang="san" data-script="Deva">आत्मसाक्षीव्यवहरेयुः</span> so we can see how it looks.
        </p>

        <hr />

        <Heading
          level={5}
        >
          Block Kannada
        </Heading>

        <div data-lang="kan" data-script="Knda">
          ಕವಿರಾಜಮಾರ್ಗದ ಪ್ರತಿ ಪರಿಚ್ಛೇದದ ಕೊನೆಯಲ್ಲಿ &apos;ನೃಪತುಂಗ ದೇವಾನುಮತಪ್ಪ ಕವಿರಾಜಮಾರ್ಗದೊಳ್&apos; ಎಂದು ಹೇಳುವುದರಿಂದ ಇದು ರಾಷ್ಟ್ರಕೂಟದೊರೆ ಅಮೋಘವರ್ಷ ನೃಪತುಂಗನ (ಕ್ರಿ.ಶ ೮೧೪-೮೭೭)ಕಾಲದಲ್ಲಿ ಹುಟ್ಟಿದುದದೆಂದು ನಿರ್ಧರಿಸಲಾಗಿದೆ. ಕವಿರಾಜಮಾರ್ಗ ಕೃತಿಯಲ್ಲಿ ಮೂರು ಪರಿಚ್ಛೇದಗಳಿವೆ. ಮೊದಲ ಪರಿಚ್ಛೇದದಲ್ಲಿ ಮಂಗಳಾಚರಣೆ, ಪೂರ್ವಕವಿಸ್ತುತಿ ಮೊದಲಾದ ಪೀಠಿಕಾಭಾಗದ ಪದ್ಯಗಳಾದ ಮೇಲೆ ನೃಪತುಂಗ ಕಾವ್ಯಾಭ್ಯಾಸದ ಅವಶ್ಯಕತೆ, ಕವಿತ್ವರಚನಾಶಕ್ತಿಯಿಂದ ಉಂಟಾಗುವ ಮಾರ್ಗ ಮೊದಲಾದ ವಿಷಯಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿದ್ದಾನೆ.
        </div>

        <Heading
          level={5}
        >
          Inline Kannada
        </Heading>

        <p>
          This is an example of some inline <span data-lang="kan" data-script="Knda">ಕವಿರಾಜಮಾರ್ಗದ</span> so we can see how it looks.
        </p>

        <hr />

        <Heading
          level={5}
        >
          Block Romanization
        </Heading>

        <div data-lang="san" data-script="Latn">
          sarve mānavāḥ janmanā svatantrāḥ vaiyaktikagauraveṇa adhikāreṇa ca tulyāḥ eva,<br />
          sarveṣāṃ vivekaḥ ātmasākṣī ca vartate, sarve parasparaṃ bhrātṛbhāvena vyavahareyuḥ
        </div>

        <Heading
          level={5}
        >
          Inline Romanization
        </Heading>

        <p>
          This is an example of some inline <span data-lang="san" data-script="Latn">svatantrāḥ vaiyaktikagauraveṇa</span> so we can see how it looks.
        </p>
      </>
    );
  }

  return (
    <>
      <Layout>
        <SEO
          title="About"
        />

        <Heading
          level={2}
          titleEnd={1}
        >
          About
        </Heading>

        <p>This journal is the product of ... .</p>

        <hr />

        <Heading
          level={2}
          titleEnd={1}
        >
          Submissions
        </Heading>
        <p>Please see the <Link href="/submit">guidelines for submission</Link> for further information.</p>

        <hr />

        {renderPeople()}

        <hr />

        {renderCredits()}

        <hr />

        {renderFontTest()}

      </Layout>
    </>
  );
};

export default AboutPage;
