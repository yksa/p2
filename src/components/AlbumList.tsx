import { usePreference } from "@/contexts/usePreference";
import AlbumCard from "./AlbumCard";

const AlbumList = () => {
  const { isMenuOpen } = usePreference();

  return (
    <div
      className={`pl-8 py-4 flex gap-8 overflow-x-auto ${
        isMenuOpen ? "w-[calc(100vw-280px)]" : "w-[100vw]"
      }`}
      style={{ scrollbarWidth: "none" }}
    >
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </div>
  );
};

export default AlbumList;
