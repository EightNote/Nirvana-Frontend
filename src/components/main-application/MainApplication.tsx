import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './Home';

interface mainApplicationProps {

}

/*
  Use <Link> Component instead of <a>  to open another 

*/

const MainApplication = (props: mainApplicationProps) => {
  return (
    <Router>
      <Routes>
        <Route path='/home'>
          <Home>

          </Home>
        </Route>
        <Route path='/search/q?'>

        </Route>
        <Route path='/artist/'>

        </Route>
        <Route path='/album/'>
            <AlbumPage> <></>
        </Route>
        
      </Routes>
    </Router>
  )
}


export default MainApplication