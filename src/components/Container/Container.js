import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
`;

const Container = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Container.defaultProps = {
  isDebug: false,
};

Container.propTypes = {
  isDebug: PropTypes.bool,
};

export { Container };
