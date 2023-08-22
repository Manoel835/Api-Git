import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
export const getUser = async ({login} : {login: string}) => api.get(`/users/${login}`)


export default api

