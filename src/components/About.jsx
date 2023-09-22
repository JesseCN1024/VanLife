import React from "react";

export default function About() {
  return (
    <div className="about">
      <nav className="navigation">
        <a href="" className="navigation__logo">
          #VANLIFE
        </a>
        <a href="" className="navigation__link">
          About
        </a>
        <a href="" className="navigation__link">
          Vans
        </a>
      </nav>
      {/* Content section */}
      <div className="about__content px-2">
        <img
          className="about__content-img"
          src={process.env.PUBLIC_URL + `/img/about_bg.jpg`}
          alt=""
        />
        <div className="about__content-body">
          <h2 className="fw-bold ">Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p className="fw-semibold">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br></br>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about__content-body-panel p-4">
            <h3 className="fw-semibold">
              Your destination is waiting. <br></br>Your van is ready.
            </h3>
            <button className="text-white bg-dark border-0 rounded-2 px-2 py-1 ">Explore our vans</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="home__footer">@2023 #VANLIFE</div>
    </div>
  );
}
