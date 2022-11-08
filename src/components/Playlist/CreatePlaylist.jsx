import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useCreatePlaylistMutation } from "../../services/musicApi";

export default function CreatePlaylist() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [visibility, setVisibility] = React.useState("");
  const [triggerCreate, resultCreate] = useCreatePlaylistMutation();

  const createPlaylist = (e) => {
    e.preventDefault();
    let body = { name: name, description: description, visibility: visibility, type: "user" };
    console.log(body)
    triggerCreate(body)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
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
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"followers_only"}>Followers Only</MenuItem>
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
