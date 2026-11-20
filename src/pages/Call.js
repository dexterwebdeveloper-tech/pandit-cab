
import React from "react";

const Call = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Pandit Cabs Team, I am interested in booking a cab. Please share available vehicles, seating capacity, rental charges, and booking details. Thank you!"
  );

  return (
    <section className="call-one">
      <div className="container">

        <div
          className="call-one__inner wow fadeInUp"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <div className="call-one__inner-content">

            {/* Background Image */}
            <div
              className="call-one__bg"
              style={{
                backgroundImage:
                  "url(/images/backgrounds/call-one-bg.jpg)",
              }}
            ></div>

            {/* Left Content */}
            <div className="call-one__left">
              <p className="call-one__sub-title">
                Book Your Ride with Pandit Cabs
              </p>

              <h4 className="call-one__title text-white">
                Call Now for Easy & Reliable Cab Booking
              </h4>
            </div>

            {/* Contact Details */}
            <div className="call-one__details">

              <div className="call-one__icon">
                <span className="icon-call-2"></span>
              </div>

              <div className="call-one__content">
                <p>Call for Cab Booking</p>

                <h4>
                  <a href="tel:+919890121689">
                    +91 9890121689
                  </a>
                </h4>
              </div>

            </div>

            {/* WhatsApp Booking Button */}
            <div className="call-one__btn-box">
              <a
                href={`https://wa.me/919890121689?text=${whatsappMessage}`}
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

      </div>
    </section>
  );
};

export default Call;
