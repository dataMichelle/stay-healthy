// components/FeedbackForm.jsx
import { useState } from "react";

export default function FeedbackForm({ doctor, onSubmit }) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating before submitting.");
      return;
    }
    onSubmit({ name, review, rating });
    // Reset the form after submission
    setName("");
    setReview("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">
        Review for Dr. {doctor.firstName} {doctor.lastName}
      </h2>
      <label className="block">
        Name:
        <input
          type="text"
          className="border p-2 w-full mb-2 mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </label>
      <label className="block">
        Review:
        <textarea
          className="border p-2 w-full mb-2 mt-1"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          required
        />
      </label>
      <label className="block">
        Rating:
        <div className="flex mb-2 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </label>
      <button
        type="submit"
        className="bg-teal-600 text-white py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}
