import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      {/* Content section */}
      <div className="about__content px-2">
        <img
          className="about__content-img"
          src={process.env.PUBLIC_URL + `/img/about_bg2.jpg`}
          alt="{process.env.PUBLIC_URL + `/img/noimg.jpg`}"
        />
        <div className="about__content-body">
          <h2 className="fw-bold mb-3 ">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="fw-semibold mb-3">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br></br>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about__content-body-panel p-4">
            <h3 className="fw-semibold mb-3">
              Your destination is waiting. <br></br>Your van is ready.
            </h3>
            <Link
              to="/vans"
              className="text-white bg-dark border-0 rounded-2 px-2 py-2 text-decoration-none"
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
