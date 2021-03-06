import { useQuery } from 'react-query'
import { fetchUserBio } from 'api/fetchUserBio'
import { Column } from 'components'
import { ProfileHeader } from 'components/Profile/ProfileHeader'
import { Divider, Container, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { StrengthModal, Strengths } from 'components/Strengths'
import { useState } from 'react'
import { Strength } from 'types'

type MapStrengthsProps = {
  strengths: any
  onSelectStrength: any
}
const MapStrengths = ({ strengths, onSelectStrength }: MapStrengthsProps) => {
  const strengthLabels = [
    { label: 'Master / Influencer', key: 'master' },
    { label: 'Expert', key: 'expert' },
    { label: 'Proficient', key: 'proficient' },
    { label: 'Novice', key: 'novice' },
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
              onSelectStrength={onSelectStrength}
            />
          )
      )}{' '}
    </>
  )
}
const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedStrength, setSelectedStrength] = useState<Strength>()

  const username = 'torrenegra'
  const { data: dataUserBio } = useQuery(['bio', username], fetchUserBio)

  const handleSelectStrength = (strength: any) => {
    setSelectedStrength(strength)
    onOpen()
  }

  return (
    <Container maxW='container.xl'>
      <Column>
        <ProfileHeader person={dataUserBio?.person} />
        <Divider mt='16px' />
        <MapStrengths
          strengths={dataUserBio?.extra?.strengthsByProficiency}
          onSelectStrength={handleSelectStrength}
        ></MapStrengths>
      </Column>
      <StrengthModal
        isOpen={isOpen}
        onClose={onClose}
        strength={selectedStrength}
      />
    </Container>
  )
}

export default Home
