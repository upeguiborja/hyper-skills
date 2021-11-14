import { Heading, Box, Wrap, WrapItem } from '@chakra-ui/react'
import { StrengthBadge } from '.'

type StrengthsProps = {
  proficiencyLabel: React.ReactNode
  strengths: any[]
}

export const Strengths = ({ proficiencyLabel, strengths }: StrengthsProps) => {
  return (
    <Box mt='24px'>
      <Heading as='h3' size='sm'>
        {proficiencyLabel}
      </Heading>

      <Wrap mt='16px'>
        {strengths.map((strength, key) => (
          <WrapItem key={key}>
            <StrengthBadge w='100%'>{strength.name}</StrengthBadge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
