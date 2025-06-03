import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import ReviewModal from "./ReviewModal";

const SingleBooking = ({ booking, setRefetch, refetch, user }) => {
  const [showModal, setShowModal] = useState(false);

  const cancelBooking = (id) => {
    axios
      .put(`https://dream-event-back-end.vercel.app/api/events/cancel/${id}`, {
        email: user?.email,
      })
      .then(() => {
        toast.warn("Event Delete Success", { theme: "colored" });
        setRefetch(!refetch);
      })
      .catch((err) => console.error(err));
  };

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <li className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6 border border-gray-200">
        <img
          src={booking.imageLink}
          alt={booking.eventName}
          className="w-full md:w-60 h-40 object-cover rounded-xl"
        />
        <div className="flex-1 space-y-2">
          <div>
            <span className="font-semibold text-gray-700">Event:</span>{" "}
            {booking.eventName}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Date:</span>{" "}
            {formatDate(booking.date)}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Location:</span>{" "}
            {booking.location}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {booking.category}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Organizer:</span>{" "}
            {booking.organizer?.name}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Contact:</span>{" "}
            {booking.organizer?.contact}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Description:</span>{" "}
            {booking.description}
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              Registration Fee:
            </span>{" "}
            ${booking.registrationFee}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => cancelBooking(booking._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Cancel Booking
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Give Review
            </button>
          </div>
        </div>
      </li>

      {/* Review Modal */}
      {showModal && (
        <ReviewModal
          setShowModal={setShowModal}
          user={user}
          booking={booking}
        />
      )}
    </>
  );
};

export default SingleBooking;
