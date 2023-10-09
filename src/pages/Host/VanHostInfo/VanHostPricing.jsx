import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom';

export default function VanHostPricing() {
  const { van } = useOutletContext();
  return (
    <div>
      <div className="mb-1">
        <div>
            <strong>Price: </strong>
                ${van.price}/day
        </div>
      </div>
    </div>
  );
}
