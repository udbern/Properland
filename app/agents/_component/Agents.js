"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "../../../lib/sanity";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const query = `*[_type == "agent"]{
          _id,
          name,
          image,
          role,
          "slug": slug.current
        }`;
        const result = await client.fetch(query);
        setAgents(result);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) return <div className="text-center">Loading agents...</div>;

  return (
    <div className="max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6  lg:px-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Link key={agent._id} href={`/agents/${agent.slug}`} className="group border block h-full">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={urlFor(agent.image).url()}
                alt={agent.name}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority
              />
            </div>
            <div className="bg-[#F6F6F6] p-4 sm:p-6 group-hover:bg-[#FFBB50] duration-500 ease-in-out h-auto">
              <h3 className="text-lg sm:text-xl font-kufam font-semibold text-primary mb-2">
                {agent.name}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                  <p className="text-sm sm:text-base font-sans3 text-link group-hover:text-white">
                    {agent.role}
                  </p>
                </div>
                <div className="flex text-primary gap-4">
                  <FaFacebook size={18} className="cursor-pointer hover:opacity-80 hover:scale-110 transition-all group-hover:text-white" />
                  <BsTwitter size={18} className="cursor-pointer hover:opacity-80 hover:scale-110 transition-all group-hover:text-white" />
                  <BsInstagram size={18} className="cursor-pointer hover:opacity-80 hover:scale-110 transition-all group-hover:text-white" />
                </div>
              </div>
            </div>
          </Link>        ))}
      </div>
    </div>
  );
}


