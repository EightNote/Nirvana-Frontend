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
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import eventImage from "../assets/events.png";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const initialState = {
  id: 0,
  date: "",
  time: "",
  venue: "",
  eventPoster: "",
  artistID: "",
  registrationLink: "",
  countryID: "",
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [val, setVal] = useState(initialState);
  const [countries, setCountries] = React.useState([]);
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
      .get("http://localhost:8080/events/all/", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      });

    axios.get("http://localhost:8080/countries/all/").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const handlePost = () => {
    handleClose();
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = user.token;
    }

    // var str = `?date=${val["date"]}&time=${val["time"]}&venue=${val["venue"]}&registration=${val["registration"]}&event_poster=${val["poster_url"]}&artist_id=${val["artist"]}&country_id=${val["country"]}`;
    // console.log(str);
    console.log(val);
    console.log(user);
    axios
      .post("http://localhost:8080/events/", val, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setEvents(response.data);
        window.location.href = "/events";
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
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Create New Event
          </Button>

          <img
            style={{ height: "700px", marginLeft: "0px", marginRight: "100px" }}
            src={eventImage}
            alt="Headphone"
          ></img>
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
              margin="normal"
              id="date"
              // label="Date"
              name="date"
              type="date"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              // label="Time"
              type="text"
              name="time"
              color="primary"
              // autoFocus
              onChange={handler}
              fullWidth
              variant="outlined"
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
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="url"
              name="eventPoster"
              label="Poster URL"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="id"
              name="artistID"
              label="Artist ID"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              name="registrationLink"
              id="name"
              label="Registration URL"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />

            <Grid item component="form" noValidate xs={12}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Country
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  // value={value}
                >
                  {countries.map((country) => (
                    <FormControlLabel
                      name="countryID"
                      value={country.id}
                      control={<Radio />}
                      label={country.name}
                      onChange={handler}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
          flexFlow: "column",
          margin: "20px",
          padding: "20px",
        }}
      >
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
