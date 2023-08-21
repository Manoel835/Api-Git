import React from 'react'
import { Container, Name, Description, Footer, Lang, Link  } from './styles'
const Repository = ({repository} : RepositoryProps) => (
    <Container>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color='#FE8C00'>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='_blank'>Ver</Link>
      </Footer>
    </Container>
);

interface Repository{
  id: string;
  name: string;
  description: string;
  html_url: string;
  language?: string | null;
}
interface RepositoryProps{
  repository: Repository;
}


export default Repository
