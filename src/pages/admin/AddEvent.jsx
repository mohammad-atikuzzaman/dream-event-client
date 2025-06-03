import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContextProvider";
import axios from "axios";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (img) => {
    const formData = new FormData();
    formData.append("image", img);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=66c36ebac8cfebbc76676fb0650e9ac5`, // Replace with real key
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data?.data?.url;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    toast.info("Please wait", {
      theme: "colored",
    });
    e.preventDefault();
    const form = e.target;
    const eventName = form.eventName.value;
    const date = form.date.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const numberOfSeats = form.numberOfSeats.value;
    const registrationDeadline = form.registrationDeadline.value;
    const registrationFee = form.registrationFee.value;

    const organizer = {
      name: user?.displayName,
      contact: user?.email,
    };

    const imageLink = await handleImageUpload(image);

    const data = {
      eventName,
      date,
      location,
      category,
      description,
      numberOfSeats,
      imageLink,
      organizer,
      registrationDeadline,
      registrationFee,
      userD: user?.email,
    };

    // return console.log(data);
    axios
      .post("https://dream-event-back-end.vercel.app/api/events/add", data)
      .then((res) => {
        const { code, message } = res.data;

        if (code === 403) {
          toast.warn(message);
        } else {
          toast.success("Event Added", { theme: "colored" });
        }
      })
      .catch(() => {
        toast.error("Event adding failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-xl shadow-lg mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
        Create New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Name */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="eventName"
            >
              Event Name *
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Enter event name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="category"
            >
              Category *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="e.g., Music, Tech, Business"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Date & Time *
            </label>
            <input
              type="datetime-local"
              name="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Registration Deadline *
            </label>
            <input
              type="datetime-local"
              name="registrationDeadline"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Venue or online meeting link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Tell people about your event..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            rows={4}
            required
          />
        </div>

        {/* Seats & Fee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="numberOfSeats"
            >
              Number of Seats *
            </label>
            <input
              type="number"
              id="numberOfSeats"
              name="numberOfSeats"
              placeholder="Maximum attendees"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="registrationFee"
            >
              Registration Fee *
            </label>
            <input
              type="number"
              id="registrationFee"
              name="registrationFee"
              placeholder="0 for free events"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Event Cover Image *
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 hover:border-red-400 rounded-lg cursor-pointer transition-all hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  {image ? image.name : "Upload an image"}
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                className="opacity-0"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r cursor-pointer from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          {loading ? "Loading..." : "Add Event"}
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
