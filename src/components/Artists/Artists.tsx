import { Artist } from "../../types";

type ArtistsTypes = {
  topArtists: {
    items: Artist[];
  };
};

const Artists = ({ topArtists }: ArtistsTypes) => {
  const artists = topArtists.items.map((artist: Artist, i: number) => (
    <li key={i}>
      <p>{artist.name}</p>
      <img src={artist.images[0].url} alt="artist-img" />
    </li>
  ));

  return (
    <div className="content-ul-wrapper">
      <h2>Your top artists</h2>
      <ul className="content-ul">{artists}</ul>
    </div>
  );
};

export default Artists;
