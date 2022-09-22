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
  try {
    const request = await spotifyApi.get("/me");
    return request.data;
  } catch (err) {
    localStorage.clear();
  }
};

//Gets top 50 artists user listened to
export const handleTopArtists = async (term = "short_term") => {
  const link = `/me/top/artists?limit=50&time_range=${term}`;
  const request = await spotifyApi.get(link);
  return request.data;
};

//Gets top 50 track user listened to
export const handleTopTracks = async (term = "short_term") => {
  const link = `/me/top/tracks?limit=50&time_range=${term}`;
  const request = await spotifyApi.get(link);
  return request.data;
};
