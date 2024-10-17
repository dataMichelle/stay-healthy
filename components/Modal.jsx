// components/Modal.jsx
export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
}) {
  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-2">{description}</p>
        {/* Render the form passed as children */}
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
