
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "icon-car",
      title: "Corporate Cab Service in Pune",
      description:
        "Pandit Cabs offers corporate cab rental services in Pune for employee transportation, business meetings, office pickup and drop, and corporate travel requirements.",
      link: "/corporate-cab-service-in-pune",
      delay: "100ms",
      animation: "fadeInLeft",
    },
    {
      icon: "icon-taxi",
      title: "Car Rental with Driver in Pune",
      description:
        "Book comfortable cars with professional drivers for local sightseeing, family trips, business travel and outstation journeys. Choose from Sedan, SUV and premium vehicles.",
      link: "/car-rental-with-driver-in-pune",
      delay: "300ms",
      animation: "fadeInLeft",
    },
    {
      icon: "icon-sport-car-1",
      title: "Pune Airport Taxi Service",
      description:
        "Book convenient Pune Airport pickup and drop services with Pandit Cabs. We also provide Pune to Mumbai Airport cab services for business and family travellers.",
      link: "/pune-airport-taxi-service",
      delay: "500ms",
      animation: "fadeInRight",
    },
    {
      icon: "icon-car-insurance",
      title: "Outstation Cab Service in Pune",
      description:
        "Explore destinations such as Mumbai, Mahabaleshwar, Lonavala, Matheran, Shirdi and Nashik with comfortable outstation cab services for one-way and round-trip journeys.",
      link: "/pune-to-outstations-cabs",
      delay: "700ms",
      animation: "fadeInRight",
    },
  ];

  return (
    <section className="services-one">
      <div className="services-one__shape-1"></div>
      <div className="services-one__shape-2"></div>

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
              Our Cab Rental Services
            </span>
          </div>

          <h2 className="section-title__title title-animation">
            Reliable Cab & Car Rental Services <br />
            in Pune by Pandit Cabs
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="row">
          {services.map((service, index) => (
            <div
              className={`col-xl-3 col-lg-6 col-md-6 wow ${service.animation}`}
              data-wow-delay={service.delay}
              data-wow-duration="1500ms"
              key={index}
            >
              <div className="services-one__single">
                <div className="services-one__single-shape-1"></div>
                <div className="services-one__single-shape-2"></div>
                <div className="services-one__single-shape-3"></div>

                <div className="services-one__count"></div>

                <div className="services-one__icon">
                  <span className={service.icon}></span>
                </div>

                <h3 className="services-one__title">
                  <a href={service.link}>
                    {service.title}
                  </a>
                </h3>

                <p className="services-one__text">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
