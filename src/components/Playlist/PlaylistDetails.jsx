import {
  useGetSpecificPlaylistQuery,
  useGetSpecificPlaylistTracksQuery,
  useGetTrackListQuery,
} from "../../services/musicApi";
import Tracks from "../tracks/Tracks";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { Button, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";

const AddTracksToPlaylist = () => {
  const [track, setTrack] = React.useState(0);
  const { data, isLoading, error } = useGetTrackListQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Some error</p>;
  }
  console.log(data);
  const handleSubmit = () => {
    console.log(track);
  };
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
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Song</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Visibility"
          onChange={(event) => setTrack(event.target.value.title)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((track) => {
            return <MenuItem value={track}>{track.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Button onClick={handleSubmit}>Add To Playlist</Button>
    </Box>
  );
};

const CheckIsOwnedByuser = (props) => {
  const user = useSelector((state) => state.auth.username);
  const { data, isLoading, error } = useGetSpecificPlaylistQuery(props.id);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Some error</p>;
  }

  if (data.createdByUser === user) {
    return <AddTracksToPlaylist />;
  } else {
    return;
  }
};

const PlaylistDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecificPlaylistTracksQuery(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Some error</p>;
  }
  return (
    <div>
      <CheckIsOwnedByuser id={id} />
      <Tracks data={data} />
    </div>
  );
};

export default PlaylistDetails;
