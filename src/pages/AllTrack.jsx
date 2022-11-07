import { useGetTrackListQuery } from "../services/musicApi";
import Tracks from "../components/tracks/Tracks";


export default function AlignItemsList() {
  const {data, isLoading, error} =useGetTrackListQuery()
    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>Some error</p>)
    }

  return (
    <Tracks data={data} />
  );
}
