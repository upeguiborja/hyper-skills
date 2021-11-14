import { Box, Flex } from '@chakra-ui/react'

export const Column = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box
      width={['100vw', null, '400px']}
      height={['auto']}
      bg='white'
      p='24px'
      overflowY='auto'
    >
      <Flex>{children}</Flex>
    </Box>
  )
}
