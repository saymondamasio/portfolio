import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

interface Project {
  images: string[]
  name: string
  short_description: string
}

interface Props {
  project: Project
  handleOpenModal: (project: Project) => void
}

export function CardProject({ handleOpenModal, project }: Props) {
  return (
    <Flex
      h="100%"
      direction="column"
      align="center"
      px="5"
      py="5"
      borderColor="gray.700"
      borderWidth="1px"
      bgColor="gray.900"
    >
      <Box bgColor="black" borderWidth="1px" borderColor="gray.700">
        <Button
          variant="unstyled"
          boxSize="auto"
          onClick={() => handleOpenModal(project)}
        >
          <Image
            fallbackSrc="/images/project_cover.svg"
            src={project?.images[0]}
            alt={project?.name}
            maxH={200}
          />
        </Button>
      </Box>
      <Box w="100%" mt="5">
        <Text textAlign="left" fontWeight="medium" fontSize="lg">
          {project?.name}
        </Text>
        <Text fontSize="sm" mt="6px" color="gray.100">
          {project?.short_description}
        </Text>
      </Box>
    </Flex>
  )
}
