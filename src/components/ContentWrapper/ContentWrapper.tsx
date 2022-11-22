import "./contentwrapper.css";
import { useQuery } from "react-query";
import { handleTopArtists } from "../../api/spotifyApi";
import { useEffect, useState } from "react";
import { Artist, ReduceObjects, TotalGenres } from "../../types";
import Chart from "../Chart";
import Tracks from "../Tracks";
import Artists from "../Artists";
import Spinner from "../Spinner/Spinner";
import ContentType from "../ContentType";

//3 possible terms, long, medium and long for 4 weeks, 1 month and 1+ year
type ContentProps = {
  term: string;
};

const ContentWrapper = ({ term }: ContentProps) => {
  const [genres, setGenres] = useState<TotalGenres[]>([]);
  const [contentType, setContentType] = useState<string>("artists");
  const { isLoading, data: topArtists } = useQuery(["top", term], () => handleTopArtists(term));

  useEffect(() => {
    //Map through artist genre arrays, push them into a single array
    const arr = [] as string[];
    topArtists &&
      topArtists.items.map((artist: Artist) => artist.genres.map((genre: string) => arr.push(genre)));

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
    return <Spinner />;
  }

  return (
    <div className="content-wrapper">
      <Chart genres={genres} />
      <ContentType contentType={contentType} setContentType={setContentType} />
      {contentType === "artists" && <Artists topArtists={topArtists} />}
      {contentType === "tracks" && <Tracks term={term} />}
    </div>
  );
};

export default ContentWrapper;
