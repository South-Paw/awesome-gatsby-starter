import React from 'react';
import { storiesOf } from '@storybook/react';

import { Theme } from '.';

const { add } = storiesOf('UI|Theme', module);

add('light', () => <Theme>[layout children]</Theme>);
