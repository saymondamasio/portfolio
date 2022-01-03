import { Flex, Link, List, ListItem, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w="100%" h="100px" align="center" justify="center">
      <Flex w="100%" maxW="1140px" justify="space-between">
        <Text fontSize="3xl" fontWeight="bold">
          Portfólio
        </Text>

        <Flex as="nav">
          <List variant="unstyled" display="flex" alignItems="center" gap="12">
            <ListItem>
              <Link href="#about" fontSize="lg">
                Sobre mim
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#projects" fontSize="lg">
                Projetos
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#services" fontSize="lg">
                Serviços
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#my-skills" fontSize="lg">
                Minhas skills
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  )
}
