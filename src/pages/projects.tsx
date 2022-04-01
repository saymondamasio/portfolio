import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { v4 } from 'uuid'
import { CardProject } from '../components/CardProject'
import { ViewProjectModal } from '../components/Modal/ViewProjectModal'
import { api } from '../services/api'

const repo_names = {
  front: [
    'ignews',
    'podcastr',
    'gobarber-web',
    'moveit',
    'letmeask',
    'spacetraveling',
    'devfinances',
    'github-explorer',
    'worldtrip',
    'watchme',
    'upfi',
    'dashgo',
    'dtmoney',
    'redux',
  ],
  back: [
    'ecommerce-api',
    'rentx-api',
    'gobarber-api',
    'valoriza-api',
    'gobarber-api',
    'surveys-api',
    'rocket-socket',
    'certificate',
    'todos',
  ],
  mobile: ['todos-mobile', 'myskills'],
}

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

interface Props {
  projects: {
    front: Project[]
    back: Project[]
    mobile: Project[]
  }
}

export default function Projects({ projects }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projectSelected, setProjectSelected] = useState<Project>()

  function handleOpenModal(project: Project) {
    setProjectSelected(project)
    onOpen()
  }

  return (
    <>
      <Head>
        <title>Portfólio | Projetos</title>
      </Head>
      <Flex as="main" flex="1" mb="10" justify="center">
        <Flex maxW="1140px" w="100%" px="10" direction="column" align="center">
          <Heading fontSize="3xl">Projetos</Heading>

          <Box mt="10">
            <Heading as="h2" fontSize="2xl">
              Front-end
            </Heading>
            <Grid
              mt="30px"
              templateColumns={{
                sm: 'repeat(auto-fit, minmax(300px,1fr))',
                lg: 'repeat(3, 1fr)',
              }}
              gap="5"
            >
              {projects.front?.map(project => (
                <GridItem key={project.id}>
                  <CardProject
                    project={project}
                    handleOpenModal={() => handleOpenModal(project)}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box mt="10">
            <Heading as="h2" fontSize="2xl">
              Back-end
            </Heading>
            <Grid
              mt="30px"
              templateColumns={{
                sm: 'repeat(auto-fit, minmax(300px,1fr))',
                lg: 'repeat(3, 1fr)',
              }}
              gap="5"
            >
              {projects.back?.map(project => (
                <GridItem key={project.id}>
                  <CardProject
                    project={project}
                    handleOpenModal={() => handleOpenModal(project)}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box mt="10">
            <Heading as="h2" fontSize="2xl">
              Mobile
            </Heading>
            <Grid
              mt="30px"
              templateColumns={{
                sm: 'repeat(auto-fit, minmax(300px,1fr))',
                lg: 'repeat(3, 1fr)',
              }}
              gap="5"
            >
              {projects.mobile?.map(project => (
                <GridItem key={project.id}>
                  <CardProject
                    project={project}
                    handleOpenModal={() => handleOpenModal(project)}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <ViewProjectModal
            isOpen={isOpen}
            onClose={onClose}
            project={projectSelected!}
          />
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects_back: Project[] = []
  const projects_front: Project[] = []
  const projects_mobile: Project[] = []

  for await (const repo_name of repo_names.back) {
    let project_info

    try {
      const response = await api.get(
        `https://raw.githubusercontent.com/saymondamasio/${repo_name}/main/project-info.json`
      )

      project_info = response.data
      projects_back.push({
        id: v4(),
        name: project_info.name,
        short_description: project_info.short_description,
        description: project_info.description,
        images: project_info.images || [],
        videos: project_info.videos || [],
        techs: project_info.techs || [],
        link_preview: project_info.link_preview || null,
        link_repo: `https://github.com/saymondamasio/${repo_name}`,
      })
    } catch {}
  }

  for await (const repo_name of repo_names.front) {
    let project_info

    try {
      const response = await api.get(
        `https://raw.githubusercontent.com/saymondamasio/${repo_name}/main/project-info.json`
      )
      project_info = response.data
      projects_front.push({
        id: v4(),
        name: project_info.name,
        short_description: project_info.short_description,
        description: project_info.description,
        images: project_info.images || [],
        videos: project_info.videos || [],
        techs: project_info.techs || [],
        link_preview: project_info.link_preview || null,
        link_repo: `https://github.com/saymondamasio/${repo_name}`,
      })
    } catch {}
  }

  for await (const repo_name of repo_names.mobile) {
    let project_info

    try {
      const response = await api.get(
        `https://raw.githubusercontent.com/saymondamasio/${repo_name}/main/project-info.json`
      )
      project_info = response.data
      projects_front.push({
        id: v4(),
        name: project_info.name,
        short_description: project_info.short_description,
        description: project_info.description,
        images: project_info.images || [],
        videos: project_info.videos || [],
        techs: project_info.techs || [],
        link_preview: project_info.link_preview || null,
        link_repo: `https://github.com/saymondamasio/${repo_name}`,
      })
    } catch {}
  }

  return {
    props: {
      projects: {
        front: projects_front,
        back: projects_back,
        mobile: projects_mobile,
      },
    },
    revalidate: false,
  }
}
