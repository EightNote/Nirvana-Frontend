import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import * as gif from '../../assets/background-active-link.gif'
import { ProductionQuantityLimitsSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { width } from '@mui/system';

interface UserPromptProps {
    username: string
  }
  
  export interface UserPromptLinkProps {
    text: string,
    link: string,
    variant: "text" | "outlined" | "contained" | undefined
  }
  
 const UserPrompt = (props: UserPromptProps) => {
  
    return (
      <Stack display="flex" direction={"column"} width={"100%"} borderLeft="2px solid blue" borderRight="2px solid blue" borderTop="2px solid blue" borderRadius={"5%"} paddingLeft={"5%"} paddingRight={"5%"} >

        <Stack  display="flex" justifyContent={"center"} alignItems={"stretch"} color="red" direction="column" spacing = {5}>
          <img style={{position: "relative", top:"-100px", borderRadius:"50%", borderBottom:"5px solid #87CEEB" , width:'200px', height:'200px', alignSelf:"center"}} src={'https://www.dpforwhatsapp.in/img/no-dp-images/7.webp'} alt="" />
          <h1 style={{color:"black",position: "relative", top:"-100px", marginBottom:"0px", textAlign:"center", borderBottom:"3px solid #87CEEB", borderRadius:"10%"}}>{props.username}</h1>
        </Stack>
        <Stack display={"flex"} direction="column" border="2px solid black" borderRadius={'20px'}>
          <Stack display="flex" direction="row" margin={"0px"} >
            <Stack width="100%" display="flex" direction="column" margin ='5%' marginLeft="0px">
              <h2 style={{color:"black", textAlign:"center", marginBottom:'0px'}}>Favourite Artist</h2>
              <h2 style={{color:"black", textAlign:"center", marginTop:"0px" }} >69</h2>
            </Stack>
            <Stack width="100%" display="flex" direction="column" margin ='5%' marginLeft="0px" >
                <h2 style={{color:"black", textAlign:"center", marginBottom:'0px', whiteSpace:'nowrap'}}>Privacy Issues ?</h2>
                {/* <button type="button" style={{color:"black", textAlign:"center", marginBottom:'0px'}} >CHANGE PASSWORD</button> */}
                <IconButton href="" style={{marginTop:'0px', borderRadius:'0px', padding:'0px'}}> {<SettingsSuggestIcon/>} </IconButton>
            </Stack>
          </Stack>
          <Stack margin={"5%"} padding="2%" marginTop="0px" borderTop="3px solid #87CEEB" borderRadius="10%">
            <h1 style={{color:"black", textAlign:"left", marginTop:'0px', marginBottom:'2%', whiteSpace:'nowrap'}}>My Playlists : </h1>
            
          </Stack>
        </Stack>
      </Stack>
      )
  }

  export default UserPrompt