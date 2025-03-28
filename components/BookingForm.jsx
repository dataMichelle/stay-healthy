"use client"; // Ensure it's a Client Component

import { useState, useEffect } from "react";

export default function BookingForm({ doctor, onClose }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [appointments, setAppointments] = useState([]); // Start as an empty array

  // ✅ Load localStorage data in useEffect (Client-Side Only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];
      setAppointments(storedAppointments);
    }
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Fetch available time slots for the selected date (for now, dummy data)
    setTimeSlots(["10:00 AM", "11:00 AM", "12:00 PM"]);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      doctorId: doctor.id,
      name,
      phoneNumber,
      date: selectedDate,
      time: selectedTime,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);

    // ✅ Ensure localStorage is available before setting data
    if (typeof window !== "undefined") {
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }

    alert("Appointment booked successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          className="border p-2 w-full mb-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Appointment Date:
        <input
          type="date"
          className="border p-2 w-full mb-2"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
      </label>
      <label>
        Appointment Time:
        <select
          className="border p-2 w-full mb-2"
          value={selectedTime}
          onChange={handleTimeChange}
          disabled={!selectedDate}
          required
        >
          {timeSlots.length > 0 ? (
            timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
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
  );
}
