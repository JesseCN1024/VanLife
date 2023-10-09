import React from 'react'
import { Link, NavLink, useLoaderData, useLocation } from 'react-router-dom'
export default function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') || false);

  // Update the isLoggedIn state to re-render the header every time the localStorage changes
  React.useEffect(() => {
    const handlleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') || false);
    }
    window.addEventListener('storage', handlleStorageChange);
    return () => {
      window.removeEventListener('storage', handlleStorageChange);
    }
  }, []); 

  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo" title='#VANLIFE Home'>
        #VANLIFE
      </Link>
      <NavLink
        to="host"
        className={({ isActive }) =>
          `navigation__link mx-3 mx-md-4 ${
            isActive ? "link-held-animation" : "link-animation"
          }`
        }
        title='Host'
      >
        Host
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          `navigation__link mx-3 mx-md-4 ${
            isActive ? "link-held-animation" : "link-animation"
          }`
        }
        title='About'
      >
        About
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          `navigation__link mx-3 mx-md-4 ${
            isActive ? "link-held-animation" : "link-animation"
          }`
        }
        title='Vans'
      >
        Vans
      </NavLink>
      {/* Login */}
      {isLoggedIn ? (
        <Link
          to="/"
          className="navigation__link mx-3 mx-md-4 px-1 border border-dark border-1 rounded-circle"
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            window.dispatchEvent(new Event('storage'));
          }}
          title='Log out'
        >
          <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      ) : (
        <Link
          to="login"
          className="navigation__link mx-3 mx-md-4 px-1 border border-dark border-1 rounded-circle"
          title='Log in'
        >
          <i className="fa-regular fa-user"></i>
        </Link>
      )}
    </nav>
  );
}
     