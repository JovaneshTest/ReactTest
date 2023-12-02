import React from "react";
import Header from "./Header";
import imageHero from "../Asset/image_hero.png";
export default function Hero() {
  return (
    <div
      className="w-full w-max-[1500px] h-screen relative"
      style={{
        backgroundImage: `url(${imageHero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header></Header>
    </div>
  );
}
