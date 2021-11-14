import { Heading, Box, Wrap, WrapItem } from '@chakra-ui/react'
import { StrengthBadge } from '.'

type StrengthsProps = {
  proficiencyLabel: React.ReactNode
  strengths: any[]
  onSelectStrength?: any
}

export const Strengths = ({
  proficiencyLabel,
  strengths,
  onSelectStrength,
}: StrengthsProps) => {
  return (
    <Box mt='24px'>
      <Heading as='h3' size='sm'>
        {proficiencyLabel}
      </Heading>

      <Wrap mt='16px'>
        {strengths.map((strength, key) => (
          <WrapItem key={key}>
            <StrengthBadge w='100%' onClick={() => onSelectStrength(strength)}>
              {strength.name}
            </StrengthBadge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
