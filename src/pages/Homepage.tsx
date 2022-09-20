import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser, handleTopArtists } from "../api/spotifyApi";
import Timeframe from "../components/Timeframe";

const Homepage = () => {
  const [time, setTime] = useState<string>("");
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);
  const { data: topArtists } = useQuery(["top"], handleTopArtists);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <main>
      <h3>Welcome {user.display_name}</h3>
      <Timeframe setTime={setTime} time={time} />
      <h1>Your top genres are in the last </h1>
    </main>
  );
};

export default Homepage;
