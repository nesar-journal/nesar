# NESAR

## Setup

```shell
# Install pnpm if not yet installed
# https://pnpm.io/installation

# Disable telemetry (run once)
pnpm run disable-telemetry

# Install dependencies
pnpm install
```

## Development

```shell
# Spins up the development server
pnpm run dev

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
