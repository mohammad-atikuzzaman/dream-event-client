import React from 'react';

const Review = ({ review }) => {
  const { userName, userPhoto, reviewText, rating } = review;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-md">
      <div className="flex items-center mb-2">
        <img
          src={userPhoto}
          alt={userName}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold">{userName || "Anonymous"}</h3>
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm">{reviewText}</p>
    </div>
  );
};

export default Review;
