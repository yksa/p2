import { useGetAlbums } from "@/api/hooks/useGetAlbums";
import { TAlbum } from "@/types/Album";
import { MdPlayCircleOutline } from "react-icons/md";

const Recommed = () => {
  const { data: dataAlbums } = useGetAlbums("112024");

  const albums = dataAlbums?.length > 4 ? dataAlbums?.slice(0, 3) : dataAlbums;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Recommended For You</h2>
      <div className="flex gap-4">
        {albums?.map((album: TAlbum, index: number) => {
          return <Card key={index} album={album} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ album }: { album: TAlbum }) => {
  return (
    <div className="group flex flex-col gap-2">
      <div
        style={{ backgroundImage: `url(${album.strAlbumThumb + "/small"})` }}
        className="w-[150px] h-[160px] rounded-lg bg-cover bg-center cursor-pointer"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex justify-center items-center relative">
          <div className="bg-black/70 w-full h-full rounded-lg absolute"></div>
          <MdPlayCircleOutline className="text-6xl text-white z-20" />
        </div>
      </div>

      <div>
        <div className="flex-1 text-sm">{album.strAlbum}</div>
        <div className="flex-1 text-xs text-gray-400">{album.strArtist}</div>
      </div>
    </div>
  );
};

export default Recommed;
