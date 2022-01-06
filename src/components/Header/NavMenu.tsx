import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { Menu } from './Menu'

export function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  const isDrawer = useBreakpointValue({
    base: true,
    md: false,
  })

  if (isDrawer) {
    return (
      <>
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} h="100%" />}
          variant="unstyled"
          fontSize="24"
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bgColor="gray.800" p="4">
              <DrawerCloseButton mt="6" />

              <DrawerBody mt="6">
                <Menu />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  return <Menu />
}
