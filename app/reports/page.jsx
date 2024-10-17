"use client";

import { useState } from "react";
import doctorData from "../../data/doctors"; // Adjust the import path as necessary

export default function ReportsPage() {
  const [sortedDoctors, setSortedDoctors] = useState(doctorData.doctors);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

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

  const handleViewReport = (doctor) => {
    alert(`Viewing report for Dr. ${doctor.firstName} ${doctor.lastName}`);
    // Implement the logic to view the report
  };

  const handleDownloadReport = (doctor) => {
    alert(`Downloading report for Dr. ${doctor.firstName} ${doctor.lastName}`);
    // Implement the logic to download the report
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="mt-5">View and download reports for our doctors.</p>
      <table className="min-w-full bg-white mt-5">
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
            <th className="py-2 px-4 border-b">View Report</th>
            <th className="py-2 px-4 border-b">Download Report</th>
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
                  onClick={() => handleViewReport(doctor)}
                  className="bg-teal-600 text-white py-1 px-3 rounded"
                >
                  View Report
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDownloadReport(doctor)}
                  className="bg-teal-600 text-white py-1 px-3 rounded"
                >
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
