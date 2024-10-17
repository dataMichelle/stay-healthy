"use client";

import { useState, useEffect } from "react";
import doctorData from "../../data/doctors"; // Adjust the import path as necessary
import Modal from "@/components/Modal";
import FeedbackForm from "@/components/FeedbackForm";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) || {}
  );
  const [sortedDoctors, setSortedDoctors] = useState(doctorData.doctors);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleGiveReview = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleSubmitReview = (reviewData) => {
    const updatedReviews = {
      ...reviews,
      [selectedDoctor.id]: {
        ...reviews[selectedDoctor.id],
        rating: reviewData.rating,
        review: reviewData.review,
      },
    };
    setReviews(updatedReviews);
    setIsModalOpen(false);
  };

  const sortDoctors = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...sortedDoctors].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedDoctors(sorted);
    setSortConfig({ key, direction });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              star <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-10 mx-auto w-4/5">
      <h1>Reviews</h1>
      <p className="mt-5 mb-8 text-center">
        Read reviews from our satisfied customers.
      </p>
      <table className="min-w-full bg-white mt-5 border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">
              Doctor Name
              <span
                onClick={() => sortDoctors("lastName")}
                className="ml-2 cursor-pointer text-sm font-normal"
              >
                sort{" "}
                {sortConfig.key === "lastName" &&
                  (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </span>
            </th>
            <th className="py-2 px-4 border-b">
              Specialty
              <span
                onClick={() => sortDoctors("specialty")}
                className="ml-2 cursor-pointer text-sm font-normal"
              >
                sort{" "}
                {sortConfig.key === "specialty" &&
                  (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </span>
            </th>
            <th className="py-2 px-4 border-b">Provide Review</th>
            <th className="py-2 px-4 border-b">Review Given</th>
            <th className="py-2 px-4 border-b">Rating Given</th>
          </tr>
        </thead>
        <tbody>
          {sortedDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="py-2 px-4 border-b">
                Dr. {doctor.firstName} {doctor.lastName}
              </td>
              <td className="py-2 px-4 border-b">{doctor.specialty}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleGiveReview(doctor)}
                  className="bg-teal-600 text-white py-1 px-3 rounded"
                >
                  Give Review
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                {reviews[doctor.id]?.review || "No review given"}
              </td>
              <td className="py-2 px-4 border-b">
                {renderStars(reviews[doctor.id]?.rating || 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Give Review"
        description={`Review for Dr. ${selectedDoctor?.firstName} ${selectedDoctor?.lastName} (${selectedDoctor?.specialty})`}
      >
        {selectedDoctor && (
          <FeedbackForm doctor={selectedDoctor} onSubmit={handleSubmitReview} />
        )}
      </Modal>
    </div>
  );
}
