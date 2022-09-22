import "./login.css";
import { useToken } from "../../context/TokenContext";
import { useEffect } from "react";
import Chart from "../../components/Chart";
import genres from "../../assets/placeholderGenres";

const Login = () => {
  const { dispatch } = useToken();

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REDIRECT_URI = "http://127.0.0.1:5173/Spotify-visualizer/login";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = "user-top-read";

  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("token");

    //When a user gets redirected here from the Spotify login page the app checks
    //the hash and sets the token in localStorage for 1 hour
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1]!;

      window.location.hash = "";
      if (token !== undefined) {
        localStorage.setItem("token", token);
      }
    }
    dispatch({ type: "LOGIN", payload: token! });
  }, [dispatch]);

  const loginLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  return (
    <>
      <div className="login-wrapper">
        <h1>Spotify visualizer</h1>
        <p>log in and find out your top artists and genres</p>
        <a href={loginLink}>Log in with Spotify</a>
      </div>
      <Chart genres={genres} />
    </>
  );
};

export default Login;
