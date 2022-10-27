import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export function Logo() {
  return (
    <HStack spacing={1}>
      <Image src="/icon.png" boxSize={8} />
      <Text as="div" color="rgba(255, 255, 255, 0.9)" fontSize={['md', 'lg']} fontWeight="medium">
        Awesome Gatsby Starter
      </Text>
    </HStack>
  );
}
