import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Card from "../cards/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Hero() {
  const [val, setVal] = useState("tracks");
  const changeApi = (e: any) => {
    setVal(e.target.name);
  };
  return (
    <Box>
      <ButtonGroup
        style={{ display: "flex", justifyContent: "center", marginBottom:"15px" }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button name="tracks" onClick={changeApi}>
          Tracks
        </Button>
        <Button name="album" onClick={changeApi}>
          Album
        </Button>
        <Button name="artist" onClick={changeApi}>
          Artist
        </Button>
      </ButtonGroup>
      <List
        sx={{
          width: "auto",
          maxWidth: 1360,
          bgcolor: "text.secondary",
          position: "relative",
          overflow: "auto",
          maxHeight: 450,
          "& ul": { padding: 0 },
        }}
        style={{ display: "flex", justifyContent: "center" }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              {/* <ListSubheader>{``}</ListSubheader> */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <Card
                    title="atyachar"
                    image="https://cdn.britannica.com/85/182085-050-EB0D9C57/Taylor-Swift-2013.jpg"
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  );
}
