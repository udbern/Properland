import React from "react";
import Logo from "../../ui/logo";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaInstagram, FaLocationPin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] py-12 px-4 sm:px-6 lg:px-10 font-sans tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-2 text-primary max-w-6xl mx-auto gap-8">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo />
          </Link>
          <ul className="flex items-center flex-wrap gap-4">
            <li>
              <Link href="#facebook">
                <FaFacebook className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#linkedin">
                <FaLinkedin className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#instagram">
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#twitter">
                <FaTwitter className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-primary font-kufam font-bold text-2xl sm:text-3xl md:text-4xl">
            Get a free estimate
          </h4>
          <p className="text-link text-base sm:text-lg md:text-xl lg:text-[1.25rem] font-normal">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. approaches lverall value proposition. Organically
            grow the holistic world view of disruptive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-200 text-[15px] rounded-[5px] w-full py-3 px-4 outline-none"
            />
            <button className="bg-primary text-white rounded-[5px] py-3 px-4 text-[15px] tracking-wide w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-primary gap-8">
        <div>
          <h4 className="font-semibold font-kufam text-2xl mb-6">Company</h4>
          <ul className="space-y-2 text-link">
            <li>
              <Link href="/about" className="text-[15px]">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[15px]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/properties" className="text-[15px]">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/agent" className="text-[15px]">
                Agent
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-[15px]">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[15px]">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold font-kufam text-2xl mb-6">Services</h4>
          <ul className="space-y-2 text-link capitalize">
            <li>
              <Link href="/rent" className="text-[15px]">
                Rent a home
              </Link>
            </li>
            <li>
              <Link href="/sell" className="text-[15px]">
                Sell a home
              </Link>
            </li>
            <li>
              <Link href="/buy" className="text-[15px]">
                Buy a home
              </Link>
            </li>
            <li>
              <Link href="/insurance" className="text-[15px]">
                property insurance
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-[15px]">
                member support
              </Link>
            </li>
            <li>
              <Link href="/agents" className="text-[15px]">
                experience agent
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-secondary p-4 w-full rounded-[5px] lg:col-span-1 sm:col-span-2">
          <h4 className="font-kufam text-2xl font-semibold mb-6">Contact us</h4>
          <div className="space-y-4 text-primary">
            <div className="flex items-start gap-3">
              <FaLocationPin />

              <p>329 Queensberry Street, North Melbourne VIC 3051, Australia</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone />
              <p>123 456 7890</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>support@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
