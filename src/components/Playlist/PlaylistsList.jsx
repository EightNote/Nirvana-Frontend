import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";

function PlaylistsList(props) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <List
        sx={{
          width: "100vh",
          height: "75vh",
          overflowY: "auto",
        }}
      >
        {props.playlists.map((playlist) => (
          <ListItem>{playlist.name}</ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PlaylistsList;
