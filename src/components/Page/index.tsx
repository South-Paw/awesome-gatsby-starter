import { Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { ToggleColorModeButton } from '../ToggleColorModeButton';
import { Footer } from './Footer';
import { Header } from './Header';

export function Page({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex as="main" direction="column" flex="1">
        {children}
      </Flex>
      <Footer />
      <ToggleColorModeButton />
    </Flex>
  );
}
