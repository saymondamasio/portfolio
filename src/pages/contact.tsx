import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Portfólio | Contato</title>
      </Head>
      <Flex as="main" flex="1" justify="center">
        <Flex maxW="1140px" w="100%" direction="column" px="10"></Flex>
      </Flex>
    </>
  )
}
