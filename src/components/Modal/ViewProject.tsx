import {
  Badge,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Tech = {
  name: string
  url: string
}

type Project = {
  id: string
  name: string
  short_description: string
  description: string
  images: string[]
  videos: string[]
  techs: Tech[]
  link_preview?: string
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="gray.900" w="90%" maxW="900px" p="30px">
        <ModalHeader p="0">{project?.name}</ModalHeader>
        <ModalCloseButton top="30px" right="30px" />
        <ModalBody mt="10" p="0" w="100%">
          <Flex>
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
                    <Image
                      boxSize="100%"
                      objectFit="cover"
                      src={media}
                      alt={project.name}
                    />
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
          {project?.techs.length > 0 && (
            <Stack mt="5" flexWrap="wrap" rowGap="2" direction="row">
              {project?.techs.map(tech => (
                <Badge
                  as="a"
                  target="_blank"
                  variant="solid"
                  colorScheme="green"
                  fontSize="sm"
                  href={tech.url}
                  key={tech.name}
                >
                  {tech.name}
                </Badge>
              ))}
            </Stack>
          )}
          <Flex mt="10" w="100%" align="center" justify="space-between">
            <Heading>{project?.name}</Heading>

            {project?.link_preview && (
              <Badge
                as="a"
                target="_blank"
                variant="outline"
                colorScheme="green"
                fontSize="sm"
                href={project.link_preview}
              >
                Preview
              </Badge>
            )}
          </Flex>
          <Text mt="5">{project?.description}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
