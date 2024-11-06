import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";
import { CiShuffle } from "react-icons/ci";
import { IoRepeatSharp } from "react-icons/io5";

type PlayerControlsProps = {
  isPlaying: boolean;
  handlePlayPause: () => void;
  sliderValue: number;
  totalDuration: number;
  currentTime: number;
  handleSliderChange: (value: number[]) => void;
  handleTimeFormat: (value: number) => string;
};

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  handlePlayPause,
  sliderValue,
  totalDuration,
  currentTime,
  handleSliderChange,
  handleTimeFormat,
}) => (
  <>
    <CiShuffle className="text-3xl text-white/50" />
    <MdSkipPrevious className="text-3xl" />
    {isPlaying ? (
      <FaPauseCircle
        className="text-4xl cursor-pointer"
        onClick={handlePlayPause}
      />
    ) : (
      <FaPlayCircle
        className="text-4xl cursor-pointer"
        onClick={handlePlayPause}
      />
    )}
    <MdSkipNext className="text-3xl" />
    <IoRepeatSharp className="text-3xl" />
    <div className="w-[400px] flex items-center gap-2">
      <h4 className="text-xs">{handleTimeFormat(currentTime)}</h4>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={1}
        onValueChange={handleSliderChange}
        value={[sliderValue]}
      />
      <h4 className="text-xs">{handleTimeFormat(totalDuration)}</h4>
    </div>
  </>
);

export default PlayerControls;
