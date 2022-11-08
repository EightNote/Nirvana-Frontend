import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'




const GenreTag = (props) => {
  return (
    <a >
      <Button style={{ margin: "10px 5px" }} size="xs" colorScheme='teal' variant='outline'>
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
  const [interests, setInterests] = useState([{ name: "Punjabi", "track_count": 22, "id": 1 }])
  const role = JSON.parse(localStorage.getItem("user")).role
  const user = JSON.parse(localStorage.getItem("user"))
  const [userDetail, setUserDetail] = useState({});
  const [artistDetail, setArtistDetail] = useState({});
  const [playlist, setPlaylist] = useState([])

  const user_list = [
    {
      id: 1,
      name: 'First Name',
      value: userDetail.firstName ? userDetail.firstName : "",
      color: 'yellow',
    },
    {
      id: 2,
      name: 'Last Name',
      value: userDetail.lastName ? userDetail.lastName : "",
      color: 'green',
    },
    {
      id: 4,
      name: 'My Playlists',
      value: playlist.length,
      color: 'cadet',
    }
  ]

  const artist_list = [
    {
      id: 1,
      name: 'About',
      value: artistDetail.about ? artistDetail.about : "",
      color: 'yellow',
    },
    {
      id: 2,
      name: 'Twitter',
      value: artistDetail.twitter ? artistDetail.twitter : "",
      color: 'green',
    },
    {
      id: 3,
      name: 'Faceboook',
      value: artistDetail.facebook ? artistDetail.facebook : "",
      color: 'blue',
    },
    {
      id: 4,
      name: 'Instagram',
      value: artistDetail.instagram ? artistDetail.instagram : "",
      color: 'cadet',
    },

    {
      id: 5,
      name: 'Record label',
      value: artistDetail.record_label_id ? artistDetail.record_label_id : "",
      color: 'cadet',
    }
  ]


  // const [list, setList] = useState()

  useEffect(() => {
    if (role === "user") {
      axios.get('http://localhost:8080/user/get-user-detail/' + user.username).then((res) => {
        console.log("User details", res.data)
        setUserDetail(res.data)
        setInterests(res.data.interests)
      }).catch((error) => console.log(error))


    } else if (role === "artist") {
      axios.get('http://localhost:8080/user/get-artist-detail/' + user.username).then((res) => {
        console.log("Artist details", res.data)
        setArtistDetail(res.data);
      }).catch((error) => console.log(error))
    }



  }, [])

  useEffect(() => {
    axios.get('http://localhost:8080/playlist/all').then((res) => {
      console.log(res.data)
      setPlaylist(res.data)
    })
  }, [])

  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {(role === "user" ? user_list : artist_list).map(item => (
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
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {interests.map((genre) => <GenreTag id={genre.id} track_count={genre.track_count} genre_name={genre.name} />)}
        </div>
      }

    </VStack>
  )
}

export default Data
