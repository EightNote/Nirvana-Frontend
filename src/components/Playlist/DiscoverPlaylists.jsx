import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";

export default function DiscoverPlaylists() {
    const [playlists, setPlaylists] = React.useState([])
    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            user = user.token;
            console.log(user)
        }
        axios
            .get("http://localhost:8080/playlist/all/", {
                headers: {
                    Authorization: "Bearer " + user, //the token is a variable which holds the token
                },
            })
            .then((response) => {
                setPlaylists(response.data);
            });
    }, []);
    console.log(playlists)
    return (<PlaylistDetails playlists={playlists} is_user={false}/>)
}