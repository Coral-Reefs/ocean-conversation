"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const Strategies = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen text-white relative mt-36 sm:mt-12">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl font-bold text-center">Our Ocean Strategies</h1>
        <p className="text-center">
          Click the tiles for details on our top ocean conservation strategies
          and real examples of our work around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
          <div
            onClick={() => setIsFirstOpen(true)}
            className="border-2 p-4 text-center cursor-pointer"
          >
            <Image
              src="https://www.nature.org/content/dam/tnc/nature/en/photos/MAG22011_BelizeBlueBonds_220620_IMG_6077_JPG.Jpg"
              width={300}
              height={300}
              alt="image"
            />
            <p className="pt-3">Protect & Restore Ocean Habitats</p>
          </div>
          <div
            onClick={() => setIsSecondOpen(true)}
            className="border-2 p-4 text-center cursor-pointer"
          >
            <Image
              src="https://www.nature.org/content/dam/tnc/nature/en/documents/donor-content-resource-center/TNC22005_KenyaMangroves_211118-1054_JPG.Jpg"
              width={300}
              height={300}
              alt="image"
            />
            <p className="pt-3">Reduce Climate’s Impact on Oceans</p>
          </div>
          <div
            onClick={() => setIsThirdOpen(true)}
            className="border-2 p-4 text-center cursor-pointer"
          >
            <Image
              src="https://www.nature.org/content/dam/tnc/nature/en/photos/o/p/opelu-chad-wiggins.jpg"
              width={300}
              height={300}
              alt="image"
            />
            <p className="pt-3">Thriving Fisheries & Aquaculture</p>
          </div>
        </div>

        <Transition appear show={isFirstOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsFirstOpen(false)}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <Image
                    src="https://www.nature.org/content/dam/tnc/nature/en/photos/MAG22011_BelizeBlueBonds_220620_IMG_6077_JPG.Jpg"
                    width={500}
                    height={900}
                    alt="image"
                  />
                  <div className="flex flex-col gap-3">
                    <Dialog.Title className="text-xl font-bold">
                      Protect & Restore Ocean Habitats
                    </Dialog.Title>
                    <p>We enhance ocean habitats by:</p>
                    <ul className="text-sm list-disc pl-5">
                      <li>
                        Supporting sustainable funding for ocean protection and
                        conservation.
                      </li>
                      <li>
                        Creating new protected areas and restoring reefs,
                        mangroves, and seagrasses.
                      </li>
                      <li>
                        Sharing knowledge through platforms like Reef Resilience
                        Network and Global Mangrove Watch to improve marine
                        ecosystem management.
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isSecondOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsSecondOpen(false)}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <Image
                    src="https://www.nature.org/content/dam/tnc/nature/en/documents/donor-content-resource-center/TNC22005_KenyaMangroves_211118-1054_JPG.Jpg"
                    width={700}
                    height={1000}
                    alt="image2"
                  />
                  <div className="flex flex-col gap-3">
                    <Dialog.Title className="text-xl font-bold">
                      Reduce Climate’s Impact on Oceans
                    </Dialog.Title>
                    <p>
                      We address climate risks and enhance coastal resilience
                      by:
                    </p>
                    <ul className="text-sm list-disc pl-5">
                      <li>
                        Reducing emissions and removing carbon from the
                        atmosphere.
                      </li>
                      <li>
                        Supporting coastal communities with nature-based
                        solutions like restoring reefs, mangroves, and salt
                        marshes to combat climate impacts.
                      </li>
                      <li>
                        Protecting “super reefs” that withstand higher
                        temperatures and using them to propagate resilient
                        corals.
                      </li>
                      <li>
                        Funding coastal conservation with innovative projects,
                        including blue carbon credits and disaster insurance for
                        reefs and mangroves.
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isThirdOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsThirdOpen(false)}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <Image
                    src="https://www.nature.org/content/dam/tnc/nature/en/photos/o/p/opelu-chad-wiggins.jpg"
                    width={500}
                    height={900}
                    alt="image"
                  />
                  <div className="flex flex-col gap-3">
                    <Dialog.Title className="text-xl font-bold">
                      Thriving Fisheries & Aquaculture
                    </Dialog.Title>
                    <p>
                      Food production pressures the ocean. We work with partners
                      to promote sustainable fishing and farming, aiming to
                      restore fish populations by:
                    </p>
                    <ul className="text-sm list-disc pl-5">
                      <li>
                        Advancing sustainable fish and shrimp farming and
                        supporting seaweed and shellfish farms that improve
                        ocean health.
                      </li>
                      <li>
                        Using FishPath to help fisheries managers in 15+
                        countries achieve sustainability.
                      </li>
                      <li>
                        Partnering with the Marshall Islands and Walmart to
                        enhance the global canned tuna supply chain, using
                        technology to prevent illegal fishing and reduce
                        bycatch.
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        <div className="absolute bottom-0 right-2 lg:w-[250px] lg:h-[200px]">
          <Image src="/images/fish2.png" alt="diver" fill />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
