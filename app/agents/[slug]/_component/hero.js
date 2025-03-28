'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client, urlFor } from '../../../../lib/sanity';
import { AiFillMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import House from "../../../../assets/images/tiny.png";


export default function Hero() {
    const { slug } = useParams();
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAgent = async () => {
            try {
                const query = `*[_type == "agent" && slug.current == $slug][0]{
                    name,
                    "slug": slug.current,
                    description,
                    email,
                    phone,
                    image,
                    propertySales,
                    customerSatisfaction,
                    propertyTransactions
                }`;

                const params = { slug };
                const result = await client.fetch(query, params);

                if (!result) {
                    setError(new Error('Agent not found'));
                } else {
                    setAgent(result);
                }
            } catch (err) {
                console.error('Error fetching agent:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchAgent();
        }
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-center">Error: {error.message}</div>;
    if (!agent) return <div>Agent not found</div>;

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fce8de] to-[#f8d8c4] mb-40  px-4 sm:px-6 md:px-12  md:py-32 py-20">
            <div className="relative max-w-6xl w-full grid mt-20 grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
                {/* Left Side: Agent Info */}
                <div className="z-10 relative   space-y-4">
                    <div className="p-1 mb-5 bg-gradient-to-r w-fit px-5 to-[#FFB28D] from-[#F3D1C1]">
                                <div className="flex items-center space-x-4">
                                  <Image
                                    src={House}
                                    alt="tiny-house"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                  />
                                  <span className="font-kufam text-link uppercase text-base sm:text-lg md:text-xl font-normal">
                                    selling agent
                                  </span>
                                </div>
                              </div>
                    <h1 className="text-primary font-bold font-kufam text-3xl sm:text-4xl md:text-5xl mt-4">{agent.name}</h1>
                    <p className="text-link mt-4 leading-relaxed font-sans3 text-sm sm:text-base">{agent.description}</p>

                    <div className="mt-6 space-y-3 font-sans3 text-link">
                        <p className=" flex items-center text-sm sm:text-base">
                            <AiFillMail className="mr-3 text-lg " /> {agent.email}
                        </p>
                        <p className=" flex items-center text-sm sm:text-base">
                            <BiPhone className="mr-3 text-lg " /> {agent.phone}
                        </p>
                    </div>

                    <div className="mt-8 md:absolute md:-bottom-60 md:left-0 flex gap-6 md:gap-12 p-4">
                        <div className="text-center">
                            <h3 className="text-xl md:text-3xl font-kufam font-bold text-primary">{agent.propertySales}</h3>
                            <p className="text-xs md:text-sm  font-sans3 text-link">In property sales</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-3xl font-kufam font-bold text-primary ">{agent.customerSatisfaction}%</h3>
                            <p className="text-xs md:text-sm font-sans3 text-link">Customer satisfaction</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-3xl font-kufam font-bold text-primary ">{agent.propertyTransactions}+</h3>
                            <p className="text-xs md:text-sm font-sans3 text-link">Property transactions</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Agent Image */}
                <div className="relative md:mt-0">
                    <div className="relative  md:absolute md:-top-35 md:right-[20px] w-full  md:w-[500px] md:h-[550px] bg-gradient-to-b from-[#F3D1C1] to-[#FFEEE5] rounded-sm p-2 md:p-8 overflow-hidden">
                        <Image
                            src={urlFor(agent.image).url()}
                            height={1000}
                            width={1000}
                            className="object-cover object-center w-full h-full"
                            alt={agent.name}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
