import { Avatar, Heading, Text, HStack, Box, Link } from '@chakra-ui/react'

type OpportunityChipProps = {
  opportunity: any
  isLoading?: boolean
}

export const OpportunityChip = ({ opportunity }: OpportunityChipProps) => {
  return (
    <HStack
      mt='16px'
      href={`https://torre.co/post/${opportunity.id}`}
      as={Link}
      target='_blank'
      textDecor='none'
    >
      <Avatar
        size='lg'
        name={opportunity?.organizations?.[0]?.name}
        src={opportunity?.organizations?.[0]?.picture}
      />
      <Box>
        <Heading as='h6' size='sm'>
          {opportunity?.objective}
        </Heading>
        <Text mt='8px'>{opportunity?.organizations?.[0]?.name}</Text>
      </Box>
    </HStack>
  )
}
