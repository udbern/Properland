'use client'; 

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams for dynamic routing
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { client, urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import Link from "next/link";



export default function PropertyDetails() {
  const iconMap = {
    FaBed: FaBed,
    FaBath: FaBath,
    FaCar: FaCar,
    FaRulerCombined: FaRulerCombined,
  };

  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "property" && slug.current == "${slug}"][0] {
          title,
          propertyImage,
          price,
          forSale,
          location,
          propertyComponents[] {
            icon,
            value,
            label
          },
          content,
          gallery,
          agent-> {
            name,
            email,
            phone,
            image
          }
        }`;

        const data = await client.fetch(query);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-link"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Property not found.
      </div>
    );
  }

  const components = {
    types: {
      image: ({ value }) => (
        <img
          src={urlFor(value).url()}
          alt={value.alt || "snapshot"}
          width={800}
          height={600}
          className="w-full h-full object-cover object-center"
        />
      ),
    },
  };

  return (
    <div className="max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      
        <div>
          <p className="text-[#8E8E8E] font-sans3 flex items-center text-sm sm:text-base md:text-sm mb-4">
            <span className="mr-1">
              <IoLocationSharp className="text-secondary md:text-2xl" />
            </span>
            {property.location || "Location not available"}
          </p>
          <h1 className="text-xl sm:text-3xl md:text-4xl text-primary font-kufam font-bold mb-2">
            {property.title}
          </h1>
          <p className="text-base md:text-xl text-[#7D7D7D] font-sans3 font-normal">
            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary font-kufam">
            ${property.price?.toLocaleString()}/Mo
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
                          <span className="whitespace-nowrap text-[0.9rem] xs:text-xs sm:text-sm">
                            {item.value} {item.label}
                          </span>
                        </span>
                      );
                    })}
                  </div>
          <div
            className={`font-medium w-fit text-lg sm:text-sm md:text-base px-4 sm:px-4 py-1 sm:py-2 rounded-[5px] ${
              property.forSale ? "bg-secondary text-primary" : "bg-gray-400 text-white"
            }`}
          >
            {property.forSale ? "For Sale" : "Sold"}
          </div>
        </div>
      </div>
      <hr className="bg-gray-400 mt-10" />
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-kufam font-bold text-primary mb-4">
                About the property
              </h2>
              <div className="prose prose-md sm:prose-lg font-sans3 font-normal prose-gray">
                <PortableText value={property.content} components={components} />
              </div>
            </section>
          </div>
          <div className="space-y-8">
          
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold font-kufam text-primary mb-4">
            Property Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.gallery?.map((image, index) => (
              <div key={index} className="w-full  h-60  object-center object-cover rounded-[2px] overflow-hidden">
                <Image
                  src={urlFor(image).url()}
                  alt="Property image"
                  className="w-full h-full"
                height={1000} 
                width={1000}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      
    </div>
  );
}


