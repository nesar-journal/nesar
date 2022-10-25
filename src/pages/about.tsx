import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import ExternalLink from '../components/ExternalLink';
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
                  <tr key={id}>
                    <td>
                      <Link
                        href={`/authors/${id}`}
                        passHref
                      >
                        <a>{authorData.displayName}</a>
                      </Link>
                    </td>
                    <td><ExternalLink href={`mailto:${authorData.email}`}>{authorData.email}</ExternalLink></td>
                    <td>{authorData.institution}</td>
                    <td><ExternalLink href={`https://viaf.org/viaf/${authorData.viaf}`}>{authorData.viaf}</ExternalLink></td>
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

        <p>This site was designed by <ExternalLink href="https://www.penguinchilli.co.uk/">Alex Bellingham</ExternalLink> and developed for the web by <ExternalLink href="https://rramphal.com/">Ravi S. Rāmphal</ExternalLink>.</p>

        <p>The image used in the header banner was taken by <ExternalLink href="https://instagram.com/_spartan_photography"> Spartan Xozz</ExternalLink>, downloaded from <ExternalLink href="https://unsplash.com/photos/omx4dN1BfQ4"> Unsplash</ExternalLink>, and used under the <ExternalLink href="https://unsplash.com/license"> Unsplash License</ExternalLink>.</p>

        <p>This site uses the following fonts:</p>

        <ul>
          <li><ExternalLink href="https://adishila.com/fonts/">Adishila</ExternalLink> (by Krishna Prasad G / Sri Suvidyendra Tirtha Swamiji under a custom license)</li>
          <li><ExternalLink href="https://bombay.indology.info/software/fonts/induni/index.html">IndUni-C / IndUni-P</ExternalLink> (by John Smith / URW++ Design and Development Incorporated under the GNU General Public License)</li>
          <li><ExternalLink href="https://fonts.google.com/noto/specimen/Noto+Serif+Kannada">Noto Serif Kannada</ExternalLink> (by Google under the Open Font License)</li>
        </ul>
      </>
    );
  }

  function renderValues () {
    return (
      <>
        <Heading
          level={2}
          titleEnd={1}
        >
          Consortium of South-Asia related, OA, non-APC journals
        </Heading>

        <p>The “Initiative for Fair Open Access Publishing in South Asian Studies” (<ExternalLink href="https://foasas.org/">FOASAS</ExternalLink>) gathers information about journals that adhere to the general principles of fairness and openness in academic publishing.  Some journals whose editors have decided to collaborate explicitly include:</p>
        <ul>
          <li>History of Science in South Asia (<ExternalLink href="https://hssa-journal.org/">HSSA</ExternalLink>)</li>
          <li>Journal of Yoga Studies (<ExternalLink href="https://journalofyogastudies.org/">JoYS</ExternalLink>)</li>
          <li>New Explorations in South Asia Research (<ExternalLink href="https://nesarjournal.org">NESAR</ExternalLink>)</li>
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

        <p><i>New Explorations in South Asia Research</i>, or <i>NESAR</i> (<span className="scriptWrapper" data-lang="kan" data-script="Latn" data-original="nēsaṟ">nēsaṟ</span> being a Kannada word for “sun”) is an <b>open-access</b> journal publishing original research in South Asian Studies, with a focus on the intellectual and expressive traditions of South India.</p>

        <p><i>NESAR</i> is an online-only publication. <i>NESAR</i> will <b>never</b> charge its authors open-access fees or publication fees.</p>

        <p><i>NESAR</i> was started in 2020 by Andrew Ollett, Shubha Shanthamurthy, and Naresh Keerthi, with a founding advisory board of Diwakar Acharya, Richard Eaton, Leslie Orr, David Shulman, and Eva Wilden.</p>

        <p>The motivation for <i>NESAR</i> was the relative scarcity of high-quality open-access journal in the field of South Indian Studies and South Asian Studies more widely. We felt the need for a journal that (a) was open-access and free (for both contributors and readers); (b) was rigorously peer-reviewed and realized high standards of scholarship; (c) was intended <i>primarily</i> for South Asian Studies; (d) held itself to high standards of design and publication.</p>

        <p>You can contact the journal at <ExternalLink href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</ExternalLink>.</p>

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

        {renderValues()}

        <hr />

        {renderCredits()}

        {/* <hr /> */}

        {/* {renderFontTest()} */}

      </Layout>
    </>
  );
};

export default AboutPage;
