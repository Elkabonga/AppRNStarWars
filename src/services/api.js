import axios from 'axios'

//  ex: https://swapi.dev/api/people/1
const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export default instance