import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MySkills } from '../components/MySkills'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { api } from '../services/api'

const repo_names = [
  'rentx-api',
  'finapi',
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

interface Repo {
  id: number
  name: string
  full_name: string
  language: string
  stargazers_count: number
  forks_count: number
  description: string
  html_url: string
}

interface Project {
  id: number
  name: string
  short_description: string
  description: string
  images: string[]
  videos: string[]
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    repo_names.forEach(async repo_name => {
      const repository = await api.get<Repo>(`repos/saymondamasio/${repo_name}`)

      const info_project = await api.get(
        `https://raw.githubusercontent.com/saymondamasio/${repo_name}/master/info-project.json`
      )

      if (!projects.find(project => project.id === repository.data.id)) {
        setProjects(prev => [
          ...prev,
          {
            id: repository.data.id,
            name: info_project.data.name,
            short_description: info_project.data.short_description,
            description: info_project.data.description,
            images: info_project.data.images || [],
            videos: info_project.data.videos || [],
          },
        ])
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Portfólio | Saymon Damásio</title>
      </Head>
      <Flex as="main" direction="column">
        <Header />
        <Flex justify="center">
          <Flex maxW="1140px" w="100%" direction="column">
            <Banner mt="100px" />
            <About mt="160px" />
            <Projects mt="130px" projects={projects} />
            <Services mt="127px" />
            <MySkills mt="127px" />
          </Flex>
        </Flex>
        <Footer mt="222px" />
      </Flex>
    </>
  )
}
