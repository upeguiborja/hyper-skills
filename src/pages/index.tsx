import { useQuery } from 'react-query'
import { fetchUserBio } from 'api/fetchUserBio'
import { Column } from 'components'
import { ProfileHeader } from 'components/Profile/ProfileHeader'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const username = 'torrenegra'
  const { data: dataUserBio } = useQuery(['bio', username], fetchUserBio)

  return (
    <Column>
      <ProfileHeader person={dataUserBio?.person} />
    </Column>
  )
}

export default Home
