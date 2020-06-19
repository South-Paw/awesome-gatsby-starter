import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${(p) => p.maxWidth}px;
  width: 100%;
`;

Container.propTypes = {
  maxWidth: PropTypes.number,
};

Container.defaultProps = {
  maxWidth: 800,
};

export { Container };
