import { VercelRequest, VercelResponse } from '@vercel/node'
import axios, { AxiosError, AxiosResponse } from 'axios'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
  }

  const search = req.body

  await axios
    .post(
      `https://search.torre.co/opportunities/_search`, // TODO: use parameters
      search,
      { params: req.query }
    )
    .then((response: AxiosResponse) => {
      const { data } = response
      res.json(data)
    })
    .catch((error: AxiosError) => {
      if (error.response?.status) {
        res.status(error.response.status).json({ error: error.response.data })
      }
    })
}

export default handler
