import { FaRegUserCircle, FaChevronDown } from "react-icons/fa";
import {
  MdHomeFilled,
  MdOutlineLibraryMusic,
  MdOutlineQueueMusic,
  MdOutlineShowChart,
  MdOutlinePlaylistPlay,
} from "react-icons/md";
import { PiUserList } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
// import { IoMdClose } from "react-icons/io";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { usePreference } from "@/contexts/usePreference";

const SideMenu = () => {
  // const { isMenuOpen } = usePreference();

  return (
    // <div
    //   className={`bg-[#F5F5F5] w-[280px] min-w-[280px] h-screen px-8 fixed top-0 left-0 transform transition-transform duration-300 z-10 ${
    //     isMenuOpen ? "translate-x-0" : "-translate-x-full"
    //   }`}
    // >
    <div className="bg-[#F5F5F5] w-[280px] min-w-[280px] h-screen px-8 rounded-bl-[40px] shadow-lg">
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center h-[70px]">
          <FaRegUserCircle className="text-3xl" />
          <Popover>
            <PopoverTrigger>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center text-sm">
                  Joshua
                  <FaChevronDown className="text-xs" />
                </div>
                <div className="text-[8px] inline-flex">
                  {/* PREMIUM */}
                  <span className="text-[6px] text-gray-500 font-semibold border p-[2px]">
                    PREMIUM
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>

        {/* <IoMdClose
          className="text-2xl cursor-pointer text-gray-500 hover:text-black"
          onClick={toggleMenu}
        /> */}
      </div>

      {/* Browse section */}
      <div className="flex flex-col gap-3 text-gray-600">
        <h2 className="font-bold text-gray-400">BROWSE</h2>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdHomeFilled className="" />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlineLibraryMusic className="" />
          <span className="text-sm">Songs</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlineQueueMusic className="" />
          <span className="text-sm">Playlists</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <PiUserList className="" />
          <span className="text-sm">Just for You</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlineShowChart className="" />
          <span className="text-sm">Top Charts</span>
        </div>
      </div>

      {/* Playlist section */}
      <div className="flex flex-col gap-3 text-gray-600 mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-400">YOUR PLAYLISTS</h2>
          <GoPlusCircle className="text-xl cursor-pointer" />
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlinePlaylistPlay className="" />
          <span className="text-sm">Workout Mix</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlinePlaylistPlay className="" />
          <span className="text-sm">Chillin' at Home</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlinePlaylistPlay className="" />
          <span className="text-sm">Booping at Adobe</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <MdOutlinePlaylistPlay className="" />
          <span className="text-sm">XD 4 Life</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
