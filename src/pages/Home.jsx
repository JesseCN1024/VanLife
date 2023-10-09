import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      {/* Content section */}
      <div className="home__content px-2">
        <h1 className="text-center mb-2">
          You got the travel plan, we got the travel vans
        </h1>
        <p className="text-center mb-2">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to='/vans' className='home__content-link'>Find your van</Link>
      </div>
      
    </div>
  );
}
