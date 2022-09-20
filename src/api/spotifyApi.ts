import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotifyApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers!["Authorization"] = `Bearer ${token}`;
  return config;
});

export const handleCurrentUser = async () => {
  const request = await spotifyApi.get("/me");
  return request.data;
};
