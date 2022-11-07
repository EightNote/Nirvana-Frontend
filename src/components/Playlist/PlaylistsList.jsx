import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

function PlaylistsList(props) {
  let navigate = useNavigate();
    const routeChange = (id) => {
        let path = "/playlist/" + id;
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
