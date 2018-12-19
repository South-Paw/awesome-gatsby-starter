# awesome-gatsby-starter

👌 A starter for GatsbyJS with a preconfigured ESLint and Storybook environment.

[![Dependencies](https://david-dm.org/South-Paw/awesome-gatsby-starter/status.svg)](https://david-dm.org/South-Paw/awesome-gatsby-starter)
[![Dev Dependencies](https://david-dm.org/South-Paw/awesome-gatsby-starter/dev-status.svg)](https://david-dm.org/South-Paw/awesome-gatsby-starter?type=dev)

## Rational

If you've ever started building a larger website with [GatsbyJS](https://www.gatsbyjs.org) which has multiple different UI elements and patterns, you may have ended up in a similar place I found myself - with some pretty massive component sprawl. I decided to try solve it by utilising storybook and building the required UI components up front in isolation before using them in the project.

What I ended up finding with this workflow was that this is a useful way of thinking about each websites UI; as a collection of components rather than one standard layout that does everything with a few bits on the side (...much like how we build apps as well).

The more I've applied it to the Gatsby sites I work on, the more easy I find it to manage, improve and maintain them by utilising this workflow of components first, project content second.

While this starter may be somewhat opinionated for what I want out of my Gatsby projects, it can quickly and easily be changed around with minimal effort - don't feel locked into what I've provided, it was only ever intended to be a rough guide for starting out.

## Features

* [ESLint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb)
* [Prettier](https://prettier.io/) integrated into ESLint
* [Storybook](https://storybook.js.org/) for isolated component development
* [styled-components](https://www.styled-components.com/) for CSS-in-JS
* A few example components with stories and site structure

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
