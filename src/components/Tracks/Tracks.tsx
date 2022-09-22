import "../ContentWrapper/contentwrapper.css";
import { Track } from "../../types";
import { useQuery } from "react-query";
import { handleTopTracks } from "../../api/spotifyApi";

type TracksProps = {
  term: string;
};

const Tracks = ({ term }: TracksProps) => {
  const { isLoading, data: topTracks } = useQuery(["tracks", term], () =>
    handleTopTracks(term)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Your top tracks</p>
      <ul className="content-ul">
        {topTracks.items.map((track: Track, i: number) => (
          <li key={i}>
            <p>{track.name}</p>
            <img src={track.album.images[0].url} alt="content-img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
