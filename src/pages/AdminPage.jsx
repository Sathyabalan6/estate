import React, { useState } from "react";
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
      name: "Ri Kumar",
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
    <div className="flex h-screen bg-green-50 font-segoe">
      {/* Sidebar */}
      <aside className="bg-green-900 text-white w-[250px] p-4 flex flex-col justify-between">
        <div className="text-center">
          <img src="src/assets/logo.png" alt="Logo" className="h-[60px] mb-2 mx-auto" />
          <h2 className="text-xl font-bold">Estate Office</h2>
          <p className="text-sm">Anna University, Chennai</p>
        </div>
        <nav className="mt-8 space-y-4">
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg font-medium hover:bg-green-700 transition">
            <FaUser /> Manage Team
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg font-medium hover:bg-green-700 transition">
            <FaSignOutAlt /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-green-900">Manage Team</h1>
          <button
            className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
            onClick={() => setShowAddDialog(true)}
          >
            <FaPlus /> Add
          </button>
        </header>

        <table className="w-full text-left border-collapse rounded-xl overflow-hidden text-base">
          <thead className="bg-black text-white uppercase text-sm">
            <tr>
              <th className="p-4">Name of the Staff</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Contact Info</th>
              <th className="p-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member, index) => (
              <tr key={member.id} className={index % 2 === 0 ? "bg-green-100" : "bg-white"}>
                <td className="p-4">{member.name}</td>
                <td className="p-4">{member.designation}</td>
                <td className="p-4">{member.contact}</td>
                <td className="p-4">
                  <button
                    className="text-green-900 hover:text-green-600 mr-3"
                    onClick={() => {
                      setSelectedMember(member);
                      setShowEditDialog(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-green-900 hover:text-green-600"
                    onClick={() => setTeam(team.filter((m) => m.id !== member.id))}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Dialogs */}
      {showAddDialog && (
        <AddMemberDialog
          onClose={() => setShowAddDialog(false)}
          onAdd={(newMember) => {
            setTeam([...team, { ...newMember, id: Date.now() }]);
            setShowAddDialog(false);
          }}
        />
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
