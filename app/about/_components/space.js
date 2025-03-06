'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import SpaceImg from "../../../assets/images/space.png";
import { PauseIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { Video } from "@/ui/video";

export default function Space() {
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
    <section className="py-6 sm:py-10 md:py-20" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* First Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
            <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="font-kufam text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Learn More About Who We Are in Real Estate
              </h2>
              <p className="text-link text-xs sm:text-sm md:text-base lg:text-lg font-sans3">
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolore.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 relative aspect-video">
              <Image
                src={SpaceImg}
                alt="Space Exploration"
                fill
                className="rounded-[5px] shadow-md object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="font-kufam text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                We're reinventing the space
              </h2>
              <p className="text-link text-xs sm:text-sm md:text-base lg:text-lg font-sans3">
                Learn about our ongoing and future space missions, pushing the
                boundaries of human exploration.
              </p>
              <div>
                <h2 className="font-kufam text-primary text-lg sm:text-xl md:text-2xl font-semibold">
                  Full Services
                </h2>
                <p className="text-[#7D7D7D] font-sans3 font-normal text-xs sm:text-sm md:text-base lg:text-lg">
                  Interactively procrastinate high-payoff content without
                  backward-compatible data.
                </p>
              </div>
              <div>
                <h2 className="font-kufam text-primary text-lg sm:text-xl md:text-2xl font-semibold">
                  Safe Investments
                </h2>
                <p className="text-[#7D7D7D] font-sans3 font-normal text-xs sm:text-sm md:text-base lg:text-lg">
                  Interactively procrastinate high-payoff content without
                  backward-compatible data.
                </p>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="h-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
