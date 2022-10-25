import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Awesome Gatsby Starter',
    siteUrl: 'https://awesome-gatsby-starter.netlify.app',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Awesome Gatsby Starter',
        short_name: 'Awesome Gatsby Starter',
        display: 'standalone',
        icon: 'src/images/icon.png',
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
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-sitemap',
  ],
};

export default config;
