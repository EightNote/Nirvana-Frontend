import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SideMenu from "./components/side-menu/SideMenu";
import NavigationBar from "./components/nav-bar/NavigationBar";
import MainApplication from "./components/main-application/MainApplication";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/Register";
import { useAppDispatch } from "./utilities/hooks";
import { useEffect } from "react";
import { setUser } from "./feature/AuthSlice";
import AllTrack from "./pages/AllTrack";
import AllEvents from "./pages/AllEvents";
import Navbar from "./new/navbar/Navbar";
import User from "./pages/User";
import RecordLabel from "./../src/pages/RecordLabel";
// import Player from "./components/Player/PlayerControls"

import "./pages/new.css";
import Artist from "./pages/AllArtist";
import PlayerControls from "./components/Player/PlayerControls";

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/*" element={<MainApplication />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tracks" element={<AllTrack />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/user" element={<User />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="/records" element={<RecordLabel />} />
      </Routes>
      <PlayerControls />
    </div>
  );
}

export default App;
