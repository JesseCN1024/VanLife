import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


export default function HostNav() {
  
  return (
    <>
      <div className="dashboard px-5">
        <nav className="host-nav py-3">
          <NavLink 
            to="/host" 
            // End the matching here-> fix the matching link problem
            end
            // react router will add an obj with different properties into function 
            className={({isActive}) => isActive ? "link-held-animation" : "link-animation"}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/host/income"
            className={({isActive}) => isActive ? "link-held-animation" : "link-animation"}
          >Income</NavLink>
          <NavLink 
            to="/host/vans"
            className={({isActive}) => isActive ? "link-held-animation" : "link-animation"}
          >Vans</NavLink>
          <NavLink 
            to="/host/reviews"
            className={({isActive}) => isActive ? "link-held-animation" : "link-animation"}
          >Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
