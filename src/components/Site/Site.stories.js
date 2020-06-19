import React from 'react';
import { Site } from '.';

export default {
  title: 'Site',
  component: Site,
};

export const Simple = () => (
  <Site path="/" location={{ pathname: '/' }} pageContext={{}}>
    [site children]
  </Site>
);
