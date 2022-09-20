import { useToken } from "../context/TokenContext";
import { useEffect } from "react";

const Login = () => {
  const { dispatch, token } = useToken();

  const CLIENT_ID = import.meta.env.CLIENT_ID;
  const REDIRECT_URI = "";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1]!;

      window.location.hash = "";
      localStorage.setItem("token", token);
    }
  }, []);

  const loginLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  return (
    <div>
      <h1>Login with Spotify</h1>
      <a href={loginLink}>Log in</a>
    </div>
  );
};

export default Login;
