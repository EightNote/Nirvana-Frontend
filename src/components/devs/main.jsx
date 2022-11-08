import React from 'react'
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Divider } from '@mui/material';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import pic from "../../assets/shukapurv.jpeg"
import AmitPic from "../../assets/Amit2.jpg"
import VivekPic from "../../assets/vivek.jpg"

const Main = () => {
    return (
        <div class="container" style={{ backgroundColor: "031b34",marginBottom: "25px",paddingTop: "0px"}}>
        <Divider style={{backgroundColor: "#ffff",width:"100%"}}/>
            <div className="gpt3__blog-heading">
                {/* <h1 className="gradient__text"> Meet <br /> Our Developers</h1> */}
                <h1 className="gradient__text"> Meet <br /> The Developers</h1>
            </div>
            <div class="row" style={{ backgroundColor: "031b34" }}>
                <div class="col-md-4 col-sm-6" style={{ backgroundColor: "031b34" }}>
                    <div class="our-team" style={{ backgroundColor: "031b34" }}>
                        <div class="pic">
                            <img src={AmitPic} alt="team member" class="img-responsive" style={{height:"60vh",width:"30vh", marginRight:"500px"}} />
                        </div>
                        <div class="content">
                            <h3 class="title">Amit Kumar Patel</h3>
                            <span class="post">Nirvana Developer</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/amit-kumar-patel-2822a6200/" class="fa fa-facebook"><BsLinkedin /></a></li>
                                <li><a href="https://github.com/short-circuit-67" class="fa fa-twitter"><BsGithub/></a></li>
                                <li><a href="https://www.instagram.com/amit_shew/?next=%2F" class="fa fa-linkedin"><BsInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={pic} alt="team member" class="img-responsive" style={{height:"60vh",width:"30vh",marginRight:"500px"}}/>
                        </div>
                        <div class="content">
                            <h3 class="title">Apoorve shukla</h3>
                            <span class="post">Nirvana Developer</span>
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
                        <img src={VivekPic} alt="team member" class="img-responsive" style={{height:"60vh",width:"30vh", marginRight:"500px"}} />
                        </div>
                        <div class="content">
                            <h3 class="title">Vivek Kumar</h3>
                            <span class="post">Nirvana Developer</span>
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