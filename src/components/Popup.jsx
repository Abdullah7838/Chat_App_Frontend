import { useState } from "react";
import { Link } from "react-router-dom";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Do not render if popup is closed

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg text-white text-center shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-2">Welcome to Our Beta Version</h2>
        <p className="text-sm mb-4">
          Please follow the chat rules to avoid penalties.
        </p>
        <div className="mb-4">
          <Link
            to="/rules"
            className="text-blue-400 hover:text-blue-600 underline text-lg font-bold"
          >
            Chat Guidelines
          </Link>
        </div>
        <p className="text-sm font-medium text-red-400 mb-4">
          Failure to follow the chat rules will result in your device being permanently banned.
        </p>
        <button
          onClick={closePopup}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Popup;
