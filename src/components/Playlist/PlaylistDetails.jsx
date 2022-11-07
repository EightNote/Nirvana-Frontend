import { useGetSpecificPlaylistTracksQuery } from "../../services/musicApi";
import Tracks from "../tracks/Tracks";
import {
    useParams,
  } from "react-router-dom";

const PlaylistDetails = () => {
    const { id } = useParams();
    const {data, isLoading, error} =useGetSpecificPlaylistTracksQuery(id)
    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>Some error</p>)
    }
    return (
        <div>
                <Tracks data={data}/>
        </div>
    );
}

export default PlaylistDetails;