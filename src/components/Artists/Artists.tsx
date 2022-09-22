import "./artists.css";
import { useQuery } from "react-query";
import { handleTopArtists } from "../../api/spotifyApi";
import { useEffect, useState } from "react";
import { Artist, ReduceObjects, TotalGenres } from "../../types";
import Chart from "../Chart";

//3 possible terms, long, medium and long for 4 weeks, 1 month and 1+ year
type ArtistProps = {
  term: string;
};

const Artists = ({ term }: ArtistProps) => {
  const [genres, setGenres] = useState<TotalGenres[]>([]);
  const { isLoading, data: topArtists } = useQuery(["top", term], () =>
    handleTopArtists(term)
  );

  useEffect(() => {
    //Map through artist genre arrays, push them into a single array
    const arr = [] as string[];
    topArtists &&
      topArtists.items.map((artist: Artist) =>
        artist.genres.map((genre: string) => arr.push(genre))
      );

    //Create an array of genre objects
    const result = Object.values(
      arr.reduce((o: ReduceObjects, n: string) => {
        //If an object doesn't exist with this name, it's gonna create the new one with the key "count" of 1
        //and if it does, it will increase the count by 1
        !o[n] ? (o[n] = { name: n, count: 1 }) : (o[n]["count"] += 1);
        return o;
      }, {})
    ).sort((a, b) => b.count - a.count);

    setGenres(result);
  }, [topArtists]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="artist-images-lists-wrapper">
      <Chart genres={genres} />
      <p>Your top artists are...</p>
      <ul className="artist-images">
        {topArtists.items.map((artist: Artist, i: number) => (
          <li key={i}>
            <p>{artist.name}</p>
            <img src={artist.images[0].url} alt="artist-img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
