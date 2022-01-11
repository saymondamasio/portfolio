import { Flex, Grid, GridItem, Heading, Image, Tooltip } from '@chakra-ui/react'
import Head from 'next/head'

const techs = [
  {
    name: 'React',
    logo: '/images/react.svg',
  },
  {
    name: 'Redux',
    logo: '/images/redux.svg',
  },
  {
    name: 'Next.js',
    logo: '/images/next.svg',
  },
  {
    name: 'Chakra UI',
    logo: '/images/chakra-ui.svg',
  },
  {
    name: 'TypeScript',
    logo: '/images/typescript.svg',
  },
  {
    name: 'HTML 5',
    logo: '/images/html-5.svg',
  },
  {
    name: 'CSS 3',
    logo: '/images/css-3.svg',
  },
  {
    name: 'Sass',
    logo: '/images/sass.svg',
  },
  {
    name: 'Node.js',
    logo: '/images/nodejs.svg',
  },
  {
    name: 'Express',
    logo: '/images/express.svg',
  },
  {
    name: 'MongoDB',
    logo: '/images/mongo.svg',
  },
  {
    name: 'PostgreSQL',
    logo: '/images/postgres.svg',
  },
  {
    name: 'Git',
    logo: '/images/git.svg',
  },
  {
    name: 'GitHub',
    logo: '/images/github.svg',
  },
  {
    name: 'Express',
    logo: '/images/express.svg',
  },
  {
    name: 'Docker',
    logo: '/images/docker.svg',
  },
  {
    name: 'Prisma',
    logo: '/images/prisma.svg',
  },
  {
    name: 'TypeORM',
    logo: '/images/typeorm.svg',
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
                    <Image src={tech.logo} alt={tech.name} />
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
