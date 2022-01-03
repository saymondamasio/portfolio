import {
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

type Props = FlexProps

export function Services({ ...rest }: Props) {
  return (
    <Flex id="services" direction="column" align="center" {...rest}>
      <Heading fontSize="3xl">Serviços</Heading>

      <Grid mt="30px" w="100%" templateColumns="repeat(3, 1fr)" gap="10">
        <GridItem>
          <Flex
            bgColor="gray.900"
            direction="column"
            p="30px"
            borderWidth="1px"
            borderColor="gray.700"
            borderBottomColor="green.400"
            borderBottomWidth="5px"
          >
            <Image w="56px" h="56px" src="/images/code.svg" alt="Código" />

            <Text mt="40px" fontWeight="medium" fontSize="3xl" color="gray.100">
              Criação <br /> de sites
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            bgColor="gray.900"
            direction="column"
            p="30px"
            borderWidth="1px"
            borderColor="gray.700"
            borderBottomColor="green.400"
            borderBottomWidth="5px"
          >
            <Image w="56px" h="56px" src="/images/figma.svg" alt="Código" />

            <Text mt="40px" fontWeight="medium" fontSize="3xl" color="gray.100">
              UI <br /> Designer
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            bgColor="gray.900"
            direction="column"
            p="30px"
            borderWidth="1px"
            borderColor="gray.700"
            borderBottomColor="green.400"
            borderBottomWidth="5px"
          >
            <Image
              w="56px"
              h="56px"
              src="/images/smartphone.svg"
              alt="Código"
            />

            <Text mt="40px" fontWeight="medium" fontSize="3xl" color="gray.100">
              Sites <br /> responsivos
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}
