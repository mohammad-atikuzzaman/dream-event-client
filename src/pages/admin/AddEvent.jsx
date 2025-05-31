import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContextProvider";

const AddEvent = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    location: "",
    category: "",
    description: "",
    numberOfSeats: "",
    imageLink: "",
    organizerName: "",
    organizerContact: "",
    registrationDeadline: "",
    registrationFee: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        organizerName: user.displayName || "",
        organizerContact: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventPayload = {
      eventName: formData.eventName,
      date: new Date(formData.date).toISOString(),
      location: formData.location,
      category: formData.category,
      description: formData.description,
      numberOfSeats: parseInt(formData.numberOfSeats, 10),
      imageLink: formData.imageLink,
      organizer: {
        name: formData.organizerName,
        contact: formData.organizerContact,
      },
      registrationDeadline: new Date(
        formData.registrationDeadline
      ).toISOString(),
      registrationFee: parseFloat(formData.registrationFee),
    };

    try {
      const response = await fetch(
        "https://dream-event-back-end.vercel.app/api/events/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventPayload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add event");
      }

      const result = await response.json();
      console.log("Server response:", result);
      toast.success("Event added successfully!");

      setFormData({
        eventName: "",
        date: "",
        location: "",
        category: "",
        description: "",
        numberOfSeats: "",
        imageLink: "",
        organizerName: user?.displayName || "",
        organizerContact: user?.email || "",
        registrationDeadline: "",
        registrationFee: "",
      });
    } catch (error) {
      console.error("Error submitting event:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white text-black rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g., Music, Tech)"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full border p-2 rounded"
          rows={3}
          required
        />
        <input
          type="number"
          name="numberOfSeats"
          value={formData.numberOfSeats}
          onChange={handleChange}
          placeholder="Number of Seats"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="imageLink"
          value={formData.imageLink}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
          placeholder="Organizer Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="organizerContact"
          value={formData.organizerContact}
          onChange={handleChange}
          placeholder="Organizer Contact Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="datetime-local"
          name="registrationDeadline"
          value={formData.registrationDeadline}
          onChange={handleChange}
          placeholder="Registration Deadline"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="registrationFee"
          value={formData.registrationFee}
          onChange={handleChange}
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
