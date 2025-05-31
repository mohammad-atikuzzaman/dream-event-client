import React from "react";
import { FaMusic, FaFootballBall, FaMicrochip, FaBriefcase, FaPaintBrush, FaTheaterMasks } from "react-icons/fa";

const categories = [
  { id: 1, name: "Music", icon: <FaMusic /> },
  { id: 2, name: "Sports", icon: <FaFootballBall /> },
  { id: 3, name: "Tech", icon: <FaMicrochip /> },
  { id: 4, name: "Business", icon: <FaBriefcase /> },
  { id: 5, name: "Art", icon: <FaPaintBrush /> },
  { id: 6, name: "Theatre", icon: <FaTheaterMasks /> },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">Browse by Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-xl shadow cursor-pointer hover:bg-red-50 transition"
            >
              <div className="text-3xl text-red-500 mb-3">{cat?.icon}</div>
              <h3 className="text-lg font-semibold text-black">{cat?.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
