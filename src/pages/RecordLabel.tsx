import React from "react";
import Card1 from "../components/Events/Card1";
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
import eventImage from "../assets/events.png";


const initialState = {
  username: "",
  name: "",
  description: "",
  logo: "",
  twitter: "",
  facebook: "",
  instagram: "",
};

const AllEvents = () => {
  const [record, setRecord] = useState([]);
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
      .get("http://localhost:8080/record-label/", {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        setRecord(response.data);
        console.log(response.data);
      });

    // axios.get("http://localhost:8080/countries/all/").then((response) => {
    //   setCountries(response.data);
    //   console.log(response.data);
    // });
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
      .post("http://localhost:8080/record-label/", val, {
        headers: {
          Authorization: "Bearer " + user, //the token is a variable which holds the token
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setEvents(response.data);
        window.location.href = "/records";
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
            Create New Record Label
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
          <DialogTitle>Record Label</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide required data for new Record Label
            </DialogContentText>
            {/* <TextField
              autoFocus
              margin="normal"
              id="date"
              // label="Date"
              name="date"
              type="date"
              onChange={handler}
              fullWidth
              variant="outlined"
            /> */}
            <TextField
              autoFocus
              margin="dense"
              id="time"
              // label="Time"
              type="text"
              name="username"
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
              name="name"
              label="Name"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="url"
              name="description"
              label="Description"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="id"
              name="logo"
              label="Logo"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              name="twitter"
              id="name"
              label="Twitter"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />

            <TextField
              autoFocus
              margin="dense"
              name="facebook"
              id="name"
              label="Facebook"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />

            <TextField
              autoFocus
              margin="dense"
              name="instagram"
              id="name"
              label="Instagram"
              type="text"
              onChange={handler}
              fullWidth
              variant="outlined"
            />
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
        {record.map((event) => (
          <Card1
            username={event.username}
            name={event.name}
            description={event.description}
            logo={event.logo}
            twitter={event.twitter}
            facebook={event.facebook}
            instagram={event.instagram}
            // country_id={event.countryID}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
