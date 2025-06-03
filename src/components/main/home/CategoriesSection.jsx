import { useEffect, useState } from "react";
import axios from "axios";
import { MdCategory } from "react-icons/md";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios("https://dream-event-back-end.vercel.app/api/events/categories").then(
      (res) => setCategories(res.data)
    );
  }, []);
  // console.log(categories);
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <section className="py-4 space-y-2 mb-4 rounded-xl bg-gray-100">
          <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg ">
            Browse by Categories
          </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nobis at sapiente veritatis cupiditate quidem.</p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-xl shadow cursor-pointer hover:bg-red-50 transition"
            >
              <div className="text-3xl text-red-500 mb-3">
                <MdCategory />
              </div>
              <h3 className="text-lg font-semibold text-black">{cat}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
