import type { NextPage } from 'next';

import Link from 'next/link';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
	  title="Privacy Policy"
        />

        <Heading
	  level={1}
	  titleEnd={2}
        >
	  Privacy Policy
        </Heading>

        <p>This privacy policy covers how NESAR collects, handles, and discloses personal data on this website, that is, all pages with the domain name <Link href="nesarjournal.org">nesarjournal.org</Link>. This policy does not cover third-party sites that are linked to from within this site.</p>

        <p>If you have any questions, please contact us at <Link href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</Link>.</p>

        <Heading
	  level={2}
        >
	  Information we collect from contributors
        </Heading>

        <p>NESAR operates according to the standard practices of peer-reviewed scholarly journals. If you submit a contribution for consideration to NESAR, we will collect your name, e-mail address, and institutional affiliation. If the contribution is accepted for publication, we will also ask for your <Link href="https://viaf.org/">VIAF</Link> number. With the explicit consent of contributors, this personal information will be published online, including on the webpage and PDF of your article, as well as in the list of authors in the <Link href="/about">about</Link> page. You can opt-out of having your email address published on this website when giving your consent to publish your contribution. If you would like to change or remove any personal information on this website subsequent to the publication of your contribution, please let us know at <Link href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</Link>.</p>

        <p>Submissions made through NESAR’s Open Journal Systems (OJS) on the <Link href="https://www.lib.uchicago.edu/">University of Chicago Libraries</Link> include the above-mentioned personal information. This information may be shared with the <Link href="https://pkp.sfu.ca/">Public Knowledge Project</Link>, the developer of OJS, in an anonymized and aggregated form, with appropriate exceptions such as article metrics. The data will not be sold by this journal, the <Link href="https://www.lib.uchicago.edu/">University of Chicago Libraries</Link>, or <Link href="https://pkp.sfu.ca/" >PKP</Link> nor will it be used for purposes other than those stated here. The authors published in this journal are responsible for the human subject data included in the research reported here.</p>

        <Heading
	  level={2}
        >
	  Information we collect from visitors to this website
        </Heading>

        <p>This website does not collect any personal information <b>directly</b> from visitors, and also does not use cookies. (Your transliteration preferences are stored in local storage, on your device.)</p>

        <p>However, this website uses  <Link href="https://vercel.com/analytics">Vercel analytics</Link> to collect data about visitors to this website. This third-party service does use cookies and similar technologies to collect the following data from visitors: the page, URL, network speed, browser, device type, device OS, country, web vital, and server-received event time. The recording of data points is anonymous, and Vercel “does not collect or store information that would enable them to reconstruct a browsing session across pages or identify a user.” This data is provided to us in aggregated form that does not reveal your identity. For more information, see Vercel’s <Link href="https://vercel.com/docs/concepts/analytics/privacy">privacy policy</Link> for analytics and their <Link href="https://vercel.com/legal/privacy-policy">privacy notice</Link>.</p>

        <p>No personal information collected by NESAR, directly or indirectly, will ever be used for advertising or marketing purposes.</p>

        <Heading
	  level={2}
        >
	  Your rights and options
        </Heading>

        <p>Our third-party analytics provider responds to <Link href="https://allaboutdnt.com/">Do Not Track</Link> signals from your device. You can opt out of all information collected by Vercel analytics by enabling Do Not Track in your web browser.</p>

        <p>You can disable cookies (again, used only by our third-party analytics provider) by updating your web browser’s preferences or by using a browser extension.</p>

        <p>Vercel analytics is compliant with the European Union’s <Link href="https://gdpr-info.eu/">GDPR</Link>, which gives residents of the UK and the EEA additional rights over how their personal information is handled. The same regulation covers personal information about contributors. Contributors may exercise their GDPR rights by emailing us at <Link href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</Link>; visitors to this website must exercise their GDPR rights by contacting Vercel analytics at <Link href="mailto:privacy@vercel.com">privacy@vercel.com</Link>.</p>

        <p>If you are a California resident, If you are a California resident, California Civil Code Section 1798.83 permits you to request in writing a list of the categories of personal information relating third parties to which we have disclosed certain categories of personal information during the preceding year for the third parties’ direct marketing purposes. Please contact us at <Link href="mailto:nesar@nesarjournal.org">nesar@nesarjournal.org</Link> to make such a request.</p>
	
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
