import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import { Container } from '@mui/system';

interface mainApplicationProps {

}

/*
  Use <Link> Component instead of <a>  to open another 

*/

const MainApplication = (props: mainApplicationProps) => {
  return (
    <Container>
      <Routes>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "" element = {<Home/>}/>
      </Routes>
    </Container>
  );
}


export default MainApplication