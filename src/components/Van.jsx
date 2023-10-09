import React from 'react'
import { Link } from 'react-router-dom';

export default function Van(props) {
  return (
    <div className="col-6 col-md-4 col-lg-3 vans__item">
      <Link
        to={props.id} 
        className="text-decoration-none text-dark "
        // When the link is clicked, it stores the params in state 
        state={{search: `?${props.searchParams.toString()}`, typeFilter: props.typeFilter }}
      >
        {/* Van img */}
        <div
          className="vans__list-item-img w-100"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        ></div>
        {/* Body info */}
        <div className="vans__item-body mt-2">
          <div className="vans__item-body-info d-flex justify-content-between">
            <h3 className="fw-semibold fs-5">{props.name}</h3>
            <div className="ms-1">
              <h3 className="fs-5 m-0">${props.price}</h3>
              <p className="text-end m-0">/day</p>
            </div>
          </div>
          <span className={`vans__item-body-type btn-${props.type} fw-semibold px-2 py-1 rounded-2`}>
            {props.type[0].toUpperCase() + props.type.slice(1)}
          </span>
        </div>
      </Link>
    </div>
  );
}
