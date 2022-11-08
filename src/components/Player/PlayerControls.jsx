import React, { useState } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './rhap.css';
import { useDispatch, useSelector } from "react-redux";
import { nextTrack, prevTrack, playTrack, pauseTrack, selectCurrentTrackData } from "../../feature/musicSlice";
import { useAddToHistoryMutation } from "../../services/musicApi";
import styles from './PlayerControls.module.css'
import { TextField, Typography } from "@mui/material";

const RhapEmpty = (src) => {
    return (
        <div className={styles.player}>
            <AudioPlayer
                autoPlay={false}
                src={src}
                showJumpControls={false}
                showSkipControls={true}
                customAdditionalControls={
                    [
                        RHAP_UI.CURRENT_TIME
                    ]
                }
                customVolumeControls={
                    [
                        RHAP_UI.DURATION
                    ]
                }
                customProgressBarSection={
                    [
                        RHAP_UI.PROGRESS_BAR,
                    ]
                }
            />
        </div>
    )
}

function PlayerControls() {
    const [lastHistory, setLastHistory] = useState(-1)
    const currentTrack = useSelector(selectCurrentTrackData)
    const dispatch = useDispatch()
    const [triggerHistory, resultHistory] = useAddToHistoryMutation()

    if (typeof currentTrack === 'undefined') {
        return (
            <RhapEmpty src={null} />
        )
    }
    const listenHandler = () => {
        if (currentTrack.title !== lastHistory) {
            triggerHistory(currentTrack.title)
            setLastHistory(currentTrack.title)
        }
    }

    return (
        <div className={styles.player} style={{display:"flex", justifyContent:"center", flexDirection:"row",margin:"0px 20px 10px 20px", width: "100%"}}>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"row", width:"80%"}}>
            <Typography style={{wordWrap:"normal", flexBasis:"1", width:"100%", textAlign:"center", padding:"10px"}}>
                {currentTrack.title}
            </Typography>
            <AudioPlayer 
                style={{flexBasis:'3'}}
                autoPlay={false}
                src={"http://localhost:8080/" + currentTrack.audio_file}
                showJumpControls={false}
                showSkipControls={true}
                listenInterval={currentTrack.track_length}
                customAdditionalControls={
                    [
                        RHAP_UI.CURRENT_TIME
                    ]
                }
                customVolumeControls={
                    [
                        RHAP_UI.DURATION
                    ]
                }
                customProgressBarSection={
                    [
                        RHAP_UI.PROGRESS_BAR,
                    ]
                }
                onPlay={() => dispatch(playTrack())}
                onPause={() => dispatch(pauseTrack())}
                onClickPrevious={() => dispatch(prevTrack())}
                onClickNext={() => dispatch(nextTrack())}
                onEnded={() => dispatch(nextTrack())}
                onListen={listenHandler}
            />
            </div>
        </div>
    )
}

export default PlayerControls