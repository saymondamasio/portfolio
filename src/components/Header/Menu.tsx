import { Flex, Link, List, ListItem } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

export function Menu() {
  return (
    <Flex as="nav">
      <List
        variant="unstyled"
        display="flex"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: '7', lg: '12' }}
      >
        <ListItem>
          <ActiveLink href="/about" passHref>
            <Link fontSize="lg">Sobre mim</Link>
          </ActiveLink>
        </ListItem>
        <ListItem>
          <ActiveLink href="/projects" passHref>
            <Link fontSize="lg">Projetos</Link>
          </ActiveLink>
        </ListItem>
        <ListItem>
          <ActiveLink href="/contact" passHref>
            <Link fontSize="lg">Contato</Link>
          </ActiveLink>
        </ListItem>
      </List>
    </Flex>
  )
}
