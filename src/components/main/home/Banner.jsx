import React from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[url('/auth/background.jpg')] bg-cover bg-center min-h-[90vh]  flex items-center justify-center text-white px-4">
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          WE ARE EVENT PROFESSIONALS
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-200">
          You Can Find Festivals, Parties, Conference, Fairs, Exhibitions, Speakers and more
        </p>

        <form className="mt-6 w-full flex flex-col sm:flex-row justify-center items-center gap-3 bg-white/90 rounded-lg p-3 sm:p-4 shadow-lg">
          <input
            type="text"
            placeholder="Find events by name or category.
"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md text-gray-800 outline-none"
          />
        
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <FaSearch />
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-semibold shadow">
            Popular Events
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold shadow">
            Latest Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
