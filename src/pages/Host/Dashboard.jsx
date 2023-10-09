import React from 'react'
import { Link, useLoaderData, redirect} from 'react-router-dom';
import { getVans } from '../../api';
import { requireAuth } from '../../utils';
export async function loader({request}){
  await requireAuth(request);
  return getVans('/api/host/vans');
}

export default function Dashboard() {
  const vans = useLoaderData();
  const firstVan = vans[0] || null;
  return (
    <div>
      <div className="dashboard__income">
        <h1 className="mb-2">Welcome!</h1>
        <div className="d-flex mb-2">
          <span>
            Income last <span className="fw-semibold text-decoration-underline">30 days</span>
          </span>
          <Link
            to="/host/income"
            className="ms-auto text-decoration-none text-secondary"
          >
            Detail
          </Link>
        </div>
        <h1 className="fs-1 fw-bold">$2,260</h1>
      </div>
      <div className="dashboard__score d-flex align-items-center py-2">
        <h2 className="fs-3">Review score</h2>
        <div className="d-flex align-items-center ms-3">
          <i className="fa-solid fa-star text-warning"></i>
          <p>5.0</p>
          <p>/5</p>
        </div>
        <Link
          to="reviews"
          className="ms-auto text-decoration-none text-secondary"
        >
          Detail
        </Link>
      </div>
      <div className="dashboard__listvan mb-5">
        <div className="d-flex">
          <h3 className="fs-4 fw-semibold mb-2">Your listed vans</h3>
          <Link
            to="vans"
            className="ms-auto text-decoration-none text-secondary"
          >
            View All
          </Link>
        </div>
        <ul className="list-style-none p-0 m-0">
          {
            firstVan ? 
            <li className="bg-white rounded-3 p-2 d-flex">
              <div className='dashboard__listvan-imgcontainer'>
                <div
                  className="dashboard__listvan-img"
                  style={{
                    backgroundImage:
                      `url(${firstVan.imageUrl})`,
                  }}
                ></div>
              </div>
              <div className='d-flex flex-column justify-content-center ms-4'>
                <h3 className='fw-semibold fs-3'>{firstVan.name}</h3>
                <p>${firstVan.price}/day</p>
              </div>
            </li>
            :
            <li className='text-center text-decoration-none fs-2 fw-italic'>Empty</li>
          }
        </ul>
          {vans.length > 1 && <p className='text-center text-italic fw-italic mt-2'>{vans.length-1} more vans...</p> }
      </div>
    </div>
  );
}
