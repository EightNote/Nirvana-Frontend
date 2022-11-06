import React from "react";
import PropTypes from "prop-types";
import User from "./UserProfile";
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

interface mainApplicationProps {}

/*
  Use <Link> Component instead of <a>  to open another

*/

const MainApplication = (props: mainApplicationProps) => {
  return (
    <div >
      <Routes>
        <Route path="home" element={<New />} />
        <Route path="" element={<New />} />
        <Route path="search" element={<Search />} />
        <Route path="username/:username" element={<User />}></Route>
        <Route path="albums" element={<Album />} />
        <Route path="albums/album/:title" element={<AlbumDetails />} />
        <Route path="playlists" element={<Playlist />} />
        <Route path="playlists/playlist/:title" element={<PlaylistDetails />} />
        <Route path="artist/:artistname" element={<Artist />} />
        <Route path="player" element={<Player/>} />
      </Routes>
    </div>
  );
};

export default MainApplication;
