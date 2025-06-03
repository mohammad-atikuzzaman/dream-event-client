import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContextProvider";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);

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
    e.preventDefault();
    const form = e.target;
    const eventName = form.eventName;
    const date = form.date;
    const location = form.location;
    const category = form.category;
    const numberOfSeats = form.numberOfSeats;
    const registrationDeadline = form.registrationDeadline;
    const registrationFee = form.registrationFee;
    const organizer = {
      organizerName: user?.displayName,
      organizerContact: user?.email,
    };
    // const photoUrl = await handleImageUpload(image)

    const data = {
      eventName,
      date,
      location,
      category,
      numberOfSeats,
      registrationDeadline,
      registrationFee,
      organizer, // photoUrl
    };

    console.log(data);
  };
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white text-black rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="font-semibold" htmlFor="eventName">
          Event Name
        </label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          placeholder="Event Name"
          className="w-full border p-2 rounded"
          required
        />
        <label className="font-semibold" htmlFor="eventName"></label>
        <input
          type="datetime-local"
          name="date"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Music, Tech)"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          className="w-full border p-2 rounded"
          rows={3}
          required
        />
        <input
          type="number"
          name="numberOfSeats"
          placeholder="Number of Seats"
          className="w-full border p-2 rounded"
          required
        />

        {/* todo need to make a system for uploading seat's */}
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full bg-red-500   p-2 rounded-md text-sm text-gray-100"
        />

        {/* <input
          type="text"
          name="imageLink"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        /> */}

        {/* <input
          type="text"
          name="organizerName"
          placeholder="Organizer Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="organizerContact"
          placeholder="Organizer Contact Email"
          className="w-full border p-2 rounded"
          required
        /> */}
        <input
          type="datetime-local"
          name="registrationDeadline"
          placeholder="Registration Deadline"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="registrationFee"
          placeholder="Registration Fee (e.g., 500)"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white py-2 px-4 rounded"
        >
          Add Event
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
