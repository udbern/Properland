"use client";

import Image from "next/image";
import BlogImage from "../../../assets/images/blogImage.png";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../../lib/sanity";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc)[0...1]{
        title,
        mainImage,
        publishedAt,
        category,
        slug,
        description,
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-link"></div>
      </div>
    );
  }
  if (!blogs) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Property not found.
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
      {blogs.map((blog, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 sm:gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
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

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Meta Information */}
            <div className="flex items-center text-sm md:text-lg text-link font-sans3 gap-2 sm:gap-4 mb-2">
              {new Date(blog.publishedAt).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })} | <span>{blog.genre}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-primary font-kufam mb-3 sm:mb-4">
              {blog.title}
            </h2>

            {/* Body */}
            <p className="text-[#7D7D7D] font-sans3 mb-4 sm:mb-6 text-sm sm:text-base">
              {blog.description}
            </p>

            {/* View More Link */}
            <Link
              href={`/blog/${blog.slug.current}`}
              className="inline-flex items-center bg-secondary w-fit p-1.5 sm:p-2 text-primary font-kufam rounded-[5px] font-semibold text-sm sm:text-base"
            >
              Read More
              <ArrowRightCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}