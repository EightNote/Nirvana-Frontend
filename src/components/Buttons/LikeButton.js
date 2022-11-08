import { useState, useEffect, skipToken } from "react";
import { useIsLikedQuery, useToggleLikeSongMutation, useUnlikeSongMutation } from "../../services/musicApi";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const LikeButton = (props) => {
    const [like, setLike] = useState(skipToken)

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