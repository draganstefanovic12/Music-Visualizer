import "./homepage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser } from "../../api/spotifyApi";
import Artists from "../../components/Artists/Artists";
import Timeframe from "../../components/Timeframe";

const Homepage = () => {
  const [time, setTime] = useState<string>("medium_term");
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <main>
      <div className="welcome-timeframe-wrapper">
        <h3>Welcome {user.display_name}</h3>
        <Timeframe setTime={setTime} time={time} />
      </div>
      <Artists />
    </main>
  );
};

export default Homepage;
