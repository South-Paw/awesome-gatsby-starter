# @south-paw/awesome-gatsby-starter

👌 A starter for Gatsby with TypeScript, ESLint and Prettier.

## Features

- [ESLint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/) integrated into ESLint
- A few example components and pages with stories and simple site structure

## Getting started

Install this starter (assuming you have [`gatsby-cli`](https://www.npmjs.com/package/gatsby-cli) installed) by running the following command:

```bash
gatsby new your-projects-name https://github.com/South-Paw/awesome-gatsby-starter
```

## Development

Install [`Node.js`](https://nodejs.org/) and [`Yarn`](https://yarnpkg.com).

Open the project directory in your CLI and run the `yarn` command to install dependencies.

After that you can run any of following commands

```bash
# local development (localhost:8000)
yarn start

# storybook development (localhost:9000)
yarn start:storybook

# run eslint on project
yarn lint

# build site for deployment (/public)
yarn build

# build storybook for deployment (/public/storybook)
yarn build:storybook

# local gatsby serve of /public
yarn serve

# clean build artifacts (/.cache and /public)
yarn clean
```

## Issues and Bugs

If you find any, please report them [here](https://github.com/South-Paw/awesome-gatsby-starter/issues) so they can be squashed.

## License

0BSD, see the [LICENSE](https://github.com/South-Paw/awesome-gatsby-starter/blob/master/LICENSE) file.
