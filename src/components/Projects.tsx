import {
  Box,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

type Project = {
  id: number
  name: string
  full_name: string
  language: string
  stargazers_count: number
  forks_count: number
  description: string
  html_url: string
}

interface Props extends FlexProps {
  projects: Project[]
}

export function Projects({ projects, ...rest }: Props) {
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
                  w="300px"
                  h="130px"
                  fallbackSrc="/images/project_cover.svg"
                  src={`https://raw.githubusercontent.com/saymondamasio/${project.name}/main/.github/medias/cover.png`}
                  alt={project.name}
                />
              </Box>
              <Box w="100%" mt="5">
                <Text textAlign="left" fontWeight="medium" fontSize="lg">
                  {project.name}
                </Text>
                <Text fontSize="sm" mt="6px" color="gray.100">
                  {project.description}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
