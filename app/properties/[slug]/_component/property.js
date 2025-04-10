'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { client, urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import Link from "next/link";

export default function PropertyDetails() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const iconMap = {
    FaBed: FaBed,
    FaBath: FaBath,
    FaCar: FaCar,
    FaRulerCombined: FaRulerCombined,
  };

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
         "agents": agents[]-> {
            _id,
            name,
            email,
            phone,
            image
          }
        }`;

        const data = await client.fetch(query);
        setProperty(data);
        setAgent(data?.agent || null);
      } catch (error) {
        console.error("Error fetching property:", error);
        setError("Failed to load property details.");
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

  return (
    <div className="max-w-6xl mx-auto justify-center  pt-20  pb-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-6">
        {/* Property Details */}
        <div>
          <p className="text-[#8E8E8E]  font-sans3 flex items-center text-sm sm:text-base md:text-sm mb-4">
            <IoLocationSharp className="text-secondary md:text-2xl mr-1" />
            {property.location || "Location not available"}
          </p>
          <h1 className="text-xl sm:text-3xl md:text-4xl text-primary font-kufam font-bold mb-2">
            {property.title}
          </h1>
          <p className="text-base md:text-xl text-[#7D7D7D] font-sans3 font-normal">
            Efficiently unleash cross-media information without cross-media value.
          </p>
        </div>

        {/* Pricing & Property Components */}
        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary font-kufam">
            ${property.price?.toLocaleString()}/Mo
          </p>
          <div className="grid grid-cols-2 w-full lg:grid-cols-4 gap-2 sm:gap-3 text-gray-500">
            {property.propertyComponents?.map((item, idx) => {
              const IconComponent = iconMap[item.icon];
              return (
                <span
                  className="border border-[#D7D7D7] text-xs sm:text-sm rounded-[5px] px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center h-full"
                  key={idx}
                >
                  {IconComponent && <IconComponent className="flex-shrink-0 text-base" />}
                  <span className="mx-1 flex-shrink-0">|</span>
                  <span className="whitespace-nowrap">{item.value} {item.label}</span>
                </span>
              );
            })}
          </div>
          <div
            className={`font-medium w-fit text-lg sm:text-sm md:text-base px-4 py-2 rounded-[5px] ${
              property.forSale ? "bg-secondary text-primary" : "bg-gray-400 text-white"
            }`}
          >
            {property.forSale ? "For Sale" : "Sold"}
          </div>
        </div>
      </div>

      <hr className="bg-gray-400 mt-10" />

      {/* Property Details & Agent Info */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Property */}
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-kufam font-bold text-primary mb-4">
                About the property
              </h2>
              <div className="prose prose-md sm:prose-lg font-sans3 font-normal prose-gray">
                <PortableText value={property.content} />
              </div>
            </section>
          </div>

          {/* Agent Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Property Agents</h3>
            {agents.length > 0 ? (
              <div className="space-y-6">
                {agents.map((agent) => (
                  <div key={agent._id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      {agent.image && (
                        <Image
                          src={urlFor(agent.image).width(60).url()}
                          alt={agent.name || "Agent"}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                          width={60}
                          height={60}
                        />
                      )}
                      <div>
                        <p className="font-semibold">{agent.name || "N/A"}</p>
                        <p className="text-sm text-gray-600">{agent.email || "N/A"}</p>
                        <p className="text-sm text-gray-600">{agent.phone || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No agents assigned to this property.</p>
            )}
          </div>
        </div>

        {/* Property Gallery */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold font-kufam text-primary mb-4">
            Property Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.gallery?.map((image, index) => (
              <div key={index} className="w-full h-60 object-center object-cover rounded-[2px] overflow-hidden">
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
