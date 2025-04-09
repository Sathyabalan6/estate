import React, { useState } from "react";
import "./AdminPage.css";
import { FaUser, FaSignOutAlt, FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import AddMemberDialog from "./AddMemberDialog";
import EditMemberDialog from "./editbox";

const AdminDashboard = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      designation: "Manager",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Meena Iyer",
      designation: "Engineer",
      contact: "9123456780",
    },
  ]);

  const handleSaveEdit = (updatedMember) => {
    const updatedTeam = team.map((member) =>
      member.id === updatedMember.id ? updatedMember : member
    );
    setTeam(updatedTeam);
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo-section">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
          <h2>Estate office</h2>
          <p>Anna University, Chennai</p>
        </div>
        <nav className="nav-links">
          <a href="#">
            <FaUser /> Manage Team
          </a>
          <a href="#">
            <FaSignOutAlt /> Logout
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Manage Team</h1>
          <button className="add-btn" onClick={() => setShowAddDialog(true)}>
            <FaPlus /> Add
          </button>
        </header>

        <table className="team-table">
          <thead>
            <tr>
              <th>NAME OF THE STAFF</th>
              <th>DESIGNATION</th>
              <th>CONTACT INFO</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.designation}</td>
                <td>{member.contact}</td>
                <td>
                  <button
                    className="icon-btn"
                    onClick={() => {
                      setSelectedMember(member);
                      setShowEditDialog(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() =>
                      setTeam(team.filter((m) => m.id !== member.id))
                    }
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showAddDialog && (
        <AddMemberDialog onClose={() => setShowAddDialog(false)} />
      )}
      {showEditDialog && selectedMember && (
        <EditMemberDialog
          member={selectedMember}
          onClose={() => setShowEditDialog(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
