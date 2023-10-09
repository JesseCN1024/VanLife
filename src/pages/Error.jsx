import React from 'react'
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    console.log(error);
    const notFoundStyle = {
      backgroundColor: "#FFF7ED",
      width: "70%",
      height: "200px",
    };
    return (
      <div
        className="m-auto p-3 rounded-3 d-flex justify-content-center align-items-center flex-column"
        style={notFoundStyle}
      >
        <h1 className="fw-bold fs-3 text-center">
          Error: {error.message}
        </h1>
        <p>{error.status} - {error.statusText}</p>
        <Link
          to="/"
          className="bg-dark text-white px-5 py-1 fw-bold text-decoration-none rounded-1 mt-3"
        >
          Return to home
        </Link>
      </div>
    );
}
