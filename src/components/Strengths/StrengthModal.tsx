import {
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Divider,
  Box,
  Badge,
  HStack,
} from '@chakra-ui/react'
import { searchOpportunities } from 'api/searchOpportunities'
import { searchPeople } from 'api/searchPeople'
import { OpportunityChip } from 'components/Opportunities/OpportunitiesChip'
import { ProfileChip } from 'components/Profile/ProfileChip'
import { useQuery } from 'react-query'
import { PaginatedSearchResult, PersonThirdParty, Strength } from 'types'
import { ProficiencyLabels } from 'utils'

type StrengthModalProps = {
  isOpen: boolean
  onClose: any
  strength?: Strength
}

type MapPeopleSearchProps = {
  people?: PersonThirdParty[]
  isLoading?: boolean
}

type MapOpportunitiesSearchProps = {
  opportunities?: any[]
  isLoading?: boolean
}

const MapPeopleSearch = ({ people }: MapPeopleSearchProps) => {
  return (
    <>
      {people?.map((person, key) => (
        <ProfileChip key={key} person={person} />
      ))}
    </>
  )
}

const MapOpportunitiesSearch = ({
  opportunities,
}: MapOpportunitiesSearchProps) => {
  return (
    <>
      {opportunities?.map((opportunity, key) => (
        <OpportunityChip key={key} opportunity={opportunity} />
      ))}
    </>
  )
}

export const StrengthModal = ({
  isOpen,
  onClose,
  strength,
}: StrengthModalProps) => {
  const { data: dataOpportunities, isLoading: isLoadingOpportunities } =
    useQuery(
      ['opportunities', strength?.name.toLowerCase(), strength?.proficiency],
      searchOpportunities,
      { enabled: !!strength?.name && !!strength?.proficiency }
    )

  const { data: dataPeople, isLoading: isLoadingPeople } = useQuery<
    PaginatedSearchResult<PersonThirdParty>
  >(
    ['people', strength?.name.toLowerCase(), strength?.proficiency],
    searchPeople,
    { enabled: !!strength?.name && !!strength?.proficiency }
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
      <ModalOverlay />
      <ModalContent px='24px' pb='40px'>
        <ModalHeader px='0'>
          <Heading as='h2' size='xl'>
            {strength?.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />

        <HStack spacing='24px'>
          {strength?.proficiency && (
            <Badge colorScheme='blue'>
              {ProficiencyLabels?.[strength?.proficiency]}
            </Badge>
          )}
          <Badge>{strength?.recommendations} Recommendations</Badge>
        </HStack>

        <Divider mt='16px' />
        <Box mt='16px'>
          <Heading as='h3' size='lg'>
            Related job opportunities:
          </Heading>
          <MapOpportunitiesSearch
            opportunities={dataOpportunities?.results}
            isLoading={isLoadingOpportunities}
          />
        </Box>

        <Divider mt='16px' />
        <Box mt='16px'>
          <Heading as='h3' size='lg'>
            Other people with this skill:
          </Heading>
          <MapPeopleSearch
            people={dataPeople?.results}
            isLoading={isLoadingPeople}
          />
        </Box>
      </ModalContent>
    </Modal>
  )
}
