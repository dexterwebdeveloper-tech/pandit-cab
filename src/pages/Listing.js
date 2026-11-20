
import React, { useState } from "react";
import "./Listing.css";

const Listing = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const cars = [
    // {
    //   id: 1,
    //   name: "Swift Dzire",
    //   image: "Swift-Dzire.jpg",
    //   category: "Sedan",
    //   seats: "4+1 Seater",
    //   travel: "Local & Outstation",
    //   description:
    //     "Comfortable sedan for airport transfers, city travel and outstation journeys.",
    // },
    {
      id: 2,
      name: "Maruti Ertiga",
      image: "Maruti-Ertiga.jpg",
      category: "SUV",
      seats: "6+1 Seater",
      travel: "Family & Outstation",
      description:
        "Spacious family cab for comfortable group travel and weekend trips.",
    },
    {
      id: 3,
      name: "Toyota Rumion",
      image: "Toyota-Rumion.jpg",
      category: "SUV",
      seats: "6+1 Seater",
      travel: "Family & Airport",
      description:
        "Convenient MPV for family tours, airport transfers and long journeys.",
    },
    // {
    //   id: 4,
    //   name: "Kia Carens",
    //   image: "Kia-Carens.jpg",
    //   category: "SUV",
    //   seats: "6+1 Seater",
    //   travel: "Family & Corporate",
    //   description:
    //     "Comfortable vehicle for business travel, sightseeing and family tours.",
    // },
    // {
    //   id: 5,
    //   name: "Toyota Innova",
    //   image: "Innova-Cab.jpg",
    //   category: "SUV",
    //   seats: "7+1 Seater",
    //   travel: "Outstation & Tours",
    //   description:
    //     "Spacious Toyota Innova for group trips, family tours and outstation travel.",
    // },
    {
      id: 6,
      name: "Toyota Innova Crysta",
      image: "Innova-Crysta.jpg",
      category: "SUV",
      seats: "7+1 Seater",
      travel: "Premium Travel",
      description:
        "Premium SUV for comfortable corporate travel and family journeys.",
    },
    // {
    //   id: 7,
    //   name: "Tempo Traveller",
    //   image: "Tempo-Traveller.jpg",
    //   category: "Traveller",
    //   seats: "Multiple Seating Options",
    //   travel: "Group & Darshan Tours",
    //   description:
    //     "Ideal for family groups, religious tours, picnics and outstation trips.",
    // },
    // {
    //   id: 8,
    //   name: "Force Urbania",
    //   image: "Urbania-Bus.jpg",
    //   category: "Traveller",
    //   seats: "Multiple Seating Options",
    //   travel: "Luxury Group Travel",
    //   description:
    //     "Premium group transportation for corporate events and family tours.",
    // },
    // {
    //   id: 9,
    //   name: "Mini Bus",
    //   image: "Mini-Bus.jpg",
    //   category: "Bus",
    //   seats: "Multiple Seating Options",
    //   travel: "Events & Group Tours",
    //   description:
    //     "Suitable for weddings, corporate outings, family trips and group travel.",
    // },
  ];

  const categories = [
    "All",
    "Sedan",
    "SUV",
    "Traveller",
    "Bus",
  ];

  const filteredCars =
    activeCategory === "All"
      ? cars
      : cars.filter(
          (car) => car.category === activeCategory
        );

  const getWhatsAppLink = (carName) => {
    const message = encodeURIComponent(
      `Hello Pandit Cabs Team,

I want to book ${carName}.

Please share the available seating capacity, rental charges, vehicle availability and booking details.

Thank you!`
    );

    return `https://wa.me/919890121689?text=${message}`;
  };

  return (
    <section className="listing-one pandit-fleet">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box justify-content-center">

            {/* <div className="section-title__tagline-shape">
              <img
                src="/images/shapes/section-title-tagline-shape-2.png"
                alt=""
              />
            </div> */}

            <span className="section-title__tagline">
              Our Vehicle Fleet
            </span>
          </div>

          <h2 className="section-title__title title-animation">
            Explore Our Cars on Rent in Pune
          </h2>

          <p className="pandit-fleet__intro">
            Choose a suitable vehicle for local cab
            booking, airport transfers, outstation
            journeys and group travel with Pandit Cabs.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        {/* <div className="pandit-fleet__filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`pandit-fleet__filter ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
              aria-pressed={
                activeCategory === category
              }
            >
              {category === "All"
                ? "All Vehicles"
                : category}
            </button>
          ))}
        </div> */}

        {/* VEHICLE GRID */}
        <div className="row g-4 pandit-fleet__grid">

          {filteredCars.map((car) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={car.id}
            >
              <article className="pandit-fleet__card">

                {/* IMAGE */}
                <div className="pandit-fleet__image-box">

                  <img
                    src={`/images/fleet/${car.image}`}
                    alt={`${car.name} on Rent in Pune - Pandit Cabs`}
                    className="pandit-fleet__image"
                    loading="lazy"
                  />

                  <span className="pandit-fleet__category">
                    {car.category}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="pandit-fleet__content">

                  <h3 className="pandit-fleet__title">
                    {car.name}
                  </h3>

                  <p className="pandit-fleet__description">
                    {car.description}
                  </p>

                  {/* FEATURES */}
                  <div className="pandit-fleet__features">

                    <div className="pandit-fleet__feature">
                      <span className="pandit-fleet__feature-icon">
                        <i className="fas fa-users"></i>
                      </span>

                      <span>{car.seats}</span>
                    </div>

                    <div className="pandit-fleet__feature">
                      <span className="pandit-fleet__feature-icon">
                        <i className="fas fa-user-tie"></i>
                      </span>

                      <span>With Driver</span>
                    </div>

                    <div className="pandit-fleet__feature">
                      <span className="pandit-fleet__feature-icon">
                        <i className="fas fa-route"></i>
                      </span>

                      <span>{car.travel}</span>
                    </div>

                    <div className="pandit-fleet__feature">
                      <span className="pandit-fleet__feature-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>

                      <span>Pune, Maharashtra</span>
                    </div>

                  </div>

                  {/* BOOKING BUTTON */}
                  <div className="pandit-fleet__actions">

                    <a
                      href={getWhatsAppLink(car.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pandit-fleet__book"
                    >
                      <i className="fab fa-whatsapp"></i>
                      <span>Book Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>

                    <a
                      href="tel:+919890121689"
                      className="pandit-fleet__call"
                      aria-label={`Call to book ${car.name}`}
                      title="Call Pandit Cabs"
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>

                  </div>

                </div>

              </article>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Listing;
