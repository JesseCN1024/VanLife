import React from 'react'

export default function Reviews() {
  return (
    <div className="dashboard__listvan mb-5 text-center">
      <img
        className="w-100 w-md-75"
        src={process.env.PUBLIC_URL + "/img/review.png"}
        alt=""
      />
    </div>
  );
}
