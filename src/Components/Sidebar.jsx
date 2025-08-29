import { useState } from "react";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { BsFillGridFill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import reactLogo from "../assets/logo-white.svg";
import Avtar from "../assets/avtar.jpg";
import { CiMenuKebab } from "react-icons/ci";
import Main from "./Main";
import Global from "./Salestable";
import SalesTable from "./Salestable";
import Graph from "./Graph";
import Listing from "./Listing";
import Footer from "./Footer";

export default function Sidebar({ bgColor , bgimg}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
   const [open, setOpen] = useState(false);

  const navItems = [
     { name: "Dashboard", icon: "📊", href: "#" },
  { name: "Pages", icon: "📄", href: "#" },
  { name: "Components", icon: "🧩", href: "#" },
  { name: "Forms", icon: "✍️", href: "#" },
  { name: "Tables", icon: "📋", href: "#" },
  { name: "Maps", icon: "🗺️", href: "#" },
  { name: "Widgets", icon: "🔧", href: "#" },
  { name: "Charts", icon: "📈", href: "#" },
  { name: "Calendar", icon: "📅", href: "#" },
  ];

  return (
    <div className="flex bg-gray-100 h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-white p-5 transform transition-transform duration-300 z-40 bg-cover bg-center bg-black-200 bg-blend-multiply text-white  
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ backgroundColor: bgColor, backgroundImage: `url(${bgimg})` }}

      >
        <div className="mb-8 flex border-b border-gray-500 pb-2">
          <img src={reactLogo} className="w-12 h-9" alt="" />
          <h1 className="text-2xl font-bold mr-2 ml-3">Creative Tim</h1>
        </div>

        {/* Avatar dropdown */}
        <div className="relative inline-block flex border-b border-gray-500 mb-8 pb-2">
          <img src={Avtar} alt="" className="w-12 h-9 rounded-full" />
          <button
            onClick={() => setDropdown(!dropdown)}
            className="inline-flex w-full px-4 py-2 text-sm font-medium text-white-700"
          >
            Tania Andrew
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.24 4.63a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdown && (
            <div className="absolute right-0 mt-10 w-40 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
               className="flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 hover:bg-sky-700 hover:text-white"
            >
              <span>{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col border w-screen transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Navbar */}
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow transition-all duration-300">
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <CiMenuKebab className="bg-gray-200 rounded-full mr-3 p-2 text-4xl" />
            </button>
            <button className="text-lg font-semibold text-gray-700">
              Dashboard
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 outline-none text-sm"
              />
              <HiMagnifyingGlassCircle className="text-2xl text-gray-500 mr-2" />
            </div>
            <BsFillGridFill className="text-2xl text-gray-700 cursor-pointer" />
            <CiBellOn className="text-3xl text-gray-700 cursor-pointer hover:bg-gray-300 p-1" />
             <div className="relative inline-block text-left">
      {/* User Icon */}
      <FaUser
        className="text-3xl text-gray-700 cursor-pointer hover:bg-gray-300 p-1 rounded-sm"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-sm shadow-lg">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer text-red-500">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
          </div>
        </header>

        {/* Page Content */}
        {/* <Main/> */}
        <main className="flex-1 overflow-y-auto">
          <div >
            <Main/>
            <SalesTable/>
            <Graph/>
            <Listing/>
            <Footer/>
          </div>
        </main>
      </div>
    </div>
  );
}
