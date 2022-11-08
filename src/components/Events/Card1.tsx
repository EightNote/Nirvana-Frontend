import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Card = ({
  username,
  name,
  description,
  logo,
  twitter,
  facebook,
  instagram,
}: {
  username: string;
  name: string;
  description: string;
  logo: string;
  twitter: string;
  facebook: string;
  instagram: string;
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
        <Avatar alt={username} src={logo} sx={{ width: 56, height: 56 }} />
        <div>
          <h4>{username}</h4>
          <h4>{name}</h4>
        </div>
      </div>
      <div className="line" style={{ backgroundColor: "blue" }}></div>
      <p>{description}</p>
      <div className="line" style={{ backgroundColor: "#0ebeff" }}></div>
      <p>@{twitter}</p>
    </div>
  );
};

export default Card;
