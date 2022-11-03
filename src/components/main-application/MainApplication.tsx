import React from 'react'
import PropTypes from 'prop-types'
import User from './UserProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import { Container } from '@mui/system';
import Search from './SearchPage';
import Album from '../Album/Albums';
import Artist from './ArtistProfile'

interface mainApplicationProps {

}

/*
  Use <Link> Component instead of <a>  to open another

*/

const MainApplication = (props: mainApplicationProps) => {
  return (
    <Container sx={{width:"100%"}}>
      <Routes>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "" element = {<Home/>}/>
            <Route path = "search" element = {<Search/>}/>
            <Route path = "username/:username" element = {<User/>}></Route>
            <Route path = "album" element = {<Album/>}/>
            <Route path="artist/:artistname" element = {<Artist/>}/>
      </Routes>
    </Container>
  );
}


export default MainApplication