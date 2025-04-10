import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Properties() {
  return (
    <div className="font-sans p-8 bg-green-50 text-green-900">
      <h2 className="text-3xl font-bold text-white bg-green-950 py-5 rounded-t-2xl shadow-md text-center">
        Properties
      </h2>

      <div className="overflow-x-auto bg-white rounded-b-2xl shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black text-white uppercase text-sm">
              <th className="p-4 text-left">Property Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">View</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? 'bg-green-100' : 'bg-white'}
              >
                <td className="p-4 font-medium">LORAM</td>
                <td className="p-4 font-medium">LAND</td>
                <td className="p-4 font-medium">
                  <a
                    href="#"
                    className="text-green-900 font-semibold hover:text-green-800 hover:underline transition"
                  >
                    View Location
                  </a>
                </td>
                <td className="p-4 font-medium">
                  <a
                    href="#"
                    className="text-green-900 font-semibold hover:text-green-800 hover:underline transition"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional Pagination UI (if you use it later) */}
      {/* <div className="mt-8 flex gap-2 justify-center items-center">
        <button className="px-4 py-2 rounded-lg border border-green-900 bg-transparent text-green-900 font-semibold hover:bg-green-900 hover:text-white transition">
          1
        </button>
        <span className="font-bold px-2">...</span>
        <button className="px-4 py-2 rounded-lg border border-green-900 bg-transparent text-green-900 font-semibold hover:bg-green-900 hover:text-white transition">
          2
        </button>
      </div> */}
    </div>
  );
}

export default Properties;
