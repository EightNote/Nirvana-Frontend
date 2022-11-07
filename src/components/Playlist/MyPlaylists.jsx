import * as React from "react";
import PlaylistDetails from "./PlaylistDetails";
import { useGetUserPlaylistsQuery } from "../../services/musicApi";
import { useSelector } from "react-redux";

export default function MyPlaylists() {
    const user = useSelector((state) => state.auth.username);
    const {data, isLoading, error} = useGetUserPlaylistsQuery(user)

    return (<PlaylistDetails playlists={data} is_user={true}/>)
}