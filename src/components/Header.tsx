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
              <Link href="#" fontSize="lg">
                Sobre mim
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontSize="lg">
                Projetos
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontSize="lg">
                Serviços
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" fontSize="lg">
                Minhas skills
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  )
}
