import * as React from "react";
import EventImage from "../../assets/events.png"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import TrackCard from "../tracks/TrackCard";

function AlbumDetails() {
    const { title } = useParams();
    const [tracks, setTracks] = React.useState([]);
    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            user = user.token;
            console.log(user)
        }
        axios
            .get("http://localhost:8080/albums/album/" + title, {
                headers: {
                    Authorization: "Bearer " + user, //the token is a variable which holds the token
                },
            })
            .then((response) => {
                console.log(response.data)
                setTracks(response.data);
            });
    }, []);
    return (
        <div>
            {tracks.map((track)=> (
                <TrackCard props={track}/>
            ))}
        </div>
    );
}

export default AlbumDetails;