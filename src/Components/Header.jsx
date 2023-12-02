import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div>
      <div className="container  mx-auto flex items-center bg-white  px-4 py-2">
        <a href="#" className="text-4xl uppercase">
          logo
        </a>
        <nav
          className={`fixed lg:relative bg-white    right-0 top-0 w-1/2 h-screen lg:h-auto lg:w-auto  flex items-center justify-center lg:block lg:ml-10 lg:translate-x-0 translate-x-full  overflow-hidden duration-300 transition-all   lg:transition-none`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:space-x-5 space-x-0 uppercase text-2xl text-center space-y-10 lg:space-y-0 w-full h-full  lg:shadow-none  shadow-2xl `}
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
        </nav>
        {/* btn for the Sing Loging */}
        <div className="flex-1  items-center flex justify-end space-x-5">
          <button className="text-2xl">Loging</button>
          <button className="text-2xl bg-red-400 py-2 px-5">SingUp</button>
        </div>
        <button
          className="z-50 lg:hidden"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          Open
        </button>
      </div>
    </div>
  );
}
