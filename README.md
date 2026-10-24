# Delivery API Docs

Documentation for the Delivery API, a mock REST API for managing deliveries, drivers, parcels, and hubs. Built with [Thally](https://thally.io).

- **Live site:** https://delivery-api.thally.app
- **How I built it:** [How to build API documentation with Thally](https://chosenvincent.hashnode.dev/build-api-documentation-with-thally)
- **API source code:** https://github.com/chosenvincent1/mock-delivery-api

## What's in the docs

- **Introduction:** what the API does, who it's for, and what to know before you start
- **Quickstart:** get a token, list deliveries, and filter the results
- **Authentication:** how the bearer token works and how to fix `401` errors
- **Guide:** find the right driver for a delivery, with troubleshooting
- **API reference:** generated from `openapi.yaml`, with a **Try it** button on every endpoint

## Project structure

| File or folder | What it controls |
|---|---|
| `src/content/` | The pages, written in MDX |
| `docs.json` | Tabs, sidebar groups, and page order |
| `src/data/site.ts` | Site name, summary, and header links |
| `openapi.yaml` | The API spec for the generated reference |
| `src/mdx/custom-components.tsx` | Custom components, such as `ActionButtons` |

## Run locally

You need Node.js 20.19+, 22.14+, or 24+.

```bash
npm install
npm run dev
```

Open http://localhost:3040.

To see content changes while the server is running, run this in a second terminal:

```bash
npm run runtime-sources:build
```

## Check and publish

Check for broken links and pages missing from `docs.json`:

```bash
npm run check
```

Every push to `main` deploys the site through Thally Cloud.

## License

[MIT](LICENSE)