import "./homepage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser } from "../../api/spotifyApi";
import Artists from "../../components/Artists/Artists";
import Timeframe from "../../components/Timeframe";
import Tracks from "../../components/Tracks";

const Homepage = () => {
  const [term, setTerm] = useState<string>("medium_term");
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <main>
      <div className="welcome-timeframe-wrapper">
        <div className="user-name">
          <h3>{user.display_name}</h3>
        </div>
        <Timeframe setTime={setTerm} time={term} />
      </div>
      <Artists term={term} />
      <Tracks term={term} />
    </main>
  );
};

export default Homepage;
