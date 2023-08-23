import React, {useEffect, useState} from 'react'
import{Loading, Container, Sidebar, Main} from './styles';

import Profile from './Profile';
import Filter from './filter';
import Repositories from './Repositories';
import {getUser, getRepos, getLangsFrom} from '../../services/api';
import { useParams } from 'react-router-dom';

export const RepositoriesPage = () => {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [respositories, setRepositories] = useState();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [currentLanguage, setcurrentLanguage] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadData = async () => {
      if(login){
        const [userResponse, repositoriesResponse] = await Promise.all([
          getUser({login}),
          getRepos({login})]);

        setUser(userResponse.data);
        setRepositories(repositoriesResponse.data);
        setLanguages(getLangsFrom(repositoriesResponse.data));
        setLoading(false);
        };
    };
      if (login) {
        loadData();
      }
    }, [login]);

  interface Language {
    name: string;
    count: number;
    color: string;
  }
  if(loading){
    return<Loading>Carregando...</Loading>
  }
  return(
    <Container>
      <Sidebar>
       { user && <Profile user={user}/>}
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={(name) => setcurrentLanguage(name)}/>
      </Sidebar>
      <Main>
        <Repositories repositories={respositories}  currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  )
}
