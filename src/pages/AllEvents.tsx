import React from "react";
import Card from "../components/Events/Card";
import "./events.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../utilities/hooks";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";
import eventImage from "../assets/events.png"

const initialState = {
  date: "",
  time: "",
  venue: "",
  poster_url: "",
  artist: "",
  country: "",
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [val, setVal] = useState(initialState);
  const handler = (e: any) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }
    axios
      .get("http://localhost:8080/event/all/", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      });
  }, []);

  const handlePost = () => {
    handleClose();
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }

    var str = `?date=${val["date"]}&time=${val["time"]}&venue=${val["venue"]}&poster_url=${val["poster_url"]}&artist=${val["artist"]}&country=${val["country"]}`;
    console.log(str);

    axios
      .post("http://localhost:8080/event/" + str, "", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
          "content-type": "text/json",
        },
      })
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      });
  };

  const state = {
    yellow: "#fcd000",
    blue: "#0ebeff",
    green: "#47cf73",
    purple: "#ae63e4",
  };
  return (
    <div className="container" style={{ display:"flex", flexDirection:"column" }} >
      <div >
        <div style={{display:"flex", flexDirection:"column"}}>

          <Button variant="outlined" onClick={handleClickOpen} >
            Create New Event
          </Button>
        
        <img  style={{height:"700px", marginLeft:"0px", marginRight:"100px"}} src={eventImage} alt="Headphone"></img>

        </div>

          {/* <img src={possibilityImage} alt="possibility" /> */}
        
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: "50%",
              maxHeight: 600,
            },
          }}
        >
          <DialogTitle>Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide required data for new event
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="date"
              label="Date"
              name="date"
              type="text"
              onChange={handler}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              label="Time"
              type="text"
              name="time"
              onChange={handler}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="venue"
              name="venue"
              label="Venue"
              type="text"
              onChange={handler}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="url"
              name="poster_url"
              label="Poster URL"
              type="text"
              onChange={handler}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="artist"
              id="name"
              label="Artist Username"
              type="email"
              onChange={handler}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="country"
              label="Nationality"
              type="email"
              onChange={handler}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div style={{ display:"flex", flexDirection:"row", overflow:"auto", flexFlow:"column"}}>
        {events.map((event) => (
          <Card
            id={event.id}
            date={event.date}
            time={event.time}
            venue={event.venue}
            registration={event.registration}
            poster={event.eventPoster}
            artist_id={event.artistID}
            country_id={event.countryID}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
