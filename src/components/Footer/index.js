import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const Wrapper = styled('footer')`
  padding: 24px 0;
  background-color: #222;
  border-top: 1px solid rgba(0, 0, 0, 0.38);
  color: rgba(255, 255, 255, 0.54);
  font-size: 14px;
  line-height: 24px;

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Inner = styled('div')`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 648px) {
    flex-flow: nowrap column;
  }
`;

const Base = styled('div')`
  @media (max-width: 648px) {
    margin: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    text-align: center;

    > *:first-child {
      margin-right: 8px;
    }
  }
`;

const Left = styled(Base)`
  margin-right: auto;
`;

const Right = styled(Base)`
  margin-left: auto;
  text-align: right;
`;

const Footer = () => (
  <Wrapper>
    <Container maxWidth={1200}>
      <Inner>
        <Left>
          <div>
            Contribute on <a href="https://github.com/South-Paw/awesome-gatsby-starter">Github</a>.
          </div>
          <div>
            Created with{' '}
            <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
              Gatsby
            </a>
            .
          </div>
        </Left>
        <Right>
          <div>
            Copyright ©{' '}
            <a href="https://southpaw.co.nz" target="_blank" rel="noopener noreferrer">
              Alex Gabites
            </a>
            , 2019.
          </div>
          <div>
            <a href="https://github.com/South-Paw/awesome-gatsby-starter/blob/master/LICENSE">MIT</a> Licensed.
          </div>
        </Right>
      </Inner>
    </Container>
  </Wrapper>
);

export { Footer };
