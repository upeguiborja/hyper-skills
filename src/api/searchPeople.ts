import axios from 'axios'

export const searchPeople = async ({ queryKey }: { queryKey: any }) => {
  // TODO: Type queryKey
  const params = {
    lang: 'en',
    size: 3,
    aggregate: false,
  }

  let [, skillName, proficiency] = queryKey

  const body = {
    'skill/role': {
      text: skillName,
      proficiency: proficiency,
    },
  }

  return await axios
    .post('/api/people/_search', body, { params: params })
    .then(({ data }) => {
      console.log(data)
      return data
    })
}
