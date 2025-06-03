import axios from "axios";
import { toast } from "react-toastify";

const BookingModal = ({ user, setShowModal, id }) => {
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const noOfSit = form.ticket.value;
    const phone = form.phone.value;
    const data = {
      name: user.displayName,
      email: user.email,
      phone,
      noOfSit,
    };
    // console.log(data);

    axios
      .post(`https://dream-event-back-end.vercel.app/api/events/book/${id}`, data)
      .then(() => {
        toast.success("Booking Success", {
          theme: "colored",
        });
        setShowModal(false)
      })
      .catch(() => {
        toast.error("Booking Faild", {
          theme: "colored",
        });
      });
  };
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md space-y-4 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 cursor-pointer right-3 text-gray-300 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl text-white text-center font-bold mb-4">
          Register for Event
        </h2>
        <form onSubmit={handleBooking}>
          <input
            type="text"
            value={user?.displayName || ""}
            disabled
            className="w-full border rounded px-3 py-2 bg-gray-700 text-white"
          />
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full border rounded px-3 py-2 bg-gray-700 text-white"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2 bg-gray-800 text-white"
          />
          <input
            type="number"
            placeholder="Number of Tickets"
            name="ticket"
            min={1}
            defaultValue={1}
            required
            className="w-full border rounded px-3 py-2 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="w-full bg-green-500 cursor-pointer text-white py-2 rounded-lg font-semibold mt-4"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
