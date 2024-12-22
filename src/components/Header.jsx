import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const menuButtonRef = useRef(null); // Ref for the menu button

  const navbar = ["Projects", "About", "Skills", "Contact"];

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div
        className="fixed top-0 left-0 right-0 z-50 mt-2 md:py-1 md:mt-1 mb-1 flex items-center
       justify-between px-5 md:px-2 md:justify-evenly w-full py-1"
      >
        <div
          className="font-silkscreen rounded-full py-1 md:py-3 px-2 h-10 md:h-auto md:p-2 md:px-3
         bg-white/80 md:text-3xl border-2 border-black cursor-pointer"
        >
          K.
        </div>
        {/* Navbar */}
        <div
          className="hidden md:px-10 md:flex gap-2 items-center py-1 justify-between text-white bg-white/40 md:bg-white/30
          rounded-xl bg-opacity-0 backdrop-blur-md border-2 border-black"
        >
          {navbar.map((item, index) => (
            <button
              key={index}
              className="font-semibold text-black bg-black/0 rounded-xl px-10 py-3 bg-none
               bg-opacity-0 hover:bg-gray-200 font-BeVietnamPro text-xl"
            >
              {item}
            </button>
          ))}
        </div>
        {/* Navbar for mobile */}
        <div
          ref={menuButtonRef} // Attach ref to the menu button
          className="flex fixed top-5 right-6 md:hidden z-0"
          onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu visibility
        >
          <HiMenuAlt3
            className="text-3xl bg-white/80 text-black/80 backdrop-blur-md border-2 border-black 
           rounded-md cursor-pointer"
          />
        </div>
        {menuOpen && (
          <div
            ref={dropdownRef} // Attach the ref to the dropdown
            className="flex-col items-end z-10 border-2 border-black w-fit absolute right-2
           top-10 bg-white/80 rounded-xl
          flex md:hidden mt-3"
          >
            {navbar.map((item, index) => (
              <button
                key={index}
                className="text-end font-semibold text-black bg-black/0 rounded-xl px-5 py-2 bg-none
                 bg-opacity-0 hover:bg-gray-200 font-BeVietnamPro w-full"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown menu for mobile */}
    </div>
  );
}

export default Header;
