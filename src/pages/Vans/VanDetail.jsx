import React from 'react'
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api';

export function loader({params}){
  // const id = params.id;
  console.log('fetching')
  return getVans(`/api/vans/${params.id}`);
}

export default function VanDetail(props) {
    const van = useLoaderData();
    // const [van, setVan] = React.useState({});
    const location = useLocation();
    // Get all the params in the url (in the 'to' section) as an object 
    const params = useParams();
    const search = location.state?.search || "";
    const typeFilter = location.state?.typeFilter || "all";
    
  return (
    <div className="detail px-4 mb-5">
      <Link
        to={`..${search}`}
        relative='path'
        className="detail__back text-decoration-none text-secondary d-flex align-items-center mb-3"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <p className="ms-3 mb-0">Back to {typeFilter} vans</p>
      </Link>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="detail__img"
            style={{ backgroundImage: `url(${van.imageUrl})` }}
          ></div>
        </div>
        <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
          <div className="detail__body">
            <h1
              className={`detail__body-type btn- fw-semibold rounded-2 m-0 p-0 mb-3 mt-3 mt-sm-0`}
            >
              {van.name}
            </h1>
            <div className="detail__body-price d-flex align-items-end mb-3">
              <h3 className="m-0 p-0">${van.price}</h3>
              <p className="m-0 p-0 text-">/day</p>
            </div>
            <p className="detail__body-desc m-0 mb-3">{van.description}</p>
            <button className="detail__body-btn border-0 px-3 py-1 rounded-2 text-white fw-semibold">
              Rent this van
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
