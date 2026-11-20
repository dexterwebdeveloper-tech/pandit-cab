
import React from "react";

const WhyChooseUs = () => {
  const chooseUsData = [
    {
      icon: "icon-range",
      title: "Easy & Fast Cab Booking",
      animation: "fadeInLeft",
      delay: "100ms",
      description:
        "Book your preferred cab with Pandit Cabs through a simple and convenient process. Choose your vehicle, share trip details, and confirm your journey.",
    },
    {
      icon: "icon-car-insurance",
      title: "Convenient Pickup Locations",
      animation: "fadeInUp",
      delay: "300ms",
      description:
        "Enjoy convenient cab pickup services across Pune and Pimpri-Chinchwad. Arrange your pickup for airport transfers, local travel, and outstation journeys.",
    },
    {
      icon: "icon-rating",
      title: "Comfortable & Reliable Travel",
      animation: "fadeInRight",
      delay: "500ms",
      description:
        "Travel comfortably with Pandit Cabs for family trips, business travel, and sightseeing tours. Choose suitable vehicles for your travel requirements.",
    },
  ];

  const whatsappNumber = "919890121689";

  const whatsappMessage = encodeURIComponent(
    "Hello Pandit Cabs Team, I am interested in booking a cab. Please share available vehicles, rental charges, and booking details. Thank you!"
  );

  return (
    <section className="why-choose-one">
      <div className="why-choose-one__shape-1"></div>
      <div className="why-choose-one__shape-2"></div>

      <div className="container">

        {/* Section Title */}
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box justify-content-center">
            {/* <div className="section-title__tagline-shape">
              <img
                src="/images/shapes/section-title-tagline-shape-2.png"
                alt=""
              />
            </div> */}

            <span className="section-title__tagline">
              Why Choose Pandit Cabs
            </span>
          </div>

          <h2 className="section-title__title title-animation">
            Comfortable & Reliable Cab Services <br />
            for Every Journey
          </h2>
        </div>

        {/* Why Choose Us Cards */}
        <div className="row">
          {chooseUsData.map((item, index) => (
            <div
              className={`col-xl-4 col-lg-6 col-md-6 wow ${item.animation}`}
              data-wow-delay={item.delay}
              data-wow-duration="1500ms"
              key={index}
            >
              <div className="why-choose-one__single">

                {/* Icon */}
                <div className="why-choose-one__icon">
                  <span className={item.icon}></span>
                </div>

                {/* Content */}
                <div className="why-choose-one__single-inner">
                  <h3 className="why-choose-one__title">
                    {item.title}
                  </h3>

                  <p className="why-choose-one__text">
                    {item.description}
                  </p>
                </div>

                {/* Booking Button */}
                <div className="why-choose-one__btn-box">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn"
                  >
                    Book Now
                    <span className="fas fa-arrow-right"></span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
