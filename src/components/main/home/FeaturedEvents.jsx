import React, { useEffect, useState } from "react";
import Card from "../../shared/card/Card";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://dream-event-back-end.vercel.app/api/events/featured`
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
    <section id="featured" className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <section className="py-4 bg-gray-100 mb-4 rounded-xl space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg ">
            Featured Events
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur, tempore nulla quod beatae error.</p>
        </section>
        {loading ? <p>Loading...</p> : <Card events={events} />}
      </div>
    </section>
  );
};

export default FeaturedEvents;
