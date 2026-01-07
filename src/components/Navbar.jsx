import React from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
         <NavLink
            to="/"
            className="text-2xl font-bold text-green-400"
          >
            mPlaylist
          </NavLink>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
            ? "text-green-400 border-b-2 border-green-400 pb-1"
            : "hover:text-green-400 transition"
  }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
