import React from 'react';
import Readme from '../../README.md';
import { Container } from '../components/Container';
import { Site } from '../components/Site';

const seo = {
  title: 'Home',
};

const IndexPage = (props) => (
  <Site seo={seo} {...props}>
    <Container>
      <Readme />
    </Container>
  </Site>
);

export default IndexPage;
