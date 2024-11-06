import { IoMdHeartEmpty } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { MdPlayCircleOutline } from "react-icons/md";

import { useGetAlbums } from "@/api/hooks/useGetAlbums";
import { useGetTracks } from "@/api/hooks/useGetTracks";
import { TAlbum } from "@/types/Album";

const RecentPlay = () => {
  const { data: dataAlbums } = useGetAlbums("112024");

  const albums = dataAlbums?.length > 4 ? dataAlbums?.slice(0, 4) : dataAlbums;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Recently Played</h2>

      {albums?.map((album: TAlbum, index: number) => {
        return <Card key={index} album={album} />;
      })}
    </div>
  );
};

const Card = ({ album }: { album: TAlbum }) => {
  const { data } = useGetTracks(album.idAlbum);

  const getDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
  };

  const handleHeartClick = () => {
    console.log("clicked");
    // call api and change to heart full icon
  };

  return (
    <div className="flex justify-between items-center gap-2 rounded hover:bg-gray-200 p-1 group">
      <div
        style={{ backgroundImage: `url(${album.strAlbumThumb + "/small"})` }}
        className="w-[40px] h-[40px] rounded bg-cover bg-center"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex justify-center items-center relative">
          <div className="bg-black/70 w-full h-full rounded absolute"></div>
          <MdPlayCircleOutline className="text-2xl text-white z-20" />
        </div>
      </div>
      <div className="flex-1 text-xs">{album.strAlbum}</div>
      <div className="flex-1 text-xs text-gray-400">{album.strArtist}</div>
      <div className="flex-1 text-xs text-gray-400">
        {getDuration(data?.[0].intDuration)}
      </div>
      <div className="flex-1">
        <IoMdHeartEmpty
          className="text-2xl text-gray-400 hover:cursor-pointer"
          onClick={handleHeartClick}
        />
      </div>
      <GoKebabHorizontal className="text-2xl text-gray-400 hover:cursor-pointer" />
    </div>
  );
};

export default RecentPlay;
