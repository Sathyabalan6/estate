import React, { useState } from 'react';
import './editbox.css';

const EditMemberDialog = ({ member, onClose, onSave }) => {
  const [name, setName] = useState(member.name);
  const [designation, setDesignation] = useState(member.designation);
  const [contact, setContact] = useState(member.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMember = {
      ...member,
      name,
      designation,
      contact
    };
    onSave(updatedMember);
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Edit Member</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of Staff"
            required
          />
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            required
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact Info"
            required
          />
          <div className="dialog-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMemberDialog;
