import { HeadFC, HeadProps } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export interface SeoOptions {
  title: string;
  description?: string;
  keywords?: string[];
}

export interface SeoProps extends SeoOptions, HeadProps {}

export function Seo({
  location: { pathname },
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords = [],
}: SeoProps) {
  const {
    siteUrl,
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    pageTitleSeparator,
  } = useSiteMetadata();

  const description = pageDescription || siteDescription;
  const keywords = [...pageKeywords, ...siteKeywords];
  const canonical = `${siteUrl}${pathname}`;
  const image = `${siteUrl}/icon.png`;

  return (
    <>
      <title>{[pageTitle, pageTitleSeparator, siteTitle].join('')}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
    </>
  );
}

export function seo(options: SeoOptions): HeadFC {
  return (props) => <Seo {...props} {...options} />;
}
