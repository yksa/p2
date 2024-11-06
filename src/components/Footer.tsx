import { useEffect, useRef, useState } from "react";
import { GoPlusCircle } from "react-icons/go";

import { useGetAlbums } from "@/api/hooks/useGetAlbums";

import song from "@/assets/audio/song.mp3";
import PlayerControls from "./PlayerControls";
import VolumeControls from "./VolumeControls";
import AlbumInfo from "./AlbumInfo";

const Footer = () => {
  const { data: dataAlbums } = useGetAlbums("112024");

  const [sliderValue, setSliderValue] = useState(0);
  const [speakerValue, setSpeakerValue] = useState(100);

  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const audioRef = useRef(new Audio(song)); // Create an audio reference

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
    const newTime = (value[0] / 100) * totalDuration; // Calculate new time
    audioRef.current.currentTime = newTime; // Set audio current time
  };

  const handleSpeakerChange = (value: number[]) => {
    const newVolume = value[0] / 100; // Convert to a value between 0 and 1
    setSpeakerValue(value[0]);
    audioRef.current.volume = newVolume;

    if (newVolume === 0) {
      setIsSpeakerOn(false);
    } else {
      setIsSpeakerOn(true);
    }
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
    if (isSpeakerOn) {
      audioRef.current.volume = 0;
      return;
    }
    audioRef.current.volume = speakerValue / 100;
  };

  const handleTimeFormat = (value: number) => {
    const minutes = Math.floor(value / 60);
    const seconds = String((value % 60).toFixed(0)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Update total duration when metadata has loaded
    const handleMetadataLoaded = () => {
      setTotalDuration(audio.duration);
    };

    // Update current time while audio is playing
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setSliderValue((audio.currentTime / audio.duration) * 100);
    };

    const handleAudioEnded = () => {
      setIsPlaying(false); // Reset playing state
    };

    // Attach event listeners
    audio.addEventListener("loadedmetadata", handleMetadataLoaded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleAudioEnded);

    // Clean up event listeners on unmount
    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadataLoaded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  return (
    <div className="px-8 flex justify-between items-center py-5 text-white ">
      <AlbumInfo album={dataAlbums?.[0]} isPlaying={isPlaying} />

      <GoPlusCircle className="" />

      <PlayerControls
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        sliderValue={sliderValue}
        totalDuration={totalDuration}
        currentTime={currentTime}
        handleSliderChange={handleSliderChange}
        handleTimeFormat={handleTimeFormat}
      />

      <VolumeControls
        isSpeakerOn={isSpeakerOn}
        toggleSpeaker={toggleSpeaker}
        speakerValue={speakerValue}
        handleSpeakerChange={handleSpeakerChange}
      />
    </div>
  );
};

export default Footer;
