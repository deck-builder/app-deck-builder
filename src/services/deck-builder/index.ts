import axios, { AxiosResponse } from 'axios'
import { Card } from '../../models'

const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export const getCards = async (name: string): Promise<Card[]> => {
  const response = await instance.get('/cards', { params: { name } }) as AxiosResponse<Card[]>

  return response.data
}
