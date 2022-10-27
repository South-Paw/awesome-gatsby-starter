import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Stack spacing={2}>
      <Heading as="h1">{title}</Heading>
      {subtitle && <Text>{subtitle}</Text>}
    </Stack>
  );
}
