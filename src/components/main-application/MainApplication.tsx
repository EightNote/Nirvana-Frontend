import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import { Container } from "@mui/system";
import Search from "./SearchPage";
import Album from "../Album/Albums";
import AlbumDetails from "../Album/AlbumDetails";
import Artist from "./ArtistProfile";
import Playlist from "../Playlist/Playlists";
import PlaylistDetails from "../Playlist/PlaylistDetails";
import New from "../../pages/New";
import Player from "../Player/Player";
import PlayerControls from "../Player/PlayerControls";
import AllTrack from "../../pages/AllTrack";
import AllEvents from "../../pages/AllEvents";

import User from "../../pages/User";
import RecordLabel from "../../../src/pages/RecordLabel";
import { useSelector } from "react-redux";
import Login from "../../pages/Auth";

interface mainApplicationProps {}

/*
  Use <Link> Component instead of <a>  to open another

*/

const MainApplication = (props: mainApplicationProps) => {
  const RequireAuth: any = ({ children }) => {
    const userIsLogged = useSelector((state: any) => state.auth.username); // Your hook to get login status

    if (!userIsLogged) {
      return <Login />;
    }
    return children;
  };

  const userIsLogged = useSelector((state: any) => state.auth.username); // Your hook to get login statu
  return (
    <div>
      <Routes>
        <Route
          path="home"
          element={
            <RequireAuth>
              <New />
            </RequireAuth>
          }
        />
        <Route
          path="search"
          element={
            <RequireAuth>
              <Search />
            </RequireAuth>
          }
        />
        <Route
          path="username/:username"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="albums"
          element={
            <RequireAuth>
              <Album />
            </RequireAuth>
          }
        />
        <Route
          path="albums/:id"
          element={
            <RequireAuth>
              <AlbumDetails />
            </RequireAuth>
          }
        />
        <Route
          path="playlists"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
        <Route
          path="playlists/:id"
          element={
            <RequireAuth>
              <PlaylistDetails />
            </RequireAuth>
          }
        />
        {/* <Route path="artist/:artistname" element={<Artist />} /> */}
        <Route
          path="player"
          element={
            <RequireAuth>
              <Player />
            </RequireAuth>
          }
        />
        <Route
          path="/tracks"
          element={
            <RequireAuth>
              <AllTrack />
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <AllEvents />
            </RequireAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route
          path="/artists"
          element={
            <RequireAuth>
              <Artist />
            </RequireAuth>
          }
        />
        <Route
          path="/records"
          element={
            <RequireAuth>
              <RecordLabel />
            </RequireAuth>
          }
        />
      </Routes>

      {userIsLogged ? <PlayerControls /> : ""}
    </div>
  );
};;

export default MainApplication;
