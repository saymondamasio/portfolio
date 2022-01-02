import { Button, Flex, FlexProps, Image, Stack, Text } from '@chakra-ui/react'

type Props = FlexProps

export function Banner({ ...rest }: Props) {
  return (
    <Flex w="100%" justify="space-between" {...rest}>
      <Stack>
        <Text fontSize="4xl" lineHeight="47px" fontWeight="bold">
          Olá, eu sou o <br /> Saymon Damásio :{')'}
        </Text>
        <Text fontSize="large" fontWeight="medium" color="gray.100" mt="5">
          Desenvolvedor Full-Stack & Mobile
        </Text>

        <Flex mt="10" gap="15px">
          <Button
            variant="ghost"
            bgColor="green.300"
            fontSize="sm"
            fontWeight="medium"
            px="7"
            py="3"
            borderRadius="0"
          >
            Download CV
          </Button>
          <Button
            variant="ghost"
            bgColor="black"
            fontSize="sm"
            fontWeight="medium"
            px="7"
            py="3"
            borderRadius="0"
            borderColor="gray.700"
            borderWidth="1px"
          >
            Entrar em contato
          </Button>
        </Flex>
      </Stack>

      <Image
        src="/images/man_with_smartphone.svg"
        alt="Homem com smartphone na mão com estrelas ao fundo"
      />
    </Flex>
  )
}
