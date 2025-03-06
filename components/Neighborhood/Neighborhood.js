"use client"
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import Brands from "../Brand/brand";
import NewYork from "../../assets/images/newyork.jpg";
import Atlanta from "../../assets/images/atlanta.jpg";
import Singapor from "../../assets/images/singapor.jpg";
import Paris from "../../assets/images/paris.jpg";

const data = [
  { value: "56,180", label: "In property sales" },
  { value: "99%", label: "Customer satisfaction" },
  { value: "25K+", label: "Property Transaction" },
  { value: "2,918", label: "Price Reduce" },
];

const neighborhoods = [
  { image: NewYork, alt: "New York" },
  { image: Atlanta, alt: "Atlanta" },
  { image: Singapor, alt: "Singapore" },
  { image: Paris, alt: "Paris" },
];

 export default function Neighborhood() {
  return (
    <section className="max-w-6xl mb-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-6 sm:mb-0"
          >
            <p className="text-3xl sm:text-4xl font-kufam font-bold text-primary">
              {item.value}
            </p>
            <p className="text-link font-sans3 text-lg sm:text-xl font-normal text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      

      <div className="mb-10">
        <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl mx-auto">
          <span className="text-secondary">0 6</span> Neighborhoods
        </h2>
        <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
          Discover The Neighborhoods
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="relative h-80 md:h-[407px] overflow-hidden rounded-[5px] w-full"
            >
              <Image
                src={neighborhood.image}
                alt={neighborhood.alt}
                width={898}
                height={407}
                className="object-cover w-full h-full object-center"
              />
              <div className="absolute top-0 flex w-full p-2">
                <FaCircleArrowRight className="ml-auto text-white/35 text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Brands />
    </section>
  );
}

