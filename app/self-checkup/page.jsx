import React from "react";
import Accordion from "../../components/Accordion";
import selfCheckupData from "../../data/selfCheckup";

export default function SelfCheckupPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {" "}
      {/* Added margin and padding */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Self-Checkup Guide
      </h1>
      <Accordion data={selfCheckupData} />{" "}
      {/* Pass the data to the Accordion */}
    </div>
  );
}
