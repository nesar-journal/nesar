# NESAR

## Setup

```shell
# Disable telemetry (run once)
npm run disable-telemetry

# Install dependencies
npm install
```

## Development

```shell
# Spins up the development server
npm run dev

# Open development site
open http://localhost:3000
```

## Deployment

```shell
# Deploy app to Vercel
git push origin master

# To disable telemetry in production, set the envvar `NEXT_TELEMETRY_DISABLED` to `1`.
```

## Conventions

Articles and issues are stored in `/public/articles` and `/public/issues`.
Within those folders are other folders which contain each entry.
The name of these folders MUST be all ASCII and hyphens instead of spaces/underscores.
For example: `sharma-lotus-imagery`, etc.
They can be arbitrarily long, but the shorter the better (because shorter URLS are better).
The folder names serve as the internal identifier for each resource.

Individual article URLs follow the following format: `https://.../articles/[identifier]`.
Individual issue URLs follow the following format: `https://.../issues/[identifier]`.
The article index is found at `/articles`.
The issue index is found at `/issues`.
Eventually, there will also be `/tags` and `/authors`.
There is still discussion about `/volumes`.

Within each entry folder, the only file that MUST be named specifically is `metadata.yml`.

## OTF to WOFF2

```
brew install woff2

# woff2_compress myfont.ttf
# woff2_decompress myfont.woff2
```

## To Do

### Ravi + Andrew

* [ ] wire up domain
* [ ] add NESAR to Google Search Console (https://search.google.com/search-console/about?hl=en)
* [ ] set up analytics either via Vercel ($10) or Google Analytics (https://analytics.google.com/analytics/web/)
* [ ] update SEO values in `src/components/SEO.tsx`

### Ravi

* [ ] add Information box (tabs), link through to Submit page
* [ ] build out Submit page
* [ ] add Tag resource
* [ ] add Author resource
* [ ] wire up search functionality via inverted index (https://www.ahmadrosid.com/blog/fulltext-search-with-inverted-index)
* [ ] dynamically generate canonical url (https://rishimohan.me/blog/nextjs-canonical-tag)
* [ ] add mobile styles
* [ ] swap in actual slugify package for `<Heading>`
* [ ] update security policy
