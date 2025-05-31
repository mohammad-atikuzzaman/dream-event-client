import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios(`http://localhost:3000/api/events/details/${id}`).then((res) =>
      setEvent(res.data)
    );
  }, [id]);

  return (
   <div>
    
   </div>
  );
};

export default EventDetails;
