import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";

export default function MyPlaylists() {
    const [playlists, setPlaylists] = React.useState([])
    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            user = user.token;
            console.log(user)
        }
        axios
            .get("http://localhost:8080/playlist/my/", {
                headers: {
                    Authorization: "Bearer " + user, //the token is a variable which holds the token
                },
            })
            .then((response) => {
                setPlaylists(response.data);
            });
    }, []);
    console.log(playlists)
    return (<PlaylistDetails playlists={playlists} is_user={true}/>)
}