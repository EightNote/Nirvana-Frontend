import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SideMenu from "./components/side-menu/SideMenu";
import NavigationBar from "./components/nav-bar/NavigationBar";
import MainApplication from "./components/main-application/MainApplication";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/Register";
import { useAppDispatch } from "./utilities/hooks";
import { useEffect } from "react";
import { setUser } from "./feature/AuthSlice";

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <div>
      <NavigationBar />
      <SideMenu></SideMenu>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/home" element={<MainApplication />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
