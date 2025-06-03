import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import axios from "axios";
import { toast } from "react-toastify";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(user?.email);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `https://dream-event-back-end.vercel.app/api/events/booked?email=${user?.email}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?.email, refetch]);

  const cancelBooking = (id) => {
    // return console.log(id);
    axios
      .put(`http://localhost:3000/api/events/cancel/${id}`, {
        email: user?.email,
      })
      .then(() => {
        toast.warn("Event Delete Success", {
          theme: "colored",
        });
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Bookings
      </h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">You have no bookings.</p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6 border border-gray-200"
            >
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
                  <span className="font-semibold text-gray-700">
                    Organizer:
                  </span>{" "}
                  {booking.organizer?.name}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Contact:</span>{" "}
                  {booking.organizer?.contact}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Description:
                  </span>{" "}
                  {booking.description}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Registration Fee:
                  </span>{" "}
                  ${booking.registrationFee}
                </div>
                <button
                  onClick={() => cancelBooking(booking._id)}
                  className="mt-4 cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Cancel Booking
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
