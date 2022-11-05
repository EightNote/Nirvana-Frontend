import React from 'react'
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Main = () => {
    return (
        <div class="container" style={{ backgroundColor: "031b34"}}>
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
                                <li><a href="#" class="fa fa-facebook"></a></li>
                                <li><a href="#" class="fa fa-twitter"></a></li>
                                <li><a href="#" class="fa fa-linkedin"></a></li>
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
                                <li><a href="#" class="fa fa-facebook"></a></li>
                                <li><a href="#" class="fa fa-twitter"></a></li>
                                <li><a href="#" class="fa fa-linkedin"></a></li>
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
                                <li><a href="#" class="fa fa-facebook"></a></li>
                                <li><a href="#" class="fa fa-twitter"></a></li>
                                <li><a href="#" class="fa fa-linkedin"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;