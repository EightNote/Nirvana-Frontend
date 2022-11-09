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
      <div style={{display:"flex", marginLeft:"20%", marginTop:"2%", marginBottom:"0px"}}>
        <h1 style={{color:'white'}}> Name </h1>
        <h5 style={{color:'orange', marginTop:"1.3%", marginLeft:"2%"}}>By Artist</h5>
      </div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", margin:"2%", marginTop:"0px", marginBottom : '5%'}}>
    
        <CheckIsArtist id={id} />

        <Tracks data={data} />
      </div>
    </div>
  );
}

export default AlbumDetails;
