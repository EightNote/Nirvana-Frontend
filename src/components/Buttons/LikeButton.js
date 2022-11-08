import { useState, useEffect, skipToken } from "react";
import { useIsLikedQuery, useLikeSongMutation, useUnlikeSongMutation } from "../../services/musicApi";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const LikeButton = (props) => {
    const [like, setLike] = useState(skipToken)

    const [triggerLike, resultLike] = useLikeSongMutation()
    const [triggerUnlike, resultUnlike] = useUnlikeSongMutation()
    const { data: likeStatus, isLoading, isError } = useIsLikedQuery(props.title)

    useEffect(() => {
        console.log(props.title + " " + likeStatus)
        if (likeStatus) {
            setLike(true)
        }
    }, [likeStatus, props])

    function likeHandler() {
        if (like === false) {
            triggerLike(props.title)
            setLike(true)
        } else {
            triggerUnlike(props.title)
            setLike(false)
        }
    }

    return (
        <IconButton aria-label="like" onClick={likeHandler}>
            {like ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
    )
}

export default LikeButton