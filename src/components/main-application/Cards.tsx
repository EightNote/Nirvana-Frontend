import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

interface CardProps {
    orientation: string,
link_url: string,
img_src: string,
link_text: string
}

interface AlbumCardProps {
    orientation: string,
albumname: string,
album_art_url: string
}

interface ArtistCardProps {
    orientation: string,
artistname: string;
artist_photo_url: string;
}

interface TrackCardProps {
    orientation: string,
    player_url: string,
    trackname: string,
    album_art_url: string
}


export const Card = (props:CardProps) => {
let url = props.link_url
let img_src = props.img_src
let link_text = props.link_text
return (
    <Stack bgcolor={"primary"} style={{margin:"0px 10px 20px 10px", height:"fit-content"}} display={"flex"} alignItems={"center"} direction={props.orientation === "horizontal" ? "row": "column"} spacing={2}>
    <img style={{width:"120px", height:"120px", borderRadius:"100px", border:"2px white solid"}} src= {img_src} alt={link_text} />
    <Link to={url}>{link_text}</Link>
    </Stack>
)
}

export const SmallCard = (props:CardProps) => {
    let url = props.link_url
    let img_src = props.img_src
    let link_text = props.link_text
    return (
        <Stack bgcolor={"primary"} style={{margin:"0px 10px 20px 10px", height:"fit-content"}} display={"flex"} alignItems={"center"} direction={props.orientation === "horizontal" ? "row": "column"} spacing={2}>
        <img style={{width:"60px", height:"60px", borderRadius:"100px", border:"2px white solid"}} src= {img_src} alt={link_text} />
        <Link to={url}>{link_text}</Link>
        </Stack>
    )
};

export const SmallTrackCard = (props:TrackCardProps) => {
let image_url = props.album_art_url
let trackname = props.trackname
let player_url = props.player_url
return (
    <SmallCard orientation={props.orientation} link_text={trackname} link_url={player_url} img_src={image_url}/>
)
}

export const SmallAlbumCard = (props:AlbumCardProps) => {
let albumname = props.albumname
let url = "/album/" + albumname
let album_art_url = props.album_art_url

return (
    <SmallCard orientation={props.orientation} link_text={albumname} link_url={url} img_src={album_art_url}/>
)
}

export const SmallArtistCard = (props:ArtistCardProps) => {
let artistname = props.artistname
let artist_photo_url = props.artist_photo_url
let url = "/artist/" + artistname
return (
    <SmallCard orientation={props.orientation} link_text={artistname} link_url={url} img_src={artist_photo_url}/>
)
}

export const TrackCard = (props:TrackCardProps) => {
let image_url = props.album_art_url
let trackname = props.trackname
let player_url = props.player_url
return (
    <Card orientation={props.orientation} link_text={trackname} link_url={player_url} img_src={image_url}/>
)
}

export const AlbumCard = (props:AlbumCardProps) => {
let albumname = props.albumname
let url = "/album/" + albumname
let album_art_url = props.album_art_url

return (
    <Card orientation={props.orientation} link_text={albumname} link_url={url} img_src={album_art_url}/>
)
}

export const ArtistCard = (props:ArtistCardProps) => {
let artistname = props.artistname
let artist_photo_url = props.artist_photo_url
let url = "/artist/" + artistname
return (
    <Card orientation={props.orientation} link_text={artistname} link_url={url} img_src={artist_photo_url}/>
)
}