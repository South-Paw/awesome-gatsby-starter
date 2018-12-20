# awesome-gatsby-starter

👌 A starter for GatsbyJS with a preconfigured MDX, Storybook and ESLint environment.

[![Live Demo](https://img.shields.io/badge/netlify-live_demo-1e9498.svg)](https://awesome-gatsby-starter.netlify.com/)
[![Dependencies](https://david-dm.org/South-Paw/awesome-gatsby-starter/status.svg)](https://david-dm.org/South-Paw/awesome-gatsby-starter)
[![Dev Dependencies](https://david-dm.org/South-Paw/awesome-gatsby-starter/dev-status.svg)](https://david-dm.org/South-Paw/awesome-gatsby-starter?type=dev)

## Rational

If you've ever started building a larger website with [GatsbyJS](https://www.gatsbyjs.org) which has multiple different UI elements and patterns, you may have ended up in a similar place I found myself - with some pretty massive component sprawl where each component picks up more and more concerns, slowly becoming overloaded or duplicated. So I decided to try solve it by utilising [Storybook](https://storybook.js.org) and building the required UI components up front in isolation before using them in the Gatsby site.

What I ended up finding with this workflow was that this is a useful way of thinking about each websites UI; as a collection of components rather than one standard layout that does everything with a few bits on the side (...much like how we all build/think about React apps as well).

The more I've applied this process to the Gatsby sites I work on, the more easy I've found it to manage, improve and maintain the components by building them first and the Gatsby's site second.

While this starter may be somewhat opinionated for what I want out of my Gatsby projects, it can quickly and easily be changed around with minimal effort - don't feel locked into what I've provided, it was only ever intended to be a rough guide for starting out and not permenant.

## Features

* [Gatsby MDX](https://github.com/ChristopherBiscardi/gatsby-mdx) for JSX in Markdown loading, parsing, and rendering of pages
* [Storybook](https://storybook.js.org/) for isolated component development
* [styled-components](https://www.styled-components.com/) for CSS-in-JS
* [ESLint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb)
* [Prettier](https://prettier.io/) integrated into ESLint
* A few example components and pages with stories and simple site structure

## Getting started

Install this starter (assuming you have [`gatsby-cli`](https://www.npmjs.com/package/gatsby-cli) installed) by running the following command:

```bash
gatsby new your-projects-name https://github.com/South-Paw/awesome-gatsby-starter
```

## Development

[`Node.js`](https://nodejs.org/) v8.0.0 or above is required and using [`Yarn`](https://yarnpkg.com) is recommended.

```bash
# install dependencies
yarn

# ...or with npm
npm install

# serve with hot reload for development (localhost:8000)
yarn develop

# serve storybook with hot reload for development (localhost:9000)
yarn storybook

# lint project
yarn lint

# format project source
yarn format

# run tests
yarn test

# build for production
yarn build

# build static storybook (outputs to `public/docs` folder)
yarn storybook:build
```
