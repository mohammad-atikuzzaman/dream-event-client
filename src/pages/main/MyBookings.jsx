import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import axios from "axios";
import { toast } from "react-toastify";
import SingleBooking from "../../components/main/home/SingleBooking";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            <SingleBooking
              key={booking._id}
              booking={booking}
              setRefetch={setRefetch}
              refetch={refetch}
              user={user}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
