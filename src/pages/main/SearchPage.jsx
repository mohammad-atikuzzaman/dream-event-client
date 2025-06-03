import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/shared/card/Card";

const SearchPage = () => {
  const { text } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:3000/api/events/search?searchText=${text}`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [text]);
  return (
    <div className="pb-12 mx-4">
      <h1 className="text-center mb-6 text-xl md:text-3xl bg-gray-100 py-6 font-semibold text-red-500">
        Search Results
      </h1>
      {loading ? (
        <p className="text-center">Loading events...</p>
      ) : (
        <Card events={events} />
      )}
    </div>
  );
};

export default SearchPage;
