import { Box, Flex } from '@chakra-ui/react'

export const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      width={['100vw', null, '400px']}
      height={['auto']}
      bg='white'
      p='24px'
      overflowY='auto'
    >
      <Flex flexDir='column'>{children}</Flex>
    </Box>
  )
}
