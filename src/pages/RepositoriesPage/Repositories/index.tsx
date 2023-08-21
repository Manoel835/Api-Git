import React from 'react'
import { Container } from './styles'
import Repository from './Repository'

const Repositories =({repositories} : RepositoriesProps) => {
  const repos = repositories.map((repository) => (
    <Repository key={repository.id} repository={repository}/>
  ));
  return<Container>{repos}</Container>
};

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  language?: string | null;
}
interface RepositoriesProps {
  repositories : Repo[];
}
export default  Repositories
