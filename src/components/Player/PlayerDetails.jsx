import { useSelector } from "react-redux";
import { selectCurrentTrackData } from "../../feature/musicSlice";
import Stack from '@mui/material/Stack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import styles from './PlayerDetails.module.css'
import LikeButton from "../Buttons/LikeButton";

function PlayerDetails() {
    const track = useSelector(selectCurrentTrackData)

    if (typeof track === 'undefined') {
        return (
            <div className={styles.details}>
                <div className={styles.left}>
                    <div className={styles.verticalcenter}>
                        <HourglassEmptyIcon fontSize="large" />
                    </div>
                </div>
                <div>
                    <div className={styles.right}>
                        <div className={styles.verticalcenter}>
                            {"No Track in Queue"}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.details}>
            <div className={styles.left}>
                <div className={styles.verticalcenter}>
                    <img src="https://nicole.express/assets/img/yellow/control.JPEG" alt="album-art" className={styles.img} />
                    {/* <img src={track.album.album_logo} alt="album-art" className={styles.img} /> */}
                </div>
            </div>
            <div>
                <div className={styles.right}>
                    <div className={styles.verticalcenter}>
                        {track.title} <br />
                        {track.writer}
                        <hr />
                        <Stack direction="row" spacing={1}>
                            <LikeButton trackid={track.title} />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails