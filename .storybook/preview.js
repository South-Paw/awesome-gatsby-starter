import { addDecorator } from '@storybook/react';
import * as React from 'react';
import { Theme } from '../src/components/Theme';

addDecorator((storyFn) => <Theme>{storyFn()}</Theme>);
