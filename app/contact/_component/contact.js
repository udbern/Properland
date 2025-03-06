'use client';

import { useState } from 'react';
import Bg from '../../../public/notbg.png';
import { FaMessage } from 'react-icons/fa6';
import { PhoneIcon } from '@heroicons/react/24/solid';
import House from '../../../assets/images/tiny.png';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF0E9] to-[#EAB196] bg-center flex items-center justify-center  sm:p-6"
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: "cover",

      }}
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-32 md:mt-24 p-4 sm:p-8 rounded-lg">
        {/* Left Section */}

        <div>
          <div className=" mb-5 bg-gradient-to-r w-fit  h-fit to-[#FFB28D] from-[#F3D1C1]">
            <div className="flex items-center space-x-4 p-1 px-4">
              <Image
                src={House}
                width={5}
                height={5}
                alt="tiny-house"
                className="w-6 h-6 object-contain"
              />
              <span className=" font-sans3 text-link  capitalize text-base sm:text-lg md:text-xl font-normal">
               contact us
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-primary font-kufam mt-2">Contact us For More Information</h2>
          <p className="text-gray-600 mt-4">
            Digissimoss duclimis sit blanditls praesentium voluptatem deleniti atque.
          </p>
          <div className="mt-6 space-y-4 font-sans3 text-link">
            <div className="flex items-center space-x-3 w-fit bg-white p-3 rounded-md">
              <span className="">
                <FaMessage />
              </span>
              <span className="">Properland@mail.com</span>
            </div>
            <div className="flex items-center space-x-3 w-fit bg-white p-3 rounded-md">
              <span className="text-orange-500">
                <PhoneIcon />
              </span>
              <span className="">+7016 - 5060 - 1920</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold font-kufam">Location</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md">
                <p className="font-semibold text-primary font-kufam">London</p>
                <p className="text-gray-600 text-sm font-sans3">3803 Marquette Pl #55, San Diego, 92106</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-semibold text-primary font-kufam">Los Angeles</p>
                <p className="text-gray-600 text-sm font-sans">1005 Westgate Ave, Los Angeles, 90049</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-4 sm:p-6 ">
          <h3 className="text-xl font-bold text-primary">Quick Contact</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4  font-kufam ">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-[#F3F3F3] outline-none  "
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-[#F3F3F3] outline-none "
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 bg-[#F3F3F3] outline-none "
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-[#F3F3F3] outline-none"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-primary rounded-sm w-full md:w-fit px-6 cursor-pointer text-white font-semibold p-3  transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
