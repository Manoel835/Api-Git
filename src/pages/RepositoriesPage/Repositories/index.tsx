import React from 'react'
import { Container } from './styles'
import Repository from './Repository'

const Repositories =({repositories, currentLanguage} : RepositoriesProps) => {
  if (!repositories) {
    return null;
  }
  const repos = repositories
  .filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
  .map((repository) => (
    <Repository key={repository.id} repository={repository}/>
  ));
  return<Container>{repos}</Container>
};

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  language: string;

}
interface RepositoriesProps {
  currentLanguage: string | undefined;
  repositories : Repo[] | undefined;
}
export default  Repositories
