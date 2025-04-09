import React from 'react';
import './AddMemberDialog.css';

const AddMemberDialog = ({ onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Add Team Member</h2>
        <form>
          <input type="text" placeholder="Name of Staff" required />
          <input type="text" placeholder="Designation" required />
          <input type="text" placeholder="Contact Info" required />
          <div className="dialog-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberDialog;
