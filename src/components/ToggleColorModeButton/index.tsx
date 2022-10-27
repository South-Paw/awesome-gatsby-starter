import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export function ToggleColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      position="fixed"
      bottom={2}
      right={2}
      aria-label="Toggle color mode"
      colorScheme={colorMode === 'light' ? 'blackAlpha' : 'yellow'}
      icon={colorMode === 'light' ? <HiMoon /> : <HiSun />}
      onClick={toggleColorMode}
      size="sm"
    />
  );
}
