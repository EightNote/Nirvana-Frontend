import { Box, Img, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

// import AccountSettings from './AccountSettings'
import Actions from './Actions'
import axios from 'axios'
import { useState, useEffect } from 'react'
import pic from "../../assets/ai.png"
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify"


import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Center
} from '@chakra-ui/react'

// import { createTheme } from '@mui/system';
// import { createTheme } from '@mui/material/style'

import Notifications from './Notifications'
import { useSelector } from 'react-redux'
import { RedoRounded } from '@mui/icons-material'



const Content = () => {
  const tabs = ['Liked Songs', 'Liked Albums', 'Liked Artists',
    'My Followers', 'My Playlists']

  const [likedTracks, setLikedTracks] = useState([])
  const [likedAlbums, setLikedAlbums] = useState([])
  const [likedArtist, setLikedArtist] = useState([])
  const [followers, setFollowers] = useState([])
  const role = useSelector((state) => state.auth.role)

  useEffect(() => {
    var username = ""
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {

      username = user.username;
      user = user.token;
    }
    axios
      .get("http://localhost:8080/tracks/likedTracks/?username=" + username, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setLikedTracks(response.data);
        console.log(response.data);
      });

    axios
      .get("http://localhost:8080/albums/likedAlbums/?username=" + username, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setLikedAlbums(response.data);
        console.log(response.data);
      });


      axios
      .get("http://localhost:8080/albums/likedAlbums/?username=" + username, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setLikedAlbums(response.data);
        console.log(response.data);
      });


    axios
      .get("http://localhost:8080/user/likedArtists/?username=" + username, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setLikedArtist(response.data);
        console.log(response.data);
      });

    axios
      .get("http://localhost:8080/followers/" + username, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setFollowers(response.data);
        console.log(response.data);
      });
  }, []);

  const unfollowFunc = (e) => {
    var ok = JSON.parse(localStorage.getItem("user"));
    if (ok) {
      ok = ok.token;
    }
    axios
      .post(
        "http://localhost:8080/unfollow?followed_artist=" + e,
        "",
        {
          headers: {
            Authorization: "Bearer " + ok, //the token is a variable which holds the token
          },
        }
      )
      .then((response) => {
        toast("UnLike success! ", e);
        var arr = [];
        likedArtist.map((item) => {
          if (item.username != e) {
            arr.push(item);
          }
        });
        setLikedArtist(arr);
      });

  }

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs?.map(tab => (
            ((tab != 'Liked Artists' && tab != 'My Followers') || (tab === 'Liked Artists' && role === "user") || (tab === 'My Followers' && role === "artist"))&&
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
              >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <List spacing={3} >
              <Box borderWidth="1px" rounded="md" overflow="hidden" style={{ display: "flex", alignItems: "center" }}>
                {likedTracks.map(item => (
                  <Box key={item.title} width="100%" py={2} bg="white" _odd={{ bg: "gray.100" }}>
                    <Avatar name={item.title} src="https://bit.ly/broken-link" style={{ marginRight: "10px" }} />
                    {item.title}
                    <Center height='15px' width="100%" >
                      <Divider orientation='horizontal' borderColor={'black'} style={{ backgroundColor: "black" }} />
                    </Center>
                  </Box>
                ))}
              </Box>
            </List>
          </TabPanel>
          <TabPanel>
            <List spacing={3} >
              <Box borderWidth="1px" rounded="md" overflow="hidden" style={{ display: "flex", alignItems: "center" }}>
                {likedAlbums.map(item => (
                  <Box key={item.album_title} width="100%" py={2} bg="white" _odd={{ bg: "gray.100" }}>
                    <Avatar name={item.album_title} src="https://bit.ly/broken-link" style={{ marginRight: "10px" }} />
                    {item.album_title}
                    <Center height='15px' width="100%" >
                      <Divider orientation='horizontal' borderColor={'black'} style={{ backgroundColor: "black" }} />
                    </Center>
                  </Box>
                ))}
              </Box>
            </List>
          </TabPanel>
          {(role === "user") && (<TabPanel>
            <List spacing={3} >
              <Box borderWidth="1px" rounded="md" overflow="hidden" style={{ display: "flex", alignItems: "center" }}>
                {likedArtist.map(item => (

                  <>
                    <Box key={item.username} width="100%" py={2} bg="white" _odd={{ bg: "gray.100" }}>
                      <Avatar name={item.username} src="https://bit.ly/broken-link" style={{ marginRight: "10px" }} />
                      {item.username}
                      <Center height='15px' width="100%" >
                        <Divider orientation='horizontal' borderColor={'black'} style={{ backgroundColor: "black" }} />
                      </Center>

                    </Box>
                    <DeleteIcon onClick={() => unfollowFunc(item.username)} style={{ cursor: "pointer", marginRight: "10px" }} />
                  </>
                ))}
              </Box>
            </List>
          </TabPanel>)}
          {
            (role === "artist") && 
            <TabPanel>
              <List spacing={3} >
                <Box borderWidth="1px" rounded="md" overflow="hidden" style={{ display: "flex", alignItems: "center" }}>
                  {followers.map(item => (
                    
                    <>
                      <Box key={item} width="100%" py={2} bg="white" _odd={{ bg: "gray.100" }}>
                        <Avatar name={item} src="https://bit.ly/broken-link" style={{ marginRight: "10px" }} />
                        {item}
                        <Center height='15px' width="100%" >
                          <Divider orientation='horizontal' borderColor={'black'} style={{ backgroundColor: "black" }} />
                        </Center>

                      </Box>
                      {/* <DeleteIcon onClick={() => unfollowFunc(item)} style={{ cursor: "pointer", marginRight: "10px" }} /> */}
                    </>
                  ))}
                </Box>
              </List>
            </TabPanel>
          }
          <TabPanel>
            <Notifications />
          </TabPanel>

        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

export default Content
