"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation in Next.js App Router
import doctorData from "../../../data/doctors.js";

export default function FindDoctorBySpecialty() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const router = useRouter();

  // Extract unique specialties from doctorData
  const specialties = Array.from(
    new Set(doctorData.doctors.map((doctor) => doctor.specialty))
  );

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSpecialty) {
      // Navigate to the search results page with the selected specialty as a query param
      router.push(
        `/appointments/results?specialty=${encodeURIComponent(
          selectedSpecialty
        )}`
      );
    } else {
      alert("Please select a specialty.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Find a Doctor by Specialty</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="specialty" className="block text-lg mb-2">
          Select Specialty:
        </label>
        <select
          id="specialty"
          value={selectedSpecialty}
          onChange={handleSpecialtyChange}
          className="border rounded p-2"
        >
          <option value="">Select a specialty</option>
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="mt-4 bg-teal-600 text-white py-2 px-4 rounded"
        >
          Find Doctor
        </button>
      </form>
    </div>
  );
}
