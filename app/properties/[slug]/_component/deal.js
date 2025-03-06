"use client";


import Link from "next/link";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { client, urlFor } from "../../../../lib/sanity";
import { useEffect, useState } from "react";

const iconMap = {
  FaBed: FaBed,
  FaBath: FaBath,
  FaCar: FaCar,
  FaRulerCombined: FaRulerCombined,
};

 export default   function Featured() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const query = `*[_type == "property"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        propertyImage,
        price,
        forSale,
        location,
        propertyComponents,
      }`;

      const data = await client.fetch(query);
      setProperties(data || []);
    };

    fetchProperties();
  }, []);
  if (!properties) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#F5F1EF] z-20 pb-20 relative">
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-[#F2DED4] to-[#FFFFFF00] h-48 w-48 md:h-[25rem] md:w-[25rem] absolute -z-10 rounded-full -bottom-14 md:-bottom-32"></div>
      </div>

      <div className="max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto items-center mb-10">
          <h2 className="font-sans3 text-start md:text-center uppercase mb-5 text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
            <span className="text-secondary">0 2</span> PROPERLAND INTRO
          </h2>
          <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
            Properties for sale in your favorite area
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {properties.map((property) => (
            <Link key={property._id} href={`/properties/${property.slug}`}>
              <div className="bg-white max-h-[656px] space-y-5 p-2 sm:p-5 shadow-none border-none rounded-[5px] cursor-pointer">
                <Image
                  src={urlFor(property.propertyImage).url()}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-60 object-cover rounded-[5px]"
                  alt={property.title}
                />
                <div className=" sm:p-2 h-[14rem]">
                  <div className="flex justify-between font-kufam items-center mb-2">
                    <span className="text-secondary text-base md:text-2xl font-semibold">
                      ${property.price}
                    </span>

                    <div
                      className={`font-medium text-lg sm:text-base border border-secondary md:text-base px-4 sm:px-4 py-1 sm:py-2 rounded-[5px] ${
                        property.forSale
                          ? "bg-secondary text-primary"
                          : "bg-gray-400 text-white"
                      }`}
                    >
                      {property.forSale ? "For Sale" : "Sold"}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-xl md:text-base font-kufam text-primary font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 flex items-center text-sm sm:text-base md:text-sm mb-4">
                    <IoLocationSharp className="text-secondary md:text-2xl mr-1" />
                    {property.location}
                  </p>
                  <div className="grid grid-cols-2 w-full lg:grid-cols-4 gap-2 sm:gap-3 text-gray-500">
                    {property.propertyComponents.map((item, idx) => {
                      const IconComponent = iconMap[item.icon];
                      return (
                        <span
                          className="border border-[#D7D7D7] text-[10px] xs:text-xs sm:text-sm rounded-[5px] px-1 xs:px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center h-full"
                          key={idx}
                        >
                          {IconComponent && (
                            <IconComponent className="flex-shrink-0 text-xs sm:text-base" />
                          )}
                          <span className="mx-0.5 xs:mx-1 flex-shrink-0">
                            |
                          </span>
                          <span className="whitespace-nowrap text-[10px] xs:text-xs sm:text-sm">
                            {item.value} {item.label}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/contact" className="bg-[#ffffff] capitalize font-kufam font-medium text-xl py-2 px-4 rounded-[5px] text-primary">
          Touch with us
        </Link>
      </div>
    </section>
  );
}


