
import React, { useState } from "react";
import "./OurFleet.css";

const fleetData = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    seats: "4+1 Seater",
    image: "/images/fleet/Swift-Dzire.jpg",
    description:
      "Comfortable sedan for airport transfers, city travel and outstation journeys.",
    tag: "Economy Sedan",
  },
  {
    id: 2,
    name: "Maruti Suzuki Ertiga",
    category: "SUV",
    seats: "6+1 Seater",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    description:
      "Spacious family vehicle for holidays, sightseeing and comfortable road trips.",
    tag: "Family Favourite",
  },
  {
    id: 3,
    name: "Toyota Rumion",
    category: "SUV",
    seats: "6+1 Seater",
    image: "/images/fleet/Toyota-Rumion.jpg",
    description:
      "Practical and comfortable MPV for family trips and outstation travel.",
    tag: "Family Travel",
  },
  {
    id: 4,
    name: "Kia Carens",
    category: "SUV",
    seats: "6+1 Seater",
    image: "/images/fleet/Kia-Carens.jpg",
    description:
      "Premium and spacious family vehicle for business trips and long journeys.",
    tag: "Premium Comfort",
  },
  {
    id: 5,
    name: "Toyota Innova",
    category: "SUV",
    seats: "7+1 Seater",
    image: "/images/fleet/Innova-Cab.jpg",
    description:
      "Reliable and comfortable SUV for family holidays and outstation trips.",
    tag: "Popular SUV",
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    category: "SUV",
    seats: "7+1 Seater",
    image: "/images/fleet/Innova-Crysta.jpg",
    description:
      "Premium SUV for business travel, airport pickups and long-distance tours.",
    tag: "Premium SUV",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    category: "Traveller",
    seats: "Multiple Seating Options",
    image: "/images/fleet/Tempo-Traveller.jpg",
    description:
      "Comfortable group transportation for family tours, events and outings.",
    tag: "Group Travel",
  },
  {
    id: 8,
    name: "Force Urbania",
    category: "Urbania",
    seats: "Multiple Seating Options",
    image: "/images/fleet/Urbania-Bus.jpg",
    description:
      "Premium group travel experience for corporate trips, tours and family outings.",
    tag: "Luxury Traveller",
  },
  {
    id: 9,
    name: "Mini Bus",
    category: "Bus",
    seats: "Multiple Seating Options",
    image: "/images/fleet/Mini-Bus.jpg",
    description:
      "Convenient transportation for group tours, weddings and corporate events.",
    tag: "Large Groups",
  },
];

const categories = [
  "All Vehicles",
  "Sedan",
  "SUV",
  "Traveller",
  "Urbania",
  "Bus",
];

const WHATSAPP_NUMBER = "919890121689";

const OurFleet = () => {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");

  const filteredFleet =
    activeCategory === "All Vehicles"
      ? fleetData
      : fleetData.filter(
          (vehicle) => vehicle.category === activeCategory
        );

  const handleBooking = (vehicle) => {
    const message = [
      "Hello Pandit Cabs,",
      "",
      "I would like to enquire about vehicle availability.",
      "",
      `Vehicle: ${vehicle.name}`,
      `Seating Capacity: ${vehicle.seats}`,
      "",
      "Please share the rental charges,",
      "vehicle availability and booking details.",
      "",
      "Thank you!",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (


<>

      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/images/backgrounds/page-header-bg.jpg)"
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Our Fleets</h3>
          </div>
        </div>
      </section>

    <section className="pc-fleet-section" id="our-fleet">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="pc-fleet-header">
          <div className="pc-fleet-header-left">
            <span className="pc-fleet-eyebrow">
              <i className="fas fa-car-side"></i>
              EXPLORE OUR VEHICLES
            </span>

            <h2>
              Our <span>Fleet</span>
            </h2>

            <p>
              Explore our range of comfortable vehicles for
              airport transfers, outstation journeys,
              family trips, corporate travel and group tours.
            </p>
          </div>

          <div className="pc-fleet-header-right">
            <span className="pc-fleet-count">
              <i className="fas fa-car"></i>
              {fleetData.length} Vehicle Options
            </span>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="pc-fleet-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`pc-fleet-filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* VEHICLE GRID */}
        <div className="row g-4 pc-fleet-grid">
          {filteredFleet.map((vehicle) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={vehicle.id}
            >
              <article className="pc-fleet-card">

                {/* IMAGE */}
                <div className="pc-fleet-image">
                  <span className="pc-fleet-tag">
                    {vehicle.tag}
                  </span>

                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} on rent in Pune - Pandit Cabs`}
                    loading="lazy"
                  />

                  <div className="pc-fleet-image-bottom">
                    <span>
                      <i className="fas fa-users"></i>
                      {vehicle.seats}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pc-fleet-content">
                  <div className="pc-fleet-name-row">
                    <div>
                      <span className="pc-fleet-category">
                        {vehicle.category}
                      </span>

                      <h3>{vehicle.name}</h3>
                    </div>

                    <div className="pc-fleet-small-icon">
                      <i className="fas fa-car-side"></i>
                    </div>
                  </div>

                  <p className="pc-fleet-description">
                    {vehicle.description}
                  </p>

                  {/* FEATURES */}
                  <div className="pc-fleet-features">
                    <span>
                      <i className="fas fa-snowflake"></i>
                      AC Vehicle
                    </span>

                    <span>
                      <i className="fas fa-user-tie"></i>
                      With Driver
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="pc-fleet-actions">
                    <button
                      type="button"
                      className="pc-fleet-book-btn"
                      onClick={() => handleBooking(vehicle)}
                    >
                      <i className="fab fa-whatsapp"></i>
                      Book Now
                      <i className="fas fa-arrow-right"></i>
                    </button>

                    <a
                      href="tel:+919890121689"
                      className="pc-fleet-call-btn"
                      aria-label={`Call Pandit Cabs for ${vehicle.name}`}
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="pc-fleet-bottom-cta">
          <div className="pc-fleet-cta-icon">
            <i className="fas fa-headset"></i>
          </div>

          <div className="pc-fleet-cta-text">
            <h3>Need Help Choosing a Vehicle?</h3>
            <p>
              Contact Pandit Cabs for vehicle availability,
              seating options and booking assistance.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Pandit Cabs, I need help choosing a vehicle for my trip. Please share available vehicles and rental details."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-fleet-cta-btn"
          >
            <i className="fab fa-whatsapp"></i>
            Enquire Now
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
</>
  );
};

export default OurFleet;
