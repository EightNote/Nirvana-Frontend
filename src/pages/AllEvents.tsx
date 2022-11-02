import React from "react";
import Card from "../components/Events/Card";
import "./events.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../utilities/hooks";
import { useSelector } from "react-redux";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const dispatch = useAppDispatch();


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

  const state = {
    yellow: "#fcd000",
    blue: "#0ebeff",
    green: "#47cf73",
    purple: "#ae63e4",
  };
  return (
    <div className="container">
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
  );
};

export default AllEvents;
