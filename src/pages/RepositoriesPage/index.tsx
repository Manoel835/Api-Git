import React from 'react'
import{Container, Sidebar, Main} from './styles';
import Profile from './Profile';
import Filter from './filter';
import Repositories from './Repositories';

export const RepositoriesPage = () => {
  const user = {
    login: "Manoel835",
    name: "Manoel Felipe",
    avatar_url: "https://avatars.githubusercontent.com/u/89036370?v=4",
    followers: 5,
    following: 11,
    company: null,
    blog: null,
    location: "Brasília, Brazil",
  }
  return(
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}


