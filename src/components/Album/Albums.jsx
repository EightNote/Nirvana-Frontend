import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { AlbumList } from './AlbumsList.jsx';
import { useGetAlbumListQuery } from "../../services/musicApi.js";


export default function Albums() {
    const { data, isLoading, error } = useGetAlbumListQuery()
    if (isLoading) {
        return (<div>Loading...</div>)
    }
    if (error) {
        return (<div>Some error</div>)
    }
    return (<AlbumList albums={data} />)
}