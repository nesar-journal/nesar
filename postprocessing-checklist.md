# Checklist for postprocessing

## First, run the automatic scripts.

Running `postprocess_tei.py` on a DOCX file will result in a file (named `x-postprocessed.xml`) that lightly postprocesses the result of an OxGarage conversion.

## Manual postprocessing tasks

- [ ] Add **author** (`fileDesc/titleStmt/author`).
- [ ] Add **abstract** (`profileDesc/abstract`).
- [ ] Add **language usage** (`profileDesc/langUsage`) and check all foreign-language text and titles.
- [ ] Check all **bibliography** elements in the text and in the bibliography, and make sure they have operational cross-references.
- [ ] Check the **quotations** to ensure they are in a `<quote>` element with the proper language.

If there are text-critical notes:
- [ ] Put apparatus entries in a `<listApp>` element.

## Validate!
