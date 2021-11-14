import { Avatar, Heading, Text, HStack, Box, Link } from '@chakra-ui/react'
import { PersonThirdParty } from 'types'

type ProfileChipProps = {
  person: PersonThirdParty
}

export const ProfileChip = ({ person }: ProfileChipProps) => {
  return (
    <HStack
      mt='16px'
      href={`https://torre.co/${person.username}`}
      as={Link}
      target='_blank'
      textDecor='none'
    >
      <Avatar size='lg' name={person?.name} src={person?.picture} />
      <Box>
        <Heading as='h6' size='sm'>
          {person?.name}
        </Heading>
        <Text mt='8px'>{person?.professionalHeadline}</Text>
      </Box>
    </HStack>
  )
}
