import { TotalGenres } from "../types";

const genres = [
  {
    name: "japanese shoegaze",
    count: 6,
  },
  {
    name: "japanese dream pop",
    count: 5,
  },
  {
    name: "rock",
    count: 5,
  },
  {
    name: "alternative metal",
    count: 4,
  },
  {
    name: "album rock",
    count: 3,
  },
  {
    name: "metal",
    count: 3,
  },
  {
    name: "atmospheric black metal",
    count: 3,
  },
  {
    name: "blackgaze",
    count: 3,
  },
  {
    name: "hard rock",
    count: 3,
  },
  {
    name: "j-indie",
    count: 3,
  },
  {
    name: "japanese alternative rock",
    count: 3,
  },
  {
    name: "instrumental post-rock",
    count: 2,
  },
  {
    name: "nu metal",
    count: 2,
  },
  {
    name: "rap",
    count: 2,
  },
  {
    name: "french metal",
    count: 2,
  },
  {
    name: "art rock",
    count: 2,
  },
  {
    name: "classic rock",
    count: 2,
  },
  {
    name: "country rock",
    count: 2,
  },
  {
    name: "folk rock",
    count: 2,
  },
  {
    name: "psychedelic rock",
    count: 2,
  },
  {
    name: "post-metal",
    count: 2,
  },
  {
    name: "indie rock",
    count: 2,
  },
  {
    name: "japanese vgm",
    count: 2,
  },
  {
    name: "orchestral soundtrack",
    count: 2,
  },
  {
    name: "soundtrack",
    count: 2,
  },
  {
    name: "japanese indie rock",
    count: 2,
  },
  {
    name: "voidgaze",
    count: 2,
  },
  {
    name: "classic j-rock",
    count: 1,
  },
  {
    name: "j-rock",
    count: 1,
  },
  {
    name: "shibuya-kei",
    count: 1,
  },
  {
    name: "groove metal",
    count: 1,
  },
  {
    name: "industrial metal",
    count: 1,
  },
  {
    name: "industrial rock",
    count: 1,
  },
  {
    name: "rap metal",
    count: 1,
  },
  {
    name: "rap rock",
    count: 1,
  },
  {
    name: "g funk",
    count: 1,
  },
  {
    name: "gangster rap",
    count: 1,
  },
  {
    name: "hip hop",
    count: 1,
  },
  {
    name: "west coast rap",
    count: 1,
  },
  {
    name: "avant-garde metal",
    count: 1,
  },
  {
    name: "breakcore",
    count: 1,
  },
  {
    name: "cybergrind",
    count: 1,
  },
  {
    name: "opera metal",
    count: 1,
  },
  {
    name: "mellow gold",
    count: 1,
  },
  {
    name: "soft rock",
    count: 1,
  },
  {
    name: "yacht rock",
    count: 1,
  },
  {
    name: "death metal",
    count: 1,
  },
  {
    name: "greek metal",
    count: 1,
  },
  {
    name: "melodic death metal",
    count: 1,
  },
  {
    name: "symphonic death metal",
    count: 1,
  },
  {
    name: "symphonic metal",
    count: 1,
  },
  {
    name: "j-acoustic",
    count: 1,
  },
  {
    name: "french black metal",
    count: 1,
  },
  {
    name: "french shoegaze",
    count: 1,
  },
  {
    name: "post-black metal",
    count: 1,
  },
  {
    name: "shoegaze",
    count: 1,
  },
  {
    name: "chicago rap",
    count: 1,
  },
  {
    name: "american folk revival",
    count: 1,
  },
  {
    name: "folk",
    count: 1,
  },
  {
    name: "roots rock",
    count: 1,
  },
  {
    name: "singer-songwriter",
    count: 1,
  },
  {
    name: "canadian metal",
    count: 1,
  },
  {
    name: "classic canadian rock",
    count: 1,
  },
  {
    name: "progressive rock",
    count: 1,
  },
  {
    name: "canadian post-rock",
    count: 1,
  },
  {
    name: "double drumming",
    count: 1,
  },
  {
    name: "post-rock",
    count: 1,
  },
  {
    name: "melodic thrash",
    count: 1,
  },
  {
    name: "old school thrash",
    count: 1,
  },
  {
    name: "speed metal",
    count: 1,
  },
  {
    name: "thrash metal",
    count: 1,
  },
  {
    name: "japanese garage rock",
    count: 1,
  },
  {
    name: "japanese house",
    count: 1,
  },
  {
    name: "braindance",
    count: 1,
  },
  {
    name: "float house",
    count: 1,
  },
  {
    name: "grave wave",
    count: 1,
  },
  {
    name: "metropopolis",
    count: 1,
  },
  {
    name: "noise pop",
    count: 1,
  },
  {
    name: "noise rock",
    count: 1,
  },
  {
    name: "psychedelic hip hop",
    count: 1,
  },
  {
    name: "underground hip hop",
    count: 1,
  },
  {
    name: "progressive metal",
    count: 1,
  },
  {
    name: "swedish progressive metal",
    count: 1,
  },
  {
    name: "cyberpunk",
    count: 1,
  },
  {
    name: "darksynth",
    count: 1,
  },
  {
    name: "synthwave",
    count: 1,
  },
  {
    name: "sound team",
    count: 1,
  },
  {
    name: "anime score",
    count: 1,
  },
  {
    name: "chiptune",
    count: 1,
  },
  {
    name: "final fantasy",
    count: 1,
  },
  {
    name: "japanese classical",
    count: 1,
  },
  {
    name: "japanese bedroom pop",
    count: 1,
  },
  {
    name: "kansai indie",
    count: 1,
  },
  {
    name: "alternative rock",
    count: 1,
  },
  {
    name: "grunge",
    count: 1,
  },
  {
    name: "classic soundtrack",
    count: 1,
  },
  {
    name: "russian electronic",
    count: 1,
  },
  {
    name: "brooklyn indie",
    count: 1,
  },
  {
    name: "indie pop",
    count: 1,
  },
  {
    name: "madchester",
    count: 1,
  },
  {
    name: "new wave",
    count: 1,
  },
  {
    name: "permanent wave",
    count: 1,
  },
  {
    name: "uk post-punk",
    count: 1,
  },
  {
    name: "japanese indie pop",
    count: 1,
  },
  {
    name: "spiritual jazz",
    count: 1,
  },
  {
    name: "atmospheric doom",
    count: 1,
  },
  {
    name: "black metal",
    count: 1,
  },
  {
    name: "cascadian black metal",
    count: 1,
  },
  {
    name: "doom metal",
    count: 1,
  },
  {
    name: "pagan black metal",
    count: 1,
  },
  {
    name: "portland metal",
    count: 1,
  },
  {
    name: "usbm",
    count: 1,
  },
  {
    name: "downtempo",
    count: 1,
  },
  {
    name: "electronica",
    count: 1,
  },
  {
    name: "trip hop",
    count: 1,
  },
  {
    name: "hokkaido indie",
    count: 1,
  },
] as TotalGenres[];

export default genres;
