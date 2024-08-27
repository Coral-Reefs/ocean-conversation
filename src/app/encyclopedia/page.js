"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Encyclopedia() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const router = useRouter();

  const [data, setData] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetch("/encyclopediaData.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryData = data.filter((item) => item.category === title);
        setData(categoryData);
      });
  }, [title]);

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  const goHome = () => {
    router.push("/#encyclopedia");
  };

  if (data.length === 0) {
    return <p>No data found for this category.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col gap-12 items-center justify-center py-24 bg-[url('/images/bg.png')] bg-fixed overflow-x-hidden bg-cover px-4 sm:px-8 md:px-16 lg:px-36">
      <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-12 lg:px-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative cursor-pointer"
            onClick={() => handleAnimalClick(item)}
          >
            <div className="w-full h-48 relative">
              <Image
                src={item.image}
                alt="image"
                fill
                className="object-cover brightness-90"
              />
              <h2 className="absolute top-0 left-0 font-medium text-lg p-5 text-white transition-opacity duration-300 group-hover:opacity-0">
                {item.name}
              </h2>
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p>{item.fun_fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-[90vh] overflow-y-scroll">
          <div className="bg-blue-950 text-white p-12 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-medium mb-4">{selectedAnimal.name}</h2>
            <p className="mb-3">
              Scientific Name: <br />
              <i>{selectedAnimal.scientific_name}</i>
            </p>
            <p className="mb-3">
              Distribution: <br /> <i>{selectedAnimal.distribution}</i>
            </p>
            <p className="mb-3">
              Ecosystem: <br /> <i>{selectedAnimal.ecosystem}</i>
            </p>
            <p className="mb-3">
              Feeding Habits: <br />
              <i>{selectedAnimal.feeding_habits}</i>
            </p>
            <p className="mb-3">
              Taxonomy: <br />
              <i>{selectedAnimal.taxonomy}</i>
            </p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 bg-white text-blue-800 rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={goHome}
        className="px-8 py-2 bg-lime-500 text-white rounded-sm"
      >
        Back
      </button>
    </main>
  );
}
