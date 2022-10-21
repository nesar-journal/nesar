import type { NextPage } from 'next';

import ExternalLink from '../components/ExternalLink';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const TranslationsPage: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Translations"
        />

        <Heading
          level={1}
          titleEnd={2}
        >
          NESAR Translations
        </Heading>

        <Heading
          level={2}
        >
          Motivation
        </Heading>

        <p>The vernacular languages of India served as the languages of scholarship on vernacular literature and literary history throughout the twentieth century. The depth of scholarship in these languages, however, is counterbalanced by their inaccessibility to scholars (and educated readers more generally) who do not read them. While such a readership might have struck earlier generations as paradoxical — who would be interested in Kannada literary history who does not already know the Kannada language? — the scholarly interest in the comparative history of South Asian literatures has grown in recent years. Scholars of particular regional languages are turning with increasing urgency to questions about the transregional scope of the forms, genres, themes and historical developments that they study. It is common for scholars of such closely-related literary traditions as Kannada and Telugu, or Tamil and Malayalam, to not have access to scholarship on their “sister” traditions. And a fortiori scholars who only have access to writings in English (or French, or German, or Hindi) are all but cut off from critical scholarship on regional Indian languages and their rich literary histories. Hence, while there is obviously an enormous amount of important scholarship in South Indian vernaculars that could be translated into English, we are choosing to focus in this first phase on scholarship that articulates some of the key questions of vernacular literary history, from sources (inscriptions, manuscripts, and oral traditions) to forms (verse forms, prose style, genres and “microgenres”) to problematics of literary and social imagination (including religion, gender, and caste).</p>

        <Heading
          level={2}
        >
          Proposals
        </Heading>

        <p>NESAR is accepting proposals for translations of important scholarly articles  from <b>Kannada, Malayalam, Marathi, Tamil, or Telugu</b> into English.</p>

        <p>If you are interested in doing a translation, please contact the editors (<ExternalLink href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</ExternalLink>) with the following information:</p>
        <ul>
          <li>the <b>article</b> you intend to translate, preferably in PDF format (or at least with full bibliographic details so that we can find it);</li>
          <li>the approximate <b>extent</b> of the original article and of your translation (in words);</li>
          <li>the <b>copyright holder</b> of the original article, if known (this is likely to be either the publisher or the author);</li>
          <li>a short <b>description</b> of the article and its importance in the field;</li>
          <li>a <b>timeline</b> within which you plan to complete the translation.</li>
        </ul>

        <p>If the proposal is accepted, you will be paid for your translation work at a rate to be negotiated with the editors.</p>

        <Heading
          level={2}
        >
          Credits
        </Heading>

        <p>The NESAR translations program is made possible by a grant from the <ExternalLink href="https://southernasia.uchicago.edu/">Committee on Southern Asian Studies</ExternalLink> at the University of Chicago.</p>

      </Layout>
    </>
  );
};

export default TranslationsPage;
