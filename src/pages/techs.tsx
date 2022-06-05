import {
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'

const techs = [
  {
    name: 'TypeScript',
    logo: '/images/typescript.svg',
    progress: 80,
  },
  {
    name: 'React',
    logo: '/images/react.svg',
    progress: 80,
  },
  {
    name: 'HTML 5',
    logo: '/images/html-5.svg',
    progress: 80,
  },
  {
    name: 'CSS 3',
    logo: '/images/css-3.svg',
    progress: 80,
  },
  {
    name: 'Sass',
    logo: '/images/sass.svg',
    progress: 60,
  },
  {
    name: 'Next.js',
    logo: '/images/next.svg',
    progress: 80,
  },
  {
    name: 'Chakra UI',
    logo: '/images/chakra-ui.svg',
    progress: 60,
  },
  {
    name: 'GraphQL',
    logo: '/images/graphql.svg',
    progress: 60,
  },
  {
    name: 'Redux',
    logo: '/images/redux.svg',
    progress: 40,
  },
  {
    name: 'React Native',
    logo: '/images/react-native.svg',
    progress: 80,
  },
  {
    name: 'Expo',
    logo: '/images/expo.svg',
    progress: 80,
  },
  {
    name: 'Node.js',
    logo: '/images/nodejs.svg',
    progress: 80,
  },
  {
    name: 'Express',
    logo: '/images/express.svg',
    progress: 80,
  },
  {
    name: 'MongoDB',
    logo: '/images/mongo.svg',
    progress: 60,
  },
  {
    name: 'PostgreSQL',
    logo: '/images/postgres.svg',
    progress: 80,
  },
  {
    name: 'Git',
    logo: '/images/git.svg',
    progress: 80,
  },
  {
    name: 'GitHub',
    logo: '/images/github.svg',
    progress: 80,
  },
  {
    name: 'Docker',
    logo: '/images/docker.svg',
    progress: 60,
  },
  {
    name: 'Prisma',
    logo: '/images/prisma.svg',
    progress: 80,
  },
  {
    name: 'TypeORM',
    logo: '/images/typeorm.svg',
    progress: 60,
  },
  {
    name: 'Nest',
    logo: '/images/nestjs.svg',
    progress: 80,
  },
  {
    name: 'CI/CD',
    logo: '/images/ci-cd.svg',
    progress: 80,
  },
]

export default function Techs() {
  return (
    <>
      <Head>
        <title>Portfólio | Tecnologias</title>
      </Head>
      <Flex as="main" flex="1" justify="center">
        <Flex maxW="1140px" w="100%" align="center" direction="column" px="10">
          <Heading fontSize="3xl">Tecnologias</Heading>

          <Grid
            mt="10"
            w="100%"
            justifyItems="center"
            templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
          >
            {techs.map(tech => (
              <GridItem key={tech.name}>
                <Flex align="center" justify="center" boxSize="150px">
                  <Tooltip
                    hasArrow
                    label={tech.name}
                    bg="gray.700"
                    color="white"
                  >
                    <VStack>
                      <Image h="80px" src={tech.logo} alt={tech.name} />

                      <Progress
                        w="100%"
                        size="xs"
                        value={tech.progress}
                        borderRadius="30"
                      />
                    </VStack>
                  </Tooltip>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}
