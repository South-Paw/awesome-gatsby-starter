import React from 'react';
import { storiesOf } from '@storybook/react';

import { Navigation } from '.';

const { add } = storiesOf('Components|Navigation', module);

add('simple', () => <Navigation />);
