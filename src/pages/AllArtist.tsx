import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AllArtist() {
  const [allArtists, setAllArtists] = useState([]);
  const followFunc = (e: any) => {
    console.log(e.target.name);
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }
    axios
      .post("http://localhost:8080/follow?followed_artist=" + e.target.name, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        toast("Follow success! ", e.target.name);
      });
  };
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }
    axios
      .get("http://localhost:8080/user/getAllArtist/", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setAllArtists(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 760,
          bgcolor: "#add8e6",
        }}
        style={{ maxHeight: "600px", overflow: "auto" }}
      >
        {allArtists.map((item) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.username} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.username}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.twitter}
                    </Typography>
                    {item.about}
                  </React.Fragment>
                }
              />
              <Button
                style={{ position: "relative", right: "0" }}
                variant="outlined"
                size="small"
                color="primary"
                name={item.username}
                onClick={followFunc}
              >
                Follow
              </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </div>
  );
}
