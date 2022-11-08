import React from 'react';
import Icon from '@mui/material/Icon';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HeadsetIcon from '@mui/icons-material/Headset';

import gpt3Logo from '../../assets/logo1.png'

import './footer.css';

import Main from "../../components/devs/main"

const Footer = () => (

  <div className="gpt3__footer section__padding">
    <br />
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo" >
        <img style={{width:"50%", height:"30%"}} src={gpt3Logo} alt="gpt3_logo" />
        <h3 style={{color:"white"}}>Nirvana <br/> The Soul Of Music <br /></h3>
      </div>
      <div className="gpt3__footer-links_div" style={{marginRight:"40%"}}>
        <hr style={{color:"white" , marginBottom:"10%"}}/>
        
        <h3 style={{marginBottom:"10%", color:"white"}}>Get in touch</h3>
        <div style={{ display: 'flex', flexDirection:'row', height:'fit-content'}}>
          <Icon>
          <HeadsetIcon style={{color:"white", fontSize:'large', marginBottom:'85%'}}></HeadsetIcon>
            {/* <CallIcon  ></CallIcon> */}
          </Icon>
          <h4 style={{marginLeft:'10px'}}>Nirvana Community</h4>
        </div> 
        
        <div style={{ display: 'flex', flexDirection:'row', height:'fit-content'}}>
          <Icon>
            <CallIcon style={{color:"white", fontSize:'large', marginBottom:'25%'}}></CallIcon>
          </Icon>
          <p style={{marginLeft:'10px'}}>9990622361</p>
        </div>
        <div style={{ display: 'flex', flexDirection:'row'}}>
        <Icon >
          <EmailIcon style={{color:'white'}}></EmailIcon>
        </Icon>
        <p style={{marginLeft:'10px' }} onClick={(e) => {
          window.location.href = "mailto:nirvana.music.soul@gmail.com";
          e.preventDefault();
        }}>nirvana.music.soul@gmail.com</p>
        </div>
        
      </div>
      
    </div>
  </div>
);

export default Footer;
