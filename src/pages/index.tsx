import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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
      <Flex w="100vw">
        <Header />
        {/* <main>
          <SideBar />
          <div className={styles.content}>
            <div className="title card">
              <h1>My Projects</h1>
            </div>

            <section className={styles.projects}>
              {repositories.map(repository => (
                <a
                  key={repository.id}
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.project} card`}
                >
                  <div className={styles.header}>
                    <Folder />

                    <strong>{repository.name}</strong>
                  </div>

                  <div className={styles.content}>
                    <p>{repository.description}</p>
                  </div>

                  <div className={styles.footer}>
                    <div className={styles.projectInfo}>
                      <div className={styles.stars}>
                        <Star />

                        <span>{repository.stargazers_count}</span>
                      </div>

                      <div className={styles.branches}>
                        <GitBranch />

                        <span>{repository.forks_count}</span>
                      </div>
                    </div>

                    <div className={styles.projectTechs}>
                      <div
                        className="bullet-points"
                        style={{
                          backgroundColor: bullet_colors[repository.language],
                        }}
                      />

                      <span>{repository.language}</span>
                    </div>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </main>

        <Footer /> */}
      </Flex>
    </>
  )
}
