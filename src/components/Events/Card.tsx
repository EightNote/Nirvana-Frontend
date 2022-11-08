import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Card = ({
  id,
  date,
  time,
  venue,
  registration,
  poster,
  artist_id,
  country_id,
}: {
  id: number;
  date: any;
  time: any;
  venue: string;
  registration: string;
  poster: string;
  artist_id: number;
  country_id: number;
}) => {
  var artist = "";
  var country = "";
  const token = useSelector((state: any) => state.auth.token);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tracks/all", {
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        console.log(response.data);
      });

      axios
        .get("http://localhost:8080/country/all", {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        })
        .then((response) => {
          console.log(response.data);
        });
  }, []);

  return (
    <div className="card">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Avatar alt={artist} src={poster} sx={{ width: 56, height: 56 }} />
        <div>
          <h4>{date}</h4>
          <h4>{time}</h4>
        </div>
      </div>
      <div className="line" style={{ backgroundColor: "blue" }}></div>
      <p>{venue}</p>
      <div className="line" style={{ backgroundColor: "#0ebeff" }}></div>
      <p>{artist}</p>
    </div>
  );
};

export default Card;
