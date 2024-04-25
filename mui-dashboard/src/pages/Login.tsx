import * as React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactComponent as LogoIcon } from './LogoIcon.svg';
import {
  Button,
  Checkbox,
  Grid,
  InputLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function checkEmail(email: string) {
    return emailRegex.test(email);
  }

  const navigate = useNavigate();
  const onLogin = (email: string, password: string) => {
    if (checkEmail(email) && password) {
      navigate("/marketplace/table");
    }
  };
  return (
    <Grid container justifyContent="center">
       <Stack  sx={{ position: "absolute", top: "2rem", left: "2rem" }} direction={"row"}>
          <svg width="35" height="29" version="1.1" viewBox="0 0 30 23" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-95.000000, -51.000000)"><g id="logo" transform="translate(95.000000, 50.000000)"><path id="Combined-Shape" fill="#9155FD" d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"></path><polygon id="Rectangle" opacity="0.077704" fill="#000" points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"></polygon><polygon id="Rectangle" opacity="0.077704" fill="#000" points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"></polygon><polygon id="Rectangle" opacity="0.077704" fill="#000" points="22.7419355 8.58870968 30 12.7417372 30 16.9537453" transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "></polygon><polygon id="Rectangle" opacity="0.077704" fill="#000" points="22.7419355 8.58870968 30 12.6409734 30 15.2601969" transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "></polygon><path id="Rectangle" fill-opacity="0.15" fill="#FFF" d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"></path><path id="Rectangle" fill-opacity="0.35" fill="#FFF" transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) " d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"></path></g></g></g></svg>
          <Typography
            variant="h6"
            sx={{marginLeft:"1rem"}}
          >
            MATERIO
          </Typography>
        </Stack>
      <Grid
        item
        md={8}
        sx={{
          backgroundColor: "rgb(244,245,250)",
          height: "100vh",
          display: { xs: "none", md: "block" },
        }}
      >
      </Grid>
      <Grid item md={4} p={6} justifyContent={"center"} alignItems="center" minWidth="280px">
        <Stack direction={"column"} spacing={2} sx={{marginTop:"30%"}}>
          <Typography variant="h5">Welcome to Materio! 👋🏻</Typography>
          <Typography variant="body1">
            Please sign-in to your account and start the adventure
          </Typography>
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="current-password"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Grid container justifyContent="space-between">
            <Grid
              container
              item
              xs={8}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Checkbox ></Checkbox>
              <InputLabel sx={{ fontSize: "0.8rem" }}>Remember Me</InputLabel>
            </Grid>
            <Grid container item alignItems="center" xs={4}>
              <Typography
                sx={{ fontSize: "0.8rem", color: "rgb(145, 85, 253)" }}
                variant="body2"
              >
                Forgot password?
              </Typography>
            </Grid>
          </Grid>
          <Button
            sx={{ backgroundColor: "rgb(145, 85, 253)" }}
            variant="contained"
            onClick={() => {
              onLogin(email, password);
            }}
          >
            Login
          </Button>
          <Grid container justifyContent={"center"} alignItems={"baseline"}>
            <Typography
              variant="body1"
              sx={{ fontSize: "0.85rem", marginRight: "0.5rem" }}
            >
              {" "}
              New on our platform?{" "}
            </Typography>
            <Link
              href="#"
              sx={{ textDecoration: "none", color: "rgb(145, 85, 253)" }}
            >
              {" "}
              Create an account{" "}
            </Link>
          </Grid>
          <Stack
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            direction={"row"}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "lightgray",
                height: "1px",
                width: "185px",
              }}
            ></Typography>
            <Typography variant="body2">or</Typography>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "lightgray",
                height: "1px",
                width: "185px",
              }}
            ></Typography>
          </Stack>
          <Stack direction={"row"} spacing={1.5} justifyContent={"center"}>
            <Icon color="primary">
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Icon>
            <Icon color="error">
              <InstagramIcon></InstagramIcon>
            </Icon>
            <Icon>
              <GitHubIcon></GitHubIcon>
            </Icon>
            <Icon>
              <GoogleIcon color="error"></GoogleIcon>
            </Icon>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
