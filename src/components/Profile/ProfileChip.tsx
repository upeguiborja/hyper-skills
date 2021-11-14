import { Avatar, Heading, Text, HStack, Box, Link } from '@chakra-ui/react'
import { PersonThirdParty } from 'types'

type ProfileChipProps = {
  person: PersonThirdParty
}

export const ProfileChip = ({ person }: ProfileChipProps) => {
  return (
    <HStack>
      <Avatar size='sm' name={person?.name} src={person?.picture} />
      <Box>
        <Heading as='h6' size='sm'>
          <Link href={`https://torre.co/${person.username}`}>
            {person?.name}
          </Link>
        </Heading>
        <Text>{person?.professionalHeadline}</Text>
      </Box>
    </HStack>
  )
}
