"use client";
import { useState } from "react";

export default function InstantConsult({ doctor, onClose }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      doctorId: doctor?.id,
      name,
      phoneNumber,
    };

    console.log("New appointment:", newAppointment);
    setIsSubmitted(true);
  };

  const handleCancel = () => {
    setIsSubmitted(false); // Go back to the form
    setName(""); // Reset form fields
    setPhoneNumber("");
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Your appointment is booked!
        </h2>
        <p className="mb-4">
          You will receive a call from our healthcare provider shortly.
        </p>
        <button
          onClick={handleCancel}
          className="mt-4 bg-gray-600 text-white py-1 px-3 rounded"
        >
          Cancel Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book an Instant Consultation
        </h2>

        <label className="block mb-4">
          Name:
          <input
            type="text"
            className="border p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          Phone Number:
          <input
            type="tel"
            className="border p-2 w-full"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded w-full"
        >
          Book Now
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 bg-gray-600 text-white py-2 px-4 rounded w-full"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
