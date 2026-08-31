import type { NextPage } from 'next';

import ExternalLink from '../components/ExternalLink';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';

const SubmitPage: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO
	  title="Submit"
        />

        <Heading
	  level={1}
	  titleEnd={2}
        >
	  Guidelines for Authors and Editors
        </Heading>

        <TableOfContents
	  items={[
	    {
	      title: 'For Prospective Authors',
	      items: [
	        {
	          title: 'Types of contributions',
	          items: [
	            { title: 'Research articles' },
	            { title: 'Research briefs' },
	            { title: 'Translations' },
	            { title: 'Editions' },
	            { title: 'Books reviews' },
	          ],
	        },
	        { title: 'Media and Data' },
	        {
	          title: 'Style',
	          items: [
	            { title: 'In-text citations' },
	            { title: 'Quotations of primary texts' },
	            { title: 'Reference lists' },
	            { title: 'Transliteration and translation' },
	            { title: 'Headings' },
	          ],
	        },
	        { title: 'Licenses' },
	        {
	          title: 'Submission format and procedure',
	          items: [
	            { title: 'For review' },
	            { title: 'For production' },
	          ],
	        },
	      ],
	    },
	    { title: 'For Prospective Special Issue Editors' },
	  ]}
        />

        <Heading
	  level={1}
	  titleEnd={2}
        >
	  For Prospective Authors
        </Heading>
	
        <Heading
	  level={2}
        >
	  
	  Types of contributions
        </Heading>

        <p>NESAR will primarily publish <b>research articles</b>, but other types of contributions are also welcome.</p>

        <Heading
	  level={3}
        >
	  Research articles
        </Heading>

        <p>These are scholarly articles that make an original contribution to knowledge in South Asian studies. Articles will be evaluated based on the following factors:</p>
        <ul>
	  <li><b>Significance.</b> Articles should either directly address questions in the field or introduce new questions for researchers to consider.</li>
	  <li><b>Originality.</b> Articles must present new arguments, new materials, or new methods. Authors must demonstrate an awareness of existing research on their topic and explain how their contributions represent an advance upon earlier contributions.</li>
	  <li><b>Cogency.</b> The claims presented in a research article must be compelling. Different disciplines have different modes of presentation, argumentation, and persuasion, but in all cases the authors&apos; claims must withstand criticism and counterevidence.</li>
	  <li><b>Clarity.</b> The evidence and argumentation should be presented in a clear and accessible manner. This applies both to the writing and the use, where appropriate, of images and figures. Please try to avoid scholarly jargon.</li>
	  <li><b>Orientation.</b> Although outstanding contributions to knowledge about South Asia will be welcomed, articles are, in general, expected to address issues outside of South Asian studies. That engagement may be more or less deep, and more or less explicit, but we strongly encourage authors to frame their interventions in terms that invite conversation with scholars in other fields.</li>
        </ul>

        <p>The suggested length for research articles is around 5,000–10,000 words, although longer or shorter submissions may be accepted at the discretion of the editor or issue editors. The <b>language</b> of contributions will be English.</p>

        <p>Articles that have already been published, in whole or in part, as well as articles that are under review elsewhere will not be considered for publication. Authors may refer to previous publications, but “self-plagiarism” will not be accepted. Authors must disclose any conflicts of interest prior to initiating the review process.</p>

        <p>Research articles are first reviewed by the editorial staff to ensure that they accord with the journal&apos;s scope. At this stage they may be returned to authors for revision or rejected. If accepted by the editorial staff, submissions will be anonymized and sent to two external reviewers for double-blind peer review. If the reviewers are in conflict, the editors will decide whether to publish the contribution. If accepted for publication, the author will be responsible for making any requested revisions and submitting a final version of the article for production (see below).</p>

        <Heading
	  level={2}
        >
	  Research briefs
        </Heading>

        <p>These are shorter contributions that serve to notify the scholarly community of developments in the field. These could include:</p>
        <ul>
	  <li>reports of newly-discovered manuscripts, inscriptions, or artefacts;</li>
	  <li>updates about ongoing projects or excavations;</li>
	  <li>new information about the places or dates of authors or works (in the style of, e.g., P. K. Gode);</li>
	  <li>constructive responses to recently-published research;</li>
	  <li>research articles that are shorter than 5,000 words.</li>
        </ul>
        <p>Research briefs will be reviewed by the editorial staff at the journal and may be sent out to external reviewers for comment.</p>


        <Heading
	  level={2}
        >
	  Translations
        </Heading>

        <p>NESAR will publish translations into English of important contributions to South Asian studies in other languages (Hindi, Tamil, Bangla, Kannada, Urdu, Sinhala, Telugu, etc.). These translations will usually be no longer than the research articles in a volume (ca. 5,000–10,000 words), and they may be much shorter. We especially encourage editors of themed issues to think about translations of scholarly essays that might be included.</p>
        <p>If you are interested in translating a contribution, please get in touch with the editorial team with a proposal, including a brief description and small sample of the translation. If the editorial team accepts the proposal, we will pay an agreed-upon per-word rate for the translation.</p>


        <Heading
	  level={2}
        >
	  Editions
        </Heading>
        <p>Authors may wish to publish <b>editions</b> of previously-unpublished texts, or <b>reeditions</b> of texts based on new manuscript material, in NESAR. These editions may accompany a research article. In all cases the edition must be accompanied by a translation. Please get in touch with the editorial team if you would like to propose an edition, because the review and production processes for editions is different than for research articles.</p>


        <Heading
	  level={2}
        >
	  Books reviews
        </Heading>

        <p>NESAR will publish reviews of recently-published books in South Asian studies. Please contact the editorial team if you are interested in reviewing a book for NESAR. We particularly encourage reviews in English of books published in South Asian languages.</p>

        <Heading
	  level={2}
        >
	  Media and Data
        </Heading>

        <p>As an online journal NESAR has no limits on the type and quantity of media that can accompany a contribution. If it can be hosted on the internet, it can be included in an article, brief, or review. We therefore encourage authors to be creative in their selection and inclusion of supplementary media, including images, video, and audio. Media will be published under the same license as the contributions they accompany. Hence authors will be responsible for obtaining all relevant permissions and licenses.</p>

        <p>If your research makes use of data (e.g., processed texts, survey data, geographic data, etc.) you are encouraged to publish it along with your contribution. In such cases the data will be hosted on a third-party website (such as <ExternalLink href="https://zenodo.org/">Zenodo</ExternalLink>) and linked from the published article. If you think you will be publishing your data, please let us know when you submit your research article or research brief.</p>

        <Heading
	  level={2}
        >
	  Style
        </Heading>

        <p>In general we follow the guidelines of the <ExternalLink href="https://www.chicagomanualofstyle.org/home.html">Chicago Manual of Style</ExternalLink>, 18th edition (CMOS). Please refer to this manual for matters of spelling, punctuation, capitalization, and abbreviation not addressed below.</p>

        <p>We write out numbers lower than 100 (forty-eight, seventeenth, etc.), including in the names of centuries.</p>

        <Heading
	  level={3}
        >
	  In-text citations
        </Heading>
        <p>NESAR uses the author-date format for references described in Chapter 13 (§§13.102–13.128) and Chapter 14 of the Chicago Manual of Style (18th ed.).</p>
	
        <p>References for claims or quotations in the text itself should appear as author-date citations <b>in the text itself</b>, and not in a footnote. Footnotes are reserved for additional information about what is discussed in the text; you should not have footnote <i>simply</i> for references to claims or quotations in the text.</p>

        <p>An in-text citation consists of the author&apos;s last name and the year of publication, with no punctuation between them, e.g. (Pollock 2006). A page number or page range, where relevant, follows the year after a comma: (Pollock 2006, 45) or (Pollock 2006, 45–46). Citations of two or more works are separated by semicolons or, if the author is the same, by commas: (Pollock 2006; Freschi 2015), (Pollock 2001, 2006). If a source has two authors, both names are given: (Bronner and Ollett 2024). If a source has more than two authors, only the first is named, followed by “et al.” (Bronner et al. 2014). When an author&apos;s name is part of the surrounding sentence, the year (and page number, if any) can instead follow directly: “Falk (2013, 45) argues that …” If there are multiple publication dates, use those listed in the bibliography (see below).</p>

        <Heading
	  level={3}
        >
	  Quotations of primary texts
        </Heading>
        <p>References to primary texts should always be accompanied by a quotation of the text (either in a block quote or footnote) and a translation. References to primary texts should include a “canonical” citation (e.g., chapter and verse numbers) if one exists, as well as a way of locating the passage in a printed edition (e.g., page number) or online edition.</p>

        <Heading
	  level={3}
        >
	  Reference lists
        </Heading>
        <p>Every contribution must have a reference list that includes all of the sources referred to in the text. In the reference list, up to six authors are listed for a single work; if there are more than six, list the first three followed by “et al.” Works published in non-Latin scripts should be presented in scientific transliteration (see below); including the original-script text is highly recommended. For example:</p>

        <ul>
	  <li><b>Journal Articles</b></li>
	  <ul>
	    <li>Bronner, Yigal and Andrew Ollett. 2024. “The First Hundred Light Years: The Wave of Twelfth-Century Responses to the Kāvyaprakāśa.” <i>Journal of the American Oriental Society</i> 144 (4): 807–831. <ExternalLink href="https://doi.org/10.7817/jaos.144.4.2024.ar029" >https://doi.org/10.7817/jaos.144.4.2024.ar029</ExternalLink>.</li>
            <li>Falk, Harry. 2013. “The Ashes of the Buddha.” <i>Bulletin of the Asia Institute</i> 27: 43–75.</li>
            <li>Freschi, Elisa. 2015. “The Reuse of Texts in Indian Philosophy.” <i>Journal of Indian Philosophy</i> 43: 85–108. <ExternalLink href="https://doi.org/10.1007/s10781-014-9232-9">https://doi.org/10.1007/s10781-014-9232-9</ExternalLink>.</li>
	    <li>Matsuda Kazunobu. 2024. “Inritsusho Jānāśrayī ni miru Ashuvagōsha: Mohan to shite no Sōgonkyōron shoshū ge ni tsuite (On the Verses of Aśvaghoṣa’s Lost <i>Sūtrālaṃkāra</i> Quoted in the <i>Jānāśrayī Chandoviciti</i>).” <i>Indogaku Bukkyōgaku Kenkyū</i> 73 (1): 80–89. = 松田和信. 2024. “韻律書 Jānāśrayī に見るアシュヴァゴーシャ: 模範としての荘厳経論所収偈について.” 印度學佛敎學硏究第 73   巻第 1: 80–89.</li>
	  </ul>
	  <li><b>Section of a Book</b></li>
	  <ul>
	    <li>Chevillard, Jean-Luc. 2007. “Syntactic Duality in Classical Tamil Poems.” In  <i>Old and New Perspectives on South Asian Languages: Grammar and Semantics (Papers Growing Out of the Fifth International Conference on South Asian Linguistics (ICOSAL-5), Held at Moscow, Russia, in July 2003)</i>, edited by Colin P. Masica. Motilal Banarsidass.</li>
	    <li>Ollett, Andrew, Vincent Tournier, and Arlo Griffiths. 2026. “Early Memorial Stones from the Deccan (up to 300 CE).” In <i>Early Āndhradeśa: Historical Studies Around the Epigraphic Corpus</i>, Volume 2, edited by Arlo Griffiths, Vincent Tournier, and Akira Shimada. Brill. <ExternalLink href="https://doi.org/10.1163/9789004744097_009">https://doi.org/10.1163/9789004744097_009</ExternalLink>.</li>
	  </ul>
	  <li><b>Books</b></li>
	  <ul>
	    <li>Bronner, Yigal, David Shulman, and Gary Tubb, eds. 2014. <i>Innovations and Turning Points: Toward a History of Kāvya Literature.</i> Oxford University Press.</li>
	    <li>Leumann, Ernst. [1934] 2010. <i>An Outline of the Āvaśyaka Literature.</i> Translated by George Baumann. With an introductory essay by Nalini Balbir. L. D. Institute of Indology. Published in German in 1934.</li>
	    <li>Pollock, Sheldon. 2006. <i>The Language of the Gods in the World of Men: Sanskrit, Culture, and Power in Premodern India</i>. University of California Press.</li>
	    <li>Siṁha, Nāmavara. [1952] 2002. <i>Hindī kē Vikāsa mēṁ Apabhraṁśa kā Yōga</i>. Lōkabhāratī Prakāśana. Reprint of second edition (1971). = सिंह, नामवर. [1952] 2002. हिन्दी के विकस में अपभ्रंश का योग. लोकभारती प्रकाशन.</li>
	  </ul>
	  <li><b>Book Reviews</b></li>
	  <ul>
	    <li>Cort, John. 2025. “Medieval Jaina History and Prakrit Literature: A New Study.” Review of <i>Voix et échos du roman-poème en prakrit</i>, by Christine Chojnacki. <i>Journal of the American Oriental Society</i> 145.3: 635–641. <ExternalLink href="https://doi.org/10.7817/jaos.145.3.2025.ra001">https://doi.org/10.7817/jaos.145.3.2025.ra001</ExternalLink>.</li>
	  </ul>
	  <li><b>News or Magazine Articles</b></li>
	  <ul>
	    <li>Suresh Kumar, D. 2025. “Keeladi excavation report of archaeologist Amarnath Ramakrishna: Why are Centre and T.N. government at loggerheads?” <i>The Hindu</i>, June 19. <ExternalLink href="https://www.thehindu.com/news/national/tamil-nadu/keezhadi-excavation-report-of-archaeologist-amarnath-ramakrishna-why-are-centre-and-tn-government-at-loggerheads/article69708000.ece"> https://www.thehindu.com/news/national/tamil-nadu/keezhadi-excavation-report-of-archaeologist-amarnath-ramakrishna-why-are-centre-and-tn-government-at-loggerheads/article69708000.ece</ExternalLink>.</li>
	  </ul>
	  <li><b>Theses</b></li>
	  <ul>
	    <li>Loukota Sanclemente, Diego. 2019. “The Goods that Cannot Be Stolen: Mercantile Faith in Kumāralāta’s <i>Garland of Examples Adorned by Poetic Fancy</i>.” PhD diss, University of California, Los Angeles.</li>
	  </ul>
        </ul>

        <p>For all references that are available online, authors will be asked to provide a DOI, if available, as in the above example.</p>

        <p>Note that a place of publication for books is no longer required by the Chicago Manual of Style, but if a place of publication is considered useful or necessary by the authors or editors (for example, when there are multiple publishers with the same name), it may be included. The same is true for page ranges of book chapters.</p>

        <p>It is <b>optional</b> to include information about the first edition if subsequent editions and reprints are cited. This is left to the discretion of the authors and editors. Generally, it is useful to include the date of first publication in square brackets, and then the date of the cited edition or version after that (Siṁha [1952] 2002).</p>

        <p>We encourage (but do not require) authors to preface their reference list with a list of primary sources, which will include the translated title of the work, the original title in transliteration, the author (if applicable), and a reference to the editions (or manuscripts) consulted. Editions should also appear in the list of references.</p>

        <ul>
	  <li>The Way of the Poet-King (<i>Kavirājamārgaṃ</i>) of Śrīvijaya:</li>
	  <ul>
            <li>MS. K125 (“A”) of the Kuvempu Institute, University of Mysore, Mysore. (49 folios, palm leaf.)</li>
            <li>Pathak (1898).</li>
	  </ul>
        </ul>

        <Heading
	  level={3}
        >
	  Transliteration and translation
        </Heading>
        <p>Longer quotations of text should be presented in transliteration. NESAR’s website allows users to switch between the “source” script and transliteration for such longer quotations. Our internal transliteration mechanisms rely on the <ExternalLink href="https://en.wikipedia.org/wiki/ISO_15919">ISO-15919</ExternalLink> system, and we kindly ask you to follow that system in your contribution. The ISO-15919 standard specifies:</p>
        <ul>
	  <li><i>r̥</i> for the vocalic r of Sanskrit,  <i>ṛ</i> for the flapped r of Hindi, and <i>ṟ</i> for the alveolar r of Dravidian languages;</li>
	  <li><i>l̥</i> for the vocalic l of Sanskrit, <i>ḷ</i> for the retroflex consonant l, and <i>ḻ</i> for the retroflex approximant of Dravidian languages;</li>
	  <li><i>ṁ</i> rather than <i>ṃ</i> for <i>anusvāra</i>;</li>
	  <li>in most languages, use <i>parasavarṇa</i> rather than <i>anusvāra</i> to write a nasal consonant before a stop within the same word (even if the convention of the script is to write <i>anusvāra</i>, as it is in Kannada), hence <i>saṅkalpa-</i>, <i>sañcaya-</i>, <i>sambandha-</i>;</li>
	  <li>the Telugu <i>arasunna</i> is written as <i>n̆</i>, and non-moraic nasalization (sometimes written with a <i>candrabindu</i> in Dēvanāgarī) in Prakrit and Apabhramsha is written with a circumflex on the vowel (e.g., <i>ĩ</i>);</li>
	  <li>in languages that do not distinguish between short and long e- and o-vowels, such as Sanskrit, the use of length diacritics is strictly speaking but recommended anyway for consistency across the journal; in languages that do, such as Tamil, <i>ē</i> and <i>ō</i> contrast with <i>e</i> and <i>o</i> (we do not use <i>ĕ</i> and <i>ŏ</i>).</li>
        </ul>
        <p>For Urdu and Persian we recommend following the transliteration system of the <ExternalLink href="https://brill.com/fileasset/downloads_products/Author_Instructions/URDS.pdf?srsltid=AfmBOooRk8tRfODZBSw-TTYUXlKes00HmwZUFn-kV6ggHYO6AfWeJqkA">Journal of Urdu Studies</ExternalLink>.</p>

        <p>Besides longer quotations, please use transliteration for individual words or phrases, personal names, and titles of works.  These will not, however, be automatically transliterated back into the “source” script. <b>Place names</b> may employ scientific transliteration according to the authors’ and editors’ preferences (Tiruvarur or Tiruvārūr are both acceptable). Generally scientific transliteration is not used for names of languages (Sanskrit, not Saṁskr̥ta), but it is used for the names of scripts (Brāhmī).</p>

        <p>Personal names, when transliterated, should appear in the stem form (Mammaṭa), whereas titles of works can appear either in the stem form or in the nominative/direct case (<span className="foreign"><span className="scriptWrapper" data-lang="san" data-script="Latn" data-original="Kāvyaprakāśaḥ">Kāvyaprakāśaḥ</span></span> or <span className="foreign"><span className="scriptWrapper" data-lang="san" data-script="Latn" data-original="Kāvyaprakāśa">Kāvyaprakāśa</span></span>). Names in Dravidian languages can appear either with or without the gender suffix (Śrīvijaya or Śrīvijayan).</p>

        <p>Titles of works in South Asian languages should be translated, if possible, with the original title given in transliteration on its first occurrence. After the first occurrence authors should refer to works by their English names. <b>NESAR strongly discourages the use of abbreviations (KP, IPVV, MBh, etc.).</b> If you do use abbreviations, you should include a list of abbreviations.</p>

        <p>Note that titles that are taken from names of characters (e.g., <i>Kādambarī</i>, <i>Ratnāvalī</i>) should not be translated.</p>


        <Heading
	  level={3}
        >
	  Headings
        </Heading>
        <p>If the article has sections, make sure these are clearly indicated. If you are using a word processor, you can use your word processor’s “styles” feature to apply different styles to different levels of headings.</p>

        <Heading
	  level={2}
        >
	  Licenses
        </Heading>

        <p>All content published in NESAR will be free to anyone in the world, but authors must choose a <b>license</b> under which their work will be published. The license sets the terms under which the work can be reproduced. In the humanities, <ExternalLink href="https://creativecommons.org/licenses/" >Creative Commons (CC) licenses</ExternalLink> are popular, despite the fact that they were not originally intended for academic work. We recommend the CC-BY license, which requires anyone who uses your work in the future to credit you. If you so choose, you can add additional restrictions (see the CC site for details).</p>

        <Heading
	  level={2}
        >
	  Submission format and procedure
        </Heading>

        <Heading
	  level={3}
        >
	  For review
        </Heading>

        <p>Contributions should be submitted to NESAR for review as PDF documents with embedded fonts. If the document was prepared in a word processor, please include the word processor file (.DOCX) as well. If the document was prepared with LaTeX, the PDF alone is sufficient for the review stage. The document should be prepared according to the style guidelines above. Images and figures should be submitted separately with call-outs in the text of the document.</p>
        <Heading
	  level={3}
        >
	  For production
        </Heading>
        <p>If you have prepared your contribution in a word processor, please submit a .DOCX file.</p>
        <p>If you have prepared your contribution in LaTeX, please submit the LaTeX source (.tex) as well, with bibliographic references included in the file itself rather than in a separate .bib file.</p>
        <p>Contributions will be converted to a standard interchange format (TEI-XML), from which HTML and PDF (via XeLaTeX) versions will be produced automatically. See the <ExternalLink href="https://github.com/nesar-journal/nesar-stylesheets">stylesheets</ExternalLink> repository on GitHub.</p>
        <p>You will receive proofs of the article in both HTML and PDF format.</p>

        <Heading
	  level={1}
	  titleEnd={2}
        >
	  For Prospective Special Issue Editors
        </Heading>

        <p>NESAR publishes themed issues on specific topics in the study of South Asian art, literature, history, and philosophy. If you are interested in editing a themed issue of NESAR, please write a two- to three-page proposal and send it to us. The proposal should mention:</p>
        <ul>
	  <li>the <b>theme</b> of the issue;</li>
	  <li>a justification of the theme (i.e., why research on this theme is important or relevant to the field);</li>
	  <li>a description of the specific questions that will be addressed in the issue, with relevant bibliography;</li>
	  <li>a list of potential contributors and article topics (we suggest at least four articles per issue, but there is considerable flexibility regarding the upper limit).</li>
        </ul>

      </Layout>
    </>
  );
};

export default SubmitPage;
