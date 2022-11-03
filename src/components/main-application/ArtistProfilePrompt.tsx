import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import * as gif from '../../assets/background-active-link.gif';
import { MarginOutlined, ProductionQuantityLimitsSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AlbumCard, ArtistCard, TrackCard } from './ArtistCards';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { width } from '@mui/system';

interface ArtistPromptProps {
    artistname: string
    artistabout: string
  }
  
  export interface ArtistPromptLinkProps {
    text: string,
    link: string,
    variant: "text" | "outlined" | "contained" | undefined
  }

  
 const ArtistPrompt = (props: ArtistPromptProps) => {
  
    return (
      <Stack display="flex" direction={"column"} width={"100%"} borderLeft="2px solid blue" borderRight="2px solid blue" borderTop="2px solid blue" borderRadius={"5%"} paddingLeft={"5%"} marginLeft={"0px"} paddingRight={"5%"} >

        <Stack  display="flex" justifyContent={"center"} alignItems={"stretch"} color="red" direction="column" spacing = {5}>
          <img style={{position: "relative", top:"-100px", borderRadius:"50%", borderBottom:"5px solid #87CEEB" , width:'200px', height:'200px', alignSelf:"center"}} src={'https://www.dpforwhatsapp.in/img/no-dp-images/7.webp'} alt="" />
          <h1 style={{color:"black",position: "relative", top:"-100px", marginBottom:"0px", textAlign:"center", borderBottom:"3px solid #87CEEB", borderRadius:"10%"}}>{props.artistname}</h1>
          
          <h3 style={{color:"black",position: "relative", top:"-100px", marginBottom:"0px", textAlign:"center"}}>{props.artistabout}</h3>

          <Stack display={"flex"} direction={"row"} justifyContent={"center"}>
            <h5 style={{color:"black",position: "relative", top:"-50px", margin: "0px 10% 0px 0%", left:"-10%", textAlign:"center"}}> From His Own mother </h5>

            <h5 style={{color:"black",position: "relative", top:"-50px", margin: "0px 0% 0px 10%", right:"-10%", textAlign:"center"}}> Record Label </h5>
          </Stack>

        </Stack>
        <Stack display={"flex"} direction="column" border="2px solid black" borderRadius={'20px'}>
          <Stack display="flex" direction="row" margin={"0px"} >
            
            <Stack width="100%" display="flex" direction="column" margin ='5%' marginLeft="0px">
              <h2 style={{color:"black", textAlign:"center", marginBottom:'0px'}}>Followers</h2>
              <h2 style={{color:"black", textAlign:"center", marginTop:"0px" }} >backend</h2>
            </Stack>

            <Stack width="100%" display="flex" direction="column" margin ='5%' marginLeft="0px" >
                
                <h2 style={{color:"black", textAlign:"center", marginBottom:'0px', whiteSpace:'nowrap'}}>Likes</h2>
                <h2 style={{color:"black", textAlign:"center", marginTop:"0px" }} >backend</h2>

                {/* <button type="button" style={{color:"black", textAlign:"center", marginBottom:'0px'}} >Lovers</button> */}
                {/* <IconButton href="" style={{marginTop:'0px', borderRadius:'0px', padding:'0px'}}> {<SettingsSuggestIcon/>} </IconButton> */}
                
            </Stack>

          </Stack>



          <Stack display={"flex"} direction={"row"} margin={"2%"} justifyContent={"center"} >
              <IconButton href="" style={{marginTop:'0px',marginRight:'10%', borderRadius:'0px', padding:'0px' }}> {<InstagramIcon fontSize='large'/>} </IconButton>
              <IconButton href="" style={{marginTop:'0px',marginRight:'10%', borderRadius:'0px', padding:'0px'}}> {<FacebookIcon fontSize='large'/>} </IconButton>
              <IconButton href="" style={{marginTop:'0px', borderRadius:'0px', padding:'0px'}}> {<TwitterIcon fontSize='large'/>} </IconButton>
          </Stack>



          <Stack margin={"5%"} padding="2%" marginTop="0px" borderTop="3px solid #87CEEB" borderRadius="10%">
            {/* <h1 style={{color:"black", textAlign:"left", marginTop:'0px', marginBottom:'2%', whiteSpace:'nowrap'}}>My Playlists : </h1> */}
            
          </Stack>
        </Stack>
      </Stack>
      )
  }

  export default ArtistPrompt