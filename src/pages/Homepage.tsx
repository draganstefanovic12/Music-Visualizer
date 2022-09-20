import { useQuery } from "react-query";
import { handleCurrentUser } from "../api/spotifyApi";

const Homepage = () => {
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Welcome {user.display_name}</h1>
    </div>
  );
};

export default Homepage;
