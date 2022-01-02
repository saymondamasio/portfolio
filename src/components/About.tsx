import { Flex, FlexProps, Heading, Text } from '@chakra-ui/react'

type Props = FlexProps

export function About({ ...rest }: Props) {
  return (
    <Flex justify="center" {...rest}>
      <Flex maxW="745px" w="100%" direction="column" align="center">
        <Heading fontSize="3xl">Sobre mim</Heading>

        <Text mt="8" fontSize="lg" color="gray.100" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </Text>
      </Flex>
    </Flex>
  )
}
