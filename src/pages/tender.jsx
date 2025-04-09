import React from 'react';
import './Tender.css';

const StatusTable = () => {
  return (
    <div className="status-container">
      <h2 className="table-title">Tender Overview</h2>
      <div className="table-wrapper">
        <table className="status-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Admission</th>
              <th>Status</th>
              <th>Slot</th>
              <th>Expected Final Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>John Doe</td>
                <td>Research</td>
                <td>2023</td>
                <td>Ongoing</td>
                <td>Slot A</td>
                <td>May 2025</td>
                <td>Approved</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusTable;
