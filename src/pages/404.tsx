import { Button, Code, Stack, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { seo } from '../components/Seo';

export const Head = seo({ title: 'Not found' });

export default function NotFoundPage() {
  return (
    <Page>
      <Container p={6}>
        <Stack spacing={4} shouldWrapChildren>
          <PageHeader title="Page not found" />

          <Stack spacing={2}>
            <Text>Sorry 😔, we couldn&apos;t find what you were looking for.</Text>
            {process.env.NODE_ENV === 'development' && (
              <Text>
                Try creating a page in <Code colorScheme="yellow">src/pages/</Code>.
              </Text>
            )}
          </Stack>

          <Button
            as={Link}
            to="/"
            colorScheme="blue"
            variant="link"
            leftIcon={<HiArrowNarrowLeft fontSize="1.25rem" />}
          >
            Go home
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
