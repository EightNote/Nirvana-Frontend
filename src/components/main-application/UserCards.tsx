import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { wrap } from 'module';

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


export const Card = (props:CardProps) => {
let url = props.link_url
let img_src = props.img_src
let link_text = props.link_text
return (
    <Stack style={{margin:"0px 10px 20px 10px", borderBottom:"2px solid #87CEEB", borderRadius:"20px", padding:'5px', height:"fit-content",  width:"fit-content   "}} display={"flex"} alignItems={"center"} direction={"row"} spacing={2} width={"fit-content"}>
    <img style={{width:"80px",borderBlockColor:"white", height:"80px", borderRadius:"100px", borderTop:"2px #87CEEB solid", margin:"2px", padding:"2px"}} src= {img_src} alt={link_text} />
    <Link style={{textDecoration:'none'}} to={url}>
        <h2 style={{padding:"5px", textAlign:'left', borderLeft : 'solid',  fontSize:'150%',backgroundColor:'white',borderRadius:'10%',borderColor:'#87CEEB'}}>{link_text}</h2>
    </Link> 
    </Stack>
)
}

export const TrackCard = (props:TrackCardProps) => {
let image_url = props.album_art_url
let trackname = props.trackname
let player_url = props.player_url
return (
    <Card link_text={trackname} link_url={player_url} img_src={image_url}/>

)
}

export const AlbumCard = (props:AlbumCardProps) => {
let albumname = props.albumname
let url = "/album/" + albumname
let album_art_url = props.album_art_url

return (
    <Card link_text={albumname} link_url={url} img_src={album_art_url}/>
)
}

export const ArtistCard = (props:ArtistCardProps) => {
let artistname = props.artistname
let artist_photo_url = props.artist_photo_url
let url = "/artist/" + artistname
return (
    <Card link_text={artistname} link_url={url} img_src={artist_photo_url}/>
)
}