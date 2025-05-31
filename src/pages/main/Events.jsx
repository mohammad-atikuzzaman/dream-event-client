import React, { useEffect, useState } from "react";
import Card from "../../components/shared/card/Card";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://dream-event-back-end.vercel.app/api/events/all`
        );
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="py-12">
      <h1 className="text-center mb-6 text-xl md:text-3xl">All Events</h1>
      {loading ? (
        <p className="text-center">Loading events...</p>
      ) : (
        <Card events={events} />
      )}
    </div>
  );
};

export default Events;
