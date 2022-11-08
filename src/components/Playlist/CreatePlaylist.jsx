import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CreatePlaylist() {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        onChange={handleChange}
        variant="standard"
      />
    </Box>
  );
}
