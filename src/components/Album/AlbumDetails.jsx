import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, skipToken } from "react";
import axios from "axios";
import Tracks from "../tracks/Tracks";
import { useGetSpecificAlbumQuery, useIsAlbumLikedQuery, useToggleLikeAlbumMutation } from "../../services/musicApi";
import { useSelector } from "react-redux";
import CreateTrack from "../tracks/CreateTrack";
import { useGetAlbumDetailsQuery } from "../../services/musicApi";
import { Box } from "@mui/system";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const CheckIsArtist = (props) => {
  const user = useSelector((state) => state.auth.username);
  const { data, isLoading, error } = useGetAlbumDetailsQuery(props.id);
  if (isLoading) return;
  if (error) return;
  if (user === data.artist_id) {
    return <CreateTrack album_id={props.id} />;
  } else {
    return;
  }
};

const AlbumLike = (props) => {
  const [like, setLike] = useState(skipToken);
  useEffect(() => {
    axios.get("http://localhost:8080/albums/is-liked-by/" + props.id).then((res) => {
      setLike(res.data);
    });
    console.log(props.id);
  }, []);

  const [toggleLike, resultLike] = useToggleLikeAlbumMutation();
  const { data: likeStatus, isLoading, isError } = useIsAlbumLikedQuery(props.id);

  useEffect(() => {
    console.log(props.id + " " + likeStatus);
    if (likeStatus) {
      setLike(true);
    }
  }, [likeStatus, props]);

  function likeHandler() {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
    toggleLike(props.id);
  }

  return (
    <IconButton aria-label="like" onClick={likeHandler}>
      {like ? <FavoriteIcon style={{color:"white"}} /> : <FavoriteBorderOutlinedIcon style={{color:"white"}} />}
    </IconButton>
  );
};

const AlbumHeader = (props) => {
  const { data, isLoading, error } = useGetAlbumDetailsQuery(props.id);
  if (isLoading) return;
  if (error) return;
  return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
      <p>
        <h1 style={{ color: "white" }}> {data.album_title}</h1>
        <h5 style={{ color: "orange" }}>{data.artist_id}</h5>
      </p>

        <AlbumLike id={props.id} />
    </Box>
  );
};

function AlbumDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecificAlbumQuery(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Some error</p>;
  }
  return (
    <Box>
      <AlbumHeader id={id} />

      <CheckIsArtist id={id} />

      <Tracks data={data} />
    </Box>
  );
}

export default AlbumDetails;
