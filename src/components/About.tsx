import { Flex, FlexProps, Heading, Image, Link, Text } from '@chakra-ui/react'

type Props = FlexProps

export function About({ ...rest }: Props) {
  return (
    <Flex id="about" align="center" direction="column" {...rest}>
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

      <Flex mt="20" maxW="800px" w="100%">
        <Flex w="100%" justify="space-between">
          <Flex direction="column" align="center">
            <Flex
              w="62px"
              h="62px"
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
          <Flex direction="column" align="center">
            <Flex
              w="62px"
              h="62px"
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
            >
              saymon.damasio95@gmail.com
            </Link>
          </Flex>
          <Flex direction="column" align="center">
            <Flex
              w="62px"
              h="62px"
              borderRadius="full"
              bgColor="gray.900"
              align="center"
              justify="center"
            >
              <Image src="/images/instagram.svg" alt="Carrinha sorridente" />
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
          <Flex direction="column" align="center">
            <Flex
              w="62px"
              h="62px"
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
        </Flex>
      </Flex>
    </Flex>
  )
}
