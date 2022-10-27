import { Button, Code, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { seo } from '../components/Seo';

export const Head = seo({ title: 'Home' });

export default function IndexPage() {
  return (
    <Page>
      <Container p={6}>
        <Stack spacing={8} shouldWrapChildren>
          <PageHeader
            title="@south-paw/awesome-gatsby-starter"
            subtitle="👌 A starter for Gatsby 4 with TypeScript, Chakra UI, ESLint and Prettier."
          />

          <Stack spacing={2} shouldWrapChildren>
            <Text>Use this starter for your new project by running the following command:</Text>
            <Code py={2} px={3} borderRadius="lg">
              npx gatsby new your-projects-name https://github.com/South-Paw/awesome-gatsby-starter
            </Code>
          </Stack>

          <Button
            as="a"
            href="//github.com/South-Paw/awesome-gatsby-starter"
            rightIcon={<HiArrowNarrowRight fontSize="1.25rem" />}
            variant="link"
            colorScheme="blue"
          >
            Check out the README on GitHub
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
