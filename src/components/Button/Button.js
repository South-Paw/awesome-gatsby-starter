import React from 'react';

import { ButtonWrapper } from './styled';

export const Button = ({ children, ...props }) => (
  <ButtonWrapper type="button" {...props}>
    {children}
  </ButtonWrapper>
);
