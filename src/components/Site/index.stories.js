import React from 'react';
import { storiesOf } from '@storybook/react';

import { Site } from '.';

const { add } = storiesOf('Components|Site', module);

add('simple', () => (
  <Site seo={{}} location={{ pathname: '' }}>
    [site children]
  </Site>
));
