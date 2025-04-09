import React from 'react';
import './Properties.css';
 import Header from '../components/header';
 import Footer from '../components/footer';

function Properties() {
  return (
    <div className="properties-container">
      <h2 className="table-title">Properties</h2>
      <div className="table-wrapper">
        <table className="properties-table">
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>LORAM</td>
                <td>LAND</td>
                <td><a href="#">View Location</a></td>
                <td><a href="#">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  );
}

export default Properties;



