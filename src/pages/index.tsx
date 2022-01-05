import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Saymon Damásio</title>
      </Head>
      <Flex as="main" flex="1" justify="center">
        <Flex maxW="1140px" w="100%" direction="column" px="10">
          <Banner mt="100px" />
        </Flex>
      </Flex>
    </>
  )
}
