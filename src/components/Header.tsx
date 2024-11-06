import { usePreference } from "@/contexts/usePreference";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const { isMenuOpen, toggleMenu } = usePreference();

  return (
    <header className="h-[70px] flex justify-between items-center px-8 w-full">
      <div className="flex gap-2">
        {!isMenuOpen && (
          <IoIosMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
        <IoSearch className="text-2xl" />
      </div>
      <div className="relative">
        <IoNotificationsOutline className="text-2xl" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-white text-[8px] text-center">
          3
        </div>
      </div>
    </header>
  );
};

export default Header;
