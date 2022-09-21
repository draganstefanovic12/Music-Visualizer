import "./artists.css";
import { Artist } from "../../types";
import { handleTopArtists } from "../../api/spotifyApi";
import { useQuery } from "react-query";

type ArtistProps = {
  term: string;
};

const Artists = ({ term }: ArtistProps) => {
  const { isLoading, data: topArtists } = useQuery(["top", term], () =>
    handleTopArtists(term)
  );

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
