import * as React from "react";
import PlaylistsList from "./PlaylistsList";
import { useGetUserPlaylistsQuery } from "../../services/musicApi";
import { useSelector } from "react-redux";

export default function MyPlaylists() {
    const user = useSelector((state) => state.auth.username);
    const {data, isLoading, error} = useGetUserPlaylistsQuery(user)

    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>Some error</p>)
    }

    return (<PlaylistsList playlists={data} is_user={true}/>)
}