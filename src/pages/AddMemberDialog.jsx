import React, { useState } from "react";

const AddMemberDialog = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, designation, contact });
    setName("");
    setDesignation("");
    setContact("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-[400px] shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">Add Team Member</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name of Staff"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Contact Info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberDialog;
