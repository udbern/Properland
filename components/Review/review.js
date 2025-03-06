"use client";

import { useState, useEffect, useRef } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    text: "Great service!",
    author: "John Doe",
    image: "/path/to/john-doe.jpg",
  },
  {
    id: 2,
    text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    author: "Jane Smith",
    image: "/path/to/jane-smith.jpg",
  },
  {
    id: 5,
    text: "Best real estate experience ever!",
    author: "Chris Brown",
    image: "/path/to/chris-brown.jpg",
  },
  {
    id: 6,
    text: "Distinctively re-engineer revolutionary services and premium  At vero accusamus et iustoDignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores .",
    author: "Victor Murphy",
    image: "/path/to/emily-davis.jpg",
  },
  {
    id: 7,
    text: "Smooth buying process!",
    author: "David Wilson",
    image: "/path/to/david-wilson.jpg",
  },
  {
    id: 8,
    text: "Very knowledgeable agents!",
    author: "Lisa Taylor",
    image: "/path/to/lisa-taylor.jpg",
  },
];

export default function Review() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="relative w-full pb-20 bg-[rgb(243,232,226)]">
      <div className="max-w-6xl mx-auto flex px-5 pt-28 pb-5 justify-between items-center">
        <h2 className="text-primary text-start text-3xl lg:text-4xl w-60 md:w-[25rem]  font-bold font-kufam">
          What our customers say about us
        </h2>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="z-30 flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer"
            onClick={scrollLeft}
          >
            <TiArrowLeft className="text-secondary" />
          </button>
          <button
            type="button"
            className="z-30 flex items-center justify-center w-10 h-10 bg-secondary rounded-full cursor-pointer"
            onClick={scrollRight}
          >
            <TiArrowRight className="text-white" />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 p-4 scroll-smooth scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="flex-shrink-0 max-w-[380px]">
            <div className="flex flex-col justify-center p-4">
              <div className="mb-4 rounded-t-[70px] rounded-br-[70px] p-6 bg-[#ECC8B7]">
                <p className="font-sans3 font-normal text-base md:text-xl text-link">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 overflow-hidden  rounded-full">
                  <Image
                    src={review.image}
                    alt={review.author}
                    width={56}
                    height={56}
                    className="object-cover h-full w-full object-center"
                  />
                </div>
                <p className="font-semibold text-primary text-base md:text-2xl font-kufam">
                  {review.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
