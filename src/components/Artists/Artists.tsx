import "./artists.css";
import { Artist } from "../../types";
import { useQuery } from "react-query";
import { handleTopArtists } from "../../api/spotifyApi";

const Artists = () => {
  const { isLoading, data: topArtists } = useQuery(["top"], handleTopArtists);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {topArtists.items.map((artist: Artist, i: number) => (
        <li key={i}>
          <p>{artist.name}</p>
          <img src={artist.images[1].url} alt="artist-img" />
        </li>
      ))}
    </ul>
  );
};

export default Artists;
