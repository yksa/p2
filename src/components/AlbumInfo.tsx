import { TAlbum } from "@/types/Album";

/**
 * A component to display information about an album. It displays the album's
 * cover image on the left and the album's title and artist on the right. It
 * also supports a boolean prop called `isPlaying` which makes the album cover
 * image rotate if it is true.
 *
 * @property {TAlbum} album - The album object containing the album's
 * information.
 * @property {boolean} isPlaying - A boolean indicating whether the album is
 * currently playing.
 *
 * @example
 * <AlbumInfo album={album} isPlaying={isPlaying} />
 */
const AlbumInfo = ({
  album,
  isPlaying,
}: {
  album: TAlbum;
  isPlaying: boolean;
}) => (
  <>
    <div
      className={`w-[60px] h-[60px] bg-cover bg-center rounded-full border-[#db609a] border-2 ${
        isPlaying ? "rotating" : ""
      }`}
    >
      <img
        src={album?.strAlbumThumb + "/small"}
        className="w-full h-full rounded-full"
        alt="Album Cover"
      />
    </div>
    <div>
      <h2 className="font-semibold">{album?.strAlbum}</h2>
      <h4 className="text-gray-100/50 text-xs">{album?.strArtist}</h4>
    </div>
  </>
);

export default AlbumInfo;
