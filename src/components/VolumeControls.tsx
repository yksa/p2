import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { MdDevices, MdOutlineQueueMusic } from "react-icons/md";

import { Slider } from "@/components/ui/slider";

type VolumeControlsProps = {
  isSpeakerOn: boolean;
  toggleSpeaker: () => void;
  speakerValue: number;
  handleSpeakerChange: (value: number[]) => void;
};

const VolumeControls: React.FC<VolumeControlsProps> = ({
  isSpeakerOn,
  toggleSpeaker,
  speakerValue,
  handleSpeakerChange,
}) => (
  <div className="flex items-center gap-2">
    <MdOutlineQueueMusic className="text-2xl" />
    <MdDevices className="text-2xl" />
    {isSpeakerOn ? (
      <HiMiniSpeakerWave
        className="text-2xl cursor-pointer"
        onClick={toggleSpeaker}
      />
    ) : (
      <HiMiniSpeakerXMark
        className="text-2xl cursor-pointer"
        onClick={toggleSpeaker}
      />
    )}
    <Slider
      defaultValue={[speakerValue]}
      value={[speakerValue]}
      max={100}
      step={1}
      onValueChange={handleSpeakerChange}
      className="w-20 h-1"
      noTrack={true}
      muted={!isSpeakerOn}
    />
  </div>
);

export default VolumeControls;
