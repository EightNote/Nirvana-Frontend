import React from 'react'
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Divider } from '@mui/material';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import pic from "../../assets/shukapurv.jpeg"

const Main = () => {
    return (
        <div class="container" style={{ backgroundColor: "031b34",marginBottom: "25px",paddingTop: "0px"}}>
        <Divider style={{backgroundColor: "#ffff",width:"100%"}}/>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text"> Meet <br /> Our Developers</h1>
            </div>
            <div class="row" style={{ backgroundColor: "031b34" }}>
                <div class="col-md-4 col-sm-6" style={{ backgroundColor: "031b34" }}>
                    <div class="our-team" style={{ backgroundColor: "031b34" }}>
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/157646/title-photo-logo-shirt-157646.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="team member" class="img-responsive" />
                        </div>
                        <div class="content">
                            <h3 class="title">Peter Johns</h3>
                            <span class="post">Web Developer</span>
                            <ul class="social">
                                <li><a href="#" class="fa fa-facebook"><BsLinkedin /></a></li>
                                <li><a href="#" class="fa fa-twitter"><BsGithub/></a></li>
                                <li><a href="#" class="fa fa-linkedin"><BsInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={pic} alt="team member" class="img-responsive" style={{height:"60vh",width:"30vh"}}/>
                        </div>
                        <div class="content">
                            <h3 class="title">Apoorve shukla</h3>
                            <span class="post">Full stack Developer</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/apoorve-shukla-792b761ba/" class="fa fa-facebook"><BsLinkedin /></a></li>
                                <li><a href="https://github.com/shukapurv" class="fa fa-twitter"><BsGithub/></a></li>
                                <li><a href="#" class="fa fa-linkedin"><BsInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/157646/title-photo-logo-shirt-157646.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="team member" class="img-responsive" />
                        </div>
                        <div class="content">
                            <h3 class="title">Peter Johns</h3>
                            <span class="post">Web Developer</span>
                            <ul class="social">
                                <li><a href="#" class="fa fa-facebook"><BsLinkedin /></a></li>
                                <li><a href="#" class="fa fa-twitter"><BsGithub/></a></li>
                                <li><a href="#" class="fa fa-linkedin"><BsInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;