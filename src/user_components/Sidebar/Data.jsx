import { Box, Text, VStack } from '@chakra-ui/react'

const list = [
  {
    id: 1,
    name: 'My Tracks',
    value: 32,
    color: 'yellow',
  },
  {
    id: 2,
    name: 'Liked Albums',
    value: 26,
    color: 'green',
  },
  {
    id: 3,
    name: 'Liked Artists',
    value: 6,
    color: 'blue',
  },
  {
    id: 4,
    name: 'My Followers',
    value: 32,
    color: 'orange',
  },
  {
    id: 5,
    name: 'My Playlists',
    value: 32,
    color: 'cadet',
  }
]

function Data() {
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map(item => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data
