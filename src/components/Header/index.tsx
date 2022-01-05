import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { NavMenu } from './NavMenu'

export function Header() {
  return (
    <Flex w="100%" h="100px" align="center" justify="center">
      <Flex w="100%" maxW="1140px" justify="space-between" px="10">
        <Link href="/" passHref>
          <Text as="a" fontSize="3xl" fontWeight="bold">
            Portfólio
          </Text>
        </Link>

        <NavMenu />
      </Flex>
    </Flex>
  )
}
