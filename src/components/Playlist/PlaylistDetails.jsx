import { useGetSpecificPlaylistQuery, useGetSpecificPlaylistTracksQuery } from "../../services/musicApi";
import Tracks from "../tracks/Tracks";
import {
    useParams,
  } from "react-router-dom";
  import { useSelector } from "react-redux";

const PlaylistDetails = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.auth.username);
    const {dataP, isLoadingP, errorP} = useGetSpecificPlaylistQuery(id);
    const {data, isLoading, error} =useGetSpecificPlaylistTracksQuery(id);
    if (isLoading || isLoadingP) {
        return (<p>Loading...</p>)
    }
    if (error || errorP) {
        return (<p>Some error</p>)
    }
    return (
        <div>
                <Tracks data={data}/>
        </div>
    );
}

export default PlaylistDetails;