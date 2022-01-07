import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { v4 } from 'uuid'
import { CardProject } from '../components/CardProject'
import { ViewProject } from '../components/Modal/ViewProject'
import { api } from '../services/api'

const repo_names = [
  'rentx-api',
  'rocket-socket',
  'certificate',
  'todos',
  'valoriza-api',
  'ignews',
  'watchme',
  'upfi',
  'dashgo',
  'worldtrip',
  'spacetraveling',
  'dtmoney',
  'github-explorer',
]

type Tech = {
  name: string
  url: string
}

interface Project {
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

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projectSelected, setProjectSelected] = useState<Project>()

  function handleOpenModal(project: Project) {
    setProjectSelected(project)
    onOpen()
  }

  const { data, isLoading, error } = useQuery(
    'projects',
    async () => {
      const projects: Project[] = []

      for await (const repo_name of repo_names) {
        let project_info

        try {
          const response = await api.get(
            `https://raw.githubusercontent.com/saymondamasio/${repo_name}/main/project-info.json`
          )
          project_info = response.data
          projects.push({
            id: v4(),
            name: project_info.name,
            short_description: project_info.short_description,
            description: project_info.description,
            images: project_info.images || [],
            videos: project_info.videos || [],
            techs: project_info.techs || [],
            link_preview: project_info.link_preview,
            link_repo: `https://github.com/saymondamasio/${repo_name}`,
          })
        } catch {}
      }

      return projects
    },
    {
      staleTime: Infinity,
    }
  )

  return (
    <>
      <Head>
        <title>Portfólio | Projetos</title>
      </Head>
      <Flex as="main" flex="1" mb="10" justify="center">
        <Flex maxW="1140px" w="100%" px="10" direction="column" align="center">
          <Heading fontSize="3xl">Projetos</Heading>
          {isLoading ? (
            <Flex flex="1" justify="center" align="center">
              <Spinner size="xl" color="green.400" />
            </Flex>
          ) : error ? (
            <Flex flex="1" justify="center">
              <Text>Falha ao obter dados dos projetos</Text>
            </Flex>
          ) : (
            <Grid
              mt="30px"
              templateColumns={{
                sm: 'repeat(auto-fit, minmax(300px,1fr))',
                lg: 'repeat(3, 1fr)',
              }}
              gap={{ base: '5', lg: '10' }}
            >
              {data!.map(project => (
                <GridItem key={project.id}>
                  <CardProject
                    project={project}
                    handleOpenModal={() => handleOpenModal(project)}
                  />
                </GridItem>
              ))}
            </Grid>
          )}
          <ViewProject
            isOpen={isOpen}
            onClose={onClose}
            project={projectSelected!}
          />
        </Flex>
      </Flex>
    </>
  )
}
