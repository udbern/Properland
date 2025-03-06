"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../assets/images/hero.png";
import House from "../../assets/images/tiny.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }
  return (
    <div
      className="min-h-screen bg-center bg-[#FFF0E9] flex items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        backgroundImage: `url(${HeroImg.src})`,
        backgroundSize: "cover",
        
      }}
    >
      <div className="max-w-[609px] w-full mx-auto md:mt-32 lg:ml-20 px-2   ">
        <div className=" mb-5 bg-gradient-to-r w-fit  to-[#FFB28D] from-[#F3D1C1]">
          <div className="flex items-center space-x-4 p-1 px-4">
            <Image
              src={House}
              width={50}
              height={50}
              alt="tiny-house"
              className="w-6 h-6 object-contain"
            />
            <span className=" font-kufam text-base sm:text-lg md:text-xl font-normal">
              Real Estate Agency
            </span>
          </div>
        </div>
        <div className="text-center lg:text-left ">
          <h3 className="text-primary font-kufam font-[700] text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Find the perfect place to Live with your family.
          </h3>
          <p className="text-primary text-start font-medium bg-[#ffffff]/40 p-2 rounded-[5px] lg:text-link mt-4 max-w-xl text-base font-sans3 md:font-normal sm:text-lg md:text-xl leading-relaxed">
            Distinctively re-engineer revolutionary meta-services and premium
            architectures. Intrinsically incubate.
          </p>

          <Link
            href="/properties"
            className="px-4 -ml-[5px] w-fit py-2 sm:px-5 sm:py-2.5 mt-6 sm:mt-8 bg-[#ffffff] flex items-center justify-center mx-auto lg:mx-0 font-kufam font-[500] text-lg sm:text-xl text-primary tracking-wider rounded outline-none transition-all ease-in-out duration-500 hover:bg-primary hover:text-white"
          >
            Explore Property
            <ArrowRightCircleIcon className="ml-2 text-secondary h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
