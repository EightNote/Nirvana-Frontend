import * as React from "react";
import PlaylistsList from "./PlaylistsList";
import { useGetUserPlaylistsQuery } from "../../services/musicApi";
import { useSelector } from "react-redux";
import { ErrorOutlineTwoTone } from "@mui/icons-material";

export default function MyPlaylists() {
    const user =  useSelector((state) => state.auth.username)
    // const user = useSelector((state) =>);
    const {data, isLoading, error} = useGetUserPlaylistsQuery(user)

    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        console.log(error)
        return (<p>Some error</p>)
    }

    console.log(data)

    return (<PlaylistsList playlists={data} is_user={true}/>)
}