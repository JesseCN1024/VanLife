import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      {/* Navigation bar */}
      <nav className="navigation">
        <Link to="/" className="navigation__logo">
          #VANLIFE
        </Link>
        <Link to="about" className="navigation__link">
          About
        </Link>
        <Link to="vans" className="navigation__link">
          Vans
        </Link>
      </nav>
      {/* Content section */}
      <div className="home__content px-2">
        <h1 className="text-center">
          You got the travel plan, we got the travel vans
        </h1>
        <p className="text-center">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button>Find your van</button>
      </div>
      {/* Footer */}
      <div className="home__footer">@2023 #VANLIFE</div>
    </div>
  );
}
