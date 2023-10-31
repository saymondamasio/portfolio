import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import {
  RiDiscordFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiRocket2Fill,
} from 'react-icons/ri'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        bgColor="gray.900"
        w="90%"
        maxW="300px"
        p="30px"
      >
        <ModalHeader p="0">Conecte-se</ModalHeader>
        <ModalCloseButton top="30px" right="30px" />
        <ModalBody mt="10" p="0" w="100%">
          <Stack>
            <Button
              as="a"
              href="https://www.linkedin.com/in/saymondamasio"
              target="_blank"
              w="100%"
              bgColor="green.400"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={
                <Icon
                  as={RiLinkedinBoxFill}
                  boxSize="20px"
                  marginRight="20px"
                />
              }
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/saymondamasio"
              target="_blank"
              justifyContent="flex-start"
              w="100%"
              variant="ghost"
              bgColor="green.400"
              leftIcon={
                <Icon as={RiGithubFill} boxSize="20px" marginRight="20px" />
              }
            >
              Github
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/saymondamasio95"
              target="_blank"
              w="100%"
              variant="ghost"
              bgColor="green.400"
              justifyContent="flex-start"
              leftIcon={
                <Icon as={RiInstagramFill} boxSize="20px" marginRight="20px" />
              }
            >
              Instagram
            </Button>
            <Button
              as="a"
              href="https://discordapp.com/users/904514277812080680"
              target="_blank"
              variant="ghost"
              justifyContent="flex-start"
              w="100%"
              bgColor="green.400"
              leftIcon={
                <Icon as={RiDiscordFill} boxSize="20px" marginRight="20px" />
              }
            >
              Discord
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
