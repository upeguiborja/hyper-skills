import { Badge, Button, ButtonProps } from '@chakra-ui/react'

export const StrengthBadge = ({ children, ...props }: ButtonProps) => {
  return (
    <Badge
      as={Button}
      height='32px'
      px='16x'
      borderRadius='24px'
      bg='gray.500'
      color='white'
      _hover={{
        bg: 'gray.300',
      }}
      {...props}
    >
      {children}
    </Badge>
  )
}
