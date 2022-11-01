import { useGetAlbumListQuery } from '../../services/musicApi.js';
import { AlbumList } from './AlbumsList.jsx';

export default function Albums() {
    const { data, isLoading, error } = useGetAlbumListQuery()
    if (isLoading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return (<div>Some error</div>)
    }
    console.log(data)
    return (<AlbumList albums={data} />)
}