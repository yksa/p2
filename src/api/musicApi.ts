import axios from "axios";

export const getAlbums = async (id: string) => {
  const res = await axios.get(
    "https://www.theaudiodb.com/api/v1/json/2/album.php?i=" + id
  );
  return res.data;
};

export const getTracks = async (id: string) => {
  const res = await axios.get(
    "https://www.theaudiodb.com/api/v1/json/2/track.php?m=" + id
  );
  return res.data;
};
