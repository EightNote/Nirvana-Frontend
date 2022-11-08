import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";


export default function CreateTrack(props) {
  const [title, setTitle] = React.useState("");
  const [trackLength, setTrackLength] = React.useState(0);
  const [explicit, setExplicit] = React.useState(false);
  const [writer, setWriter] = React.useState("");
  const [composer, setComposer] = React.useState("");
  const [producer, setProducer] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  const [album, setAlbum] = React.useState(props.album_id);

  const addTrackToAlbum = (e) => {
    e.preventDefault();
    let body = {
      title: title,
      trackLength: trackLength,
      explicit: explicit,
      writer: writer,
      composer: composer,
      producer: producer,
      lyrics: lyrics,
      album_id: album,
    };
    triggerCreate(body).then((data) => {
      let path = "/playlists/" + data.data.id;
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
          label="Title"
          helperText="Enter name of Track"
          placeholder="Track Name"
          onChange={(event) => setTitle(event.target.value)}
          variant="standard"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Duration"
          helperText="Enter duration of Track"
          placeholder="Duration in seconds"
          onChange={(event) => setTrackLength(parseInt(event.target.value))}
          variant="standard"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Writer"
          helperText="Enter writer of Track"
          placeholder="Writer"
          onChange={(event) => setWriter(event.target.value)}
          variant="standard"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Producer"
          helperText="Enter producer of Track"
          placeholder="Producer"
          onChange={(event) => setProducer(event.target.value)}
          variant="standard"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Composer"
          helperText="Enter composer of Track"
          placeholder="Composer"
          onChange={(event) => setComposer(event.target.value)}
          variant="standard"
        />
        <TextField
          multiline
          id="outlined-helperText"
          label="Lyrics"
          helperText="Enter lyrics of Track"
          placeholder="Lyrics"
          onChange={(event) => setLyrics(event.target.value)}
          variant="standard"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={explicit}
            label="Visibility"
            onChange={(event) => setExplicit(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={true}>True</MenuItem>
            <MenuItem value={false}>False</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button onClick={addTrackToAlbum} variant="contained">
        Add Track To Album
      </Button>
    </div>
  );
}
