import React from "react";

const Card = ({ events = [] }) => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-black mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">📅 {event.date}</p>
              <p className="text-sm text-gray-600 mb-4">📍 {event.location}</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
