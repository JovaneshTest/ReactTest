import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div>
      <div className="container  mx-auto flex items-center bg-white  px-4 py-2">
        <a href="#" className="text-4xl uppercase">
          logo
        </a>
        <nav className="">
          <ul className="">
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