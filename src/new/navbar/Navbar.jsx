import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import * as React from "react";
import logo from '../../assets/logo1.png';
import './navbar.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { logout, selectAuth } from "../../feature/AuthSlice";
import { useAppDispatch } from "../../utilities/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Drop from "./drop";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.9)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.9)',
      opacity: 0,
    },
  },
}));

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isLoggerIn, setLoggedIn] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.username);
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    setLoggedIn(false);
    let res = dispatch(logout());
    if (res) {
      navigate("/sign-in");
    }
    toast.success("User logged out...");
  };

  const Logo = () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      return JSON.parse(localStorage.getItem("user")).username;
    }
    return "?";
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img style={{ height: '2%', borderRadius: '100%' }} src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">

          {
            isLoggerIn ?
              <>
                <p><a href="home#home">Home</a></p>
                <p><a href="home#wgpt3">About Us</a></p>
                <p><a href="home#blog">Trendings</a></p>
                <p><a href="#"><Drop /></a></p>
                <p onClick={handleLogout}><a href="#blog">LogOut</a></p>
              </>
              : ""
          }

        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {
          isLoggerIn ?
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{ bgcolor: "#1c2e4a" }} onClick={() => navigate("/user")}>{Logo[0]}</Avatar>
            </StyledBadge>
            :
            <>
              <p onClick={() => navigate("/sign-in")}>Sign in</p>
              <button type="button" onClick={() => navigate("/sign-up")}>Sign up</button>
            </>
        }


      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a onClick={handleLogout} href="#blog">LogOut</a></p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
