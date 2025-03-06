"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import Proland from "../../assets/images/icons/proland.png";
import No from "../../assets/images/icons/no.png";
import Modern from "../../assets/images/icons/modern.png";
import BrandLogo from "../../assets/images/icons/brand.png";
import Tech from "../../assets/images/icons/tech.png";
import Bitax from "../../assets/images/icons/bitax.png";
import Target from "../../assets/images/icons/target.png";
import Classic from "../../assets/images/icons/classic.png";
import Build from "../../assets/images/icons/build.png";

const brands = [
  { image: Proland, alt: "Brands" },
  { image: No, alt: "Brands" },
  { image: Modern, alt: "Brands" },
  { image: BrandLogo, alt: "Brands" },
  { image: Tech, alt: "Brands" },
  { image: Bitax, alt: "Brands" },
  { image: Target, alt: "Brands" },
  { image: Classic, alt: "Brands" },
  { image: Build, alt: "Brands" },
];

 export default function Brand() {
  return (
    <div className="bg-[#F5F1EF] p-6 sm:p-10 max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="text-primary text-center font-kufam font-semibold text-xl sm:text-2xl">
          More than 50+ Brands Trusted World Wide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-5">
          {brands.map((brand, index) => (
            <div key={index} className="w-1/4 sm:w-auto relative h-16 ">
              <Image
                src={brand.image}
                alt={brand.alt}
                width={100}
                height={100}
                className="object-center object-cover"
              />
            </div>
          ))}
        </div>
        <Link href="/properties" className="bg-[#ffffff] flex items-center mt-5 capitalize font-kufam font-medium text-lg sm:text-xl py-2 px-4 rounded-[5px] text-primary">
          Explore Now
          <FaCircleArrowRight className="text-secondary text-xl ml-2" />
        </Link>
      </div>
    </div>
  );
}

