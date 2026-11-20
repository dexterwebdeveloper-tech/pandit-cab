
import React from "react";

const Process = () => {
  const processSteps = [
    {
      title: "Choose Your Cab",
      description:
        "Select your preferred vehicle from our fleet of Sedan, Ertiga, Kia Carens, Innova Crysta, Tempo Traveller, Force Urbania and Mini Bus based on your travel needs.",
      icon: "icon-car-wash",
      bgImage:
        "/images/backgrounds/process-one-single-bg-1.jpg",
      delay: "100ms",
      animation: "fadeInLeft",
    },
    {
      title: "Contact Pandit Cabs",
      description:
        "Call or WhatsApp Pandit Cabs at +91 9890121689. Share your travel destination, journey date, pickup location and passenger requirements.",
      icon: "icon-in-person",
      bgImage:
        "/images/backgrounds/process-one-single-bg-2.jpg",
      delay: "300ms",
      animation: "fadeInLeft",
    },
    {
      title: "Confirm Your Booking",
      description:
        "Get vehicle availability, rental charges and trip details. Confirm your preferred cab and arrange pickup at your selected location.",
      icon: "icon-car-insurance",
      bgImage:
        "/images/backgrounds/process-one-single-bg-3.jpg",
      delay: "500ms",
      animation: "fadeInRight",
    },
    {
      title: "Enjoy Your Journey",
      description:
        "Travel comfortably with our driver-assisted cab services for airport transfers, local sightseeing, outstation trips and family tours.",
      icon: "icon-steering-wheel",
      bgImage:
        "/images/backgrounds/process-one-single-bg-4.jpg",
      delay: "700ms",
      animation: "fadeInRight",
    },
  ];

  return (
    <section className="process-one">
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
              Easy Cab Booking Steps
            </span>
          </div>

          <h2 className="section-title__title title-animation">
            How to Book a Cab with Pandit Cabs
          </h2>
        </div>

        {/* Process Steps */}
        <div className="row">
          {processSteps.map((step, index) => (
            <div
              className={`col-xl-3 col-lg-6 col-md-6 wow ${step.animation}`}
              data-wow-delay={step.delay}
              data-wow-duration="1500ms"
              key={index}
            >
              <div className="process-one__single">

                {/* Background Image */}
                <div
                  className="process-one__single-bg"
                  style={{
                    backgroundImage: `url(${step.bgImage})`,
                  }}
                ></div>

                {/* Icon Box */}
                <div className="process-one__icon-box">
                  <div className="process-one__icon-shape"></div>

                  <div className="process-one__icon">
                    <span className={step.icon}></span>
                  </div>

                  <div className="process-one__count"></div>
                </div>

                {/* Content */}
                <h3 className="process-one__title">
                  {step.title}
                </h3>

                <p className="process-one__text">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
