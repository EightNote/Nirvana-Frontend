import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { AlbumList } from './AlbumsList.jsx';


export default function Albums() {
    const [albums, setAlbums] = React.useState([]);
    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            user = user.token;
            console.log(user)
        }
        axios
            .get("http://localhost:8080/albums/all/", {
                headers: {
                    Authorization: "Bearer " + user, //the token is a variable which holds the token
                },
            })
            .then((response) => {
                setAlbums(response.data);
            });
    }, []);
    console.log(albums)
    return (<AlbumList albums={albums} />)
}