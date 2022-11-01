import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import { Container } from '@mui/system';
import Search from './SearchPage';
import Album from './Album';

interface mainApplicationProps {

}

/*
  Use <Link> Component instead of <a>  to open another

*/

const MainApplication = (props: mainApplicationProps) => {
  return (
    <Container >
      <Routes>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "" element = {<Home/>}/>
            <Route path = "search" element = {<Search/>}/>
            <Route path = "album" element = {<Album/>}/>
      </Routes>
    </Container>
  );
}


export default MainApplication