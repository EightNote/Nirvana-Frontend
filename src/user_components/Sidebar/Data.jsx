import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'

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


const GenreTag = (props) => {
  return (
    <a >
      <Button style={{ margin: "10px 5px"}} size="xs" colorScheme='teal' variant='outline'>
        {props.genre_name}
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>
          {props.track_count}
        </Badge>
      </Button>
    </a>
  )
}

// const GenreList = (props) => {
//   return (

//   )
// }

function Data() {
  const [interests, setInterests] = useState([{name: "Punjabi", "track_count":22, "id": 1}])
  const username = useSelector((state) => state.auth.username)
  const role = useSelector((state) => state.auth.role)
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    axios.get('http://localhost:8080/user/get-user-detail/' + user.username).then((res) => {
        console.log("User details", res.data)
        setInterests(res.data.interests)
    }).catch((error) => console.log(error))
  }, [])

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
      {(role == "user") &&  
        <div style={{ display:"flex", flexDirection:"row", flexWrap:"wrap" }}>
          {interests.map((genre) => <GenreTag id = {genre.id} track_count = {genre.track_count} genre_name={genre.name}/>)}
        </div>
      }

    </VStack>
  )
}

export default Data
