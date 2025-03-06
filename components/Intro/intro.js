"use client";

import { Video } from "@/ui/video";
import { PauseIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";

export default function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Video playback failed:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row mt-10 mb-10  bg-[#F2F2F2]">
      <div className="flex-1 md:flex-[2] p-5 md:p-10 space-y-2">
        <h2 className="font-sans3 text-primary leading-relaxed uppercase border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-lg md:text-xl">
          <span className="text-secondary">0 1</span> PROPERLAND INTRO
        </h2>
        <h3 className="text-primary font-kufam text-3xl md:text-4xl font-bold">
          Buying & Selling Property In An Easy Way
        </h3>
        <p className="text-link font-normal text-base md:text-xl">
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi.
        </p>
      </div>
      <div className="flex-1 relative">
        <div className=" h-full">
          <Video videoRef={videoRef} />
        </div>

        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 bg-opacity-50 rounded-full p-2 md:p-4 transition-opacity hover:bg-opacity-75"
          onClick={handlePlayClick}
        >
          {isPlaying ? (
            <PauseIcon className="h-8 w-8 text-primary" />
          ) : (
            <PlayCircleIcon className="h-8 w-8 text-primary" />
          )}
        </button>
      </div>
    </section>
  );
}
