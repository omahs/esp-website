import {
  value Button,
  value Container,
  value Flex,
  value Heading,
  value Text
} from '@chakra-ui/react';
import type { value NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Container maxW='2xl'>
      <Head>
        <title>ESP redesign</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex py={16} minH='100vh' direction='column' justify='center' align='center'>
        <main>
          <Heading as='h1' size='2xl' mb={6}>
            We provide grants and other support to the builders of the Ethereum ecosystem.
          </Heading>

          <Text mb={12}>
            Whether you&apos;re working on a specific project, or you&apos;re still exploring
            possibilities, you can connect with our team for guidance.
          </Text>

          <h3>Test copy addition</h3>

          <Flex>
            <Button>
              <Text size='3xl'>Learn More</Text>
            </Button>
          </Flex>
        </main>
      </Flex>
    </Container>
  );
};

export default Home;
