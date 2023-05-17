import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import React, { AudioHTMLAttributes, useEffect, useRef, useState } from "react";

function Player() {
  const audioUrl =
    "https://www.joshwoodward.com/mp3/OnlyWhispering/JoshWoodward-OnlyWhispering-11-GoodbyeToSpring.mp3";

  const [audio, setAudio] = useState(null);
  const [togglePlay, setTogglePlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  function togglePlayPause() {
    setTogglePlay(!togglePlay);

    console.log(audioRef.current?.tagName)

    if (togglePlay) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }

  return (
    <div className="w-[360px] h-[267px] bg-[#2A2141] rounded-xl p-7 flex flex-col justify-around">
      <audio className="hidden" ref={audioRef} controls src={audioUrl}></audio>
      <div className="w-[300px flex flex-row justify-between gap-2">
        <div className="w-[114px] h-[84px] bg-[url(https://www.joshwoodward.com/images/JoshWoodward-120.jpg)] bg-center bg-cover rounded-md"></div>

        <div className="w-full flex flex-col justify-center items-center text-left">
          <div>
            <p className="text-[#E1E1E6] font-bold text-xl">Goodbye to Spring</p>
            <p className="text-[#E1E1E6] opacity-75 text-sm self-start">
            Josh Woodward
            </p>
          </div>
        </div>
      </div>

      <div className="w-[300px] flex flex-row justify-around">
        <FaBackward
          size={28}
          className="text-[#E1E1E6] opacity-70 cursor-not-allowed"
        />
        {togglePlay ? (
          <FaPlay
            onClick={togglePlayPause}
            size={24}
            className="text-[#E1E1E6] cursor-pointer"
          />
        ) : (
          <FaPause
            onClick={togglePlayPause}
            size={24}
            className="text-[#E1E1E6] cursor-pointer"
          />
        )}
        <FaForward
          size={28}
          className="text-[#E1E1E6] opacity-70 cursor-not-allowed"
        />
      </div>

      <div className="w-[300px] rounded-full">
        <progress
          className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-[#443C58] 
          [&::-webkit-progress-bar]:h-2 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-[#D9D9D9]"
          value="32"
          max="100"
        >
          32%
        </progress>
        <div className="w-[300px] flex flex-row justify-between">
          <p className="text-[#E1E1E6] opacity-75 text-xs">0:00</p>
          <p className="text-[#E1E1E6] opacity-75 text-xs">04:06</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
