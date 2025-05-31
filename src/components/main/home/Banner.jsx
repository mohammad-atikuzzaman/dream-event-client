import React from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[url('/auth/background.jpg')] bg-cover bg-center w-full overflow-x-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="backdrop-blur-sm bg-white/10 px-4 py-10 sm:px-8 sm:py-14 w-full max-w-4xl mx-auto rounded-2xl h-[70vh] flex flex-col justify-center">
          <h2 className="text-gray-100 font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Find The Event
          </h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tempore blanditiis eaque at et libero?
          </p>
          <form className="mt-6 px-2 sm:px-0">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Search events..."
                className="px-4 py-3 rounded-md w-full outline-none focus:ring-2 focus:ring-gray-300 font-medium text-gray-100 bg-white/20 placeholder-gray-300"
              />
              <button
                className="btn flex items-center justify-center gap-2 font-semibold bg-gray-300 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-400 transition-colors w-full sm:w-auto"
                type="submit"
              >
                Search <FaSearch className="inline" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
