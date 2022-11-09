import { useState, useEffect, skipToken } from "react";
import { useIsLikedQuery, useToggleLikeSongMutation, useUnlikeSongMutation } from "../../services/musicApi";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios'


const LikeButton = (props) => {
    const [like, setLike] = useState(skipToken)
    useEffect(() => {
        axios.get("http://localhost:8080/tracks/is-liked-by/" + props.title).then((res) => {
            setLike(res.data);
            console.log("jad")
        })
        console.log(props.title)
    }, [])

    const [toggleLike, resultLike] = useToggleLikeSongMutation()
    const { data: likeStatus, isLoading, isError } = useIsLikedQuery(props.title)

    useEffect(() => {
        console.log(props.title + " " + likeStatus)
        if (likeStatus) {
            setLike(true)
        }
    }, [likeStatus, props])



    function likeHandler() {
        if (like === false) {
            setLike(true)

        } else {
            setLike(false)
        }
        toggleLike(props.title)
    }

    return (
        <IconButton aria-label="like" onClick={likeHandler}>
            {like ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
    )
}

export default LikeButton