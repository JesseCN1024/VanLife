import React from 'react'
import { Link, NavLink, useParams, Outlet, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api';
import { requireAuth } from '../../../utils';
export async function loader({params,request}){
  await requireAuth(request);
  return getVans(`/api/host/vans/${params.id}`);
}

export default function VanHostDetail() {
    const van = useLoaderData()[0];
    // Get all the params in the url (in the 'to' section) as an object
  return (
    <div
      className="detail p-4 rounded-3"
      style={{ backgroundColor: "#FFF7ED" }}
    >
      <div className="bg-white p-2 rounded-3">
        <Link
          to=".."
          relative='path'
          className="detail__back text-decoration-none text-secondary d-flex align-items-center mb-3"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <p className="ms-3 mb-0">Back to all Vans</p>
        </Link>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="detail__img mb-3"
              style={{ backgroundImage: `url(${van.imageUrl})` }}
            ></div>
          </div>
          <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
            <div className="detail__body">
              <span
                className={`vans__item-body-type btn-${van.type} fw-semibold px-2 py-1 rounded-2`}
              >
                {van.type && van.type[0].toUpperCase() + van.type.slice(1)}
              </span>
              <h1
                className={`detail__body-type fs-3 fw-semibold rounded-2 m-0 p-0 mb-3 mt-3`}
              >
                {van.name}
              </h1>
              <div className="detail__body-price d-flex align-items-end mb-3">
                <h3 className="m-0 p-0 fs-4 fw-bold">${van.price}</h3>
                <p className="m-0 p-0 text-">/day</p>
              </div>
              {/* <p className="detail__body-desc m-0 mb-3">{van.description}</p>
              <button className="detail__body-btn border-0 px-3 py-1 rounded-2 text-white fw-semibold">
                Rent this van
              </button> */}
            </div>
          </div>
        </div>
        {/* Nested route section */}
        <ol className='my-3 host-vans-nav'>
          <NavLink
          // Link to the current route
            to='.'
            className={({ isActive }) =>
              isActive ? "link-held-animation" : "link-animation"
            }
            end
          >
            Detail
          </NavLink>
          <NavLink
            to={`pricing`}
            className={({ isActive }) =>
              isActive ? "link-held-animation" : "link-animation"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to={`photos`}
            className={({ isActive }) =>
              isActive ? "link-held-animation" : "link-animation"
            }
          >
            Photos
          </NavLink>
        </ol>
        <div style={{minHeight: "150px"}} className='px-md- 4'>
          <Outlet context={{van}}/>
        </div>
      </div>
    </div>
  );
}
