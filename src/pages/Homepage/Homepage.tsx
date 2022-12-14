import "./homepage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser } from "../../api/spotifyApi";
import Spinner from "../../components/Spinner/Spinner";
import Timeframe from "../../components/Timeframe";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const Homepage = () => {
  const [term, setTerm] = useState<string>("medium_term");
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main>
      <div className="welcome-timeframe-wrapper">
        <div className="user-name">
          <p>stats for</p>
          <h3>{user.display_name}</h3>
        </div>
        <Timeframe setTime={setTerm} time={term} />
      </div>
      <ContentWrapper term={term} />
    </main>
  );
};

export default Homepage;
