import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

interface HomeProps {

}

interface AuthenticationHintProps {
  buttons: AuthenticationHintLinkProps[]
}

interface AuthenticationHintLinkProps {
  text: string,
  link: string,
  variant: "text" | "outlined" | "contained" | undefined
}

const AuthenticationHintLink = (props: AuthenticationHintLinkProps) => {
  let text = props.text
  let link = props.link
  let variant = props.variant
  return (
    <Button variant={variant}>
      <Link to={link}> {text} </Link>
    </Button>
  )
}

const AuthenticationHint = (props: AuthenticationHintProps) => {
  let buttons = props.buttons
  return (
      <Stack  display="flex" justifyContent={"center"} alignItems={"stretch"} color="red" direction="column" spacing = {5}>
        {buttons.map((button, idx) =>
          <AuthenticationHintLink variant={idx % 2 ? "contained" : 'outlined'} text = {button.text} link = {button.link}/>
        )}
      </Stack>
    )
}

interface CardProps {
  link_url: string,
  img_src: string,
  link_text: string
}

interface AlbumCardProps {
  albumname: string,
  album_art_url: string
}

interface ArtistCardProps {
  artistname: string;
  artist_photo_url: string;
}

interface TrackCardProps {
  player_url: string,
  trackname: string,
  album_art_url: string
}

interface EntityListProps {
  list: any[],
  mapper:Function
}

const Card = (props:CardProps) => {
  let url = props.link_url
  let img_src = props.img_src
  let link_text = props.link_text
  return (
    <Stack style={{margin:"0px 10px 20px 10px", height:"fit-content"}} display={"flex"} alignItems={"center"} direction={"column"} spacing={2}>
      <img style={{width:"200px", height:"200px", borderRadius:"100px", border:"2px white solid"}} src= {img_src} alt={link_text} />
      <Link to={url}>{link_text}</Link>
    </Stack>
  )
}

const TrackCard = (props:TrackCardProps) => {
  let image_url = props.album_art_url
  let trackname = props.trackname
  let player_url = props.player_url
  return (
    <Card link_text={trackname} link_url={player_url} img_src={image_url}/>
  )
}

const AlbumCard = (props:AlbumCardProps) => {
  let albumname = props.albumname
  let url = "/album/" + albumname
  let album_art_url = props.album_art_url

  return (
    <Card link_text={albumname} link_url={url} img_src={album_art_url}/>
  )
}

const ArtistCard = (props:ArtistCardProps) => {
  let artistname = props.artistname
  let artist_photo_url = props.artist_photo_url
  let url = "/artist/" + artistname
  return (
    <Card link_text={artistname} link_url={url} img_src={artist_photo_url}/>
  )
}

const EntityList = (props: EntityListProps) => {
  let list = props.list
  let mapper = props.mapper
  return (
    <div style={{display:"flex", overflowX:"scroll", width:"100%"}}>
        {list.map((listItem) => mapper(listItem))}
    </div>
  )
}

interface TrendingBoxProps {
  entityname:string,
  list: JSX.Element
}

const TrendingBox = (props: TrendingBoxProps) => {
  let entityname = props.entityname
  let list = props.list
  return (
    <Box borderRadius={"20px"} padding={"10px 40px"} border={"2px solid white"} margin={"50px 100px"}  display="flex" >
        <Stack width={"100%"} display="flex" justifyContent={"center"} alignItems={"stretch"} color="white" direction="column" spacing = {5} >
          <h1 style={{width: "fit-content", justifySelf:"start"}} >Trending {entityname}</h1>
          {list}
        </Stack>
      </Box>
  )
}

const Home = (props: HomeProps) => {
  const [trendingTracks, setTrendingTracks] = useState([{trackname:"Dil Nu", player_url: "", album_art_url: "data:image/jpeg;base64,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"}])
  const [trendingArtists, setTrendingArtists] = useState([{artist_photo_url: "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6", artistname:"Ed Sheeran"}])
  const [trendingAlbums, setTrendingAlbums] = useState([{album_art_url:"data:image/jpeg;base64,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", albumname: "Excuses"}])

  let authButtons: AuthenticationHintLinkProps[]  = [
    {text: "New to the Website? .. Sign Up Now", link: "/sign-up", variant:  undefined},
    {text: "Hello Again? .. Login here", link: "/log-in", variant:  undefined}
  ]

  let trackMapper = (track: any) => 
    <TrackCard trackname={track.trackname} player_url={track.player_url} album_art_url={track.album_art_url}/>;

  let albumMapper = (album: any) => 
    <AlbumCard albumname={album.albumname} album_art_url={album.album_art_url} />;

  let artistMapper = (artist: any) =>
    <ArtistCard artistname={artist.artistname} artist_photo_url={artist.artist_photo_url} />

  return (
    <Stack display="flex" justifyContent={"center"} alignItems={"stretch"} color="white" direction="column" spacing = {10} >
      <hr />
        <Box borderRadius={"20px"} padding={"10px 40px"} border={"2px solid white"} margin={"50px 100px"}  display="flex" justifyContent={"center"}>
          <AuthenticationHint buttons={authButtons}/>
        </Box>
      <hr />
        <TrendingBox list={<EntityList mapper = {trackMapper} list = {trendingTracks} />} entityname="Tracks"/>
      <hr /> 
        <TrendingBox list={<EntityList mapper = {albumMapper} list = {trendingAlbums} />} entityname="Albums" />
      <hr />
        <TrendingBox list={<EntityList mapper = {artistMapper} list = {trendingArtists} />} entityname="Artist" />
      <hr />
    </Stack>
  )
}

export default Home