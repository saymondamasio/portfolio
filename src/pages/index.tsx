import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { api } from '../services/api'

const repo_names = [
  'rentx-api',
  'ignews',
  'rocket-socket',
  'certificate',
  'gameplay-mobile',
  'valoriza-api',
]

const bullet_colors: IBulletColors = {
  TypeScript: '#2b7489',
  JavaScript: '#f1e05a',
}

interface IBulletColors {
  [key: string]: string
}

interface IRepo {
  id: number
  name: string
  full_name: string
  language: string
  stargazers_count: number
  forks_count: number
  description: string
  html_url: string
}

export default function Home() {
  const [repositories, setRepositories] = useState<IRepo[]>([])

  useEffect(() => {
    repo_names.forEach(async repo_name => {
      const repository = await api.get(`repos/saymondamasio/${repo_name}`)

      if (!repositories.find(repo => repo.id === repository.data.id)) {
        setRepositories(prev => [...prev, repository.data])
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Portfólio | Saymon Damásio</title>
      </Head>
      <Flex as="main" w="100vw" direction="column">
        <Header />
        <Flex justify="center">
          <Flex maxW="1140px" w="100%" direction="column">
            <Banner mt="100px" />
            <About mt="160px" />
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}
