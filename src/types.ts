//Current logged in user
export type User = {
  display_name: string;
  external_urls: "";
  images: {
    url: string;
  };
};

export type Artist = {
  images: Image[];
  name: string;
  genres: string[];
};

export type Track = {
  album: {
    images: Image[];
  };
  name: string;
};

export type Image = {
  url: string;
};

export type TotalGenres = {
  name: string;
  count: number;
};

export type ReduceObjects = {
  [key: string]: TotalGenres;
};
