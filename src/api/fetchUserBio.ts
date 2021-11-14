import axios from 'axios'

export const fetchUserBio = async ({ queryKey }: { queryKey: any }) => {
  const [, username] = queryKey
  return await axios.get(`/api/bios/${username}`).then(({ data }) => data)
}
