import { Container as ChakraContainer, ContainerProps, forwardRef } from '@chakra-ui/react';
import React from 'react';

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => (
  <ChakraContainer ref={ref} maxW="container.lg" {...props} />
));
