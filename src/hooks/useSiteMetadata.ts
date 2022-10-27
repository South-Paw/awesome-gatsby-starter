import { graphql, useStaticQuery } from 'gatsby';

const SITE_METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        defaultSeo {
          title
          description
          keywords
        }
        pageTitleSeparator
      }
    }
  }
`;

export interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      siteUrl: string;
      defaultSeo: {
        title: string;
        description: string;
        keywords: string[];
      };
      pageTitleSeparator: string;
    };
  };
}

export function useSiteMetadata() {
  const {
    site: {
      siteMetadata: { siteUrl, defaultSeo, pageTitleSeparator },
    },
  } = useStaticQuery<SiteMetadataQuery>(SITE_METADATA_QUERY);

  return {
    siteUrl,
    title: defaultSeo.title,
    description: defaultSeo.description,
    keywords: defaultSeo.keywords,
    pageTitleSeparator,
  };
}
