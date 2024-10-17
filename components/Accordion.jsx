"use client";
import { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          index={index}
          title={item.title}
          content={item.steps}
          description={item.description}
        />
      ))}
    </div>
  );
}

function AccordionItem({ index, title, description, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item mb-4">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-stone-100 rounded"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="p-4 bg-gray-50 border-t">
          <p className="mb-4">{description}</p>
          <h3 className="font-medium">Steps:</h3>
          <ul className="list-disc ml-6">
            {content.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
