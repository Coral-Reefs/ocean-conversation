import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-screen h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full object-cover h-full"
        >
          <source src="/videos/header-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-white mix-blend-screen flex flex-col items-center justify-center lg:px-40">
          <h1 className="mb-2 text-xl md:text-5xl lg:text-7xl font-bold text-center ">
            Marine life & ocean conservation
          </h1>
          <span className="text-xs md:text-lg text-black lg:px-20">
            The ocean’s future is our future. We must relieve the pressure on
            the ocean so it can continue to sustain us.
          </span>
        </div>
      </header>
      <div className="w-full h-[100px] lg:h-[200px] absolute bottom-0">
        <Image
          src="/images/header.png"
          className="object-cover md:object-fill"
          fill
        />
      </div>
    </>
  );
};

export default Header;
