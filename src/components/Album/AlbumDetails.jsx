import * as React from "react";
import { useParams } from "react-router-dom";

import Tracks from "../tracks/Tracks";
import { useGetSpecificAlbumQuery } from "../../services/musicApi";
import { useSelector } from "react-redux";
import CreateTrack from "../tracks/CreateTrack";
import { useGetAlbumDetailsQuery } from "../../services/musicApi";

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
    <div>
      <CheckIsArtist id={id} />
      <Tracks data={data} />
    </div>
  );
}

export default AlbumDetails;
