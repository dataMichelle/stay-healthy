// SearchResults.jsx
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation"; // Use useSearchParams in App Router
import doctorData from "../../../data/doctors.js"; // Import the doctors data
import Card from "@/ui/Card"; // Import the Card component
import BookingForm from "@/components/BookingForm"; // Import the BookingForm component
import Modal from "@/components/Modal"; // Import the Modal component

export default function SearchResults() {
  const searchParams = useSearchParams(); // Get the search parameters from the URL
  const specialty = searchParams.get("specialty"); // Get the "specialty" query parameter

  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Filter the doctors based on the selected specialty
  const filteredDoctors = doctorData.doctors.filter(
    (doctor) => doctor.specialty === specialty
  );

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">
        Doctors Specializing in {specialty}
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))
        ) : (
          <p>No doctors found for {specialty}.</p>
        )}
      </div>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
      >
        {selectedDoctor && (
          <BookingForm doctor={selectedDoctor} onClose={handleCloseModal} />
        )}
      </Modal>
    </div>
  );
}
