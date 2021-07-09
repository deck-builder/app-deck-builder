import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export const getCards = async (text: string): Promise<any> => {
  const response = await instance.get('/cards', { params: { text } })

  return response
}
