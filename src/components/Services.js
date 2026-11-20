
import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Pune to Mumbai Airport Cab",
    image: "/images/keyword/1.jpg",
    description:
      "Book comfortable Pune to Mumbai Airport cab services with Pandit Cabs. Enjoy convenient airport transfers with professional drivers.",
    link: "/pune-to-mumbai-airport-cab",
    tag: "Airport Transfer",
  },
  {
    id: 2,
    title: "Pune to Outstations Cabs",
    image: "/images/keyword/2.jpg",
    description:
      "Explore popular outstation destinations with our reliable cab services for family holidays, business trips and weekend journeys.",
    link: "/pune-to-outstations-cabs",
    tag: "Outstation Travel",
  },
  {
    id: 3,
    title: "Pune to Mahabaleshwar Cab",
    image: "/images/keyword/3.jpg",
    description:
      "Enjoy a comfortable trip to Mahabaleshwar with beautiful hill stations, scenic viewpoints and memorable family experiences.",
    link: "/pune-to-mahabaleshwar-cab",
    tag: "Hill Station Tour",
  },
  {
    id: 4,
    title: "Pune to Lonavala Cab",
    image: "/images/keyword/4.jpg",
    description:
      "Plan your Lonavala getaway with comfortable cab services for sightseeing, weekend trips and family travel.",
    link: "/pune-to-lonavala-cab",
    tag: "Weekend Getaway",
  },
  {
    id: 5,
    title: "Pune to Matheran Cabs",
    image: "/images/keyword/5.jpg",
    description:
      "Book a private cab from Pune to Matheran and enjoy a peaceful journey to this beautiful hill station.",
    link: "/pune-to-matheran-cabs",
    tag: "Nature Tour",
  },
  {
    id: 6,
    title: "Pune to 5 Jyotirlinga Darshan Cab",
    image: "/images/keyword/6.jpg",
    description:
      "Plan your 5 Jyotirlinga Darshan tour with comfortable vehicles for family pilgrimage and religious journeys.",
    link: "/pune-to-5-jyotirlinga-darshan-cab",
    tag: "Religious Tour",
  },
];

const WHATSAPP_NUMBER = "919890121689";

const Services = () => {
  const handleBooking = (service) => {
    const message = `Hello Pandit Cabs,

I want to book ${service.title}.

Please share the available vehicles, rental charges and booking details.

Thank you!`;

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
            <h3>Services</h3>
          </div>
        </div>
      </section>

    <section className="pcs-services-section" id="our-services">
      <div className="container">

        <div className="pcs-services-header">
          <span className="pcs-services-subtitle">
            OUR TRAVEL SERVICES
          </span>

          <h2>
            Explore Our <span>Cab Services</span>
          </h2>

          <p>
            Discover comfortable cab services from Pune for
            airport transfers, outstation journeys, hill station
            trips and religious tours with Pandit Cabs.
          </p>
        </div>

        <div className="row g-4 pcs-services-grid">
          {servicesData.map((service) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={service.id}
            >
              <article className="pcs-service-card">

                {/* SERVICE IMAGE */}
                <div className="pcs-service-image">
                  <img
                    src={service.image}
                    alt={`${service.title} - Pandit Cabs`}
                    loading="lazy"
                  />

                  <span className="pcs-service-tag">
                    {service.tag}
                  </span>
                </div>

                {/* SERVICE CONTENT */}
                <div className="pcs-service-content">
                  <h3>{service.title}</h3>

                  <p className="pcs-service-description">
                    {service.description}
                  </p>

                  <div className="pcs-service-footer">
                    <a
                      href={service.link}
                      className="pcs-service-explore"
                    >
                      Explore Service
                      <i className="fas fa-arrow-right"></i>
                    </a>

                    <button
                      type="button"
                      className="pcs-service-book"
                      onClick={() => handleBooking(service)}
                    >
                      <i className="fab fa-whatsapp"></i>
                      Book Now
                    </button>
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTACT */}
        <div className="pcs-services-bottom">
          <div className="pcs-services-bottom-content">
            <div>
              <h3>Looking for a Comfortable Cab Journey?</h3>
              <p>
                Contact Pandit Cabs for vehicle availability,
                travel assistance and booking details.
              </p>
            </div>
          </div>

          <a
            href="tel:+919890121689"
            className="pcs-services-contact-btn"
          >
            <i className="fas fa-phone-alt"></i>
            +91 9890121689
          </a>
        </div>

      </div>
    </section>
</>
  );
};

export default Services;
