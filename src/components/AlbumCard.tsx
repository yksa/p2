import { MdPlayCircleOutline } from "react-icons/md";

const AlbumCard = () => {
  return (
    <div className="bg-gradient-to-b from-pink-500 to-purple-600 rounded-2xl pt-6 pb-2 shadow-lg text-white h-[250px] w-[450px] min-w-[450px] transform transition-transform duration-200 hover:scale-105 flex flex-col justify-between hover:shadow-[0_10px_10px_-4px_rgba(237,64,130,0.5)] cursor-pointer">
      <div className="px-6">
        <h2 className="text-4xl font-bold">GET LOST</h2>
        <p className="text-lg opacity-50">in your music.</p>
      </div>
      <div className="pl-2">
        <MdPlayCircleOutline className="text-3xl" />
      </div>
    </div>
  );
};

export default AlbumCard;
