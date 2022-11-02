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
// import { useLoginUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utilities/hooks";
import { setUser } from "../feature/AuthSlice";
import { useLoginUserMutation } from "../services/authApi";

const initialState = {
  username: "",
  password: "",
  role: "",
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

export default function Auth() {
  const [val, setVal] = useState(initialState);
  const { username, password } = val;
  const [loginUser, data] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handler = (e: any) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (username && password) {
      var res1: any = await loginUser({ username, password });
      console.log(res1.data.token);
      let res = dispatch(
        setUser({
          token: res1.data.token,
          username: res1.data.username,
          role: res1.data.role,
        })
      );
      if (res) {
        navigate("/home");
        toast.success("Successfully logged in...");
      }

      //     await fetch("http://localhost:8080/user/sign-in/", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       mode: "cors",
      //       body: JSON.stringify({ username: username, password: password }),
      //     })
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Success:", data);
      //         dispatch(setUser(data));
      //         navigate("/home");
      //         toast.success("Successfully logged in user!");
      //       })
      //       .catch((error) => {
      //         console.error("Error:", error);
      //       });
      //   } else {
      //     toast.error("Give all input field before login...");
    }
  };

  // useEffect(() => {
  //   if (isLoginSuccess) {

  //   }
  // }, [isLoginSuccess]);

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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              onChange={handler}
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={handler}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={handleLogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
