import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState, useEffect } from "react";
// import { useRegisterUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utilities/hooks";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import {
  useRegisterUserMutation,
  useRegisterArtistMutation,
} from "../services/authApi";

const initialState = {
  username: "",
  password: "",
  role: "user",
};

const initialState1 = {
  username: "",
  password: "",
  about: "",
  twitter: "",
  facebook: "",
  instagram: "",
  record_label_id: "",
  nationality_id: 1,
  role: "artist",
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [checked, setChecked] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/countries/all/").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const [val, setVal] = useState(initialState);
  const [val1, setVal1] = useState(initialState1);

  const { username, password, role } = val;

  const [value, setValue] = React.useState("India");

  // const [
  //   RegisterUser,
  //   {
  //     data: RegisterData,
  //     isSuccess: isRegisterSuccess,
  //     isError: isRegisterError,
  //     error: RegisterError,
  //   },
  // ] = useRegisterUserMutation();

  const handler = (e: any) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    setVal1({ ...val1, [e.target.name]: e.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked) {
      setVal({ ...val, role: "artist" });
    } else {
      setVal({ ...val, role: "user" });
    }
  }, [checked]);
  const [registerUser, data] = useRegisterUserMutation();
  const [registerArtist, data1] = useRegisterArtistMutation();

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    handler(event);
  };

  const handleRegister = async () => {
    console.log("Got username", username, "password:", password);
    if (username && password) {
      if (role === "user") {
        registerUser({ username, password, role });
      } else {
        registerArtist({ ...val1 });
      }

      // let res: any = await RegisterUser({ username:username, password:password });
      //   await fetch("http://localhost:8080/user/sign-up/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     mode: "cors",
      //     body: JSON.stringify({
      //       username: username,
      //       password: password,
      //       role: role,
      //     }),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log("Success:", data);
      //       navigate("/sign-in");
      //       toast.success("Successfully registered user! Now please sign-in...");
      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });
    } else {
      toast.error("Give all input field before register...");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handler}
                  fullWidth
                  id="email"
                  label="Username"
                  name="username"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handler}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      value="artist"
                      name="role"
                      color="primary"
                    />
                  }
                  label="Check if artist"
                />
              </Grid>
              {checked ? (
                <>
                  <Grid item component="form" noValidate xs={12}>
                    <TextField
                      margin="normal"
                      onChange={handler}
                      fullWidth
                      id="email"
                      label="Email"
                      required
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </Grid>
                  <Grid item component="form" noValidate xs={12}>
                    <TextField
                      margin="normal"
                      onChange={handler}
                      fullWidth
                      id="about"
                      label="About"
                      name="about"
                      autoComplete="about"
                      autoFocus
                    />
                  </Grid>
                  <Grid item component="form" noValidate xs={12}>
                    <TextField
                      margin="normal"
                      onChange={handler}
                      fullWidth
                      id="twitter"
                      label="Twitter"
                      name="twitter"
                      autoComplete="twitter"
                      autoFocus
                    />
                  </Grid>
                  <Grid item component="form" noValidate xs={12}>
                    <TextField
                      margin="normal"
                      onChange={handler}
                      fullWidth
                      id="facebook"
                      label="Facebook"
                      name="facebook"
                      autoComplete="facebook"
                      autoFocus
                    />
                  </Grid>
                  <Grid item component="form" noValidate xs={12}>
                    <TextField
                      margin="normal"
                      onChange={handler}
                      fullWidth
                      label="Instagram"
                      name="instagram"
                      autoComplete="instagram"
                      autoFocus
                    />
                  </Grid>
                  <Grid item component="form" noValidate xs={12}>
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group">
                        Country
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange1}
                      >
                        {countries.map((country) => (
                          <FormControlLabel
                            name="nationality_id"
                            value={country.id}
                            control={<Radio />}
                            label={country.name}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </>
              ) : (
                ""
              )}
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
