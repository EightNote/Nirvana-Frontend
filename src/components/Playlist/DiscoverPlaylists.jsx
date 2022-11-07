import * as React from "react";
import { useGetAllPlaylistsQuery } from "../../services/musicApi";
import PlaylistsList from "./PlaylistsList";

export default function DiscoverPlaylists() {
    const {data, isLoading, error} =useGetAllPlaylistsQuery();
    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>Some error</p>)
    }
    return (<PlaylistsList playlists={data} is_user={false}/>)
}