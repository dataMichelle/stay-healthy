// Card.jsx
export default function Card({ doctor, onBookAppointment }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">
        Dr. {doctor.firstName} {doctor.lastName}
      </h2>
      <p>Specialty: {doctor.specialty}</p>
      <p>Experience: {doctor.yearsExperience} years</p>
      <p>Ratings: {doctor.ratings}</p>
      <button
        onClick={() => onBookAppointment(doctor)}
        className="mt-4 bg-teal-600 text-white py-2 px-4 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
}
