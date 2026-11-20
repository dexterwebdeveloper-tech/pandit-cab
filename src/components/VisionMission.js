
import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Pandit Cabs Team, I want to book a cab. Please share available vehicles, seating capacity, rental charges and booking details. Thank you!"
  );

  return (
    <section className="vm-section" id="vision-mission">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="vm-heading">
          <span className="vm-label">
            ABOUT PANDIT CABS
          </span>

          <h2>
            Our <span>Vision & Mission</span>
          </h2>

          <p>
            Connecting destinations with comfort,
            building trust through service, and making
            every journey more convenient.
          </p>
        </div>

        {/* VISION & MISSION CARDS */}
        <div className="vm-grid">

          {/* VISION */}
          <article className="vm-card vm-vision">

            <div className="vm-card-top">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>

              <span className="vm-card-label">
                OUR VISION
              </span>
            </div>

            <h3>
              Connecting People, Creating Better Journeys
            </h3>

            <p>
              Our vision is to establish Pandit Cabs as
              a trusted cab and car rental service
              provider in Pune and Pimpri-Chinchwad,
              offering comfortable and convenient
              transportation for every travel need.
            </p>

            <p>
              We aim to make local trips, airport
              transfers, outstation journeys and
              group travel more accessible through
              customer-focused service, suitable
              vehicles and continuous improvement.
            </p>

            <div className="vm-card-footer">
              <i className="fas fa-check-circle"></i>
              <span>
                Comfort • Trust • Convenience
              </span>
            </div>

          </article>

          {/* MISSION */}
          <article className="vm-card vm-mission">

            <div className="vm-card-top">
              <div className="vm-icon">
                <i className="fas fa-bullseye"></i>
              </div>

              <span className="vm-card-label">
                OUR MISSION
              </span>
            </div>

            <h3>
              Delivering Comfortable Travel Every Mile
            </h3>

            <p>
              Our mission is to provide dependable
              cab booking and car rental services
              for local sightseeing, airport pickup
              and drop, corporate transportation,
              family vacations and outstation tours.
            </p>

            <p>
              We strive to offer a convenient booking
              experience, suitable vehicle options,
              clear communication and professional
              driver-assisted transportation for
              individual and group travel requirements.
            </p>

            <div className="vm-card-footer">
              <i className="fas fa-check-circle"></i>
              <span>
                Quality • Service • Satisfaction
              </span>
            </div>

          </article>

        </div>

        {/* BOTTOM COMMITMENT */}
        <div className="vm-commitment">

          <div className="vm-commitment-icon">
            <i className="fas fa-car-side"></i>
          </div>

          <div className="vm-commitment-content">
            <h4>
              Your Journey, Our Commitment
            </h4>

            <p>
              From Pune airport transfers to
              outstation cab services and family
              tours, Pandit Cabs is committed to
              making your travel comfortable,
              convenient and memorable.
            </p>
          </div>

          <a
            href={`https://wa.me/919890121689?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="vm-commitment-btn"
          >
            Book Your Cab
            <i className="fas fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
