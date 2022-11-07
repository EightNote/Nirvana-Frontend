import { useGetSpecificTrackQuery } from "../../services/musicApi.js";
import { selectIsPlaying, addPlayTrack, selectCurrentTrackData } from "../../feature/musicSlice.js";
import IconButton from '@mui/material/IconButton';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



const PlayButton = (props) => {
    var trackTitle = props.trackTitle
    console.log(trackTitle)
    const dispatch = useDispatch()
    const isPlaying = useSelector(selectIsPlaying)
    const currentTrack = useSelector(selectCurrentTrackData)
    const currentTrackId = (currentTrack !== undefined) ? currentTrack.title : -1
    const { data, isLoading, error } = useGetSpecificTrackQuery(trackTitle)

    function playHandler() {
        console.log(currentTrackId)
        console.log("Clicked play")
        dispatch(addPlayTrack(data))
    }

    if (isLoading) {
        return (
            <HourglassEmptyIcon />
        )
    }

    if (error) {
        console.log(error)
        return (
            <ErrorRoundedIcon />
        )
    }

    return (
        <IconButton aria-label="play" onClick={playHandler}>
            {(isPlaying && trackTitle === currentTrackId) ? <PauseCircleRoundedIcon /> : <PlayCircleRoundedIcon />}
        </IconButton>
    )
}

export default PlayButton