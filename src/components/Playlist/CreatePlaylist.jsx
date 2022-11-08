import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useCreatePlaylistMutation } from "../../services/musicApi";
import { useNavigate } from "react-router-dom";

export default function CreatePlaylist() {
  let navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [visibility, setVisibility] = React.useState("");
  const [triggerCreate, {data}] = useCreatePlaylistMutation();

  const createPlaylist = (e) => {
    e.preventDefault();
    let body = { name: name, description: description, visibility: visibility, type: "user" };
    triggerCreate(body).then((data) => {
      let path = "/playlists/" + data.data.id;
      navigate(path)
    })
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-helperText"
          label="Name"
          helperText="Enter name of Playlist"
          placeholder="Playlist Name"
          onChange={(event) => setName(event.target.value)}
          variant="standard"
        />
        <TextField
          labelId="create-playlist-description"
          id="standard-textarea"
          label="Description"
          placeholder="Playlist Description"
          multiline
          onChange={(event) => setDescription(event.target.value)}
          variant="standard"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={visibility}
            label="Visibility"
            onChange={(event) => setVisibility(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"public"}>Public</MenuItem>
            <MenuItem value={"private"}>Private</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button onClick={createPlaylist} variant="contained">
        Create Playlist
      </Button>
    </div>
  );
}
