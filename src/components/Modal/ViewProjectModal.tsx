import {
  Badge,
  Flex,
  Heading,
  Icon,
  IconButton,
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
import { BsArrowsFullscreen } from 'react-icons/bs'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

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
  link_repo: string
}

interface Props {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ViewProjectModal({ isOpen, onClose, project }: Props) {
  const images = project?.images || []
  const videos = project?.videos || []

  const [fullScreen, setFullScreen] = useState(false)

  const closeModal = () => {
    setFullScreen(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent bgColor="gray.900" w="90%" maxW="900px" p="30px">
        <ModalHeader p="0">{project?.name}</ModalHeader>
        <ModalCloseButton top="30px" right="30px" />
        <ModalBody mt="10" p="0" w="100%">
          <Flex>
            {images.length > 0 || videos.length > 0 ? (
              <Swiper
                style={
                  fullScreen
                    ? {
                        top: '25px',
                        bottom: '25px',
                        left: '25px',
                        right: '25px',
                        position: 'fixed',
                        transition: 'position 1s linear',
                        borderRadius: '10px',
                      }
                    : {
                        width: '100%',
                        borderRadius: '10px',
                        flex: '1',
                        transition: 'position 1s linear',
                      }
                }
                modules={[Navigation, Pagination, Autoplay, A11y]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {images?.map(image => (
                  <SwiperSlide key={image}>
                    <Image
                      width="100%"
                      objectFit="cover"
                      src={image}
                      alt={project.name}
                    />
                  </SwiperSlide>
                ))}
                {videos?.map(video => (
                  <SwiperSlide key={video}>
                    <video width="100%" autoPlay controls={false} loop>
                      <source src={video} type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </SwiperSlide>
                ))}
                <IconButton
                  aria-label="full screen"
                  position="absolute"
                  zIndex={1000}
                  top="10px"
                  right="10px"
                  onClick={() => setFullScreen(!fullScreen)}
                  display={fullScreen ? 'flex' : 'none'}
                  alignContent="center"
                  justifyContent="center"
                  variant="unstyled"
                  backdropFilter="auto"
                  backdropBlur="2px"
                  icon={
                    <Icon as={AiOutlineClose} fontSize={25} color="green.400" />
                  }
                />
                <IconButton
                  aria-label="full screen"
                  position="absolute"
                  zIndex={1000}
                  bottom="10px"
                  right="10px"
                  onClick={() => setFullScreen(!fullScreen)}
                  display="flex"
                  alignContent="center"
                  justifyContent="center"
                  variant="unstyled"
                  icon={
                    <Icon
                      as={BsArrowsFullscreen}
                      fontSize={25}
                      color="green.400"
                    />
                  }
                />
              </Swiper>
            ) : (
              <Image
                w="100%"
                h="100%"
                maxH="350px"
                src="/images/project_cover.svg"
                alt={project?.name}
              />
            )}
          </Flex>
          {project?.techs.length > 0 && (
            <Stack
              mt="5"
              flexWrap="wrap"
              rowGap="2"
              justify="center"
              direction="row"
            >
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

            <Stack direction="row">
              <Badge
                as="a"
                target="_blank"
                variant="outline"
                colorScheme="messenger"
                fontSize="sm"
                href={project?.link_repo}
              >
                Repositório
              </Badge>

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
            </Stack>
          </Flex>
          <Text mt="5">{project?.description}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
