import React from 'react';
import styled from 'styled-components';

import { Container } from '../ui/Container';

const StyledFooter = styled.footer`
  padding: 24px 0;
  background-color: #222;
  border-top: 1px solid rgba(0, 0, 0, 0.38);
  color: rgba(255, 255, 255, 0.54);

  p {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
  }

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <p>
        Created with{' '}
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>
        . Contribute on <a href="https://github.com/South-Paw/awesome-gatsby-starter">Github</a>.
      </p>
      <p>
        Copyright ©{' '}
        <a href="https://southpaw.co.nz" target="_blank" rel="noopener noreferrer">
          Alex Gabites
        </a>
        , 2019. <a href="https://github.com/South-Paw/awesome-gatsby-starter/blob/master/LICENSE">MIT</a> Licensed.
      </p>
    </Container>
  </StyledFooter>
);

export { Footer };
