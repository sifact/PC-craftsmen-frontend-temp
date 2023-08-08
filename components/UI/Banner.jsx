import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mb-32">
      <div className="relative bg-gradient-to-tr from-black to-gray-500">
        <div className="h-[500px] ">
          <img
            className="object-cover rounded-sm w-full h-full mix-blend-overlay"
            src="/bg-1.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-6 justify-center items-center absolute inset-0 container mx-auto ">
          <h2 className=" text-white text-3xl transition font-bold cursor-pointe">
            Craft a cutting-edge PC assembly
          </h2>
          <p className="text-white md:w-[50%]">
            Empowering your PC creation journey, our platform offers an array of
            templates to bring your ideal computer to life.
          </p>
          <div className="">
            <Link href="/pcBuilder">
              <button
                className="border border-white py-2 px-16 rounded-sm text-white"
                style={{ width: "fit-content" }}
              >
                Build PC
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 z-40 ">
            <div className=" sm:w-[500px] h-[600px] mx-auto">
              <img
                className="object-cover shadow-lg rounded-sm w-full h-full mt-[-40px]"
                src="/motherboard-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <h2 className=" text-3xl transition font-bold cursor-pointe">
              Craft your ultimate PC configuration effortlessly
            </h2>
            <p className="">
              Elevate your computing experience using our diverse range of
              expertly designed PC customization templates. Seamlessly
              experiment, modify, and visualize your ideal rig, ensuring a
              personalized masterpiece.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
