import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";
import { useGetMyPlaylistQuery } from "../../services/musicApi";

export default function MyPlaylists() {
    const {data, isLoading, error} = useGetMyPlaylistQuery()

    return (<PlaylistDetails playlists={data} is_user={true}/>)
}