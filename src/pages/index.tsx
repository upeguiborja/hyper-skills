import { useQuery } from 'react-query'
import { fetchUserBio } from 'api/fetchUserBio'
import { Column } from 'components'
import { ProfileHeader } from 'components/Profile/ProfileHeader'
import { Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Strengths } from 'components/Strengths'

const MapStrengths = ({ strengths }: { strengths: any }) => {
  const strengthLabels = [
    { label: 'Master / Influencer', key: 'master' },
    { label: 'Expert', key: 'expert' },
    { label: 'Proficient', key: 'proficient' },
    { label: 'No experience, but interested', key: 'no-experience-interested' },
  ]

  return (
    <>
      {strengthLabels.map(
        (strength) =>
          strengths?.[strength.key] && (
            <Strengths
              proficiencyLabel={strength.label}
              strengths={strengths?.[strength.key]}
            />
          )
      )}{' '}
    </>
  )
}
const Home: NextPage = () => {
  const username = 'torrenegra'
  const { data: dataUserBio } = useQuery(['bio', username], fetchUserBio)

  return (
    <Column>
      <ProfileHeader person={dataUserBio?.person} />
      <Divider mt='16px' />
      <MapStrengths
        strengths={dataUserBio?.extra?.strengthsByProficiency}
      ></MapStrengths>
    </Column>
  )
}

export default Home
