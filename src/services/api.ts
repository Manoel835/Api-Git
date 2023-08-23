import axios from 'axios'
import { langColors } from './config';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
export const getUser = async ({login} : {login: string}) => api.get(`/users/${login}`);
export const getRepos = async ({login} : {login: string}) => api.get(`/users/${login}/repos`);

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  language: string;

}
interface RepositoriesProps {
  currentLanguage: string;
  repositories : Repo[];
}
interface LanguageStats {
  [language: string]: number;
}

export const getLangsFrom = ({repositories} : RepositoriesProps ) => {

  const stats : LanguageStats = repositories ? repositories
    .map((repository) => repository.language)
    .reduce((data: LanguageStats, language: string) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), {}) : {};

  delete stats.null;

  const formattedStats  = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .
sort((a, b) => b.count - a.count);
  return formattedStats;
}

export default api

