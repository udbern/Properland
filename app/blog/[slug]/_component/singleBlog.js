"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { client, urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import HeroImg from "../../../../assets/images/Agentsbg.jpg";
import House from "../../../../assets/images/tiny.png";

export default function SingleBlogPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            const query = `*[_type == "blog" && slug.current == "${slug}"][0]{
                title,
                mainImage,
                author-> { name, image, occupation, bio  },
                publishedAt,
                content,
                 genre,
                
            }`;

            try {
                const data = await client.fetch(query, { slug });
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-link"></div>
          </div>
        );
      }
      if (!blog) {
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
                    className="w-full h-full border border-secondary object-cover object-center"
                />
            ),
        },
    };
    return (
        <div>
            <div
                className="min-h-[60vh] md:min-h-[100vh] bg-center bg-[#FFF0E9] flex items-center -z-10 justify-start p-4 sm:p-6 md:p-8 lg:p-12 relative"
                style={{
                    backgroundImage: `url(${HeroImg.src})`,
                    backgroundSize: "cover",
                }} >

                <div className="max-w-[609px] w-full mx-auto mt-16 md:mt-20 lg:ml-24 relative z-10">
                    <div className="p-1 mb-5 bg-gradient-to-r w-fit px-5 to-[#FFB28D] from-[#F3D1C1]">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={House}
                                alt="tiny-house"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <span className="font-kufam text-link uppercase text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                {new Date(blog.publishedAt).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })} | {blog.genre}
                            </span>                                </div>
                    </div>
                    <div>

                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="text-primary font-kufam font-[700] text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                            {blog.title}
                        </h3>
                        <div className="flex items-center mt-4">
                            <div className=" rounded-full  h-12 w-12 md:h-15 md:w-15">
                                {blog.author?.image && (
                                    <Image
                                        src={urlFor(blog.author.image).url()}
                                        alt={blog.author.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full h-full w-full  object-center object-cover"
                                    />
                                )}
                            </div>
                            <div className="flex ml-2 text-primary font-kufam flex-col items-start">
                                <p className="text-sm md:text-base">{blog.author?.name}</p>
                                <p className="text-xs md:text-sm  text-link">{blog.author?.occupation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto p-2   h-full  sm:p-1 rounded-sm md:-mt-10">
                <Image
                    src={urlFor(blog.mainImage).url()}
                    alt={blog.title}
                    width={1000}
                    height={1000}
                    className="object-cover object-center w-full h-full     rounded-sm"
                />
            </div>
            <div className="max-w-4xl prose prose-sm mt-10  mx-auto p-4 prose-md sm:prose-lg prose-gray sm:p-6">
                <PortableText value={blog.content} components={components} />
            </div>
            <div className="mx-auto h-fit p-5 md:p-10 bg-amber-400">
                <div className="flex flex-col md:flex-row max-w-4xl mx-auto  p-5 items-center">
                    <div className="rounded-full h-12 w-12 md:h-20 md:w-20">
                        {blog.author?.image && (
                            <Image
                                src={urlFor(blog.author.image).url()}
                                alt={blog.author.name}
                                width={100}
                                height={100}
                                className="rounded-full h-full w-full object-center object-cover"
                            />
                        )}
                    </div>
                    <div className="flex mt-4  md:mt-0 md:ml-10 space-y-1 w-full md:w-[40rem] text-primary font-kufam flex-col items-center md:items-start">
                       <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                       <p className="text-sm md:text-base font-kufam text-primary ">{blog.author?.name}</p>
                       {blog.author?.socials?.map((social) => (
                            <a
                                key={social._key}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-kufam text-sm md:text-base"
                            >
                                {social.name}
                            </a>
                        ))}
                       </div>
                       
                        <p className="text-sm text-primary text-center font-kufam md:text-left">{blog.author?.occupation}</p>
                        <p className="text-sm text-link font-sans3 text-center md:text-left">
                            {blog.author?.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}