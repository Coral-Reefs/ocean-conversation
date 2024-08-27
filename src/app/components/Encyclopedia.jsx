"use client";
import Link from "next/link";
import Image from "next/image";

const Encyclopedia = () => {
  return (
    <div
      className="w-full h-screen font-agrandir px-6 md:px-12 lg:px-24 xl:px-36 relative"
      id="encyclopedia"
    >
      <div className="h-1/2 w-full flex justify-end items-end lg:mb-12 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-right">
          Marine Life
          <br />
          Encyclopedia
        </h1>
      </div>
      <div className="flex justify-end">
        <div className="slider-wrapper lg:w-3/4 sm:w-full overflow-x-scroll h-auto">
          <div className="image-list grid grid-cols-[repeat(8,_minmax(325px,_325px))] gap-3 md:gap-4 lg:gap-5 mb-8">
            <Link
              href={{
                pathname: "/encyclopedia",
                query: { title: "Cephalopods, Crustaceans & other shellfish" },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/cephalopods.jpg"
                  alt="Cephalopods, Crustaceans & other shellfish"
                  className="w-full h-full object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Cephalopods, <br />
                  Crustaceans <br /> & Shellfish
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Corals and Other Invertebrates",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://static01.nyt.com/images/2020/06/09/science/22TB-CORALS1/22TB-CORALS1-mediumSquareAt3X.jpg"
                  alt="Corals & other Invertebrates"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Corals, <br />
                  Invertebrates
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Marine Mammals",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/marinemammals.jpg"
                  alt="Marine Mammals"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Marine <br />
                  Mammals
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Marine Science and Ecosystems",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/ecosystems.jpg"
                  alt="Marine Science & Ecosystems"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Marine Science
                  <br />& Ecosystems
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Ocean Fishes",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/fishes_alt.jpg"
                  alt="Ocean Fishes"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Ocean
                  <br />
                  Fishes
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Sea Turtles & Reptiles",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/seaturtlesandreptiles.jpg"
                  alt="Sea Turtles & Reptiles"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Sea Turtles
                  <br />& Reptiles
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Seabirds",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/seabirds.jpg"
                  alt="Seabirds"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Sea Birds
                </h3>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/encyclopedia",
                query: {
                  title: "Sharks & Rays",
                },
              }}
            >
              <div className="w-full h-[270px] relative">
                <img
                  src="https://oceana.org/wp-content/uploads/sites/18/sharks_0.jpg"
                  alt="Sharks & Rays"
                  className="w-full h-[270px] object-cover image-item"
                />
                <h3 className="text-lg absolute top-0 left-0 w-full h-full text-white text-center bg-black opacity-0 hover:opacity-60 transition duration-300 flex justify-center items-center">
                  Sharks
                  <br />& Rays
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[450px] lg:h-[450px] absolute inset-0">
        <Image src="/images/fish.png" alt="Fish" fill />
      </div>
    </div>
  );
};

export default Encyclopedia;
