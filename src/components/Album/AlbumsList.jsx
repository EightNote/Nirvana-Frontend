import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from "react-router-dom";
import CreateAlbum from './CreateAlbum';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const CheckIsArtist = () => {
    const role = useSelector((state) => state.auth.role);
    if (role === "artist") {
        return <CreateAlbum />;
    } else {
        return;
    }
};

export function AlbumList(props) {
    let navigate = useNavigate();
    const routeChange = (title) => {
        navigate("/albums/" + title);
    }
    return (
        <Box sx={{ background: "white" }}>
            <CheckIsArtist/>
        <ImageList
            cols={3}
            sx={{
                width: "100vw",
                height: "84vh",
                padding: "10px"
            }}>
            {props.albums.map((album) => (
                <ImageListItem key={album.id}
                    sx={{
                        padding: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: "20px",
                    }}>
                    <img
                        src={"http://localhost:8080/Images/Albums/" + album.album_logo}
                        srcSet={"http://localhost:8080/Images/Albums/" + album.album_logo}
                        alt={album.album_title}
                        loading="lazy"
                        onClick={() => routeChange(album.id)}
                    />
                    <ImageListItemBar
                        title={album.album_title}
                        subtitle={album.artist_id}
                        position="below"
                    // actionIcon={<AlbumDetails albumid={album.id} />}
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </Box>
    );
}
