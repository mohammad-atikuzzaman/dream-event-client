import React, { useEffect, useState } from "react";
import Card from "../../card/Card";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`https://dream-event-back-end.vercel.app/api/events/featured`);
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-black font-bold mb-10">Featured Events</h2>
        {loading ? <p>Loading...</p> : <Card events={events} />}
      </div>
    </section>
  );
};

export default FeaturedEvents;
