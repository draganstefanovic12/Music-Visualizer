import "./homepage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser } from "../../api/spotifyApi";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeframe from "../../components/Timeframe";
import Spinner from "../../components/Spinner/Spinner";

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
          <h3>{user.display_name}</h3>
        </div>
        <Timeframe setTime={setTerm} time={term} />
      </div>
      <ContentWrapper term={term} />
    </main>
  );
};

export default Homepage;
