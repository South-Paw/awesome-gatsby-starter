import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Theme } from '../Theme';
import { Seo } from './Seo';

const Main = styled('div')`
  margin: 32px 0;
  min-height: calc(100vh - 56px - 64px - 97px);
`;

const Site = ({ location, pageContext, path, seo, children }) => (
  <Theme>
    <Seo location={location} pageContext={pageContext} seo={seo} />
    <Navigation path={path} />
    <Main>{children}</Main>
    <Footer />
  </Theme>
);

Site.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
  path: PropTypes.string.isRequired,
  seo: PropTypes.shape({
    name: PropTypes.string,
    basepath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

Site.defaultProps = {
  pageContext: {},
  seo: {},
};

export { Site };
