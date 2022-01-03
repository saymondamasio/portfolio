import {
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react'

type Props = FlexProps

const skills = [
  {
    icon: '/images/html5.svg',
    name: 'HTML 5',
  },
  {
    icon: '/images/css3.svg',
    name: 'CSS 3',
  },
  {
    icon: '/images/javascript.svg',
    name: 'Javascript',
  },
  {
    icon: '/images/next.svg',
    name: 'Next.js',
  },
  {
    icon: '/images/react.svg',
    name: 'React.js',
  },
  {
    icon: '/images/git.svg',
    name: 'Git',
  },
  {
    icon: '/images/node.svg',
    name: 'Node.js',
  },
  {
    icon: '/images/express.svg',
    name: 'Express',
  },
  {
    icon: '/images/docker.svg',
    name: 'Docker',
  },
  {
    icon: '/images/typescript.svg',
    name: 'Typescript',
  },
  {
    icon: '/images/github.svg',
    name: 'GitHub',
  },
  {
    icon: '/images/sql.svg',
    name: 'SQL',
  },
]

export function MySkills({ ...rest }: Props) {
  return (
    <Flex id="my-skills" direction="column" align="center" {...rest}>
      <Heading fontSize="3xl">Minhas skills</Heading>

      <Grid
        w="100%"
        mt="30px"
        templateColumns="repeat(6, 1fr)"
        rowGap="50px"
        columnGap="25px"
      >
        {skills.map(skill => (
          <GridItem key={skill.icon}>
            <Flex
              h="100%"
              p="35px"
              align="center"
              justify="center"
              bgColor="gray.700"
            >
              <Image src={skill.icon} alt={skill.name} />
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
