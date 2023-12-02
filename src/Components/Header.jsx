import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="container  mx-auto flex items-center bg-white  px-4 py-2">
        <a href="#" className="text-4xl uppercase">
          logo
        </a>
        <nav className={` flex-1 pl-10 hidden lg:flex`}>
          <ul className={`flex  text-lg lg:text-2xl uppercase space-x-5 `}>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </nav>
        {/* btn for the Sing Loging */}
        <div className="flex-1  items-center flex justify-end space-x-5">
          <button className="text-2xl">Loging</button>
          <button className="text-2xl bg-red-400 py-2 px-5">SingUp</button>
        </div>
        <button
          className="z-50 md:hidden"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          Open
        </button>
        {/* mobile navbar section  */}
        <div
          className={`shadow-2xl shadow-black  fixed  top-0 right-0 w-5/12  h-screen translate-x-full ${
            showMenu ? "translate-x-0 " : "translate-x-full shadow-none"
          } transition-all duration-300`}
        >
          <ul
            className={`flex flex-col text-center bg-white w-full h-full items-center justify-center  space-y-10 text-2xl uppercase`}
          >
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
