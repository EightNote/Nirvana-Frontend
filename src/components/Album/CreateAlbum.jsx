import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useCreateAlbumMutation, useGetGenreListQuery } from "../../services/musicApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateAlbum() {
  const user = useSelector((state) => state.auth.username);
  let navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [artist, setArtists] = React.useState(user);
  const [genre, setGenre] = React.useState(0);
  const [triggerCreate] = useCreateAlbumMutation();
  const { data, isLoading, error } = useGetGenreListQuery();

  if (error) return;
  if (isLoading) return;

  const createAlbum = (e) => {
    e.preventDefault();
    let body = { album_title: title, album_logo: logo, artist_id: artist, genre_id: genre };
    triggerCreate(body).then((data) => {
        console.log(data)
      let path = "/albums/" + data.data;
      navigate(path);
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
          helperText="Enter name of Album"
          placeholder="Album Name"
          onChange={(event) => setTitle(event.target.value)}
          variant="standard"
        />
        <TextField
          labelId="create-playlist-description"
          id="standard-textarea"
          label="Logo"
          placeholder="Logo URL"
          multiline
          onChange={(event) => setLogo(event.target.value)}
          variant="standard"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Visibility"
            onChange={(event) => {
              console.log(event.target.value);
              setGenre(event.target.value.id);
            }}
          >
            <MenuItem key="0" value="">
              <em>None</em>
            </MenuItem>
            {data.map((genre) => {
              return (
                <MenuItem key={genre.name} value={genre}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={createAlbum} variant="contained">
        Create Album
      </Button>
    </div>
  );
}
