import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideMenu from './components/side-menu/SideMenu';
import NavigationBar from './components/nav-bar/NavigationBar';
import MainApplication from './components/main-application/MainApplication';

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <SideMenu></SideMenu>
      <MainApplication></MainApplication>
    </>
  );
}

export default App;
