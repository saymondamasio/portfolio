import {
  Box,
  Button,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewProject } from './Modal/ViewProject'

type Project = {
  id: number
  name: string
  short_description: string
  description: string
  images: string[]
  videos: string[]
}

interface Props extends FlexProps {
  projects: Project[]
}

export function Projects({ projects, ...rest }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projectSelected, setProjectSelected] = useState<Project>()

  function handleOpenModal(project: Project) {
    setProjectSelected(project)
    onOpen()
  }

  return (
    <Flex id="projects" direction="column" align="center" {...rest}>
      <Heading fontSize="3xl">Projetos</Heading>
      <Grid mt="30px" templateColumns="repeat(3, 1fr)" gap="45px">
        {projects.map(project => (
          <GridItem key={project.id}>
            <Flex
              h="100%"
              direction="column"
              align="center"
              px="25px"
              py="20px"
              borderColor="gray.700"
              borderWidth="1px"
              bgColor="gray.900"
            >
              <Box bgColor="black" borderWidth="1px" borderColor="gray.700">
                <Image
                  fallbackSrc="/images/project_cover.svg"
                  src={project?.images[0]}
                  alt={project.name}
                />
              </Box>
              <Box w="100%" mt="5">
                <Button
                  variant="unstyled"
                  onClick={() => handleOpenModal(project)}
                  textAlign="left"
                  fontWeight="medium"
                  fontSize="lg"
                >
                  {project.name}
                </Button>
                <Text fontSize="sm" mt="6px" color="gray.100">
                  {project.short_description}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      <ViewProject
        isOpen={isOpen}
        onClose={onClose}
        project={projectSelected!}
      />
    </Flex>
  )
}
