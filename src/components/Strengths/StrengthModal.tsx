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
import { useQuery } from 'react-query'
import { Strength } from 'types/strength'

type StrengthModalProps = {
  isOpen: boolean
  onClose: any
  strength?: Strength
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
      </ModalContent>
    </Modal>
  )
}
