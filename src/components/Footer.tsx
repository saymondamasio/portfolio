import { Flex, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Flex h="60px" align="center" justify="center" bgColor="gray.900">
      <Text>
        Feito com 💜 por{' '}
        <Text as="span" fontWeight="bold" color="green.300">
          Saymon Damásio
        </Text>
      </Text>
    </Flex>
  )
}
