"use client";

export default function Modal({ isOpen, title, description, children }) {
  if (!isOpen) return null;

  const handleClose = () => {
    document.dispatchEvent(new Event("modalClose")); // ✅ Use an event instead of passing a prop
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-2">{description}</p>
        {children}
        <button
          onClick={handleClose} // ✅ Now, it doesn't rely on props
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
