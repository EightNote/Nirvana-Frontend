import React from "react";

import Article from '../new/article/Article';
import Brand from '../new/brand/Brand';
import CTA from '../new/cta/CTA';
import Navbar from '../new/navbar/Navbar';

import Blog from '../containers/blog/Blog';
import Features from '../containers/features/Features';
import Footer from '../containers/footer/Footer';
import Header from '../containers/header/Header';
import Possibility from '../containers/possibility/Possibility';
import WhatGPT3 from '../containers/whatGPT3/WhatGPT3';
import PlayerControls from "../components/Player/PlayerControls";
import "./new.css";
import Main from "../components/devs/main"

const New = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
      <PlayerControls/>
    </div>
    <Brand />
    <WhatGPT3 />
    {/* <Features /> */}
    <Possibility />
    <CTA />
    <Blog />
    <Main/>
    <Footer />
  </div>
);

export default New;
