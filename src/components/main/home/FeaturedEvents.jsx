import React from "react";
import Card from "../../card/Card";



const FeaturedEvents = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-black font-bold mb-10">Featured Events</h2>
       <Card></Card>
      </div>
    </section>
  );
};

export default FeaturedEvents;
