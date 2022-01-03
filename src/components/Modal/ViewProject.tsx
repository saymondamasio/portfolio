import {
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Project = {
  id: number
  name: string
  short_description: string
  description: string
  images: string[]
  videos: string[]
}

interface Props {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ViewProject({ isOpen, onClose, project }: Props) {
  const images = project?.images || []
  const videos = project?.videos || []
  const medias = [...images, ...videos]
  console.log(medias)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="gray.900" maxW="900px" p="30px">
        <ModalHeader p="0">{project?.name}</ModalHeader>
        <ModalCloseButton top="30px" right="30px" />
        <ModalBody mt="10" p="0" w="100%">
          <Flex w="100%" h={['250px', '450px']}>
            {medias.length > 0 ? (
              <Swiper
                style={{ width: '100%', flex: '1' }}
                modules={[Navigation, Pagination, Autoplay, A11y]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {medias?.map(media => (
                  <SwiperSlide key={media}>
                    <Image w="100%" h="100%" src={media} alt={project.name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Image
                w="100%"
                h="100%"
                src="/images/project_cover.svg"
                alt={project?.name}
              />
            )}
          </Flex>
          <Heading mt="10">{project?.name}</Heading>
          <Text mt="5">{project?.description}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
