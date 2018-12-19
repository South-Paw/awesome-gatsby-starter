import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { HeaderWrapper, HeaderInner, SiteTitle, Navigation } from './styled';

const Header = ({ title, navigation }) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <SiteTitle to="/">{title}</SiteTitle>
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  title: null,
  navigation: null,
};

export { Header };
