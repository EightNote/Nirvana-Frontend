import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Card from "../cards/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Hero() {
  const [grid, setGrid] = useState([]);
  const [rend,setRend]=useState("trendingTracks");
  const [data, setData] = useState({ none: false });

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }
    axios
      .get("http://localhost:8080/trending/", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data, "huh");
        var newArr = Array.from(response.data["trendingTracks"]);
        var fin = [];
        while (newArr.length) fin.push(newArr.splice(0, 3));
        setGrid(fin);
      });
  }, []);

  const changeApi = (e: any) => {
    var newArr = Array.from(data[e.target.name]);
    setRend(e.target.name);
    var fin = [];
    while (newArr.length) fin.push(newArr.splice(0, 3));
    setGrid(fin);
    console.log(fin);
  };

  const huh=(item)=>{
    if(rend==="trendingTracks"){
      return <Card title={item.album_title} image={item.album_logo} />;
    }else if(rend==="trendingAlbums"){
      return <Card title={item.album_title} image={item.album_logo} />;
    }else{
      return <Card title={item.username} image={""} />;
    }
  }
  return (
    <Box>
      <ButtonGroup
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button name="trendingTracks" onClick={changeApi}>
          Tracks
        </Button>
        <Button name="trendingAlbums" onClick={changeApi}>
          Album
        </Button>
        <Button name="trendingArtist" onClick={changeApi}>
          Artist
        </Button>
      </ButtonGroup>
      <List
        sx={{
          width: "auto",
          maxWidth: 1360,
          bgcolor: "text.secondary",
          position: "relative",
          overflow: "auto",
          maxHeight: 450,
          "& ul": { padding: 0 },
        }}
        style={{ display: "flex", justifyContent: "center" }}
        subheader={<li />}
      >
        {grid.map((par) => (
          <li>
            <ul>
              {/* <ListSubheader>{``}</ListSubheader> */}
              {par.map((item) => (
                <ListItem>
                  <Card title={""} image={""} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  );
}
