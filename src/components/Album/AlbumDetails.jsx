import * as React from "react";
import {
  useParams,
} from "react-router-dom";

import Tracks from "../tracks/Tracks";
import { useGetSpecificAlbumQuery } from "../../services/musicApi";

function AlbumDetails() {
    const { id } = useParams();
    const {data, isLoading, error} = useGetSpecificAlbumQuery(id)
    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>Some error</p>)
    }
    return (
        <Tracks data={data}/>
    );
}

export default AlbumDetails;