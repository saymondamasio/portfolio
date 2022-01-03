import { Flex, FlexProps, Text } from '@chakra-ui/react'

type Props = FlexProps

export function Footer({ ...rest }: Props) {
  return (
    <Flex h="60px" align="center" justify="center" bgColor="gray.900" {...rest}>
      <Text>
        Feito com 💜 por{' '}
        <Text as="span" fontWeight="bold" color="green.300">
          Saymon Damásio
        </Text>
      </Text>
    </Flex>
  )
}
