import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <section className="bg-[url('/auth/background.jpg')] bg-cover bg-center min-h-[90vh] flex items-center justify-center text-white px-4">
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          WE ARE EVENT PROFESSIONALS
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-200">
          You Can Find Festivals, Parties, Conferences, Fairs, Exhibitions,
          Speakers, and more.
        </p>

        <section className="mt-6 w-full flex flex-col sm:flex-row justify-center items-center gap-3 bg-white/90 rounded-lg p-3 sm:p-4 shadow-lg">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Find events by name or category"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md text-gray-800 outline-none"
          />
          <Link
            to={`/search${searchText?`/${searchText}`:"/find"}`}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <FaSearch />
            Search
          </Link>
        </section>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="#featured"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-semibold shadow"
          >
            Popular Events
          </Link>
          <Link
            to="#latest"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold shadow"
          >
            Latest Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
