import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://awesome-gatsby-starter.netlify.app',
    defaultSeo: {
      title: 'Awesome Gatsby Starter',
      description: '👌 A starter for Gatsby 4 with TypeScript, Chakra UI, ESLint and Prettier.',
      keywords: ['gatsby'],
    },
    pageTitleSeparator: ' • ',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Awesome Gatsby Starter',
        short_name: 'Awesome Gatsby Starter',
        display: 'standalone',
        icon: 'static/icon.png',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
      },
    },

    /**
     * If you want to use Google analytics, you will need to install it
     * with `npm i gatsby-plugin-google-analytics` and then uncomment the
     * config below.
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics
     */
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-...',
    //   },
    // },

    /**
     * If you want to use Google tag manager, you will need to install it
     * with `npm i gatsby-plugin-google-tagmanager` and then uncomment the
     * config below.
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager
     */
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-...',
    //     defaultDataLayer: { platform: 'gatsby' },
    //   },
    // },

    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
    'gatsby-plugin-remove-generator',
    'gatsby-plugin-sitemap',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
