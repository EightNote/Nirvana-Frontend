import React from 'react';

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
        <h4>Get in touch</h4>
        <p>Apoorve Bhosdika</p>
        <p>812389109</p>
        <p>apoorvebhadwa@gmail.com</p>
      </div>
      
    </div>
  </div>
);

export default Footer;
