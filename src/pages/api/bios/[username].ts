import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { username } = req.query

  await axios
    .get(`https://bio.torre.co/api/bios/${username}`)
    .then(({ data }) => {
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
      res.send({
        ...data,
        extra: { strengthsByProficiency: strengthsByProficiency },
      })
    })
}

export default handler
