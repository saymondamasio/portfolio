import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'

const skills = [
  {
    icon: '/images/html5.svg',
    name: 'HTML 5',
  },
  {
    icon: '/images/css3.svg',
    name: 'CSS 3',
  },
  {
    icon: '/images/javascript.svg',
    name: 'Javascript',
  },
  {
    icon: '/images/next.svg',
    name: 'Next.js',
  },
  {
    icon: '/images/react.svg',
    name: 'React.js',
  },
  {
    icon: '/images/git.svg',
    name: 'Git',
  },
  {
    icon: '/images/node.svg',
    name: 'Node.js',
  },
  {
    icon: '/images/express.svg',
    name: 'Express',
  },
  {
    icon: '/images/docker.svg',
    name: 'Docker',
  },
  {
    icon: '/images/typescript.svg',
    name: 'Typescript',
  },
  {
    icon: '/images/github.svg',
    name: 'GitHub',
  },
  {
    icon: '/images/sql.svg',
    name: 'SQL',
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>Portfólio | Contato</title>
      </Head>
      <Flex flex="1" align="center" direction="column" px="10">
        <Flex maxW="745px" w="100%" direction="column" align="center">
          <Heading fontSize="3xl">Sobre mim</Heading>

          <Text mt="8" fontSize="lg" color="gray.100" textAlign="center">
            Olá, sou Saymon Damásio, sou
            <Text as="b"> desenvolvedor full stack</Text> com o foco em
            <Text as="b"> frontend</Text>. Atualmente estou pesquisando
            oportunidades de emprego na área de informática, enquanto isso faço
            alguns
            <Text as="i"> freelas</Text> no Workana.
          </Text>
          <Text mt="8" fontSize="lg" color="gray.100" textAlign="center">
            Minha jornada na area de programação começou em 2012, quando comecei
            o curso de técnico de informática, foi me apresentado o Java e foi
            nessa linguagem que aprendi a logica de programação, recentemente
            por meio da Rocketseat aprendi Javascript e amei todo esse
            ecossistema em volta da linguagem e desde então não parei mais de
            aprender as diversas tecnologias que são feitas por meio dessa
            linguagem.
          </Text>
        </Flex>

        <Flex mt="20" maxW="745px" w="100%">
          <Grid
            w="100%"
            templateColumns={{
              base: 'repeat(1, 150px)',
              sm: 'repeat(2, 150px)',
              md: 'repeat(4, minmax(150px, 1fr))',
            }}
            justifyContent="space-around"
            rowGap="10"
            columnGap="10"
          >
            <GridItem>
              <Flex direction="column" align="center">
                <Flex
                  boxSize="62px"
                  borderRadius="full"
                  bgColor="gray.900"
                  align="center"
                  justify="center"
                >
                  <Image src="/images/smile.svg" alt="Carrinha sorridente" />
                </Flex>
                <Text fontWeight="bold" fontSize="lg" mt="19px">
                  Meu nome
                </Text>
                <Text color="gray.100" mt="5px">
                  Saymon Damásio
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" align="center">
                <Flex
                  boxSize="62px"
                  borderRadius="full"
                  bgColor="gray.900"
                  align="center"
                  justify="center"
                >
                  <Image src="/images/mail.svg" alt="Carrinha sorridente" />
                </Flex>
                <Text fontWeight="bold" fontSize="lg" mt="19px">
                  E-mail
                </Text>
                <Link
                  href="mailto:saymon.damasio95@gmail.com"
                  color="gray.100"
                  mt="5px"
                  wordBreak="break-all"
                  textAlign="center"
                >
                  saymon.damasio95@gmail.com
                </Link>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" align="center">
                <Flex
                  boxSize="62px"
                  borderRadius="full"
                  bgColor="gray.900"
                  align="center"
                  justify="center"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="Carrinha sorridente"
                  />
                </Flex>
                <Text fontWeight="bold" fontSize="lg" mt="19px">
                  Instagram
                </Text>
                <Link
                  href="https://www.instagram.com/saymondamasio/"
                  target="_blank"
                  color="gray.100"
                  mt="5px"
                >
                  @saymondamasio
                </Link>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" align="center">
                <Flex
                  boxSize="62px"
                  borderRadius="full"
                  bgColor="gray.900"
                  align="center"
                  justify="center"
                >
                  <Image src="/images/phone.svg" alt="Carrinha sorridente" />
                </Flex>
                <Text fontWeight="bold" fontSize="lg" mt="19px">
                  Telefone
                </Text>
                <Link href="tel:+5535991528780" color="gray.100" mt="5px">
                  (35) 99152-8780
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}
