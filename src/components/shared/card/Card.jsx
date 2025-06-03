import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const Card = ({ events = [] }) => {
  // console.log(events);
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={event.imageLink}
              alt={event.eventName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-black mb-2">
                {event.eventName}
              </h3>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <MdDateRange />
                {new Date(event.date).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaLocationDot />
                {event.location}
              </p>
              <Link
                to={`/events-details/${event._id}`}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
