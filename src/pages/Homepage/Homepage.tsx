import "./homepage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { handleCurrentUser, handleTopArtists } from "../../api/spotifyApi";
import Timeframe from "../../components/Timeframe";

type Artist = {
  images: Image[];
};

type Image = {
  url: string;
};

const Homepage = () => {
  const [time, setTime] = useState<string>("medium_term");
  const { isLoading, data: user } = useQuery(["user"], handleCurrentUser);
  const { data: topArtists } = useQuery(["top"], handleTopArtists);

  if (isLoading) {
    return <p>Loading</p>;
  }

  console.log(topArtists);

  return (
    <main>
      <h3>Welcome {user.display_name}</h3>
      {topArtists && (
        <>
          <div className="top-choice">
            <div className="images">
              {topArtists.items.map((artist: Artist, i: number) => (
                <img src={artist.images[1].url} alt="artist-img" />
              ))}
            </div>
          </div>
          <Timeframe setTime={setTime} time={time} />
        </>
      )}
    </main>
  );
};

export default Homepage;
