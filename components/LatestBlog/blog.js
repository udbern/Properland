"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc)[0...2]{
        title,
        mainImage,
        publishedAt,
        category,
        slug,
        genre,
      }`;

      try {
        const data = await client.fetch(query);
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!blogs.length) return <p>No blogs found</p>;

  return (
    <section className="bg-[#F5F1EF] bg-center">
      <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center pb-10">
          <h2 className="font-sans3 text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl mx-auto">
            <span className="text-secondary">06</span> Blog
          </h2>
          <p className="text-primary text-center text-2xl sm:text-3xl lg:text-4xl font-bold font-kufam mb-8">
            Discover The Neighborhoods
          </p>
          <div className="flex flex-col w-full">
            {blogs.map((blog, index) => (
              <div key={index} className="mb-12">
                <div className="max-w-[898px] mx-auto mt-5 h-full md:h-[342px]">
                  {blog.mainImage && (
                    <Image
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <Link href={`/blog/${blog.slug.current }`} className="flex flex-col items-center text-center justify-center space-y-3 sm:space-y-5 mt-6 sm:mt-10 mb-6 sm:mb-10 max-w-2xl mx-auto p-4">
                  <div className="flex items-center justify-center">
                    <h2 className="font-sans3 font-normal text-base sm:text-xl text-link">
                    {new Date(blog.publishedAt).toLocaleString('default', {day: 'numeric', month: 'long',  year: 'numeric' })} | <span>{blog.genre}</span>
                    </h2>
                  </div>
                  <p className="text-primary font-kufam font-medium text-xl sm:text-2xl md:text-3xl">
                    {blog.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <Link href="/blog" className="bg-[#ffffff] w-fit flex items-center capitalize font-kufam font-medium text-xl py-4 px-4 rounded-[5px] text-primary">
            see all articles
            <FaCircleArrowRight className="text-primary text-xl ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
