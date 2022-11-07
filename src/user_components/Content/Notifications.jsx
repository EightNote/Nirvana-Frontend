import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
// import { createTheme } from '@mi/system';
// import { createTheme } from '@mui/material/styles';

function Notifications() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <h1 style={{border:"2px solid white",color:"white",fontWeight:"bold",borderRadius:"10px", marginLeft:"40%", width:"fit-content", padding : "2%", backgroundColor:"#1a76d2"}}>Create New Playlist</h1>
    </Box>
  )
}

export default Notifications
