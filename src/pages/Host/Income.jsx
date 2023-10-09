import React from 'react'

export default function Income() {
  return (
    <div className="dashboard__listvan mb-5">
      <div className="d-flex">
        <h3 className="fs-4 fw-semibold mb-2">Income</h3>
      </div>
      <p className="mb-2">Last 30 days</p>
      <h1 className="p-3 rounded-3 mb-3" style={{ backgroundColor: "#FFEAD0" }}>
        $2,260
      </h1>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold">Your transactions (3)</h4>
          <p>Last 30 days</p>
        </div>
        <ul className="p-0 mt-2">
          <li className="d-flex justify-content-between mb-2 bg-white py-3 px-4 rounded-2">
            <h4>720$</h4>
            <p>01/12/22</p>
          </li>
          <li className="d-flex justify-content-between mb-2 bg-white py-3 px-4 rounded-2">
            <h4>518$</h4>
            <p>18/01/23</p>
          </li>
          <li className="d-flex justify-content-between mb-2 bg-white py-3 px-4 rounded-2">
            <h4>231$</h4>
            <p>29/01/23</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
