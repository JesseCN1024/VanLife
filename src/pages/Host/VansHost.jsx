import React, { useEffect } from 'react'
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { getVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader({request}){
  // getVans from api.js ensure that the data is returned is good, and
  // if it is bad, it will throw an err
  await requireAuth(request);
  return getVans('/api/host/vans');
}
export default function Vans() {
  // const [vans, setVans] = React.useState([]);
  const vans = useLoaderData();
  // useEffect(() => {
  //   setVans(vansData);
  // },[vansData])
  const renderedVans = vans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      className="bg-white rounded-3 p-2 mb-2 d-flex text-decoration-none text-dark"
    >
      {/* Image  */}
      <div className="dashboard__listvan-imgcontainer">
        <div
          className="dashboard__listvan-img"
          style={{
            backgroundImage:
              `url(${van.imageUrl})`,
          }}
        ></div>
      </div>

      {/* Info */}
      <div className="d-flex flex-column justify-content-center ms-4">
        <h3 className="fw-semibold fs-3">{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
    </Link>
  ));
  return (
    <div className="dashboard__listvan mb-5">
      <div className="d-flex">
        <h3 className="fs-4 fw-semibold mb-2">Your listed vans</h3>
      </div>
      <ol className="list-style-none p-0 m-0">
        {vans.length > 0 ? 
          renderedVans :
          <h3 className='p-5 text-center'>Loading...</h3>
        }
      </ol>
    </div>
  );
}
