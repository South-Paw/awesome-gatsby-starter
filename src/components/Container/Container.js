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

Container.propTypes = {
  children: PropTypes.node,
  isDebug: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  isDebug: false,
};

export { Container };
