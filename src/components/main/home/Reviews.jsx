import { useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/reviews/all-reviews").then((res) =>
      setReviews(res.data)
    );
  }, []);
//   console.log(reviews);
  return (
    <div>
      <section className="text-center bg-gray-100 space-y-2 py-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          Users Reviews
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          hic blanditiis rerum debitis. Ut, ipsa.
        </p>
      </section>
      <section className="flex flex-wrap justify-center mt-4">
        {reviews?.map((review, i) => (
          <Review key={i} review={review} />
        ))}
      </section>
    </div>
  );
};

export default Reviews;
