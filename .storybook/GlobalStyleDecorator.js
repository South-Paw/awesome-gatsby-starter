import React from 'react';

import { Theme } from '../src/components/ui/Theme';

const GlobalStyleDecorator = storyFn => <Theme>{storyFn()}</Theme>;

export default GlobalStyleDecorator;
