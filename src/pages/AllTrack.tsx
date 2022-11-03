import Stack from "@mui/material/Stack";
import * as React from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import TrackCard from "../components/tracks/TrackCard";
import List from "@mui/material/List";
import { useEffect } from "react";
import { json } from "stream/consumers";

const style = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

export default function AlignItemsList() {
  const [songs, setSongs] = React.useState([]);

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }
    axios
      .get("http://localhost:8080/tracks/all", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setSongs(response.data);
        console.log(response.data);
      });
  }, []);

  const theme = useTheme();
  return (
    <Stack spacing={2} justifyContent={"center"} alignItems={"centre"}>
      {songs.map((song) => (
        <List sx={style} component="nav" aria-label="mailbox folders">
          <TrackCard
            id={song.id}
            title={song.title}
            audio_file={song.audio_file}
            track_length={song.track_length}
            writer={song.writer}
          />
        </List>
      ))}
    </Stack>
  );
}
