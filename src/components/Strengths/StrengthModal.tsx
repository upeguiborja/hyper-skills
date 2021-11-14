import {
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Divider,
  Box,
} from '@chakra-ui/react'
import { searchOpportunities } from 'api/searchOpportunities'
import { searchPeople } from 'api/searchPeople'
import { ProfileChip } from 'components/Profile/ProfileChip'
import { useQuery } from 'react-query'
import { PersonThirdParty, Strength } from 'types'

type StrengthModalProps = {
  isOpen: boolean
  onClose: any
  strength?: Strength
}

type MapPeopleSearchProps = {
  people: PersonThirdParty[]
}

const MapPeopleSearch = ({ people }: MapPeopleSearchProps) => {
  console.log(people)
  return (
    <>
      {people?.map((person, key) => (
        <ProfileChip key={key} person={person} />
      ))}
    </>
  )
}

export const StrengthModal = ({
  isOpen,
  onClose,
  strength,
}: StrengthModalProps) => {
  const { data: dataOpportunities } = useQuery(
    ['opportunities', strength?.name.toLowerCase(), strength?.proficiency],
    searchOpportunities,
    {
      enabled: !!strength?.name && !!strength?.proficiency,
    }
  )
  const { data: dataPeople } = useQuery(
    ['people', strength?.name.toLowerCase(), strength?.proficiency],
    searchPeople,
    {
      enabled: !!strength?.name && !!strength?.proficiency,
    }
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
      <ModalOverlay />
      <ModalContent px='24px'>
        <ModalHeader px='0'>
          <Heading as='h2' size='lg'>
            {strength?.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Divider mt='16px'></Divider>
        <Box>Proficiency: {strength?.proficiency}</Box>
        <Box>Recommendations: {strength?.recommendations}</Box>
        <Divider mt='16px'></Divider>
        <Box mt='16px'>
          <Heading>Other people with this skill:</Heading>
          <MapPeopleSearch people={dataPeople?.results} />
        </Box>
      </ModalContent>
    </Modal>
  )
}
