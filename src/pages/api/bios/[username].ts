import { VercelRequest, VercelResponse } from '@vercel/node'
import axios, { AxiosError, AxiosResponse } from 'axios'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { username } = req.query

  await axios
    .get(`https://bio.torre.co/api/bios/${username}`)
    .then((response: AxiosResponse) => {
      const { data } = response
      const strengthsByProficiency = data?.strengths?.reduce(
        (prev: any, current: any) => {
          return prev[current.proficiency]
            ? {
                ...prev,
                [current.proficiency]: [...prev[current.proficiency], current],
              }
            : { ...prev, [current.proficiency]: [current] }
        },
        []
      )
      res.json({
        ...data,
        extra: { strengthsByProficiency: strengthsByProficiency },
      })
    })
    .catch((error: AxiosError) => {
      if (error.response?.status) {
        res.status(error.response.status).json({ error: error.response.data })
      }
    })
}

export default handler
