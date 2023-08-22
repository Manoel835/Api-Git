import React, {useState} from 'react'
import{Container, Sidebar, Main} from './styles';
import Profile from './Profile';
import Filter from './filter';
import Repositories from './Repositories';
import { langColors } from '../../services/config';

export const RepositoriesPage = () => {
  const [currentLanguage, setcurrentLanguage] = useState<string | undefined>();
  const user = {
    login: "Manoel835",
    name: "Manoel Felipe",
    avatar_url: "https://avatars.githubusercontent.com/u/89036370?v=4",
    followers: 5,
    following: 11,
    company: null,
    blog: null,
    location: "Brasília, Brazil",
  };
  const repositories = [
    {id: '1', name: 'Api-1', description:'Descrição', html_url:'https://github.com/Manoel835/Api-Git', language:'JavaScript'},
    {id: '2',name: 'Api-2', description:'Descrição', html_url:'https://github.com/Manoel835/Api-Git', language:'TypeScript'},
    {id: '3',name: 'Api-3', description:'Descrição', html_url:'https://github.com/Manoel835/Api-Git', language:'PHP'}
  ];

  interface LanguageStats {
    [language: string]: number;
  }

  const stats : LanguageStats = repositories
    .map((repository) => repository.language)
    .reduce((data: LanguageStats, language: string) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), {});

  delete stats.null;

  const formattedStats  = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return(
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter languages={formattedStats} currentLanguage={currentLanguage} onClick={(name) => setcurrentLanguage(name)}/>
      </Sidebar>
      <Main>
        <Repositories repositories={repositories}  currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  )
}


