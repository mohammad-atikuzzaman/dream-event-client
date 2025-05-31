import React, { useState } from 'react';

const MyBookings = () => {
  // Dummy booked events data; replace with real data as needed
  const [bookings, setBookings] = useState([
    {
      id: 1,
      eventName: 'Music Concert',
      eventDate: '2025-06-10',
      tickets: 2,
    },
    {
      id: 2,
      eventName: 'Art Exhibition',
      eventDate: '2025-07-05',
      tickets: 1,
    },
    {
      id: 3,
      eventName: 'Tech Conference',
      eventDate: '2025-08-15',
      tickets: 3,
    },
  ]);

  // Handler to cancel a booking by filtering it out from the list
  const cancelBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings.</p>
      ) : (
        <ul>
          {bookings.map(({ id, eventName, eventDate, tickets }) => (
            <li key={id} style={{ marginBottom: '1rem' }}>
              <div>
                <strong>Event:</strong> {eventName}
              </div>
              <div>
                <strong>Date:</strong> {eventDate}
              </div>
              <div>
                <strong>Tickets:</strong> {tickets}
              </div>
              <button onClick={() => cancelBooking(id)}>Cancel Booking</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
