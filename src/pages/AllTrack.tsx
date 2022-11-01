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

const api = async (token) => {
  await fetch("http://localhost:8080/tracks/", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json",
    },
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

export default function AlignItemsList() {
  const [token, setToken] = React.useState("");
  const [songs, setSongs] = React.useState([]);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("user")).token);
    api(token);
  }, []);

  const theme = useTheme();
  return (
    <Stack spacing={2} justifyContent={"center"} alignItems={"centre"}>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <TrackCard />
      </List>
    </Stack>
  );
}
