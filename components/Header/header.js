"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../ui/logo";
import { Bars3Icon, ChatBubbleLeftRightIcon, ChevronDownIcon, } from "@heroicons/react/24/solid";
import Button from "@/ui/button";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
  { 
    name: "Pages",
    submenu: [
      { name: "Agents", path: "/agents" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" }
    ]
  },
  { name: "Blog", path: "/blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="mx-4 fixed inset-x-0 top-8 z-50">
      <div className="border border-gray-200 max-w-6xl mx-auto w-full font-kameron rounded-sm font-bold bg-[#ffffff] md:py-2">
        <div className="flex flex-wrap items-center justify-between mx-auto  p-4">
          <Link href="/" className="flex items-center space-x-3 ">
            <Logo />
          </Link>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="md:hidden  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-5 h-5" />
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'}  w-full md:block md:w-auto`}>
            <ul className="flex flex-col md:flex-row items-center font-medium text-primary md:space-x-4 lg:space-x-8 mt-4 md:mt-0">
              {menu.map((item, index) => (
                <li key={index} className="py-2 md:py-0 relative  group w-full md:w-auto">
                  {item.submenu ? (
                    <div className="w-full md:w-auto  dropdown-container">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === index ? null : index);
                        }}
                        className="flex items-center justify-between w-full md:w-auto px-4 md:px-0 py-2 md:py-0 hover:bg-gray-100 md:hover:bg-transparent"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`${activeDropdown === index ? 'block' : 'hidden'} 
                                    md:absolute md:left-0 md:mt-6  w-full mt-2 space-y-4 md:w-48  bg-white md:shadow-md 
                                    rounded-md overflow-hidden`}>
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-2 font-medium text-primary hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.path}
                      className="block w-full px-4 md:px-0 py-2 md:py-0 hover:bg-gray-100 md:hover:bg-transparent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <Button className="py-2 md:py-0 w-full hidden md:flex md:w-auto px-4 md:px-0">
                <Link href="/properties" className="text-white  bg-primary rounded-[5px] font-medium text-sm px-4 py-2 text-center w-full md:w-auto">
                  Get started
                </Link>     
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
