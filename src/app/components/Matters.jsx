"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

export default function Matters() {
  const slides = [
    {
      title:
        "When oceans thrive, the planet regains its natural strength and flourishes",
      content:
        "Healthy oceans and the marine species living in them provide natural at-scale solutions to climate adaptation and resilience—and they absorb vast amounts of carbon dioxide. Oceans fuel the water cycles that produce rain and freshwater and create oxygen. And oceans are foundational to spectacular ecosystems and biodiversity, including treasured marine wildlife such as whales, sharks, polar bears, and turtles.",
    },
    {
      title: "When oceans thrive, people thrive",
      content:
        "Where ocean ecosystems are resilient and productive, so are coastal communities. Researchers looking at more than 100 studies to better understand the connection between marine conservation and human health found that most people in the world depend on ocean health for food, health, and economic benefits.",
    },
    {
      title:
        "When oceans thrive, the planet regains its natural strength and flourishes",
      content:
        "Healthy oceans and the marine species living in them provide natural at-scale solutions to climate adaptation and resilience—and they absorb vast amounts of carbon dioxide. Oceans fuel the water cycles that produce rain and freshwater and create oxygen. And oceans are foundational to spectacular ecosystems and biodiversity, including treasured marine wildlife such as whales, sharks, polar bears, and turtles.",
    },
    {
      title:
        "When oceans thrive, the planet regains its natural strength and flourishes",
      content:
        "Healthy oceans and the marine species living in them provide natural at-scale solutions to climate adaptation and resilience—and they absorb vast amounts of carbon dioxide. Oceans fuel the water cycles that produce rain and freshwater and create oxygen. And oceans are foundational to spectacular ecosystems and biodiversity, including treasured marine wildlife such as whales, sharks, polar bears, and turtles.",
    },
  ];
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  const slideNext = () => {
    if (swiper1Ref.current) swiper1Ref.current.slideNext();
  };

  const slidePrev = () => {
    if (swiper1Ref.current) swiper1Ref.current.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    if (swiper1Ref.current && swiper2Ref.current) {
      if (swiper !== swiper1Ref.current) swiper1Ref.current.slideTo(index);
      if (swiper !== swiper2Ref.current) swiper2Ref.current.slideTo(index);
    }
  };

  return (
    <section className="container relative px-6 md:px-10 lg:px-24 xl:px-52 xl:h-screen text-white lg:grid lg:grid-cols-5 lg:grid-rows-4 overflow-hidden">
      <div className="lg:col-span-3 lg:h-full lg:flex lg:items-end">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Why it matters
          <hr className="h-1 bg-[#b3fd71] w-1/2 mb-6 md:mt-6" />
        </h1>
      </div>
      <div className="lg:col-start-4 lg:col-end-6 aspect-[3/2] lg:row-start-2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full h-full"
          onSwiper={(swiper) => (swiper1Ref.current = swiper)} // Set swiper instance to ref
          onSlideChange={() => handleSlideChange(swiper1Ref.current)} // Handle slide change
        >
          <SwiperSlide>
            <Image src="/images/matters/nature.jpg" fill alt="Nature" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/matters/fishing.jpg" fill alt="Fishing" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/matters/land.jpg" fill alt="Land" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/matters/ice.jpeg" fill alt="Ice" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:col-start-2 lg:row-start-3 lg:col-end-5 lg:min-h-64 relative z-10">
        <div className="flex justify-between mt-4 lg:block">
          <button
            onClick={slidePrev}
            className="mb-2 me-4 w-6 h-6 cursor-pointer"
          >
            <SlArrowLeftCircle className="w-full h-full" />
          </button>
          <button onClick={slideNext} className="mb-2 w-6 h-6 cursor-pointer">
            <SlArrowRightCircle className="w-full h-full" />
          </button>
        </div>
        <Swiper
          className="border-2 backdrop-blur-sm"
          onSwiper={(swiper) => (swiper2Ref.current = swiper)} // Set swiper instance to ref
          onSlideChange={() => handleSlideChange(swiper2Ref.current)} // Handle slide change
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="p-7">
              <h6 className="font-medium uppercase mb-2 text-[1rem] text-center px-4">
                {slide.title}
              </h6>
              <p className="font-normal text-sm lg:text-[0.9rem]">
                {slide.content}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute lg:w-[620px] lg:h-[830px]">
        <Image src="/images/matters/diver.png" alt="diver" fill />
      </div>
    </section>
  );
}
