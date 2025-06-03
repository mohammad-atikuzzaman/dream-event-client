import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ReviewModal = ({ user, booking, setShowModal }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const submitReview = () => {
    if (!rating || !reviewText.trim()) {
      return toast.error("Please provide both rating and review", {
        theme: "colored",
      });
    }

    const reviewData = {
      eventId: booking._id,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      rating,
      reviewText,
    };

    console.log(reviewData);
    axios
      .post("https://dream-event-back-end.vercel.app/api/reviews/submit", reviewData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Give Your Review</h2>

        <div className="flex items-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={
                star <= rating
                  ? "text-yellow-500 text-2xl"
                  : "text-gray-400 text-2xl"
              }
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Write your review here..."
        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={submitReview}
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
