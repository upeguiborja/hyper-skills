import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react'

type ProfileHeaderProps = {
  person: { name: string; picture: string; professionalHeadline: string }
}

export const ProfileHeader = ({ person }: ProfileHeaderProps) => {
  return (
    <Box>
      <VStack>
        <Avatar size='2xl' name={person?.name} src={person?.picture} />
        <Heading textAlign='center'>{person?.name}</Heading>
        <Text textAlign='center'>{person?.professionalHeadline}</Text>
      </VStack>
    </Box>
  )
}
