import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideMenu from './components/side-menu/SideMenu';
import NavigationBar from './components/nav-bar/NavigationBar';
import MainApplication from './components/main-application/MainApplication';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavigationBar/>
      <SideMenu></SideMenu>
      <Routes>
        <Route path = "*" element = {<MainApplication/>}/>
      </Routes>
    </div>
  );
}

export default App;
