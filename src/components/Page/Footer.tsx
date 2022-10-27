import { Box, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Container } from '../Container';
import { Logo } from '../Logo';

export function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" borderTopWidth={2}>
      <Container py={4}>
        <Stack spacing={4}>
          <Stack justify="space-between" direction="row" align="center">
            <Logo />
            <HStack spacing={2}>
              <IconButton
                as="a"
                href="//github.com/South-Paw/awesome-gatsby-starter"
                target="_blank"
                icon={<SiGithub fontSize="1.5rem" />}
                aria-label="GitHub"
                variant="link"
              />
            </HStack>
          </Stack>
          <Text fontSize="sm" color="gray.500">
            Created by{' '}
            <Link href="//southpaw.co.nz" isExternal color="gray.300">
              Alex Gabites
            </Link>
            .{' '}
            <Link href="//github.com/South-Paw/awesome-gatsby-starter/blob/master/LICENSE" isExternal color="gray.300">
              0BSD license
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
