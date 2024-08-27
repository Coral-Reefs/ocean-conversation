"use client";

import React, { useEffect, useRef } from "react";
import CircleType from "circletype";

const Overview = () => {
  const textRef = useRef(null);

  useEffect(() => {
    new CircleType(textRef.current);
  }, []);

  return (
    <div className="container font-agrandir grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center h-screen lg:p-24 mb-12">
      <div className="flex justify-center items-center lg:order-2">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              ref={textRef}
              className="text-[#b3fd71] font-bold sm:text-2xl text-xl"
            >
              Together, we can save the oceans and help feed the world.
            </div>
          </div>
          <video
            width="300"
            height="300"
            className="w-full h-full object-cover rounded-full"
            autoPlay
            loop
            muted
          >
            <source src="/videos/overview_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start mb-0 sm:mb-8 lg:mb-3 lg:ps-24 px-4 ps-3 lg:px-0 lg:order-1">
        <h1 className="text-[#b3fd71] text-xl sm:text-2xl font-agrandir font-bold">
          Overview
        </h1>
        <p className="my-3 text-white">
          The oceans connect us all, covering two-thirds of our blue planet and
          housing most of Earth&apos;s life. They inspire and offer hope—for
          nature and people worldwide. Oceans are therefore worth protecting,
          restoring, and nurturing.
        </p>
        <p className="text-white">
          A restored, healthy, and abundant ocean can help fight climate change,
          sustain livelihoods, and feed more than 1 billion people a healthy
          seafood meal every day, forever.
        </p>
      </div>
    </div>
  );
};

export default Overview;
