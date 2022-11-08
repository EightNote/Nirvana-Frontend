import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function PlaylistsList(props) {
  let navigate = useNavigate();
    const routeChange = (id) => {
        let path = "/playlists/" + id;
        navigate(path);
    }
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
          <ListItem onClick={() => routeChange(playlist.id)}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={playlist.name}
            // secondary={`${playlist.name}` ? 'Secondary text' : null}
          />
        </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PlaylistsList;
