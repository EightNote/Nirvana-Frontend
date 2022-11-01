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
                        height: "30px",
                        width: "30px"
                    }}>
                    <img
                        src={album.album_logo}
                        srcSet={album.album_logo}
                        alt={album.album_title}
                        loading="lazy"
                        height="30"
                        width="30"
                    />
                    <ImageListItemBar
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            borderRadius: "20px",
                        }}
                        title={album.album_title}
                        subtitle={album.artist_id}
                        actionIcon={<AlbumDetails albumid={album.id} />} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
