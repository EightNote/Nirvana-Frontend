import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LikeButton from '../Buttons/LikeButton';
import PlayButton from '../Buttons/PlayButton'
import { Box } from '@mui/system';

export default function Tracks(data) {
    // pass data as list of tracks
    console.log(data)
    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center", margin:"2%", marginTop:"0px", marginBottom : '5%'}}>
        <h1 style={{color:"white", marginBottom:"0px",width:"53%",textAlign:"center", borderRadius:"5px", padding:"1%"}}>All Tracks</h1>
        <Box sx={{
            bgcolor: 'white',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}>
        <List sx={{
            width: '100vh',
            height: '75vh',
            overflowY: 'auto'
        }}>
            {data.data.map((track) => {
                return (
                    <div>
                    <ListItem key={track.title}>
                        <ListItemButton role={undefined} dense
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: "20px",
                            }}>
                            <PlayButton title={track.title} edge="start" aria-label="play" />
                            <ListItemText
                                // className={styles.list}
                                primary={track.title}
                                // secondary={<div color='white'>{track.track.album.album_title}</div>}
                                />
                            {/* <ListItemText className={styles.list} >{track.album.album_title}</ListItemText>  */}

                            <ListItemIcon>
                                <LikeButton
                                    title={track.title}
                                    edge="end"
                                />
                                {/* <TrackActions/> */}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    </div>
                );
            })}
        </List>
        </Box>
        </div>
    );
}