import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AlbumDetails from './AlbumDetails';


export function AlbumList(props) {
    return (
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
                        src={album.album_logo}
                        srcSet={album.album_logo}
                        alt={album.album_title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={album.album_title}
                        subtitle={album.artist_id}
                        position="below"
                        actionIcon={<AlbumDetails albumid={album.id} />} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
