import React from "react";

const StatusTable = () => {
  return (
    <div className="font-sans p-8 bg-green-50 text-green-900">
      <h2 className="text-3xl font-bold text-white bg-green-950 py-5 rounded-t-2xl shadow-md text-center">
        Tender Overview
      </h2>

      <div className="overflow-x-auto bg-white rounded-b-2xl shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black text-white uppercase text-sm">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Purpose</th>
              <th className="p-4 text-left">Admission</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Slot</th>
              <th className="p-4 text-left">Expected Final Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-green-100" : "bg-white"
                } hover:bg-green-200 transition-colors`}
              >
                <td className="p-4 font-medium">John Doe</td>
                <td className="p-4 font-medium">Research</td>
                <td className="p-4 font-medium">2023</td>
                <td className="p-4 font-medium">Ongoing</td>
                <td className="p-4 font-medium">Slot A</td>
                <td className="p-4 font-medium">May 2025</td>
                <td className="p-4 font-medium">Approved</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusTable;
