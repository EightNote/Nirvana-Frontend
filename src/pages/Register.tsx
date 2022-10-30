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

import { useState } from "react";
// import { useRegisterUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utilities/hooks";

const initialState = {
  username: "",
  password: "",
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
  const [val, setVal] = useState(initialState);
  const { username, password } = val;

  // const [
  //   RegisterUser,
  //   {
  //     data: RegisterData,
  //     isSuccess: isRegisterSuccess,
  //     isError: isRegisterError,
  //     error: RegisterError,
  //   },
  // ] = useRegisterUserMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handler = (e: any) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    console.log("Got username", username, "password:", password)
    if (username && password) {
      // let res: any = await RegisterUser({ username:username, password:password });
      await fetch("http://localhost:8080/user/sign-up/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        mode:"cors",
        body: JSON.stringify({username: username, password: password})
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate("/sign-in");
        toast.success("Successfully registered user! Now please sign-in...")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      toast.error("Give all input field before login...");
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
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
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
