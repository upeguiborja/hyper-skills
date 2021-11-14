import { Box, Flex } from '@chakra-ui/react'

export const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg='white' p='24px' overflowY='auto' minHeight='100vh'>
      <Flex flexDir='column'>{children}</Flex>
    </Box>
  )
}
