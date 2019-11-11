import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api.mysportsfeeds.com/`,
  auth: {
    username: process.env.REACT_APP_NBA_APIKEY,
    password: process.env.REACT_APP_NBA_APIPASS
  }
})
