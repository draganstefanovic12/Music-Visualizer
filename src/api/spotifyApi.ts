import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotifyApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers!["Authorization"] = `Bearer ${token}`;
  return config;
});

//Gets basic user info
export const handleCurrentUser = async () => {
  const request = await spotifyApi.get("/me");
  return request.data;
};

//Gets top 50 artists user listens to
export const handleTopArtists = async () => {
  const link = `/me/top/artists?limit=50&time_range=short_term`;
  const request = await spotifyApi.get(link);
  return request.data;
};
