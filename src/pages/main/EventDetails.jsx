import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContextProvider";
import BookingModal from "../../components/main/booking/BookingModal";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://dream-event-back-end.vercel.app/api/events/details/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!event) return <div className="text-center mt-10">Event not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={event.imageLink}
          alt={event.eventName}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {event.eventName}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            📅 {new Date(event.date).toLocaleString()}
          </p>

          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            {event.description}
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Organizer
            </h2>
            <p>
              <strong>Name:</strong> {event.organizer?.name}
            </p>
            <p>
              <strong>Contact:</strong> {event.organizer?.contact}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <InfoBox label="📌 Location" value={event.location} />
            <InfoBox label="🪑 Available Seats" value={event.numberOfSeats} />
            <InfoBox
              label="💰 Registration Fee"
              value={`৳ ${event.registrationFee}`}
            />
            <InfoBox
              label="⏳ Registration Deadline"
              value={new Date(event.registrationDeadline).toLocaleString()}
            />
          </div>

          {user ? (
            <button
              onClick={() => setShowModal(true)}
              className="w-full md:w-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-200"
            >
              Register Now
            </button>
          ) : (
            <p className="text-red-500 cursor-pointer font-medium mt-4">
              Please login to register for this event.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && <BookingModal user={user} setShowModal={setShowModal} id={id} />}
    </div>
  );
};

const InfoBox = ({ label, value }) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);

export default EventDetails;
