"use client";
import { useState, useEffect, useCallback } from "react"; // ✅ Ensure useCallback is used correctly
import doctorData from "../../data/doctors";
import Modal from "@/components/Modal";
import FeedbackForm from "@/components/FeedbackForm";
import { PiSortAscendingFill } from "react-icons/pi";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState({});
  const [sortedDoctors, setSortedDoctors] = useState([...doctorData.doctors]); // ✅ Avoid stale state issues
  const [sortConfig, setSortConfig] = useState({
    key: "lastName",
    direction: "ascending",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // ✅ Ensure localStorage is only accessed in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReviews = localStorage.getItem("reviews");
      setReviews(storedReviews ? JSON.parse(storedReviews) : {});
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  // ✅ Sort Doctors with Correct Dependencies
  useEffect(() => {
    const sorted = [...doctorData.doctors].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
    setSortedDoctors(sorted);
  }, [sortConfig]); // ✅ Only depend on `sortConfig`

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
    setSortConfig({ key, direction }); // ✅ Correct way to update sort
  };

  const renderStars = (rating) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl sm:text-2xl ${
            star <= rating ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="mt-10 mx-auto w-full px-4 sm:px-8 lg:w-4/5">
      <h1 className="text-gray-600 text-center text-2xl sm:text-3xl">
        Reviews
      </h1>
      <p className="mt-5 mb-8 text-center">
        Read reviews from our satisfied customers.
      </p>
      <div className="flex justify-end mb-4">
        <p>Sort </p>
        <PiSortAscendingFill
          onClick={() => sortDoctors("lastName")}
          className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {sortedDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border rounded-lg p-4 bg-white shadow-md m-4"
          >
            <h2 className="text-lg font-semibold">
              Dr. {doctor.firstName} {doctor.lastName}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
            <div className="mb-2">
              <button
                onClick={() => handleGiveReview(doctor)}
                className="bg-teal-600 text-white py-1 px-3 rounded text-xs"
              >
                Give Review
              </button>
            </div>
            <div className="mb-2">
              <strong>Review:</strong>{" "}
              {reviews[doctor.id]?.review || "No review given"}
            </div>
            <div>
              <strong>Rating:</strong>{" "}
              {renderStars(reviews[doctor.id]?.rating || 0)}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Give Review"
        description={`Review for Dr. ${selectedDoctor?.firstName} ${selectedDoctor?.lastName} (${selectedDoctor?.specialty})`}
      >
        {selectedDoctor && <FeedbackForm doctor={selectedDoctor} />}
      </Modal>
    </div>
  );
}
