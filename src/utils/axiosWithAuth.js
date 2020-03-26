import axios from 'axios'
import {TOKEN} from './_vendor'

export const authios = (url) => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      // 'Content-Type': 'application/json;charset=utf-8'
    }
  })
}