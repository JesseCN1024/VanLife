import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom';

export default function VanHostPhotos() {
  const { van } = useOutletContext();
  return (
    <div className="row">
      <div className="col-12 col-md-3">
        <div
          className="w-100 rounded-3"
          style={{
            paddingTop: "100%",
            backgroundImage: `url(${van.imageUrl})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
