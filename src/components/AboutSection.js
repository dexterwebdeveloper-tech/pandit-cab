
import React from "react";
import VisionMission from "./VisionMission";

const AboutOne = () => {
  const highlights = [
    {
      title: "Airport & Local Cab Services",
      percent: "100%",
    },
    {
      title: "Outstation & Tour Cab Services",
      percent: "100%",
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>

        <div className="container">
          <div className="page-header__inner">
            <h3>About Us</h3>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-one about-page p-0 py-2">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-xl-6">
              <div
                className="about-"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about--box">

              

                  <div className="ab img-fluid">
                    <img
                      src="/images/counter-one-img-11.png"
                      className="img-fluid"
                      alt="Pandit Cabs - Car Rental Services in Pune"
                      loading="lazy"
                    />
                  </div>

                  {/* BOOKING HIGHLIGHT */}
                  {/* <div className="about-one__experience">
                    <div className="about-one__experience-count">
                      <h3>24</h3>
                      <span>/7</span>
                    </div>

                    <p className="about-one__experience-text">
                      Cab Booking <br />
                      Assistance
                    </p>
                  </div> */}

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-xl-6">
              <div className="about-one__right">

                {/* SECTION TITLE */}
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">

                    <div className="section-title__tagline-shape">
                      <img
                        src="/images/shapes/section-title-tagline-shape-1.png"
                        alt=""
                      />
                    </div>

                    <span className="section-title__tagline">
                      About Pandit Cabs
                    </span>
                  </div>

                  <h2 className="section-title__title title-animation">
                    Welcome to Pandit Cabs – Reliable Cab
                    Service in Pune
                  </h2>
                </div>

                {/* INTRODUCTION */}
                <p className="about-one__text-1">
                  Your Trusted Travel Partner for Local,
                  Airport, Outstation and Family Cab Services
                  in Pune.
                </p>

                {/* COMPANY DESCRIPTION */}
                <p className="about-one__text-2">
                  Pandit Cabs offers convenient cab booking
                  and car rental services in Pune,
                  Pimpri-Chinchwad and surrounding areas.
                  We provide transportation options for
                  airport transfers, local sightseeing,
                  corporate travel, outstation journeys,
                  family vacations and religious tours.
                  <br />
                  <br />
                  Our fleet includes Swift Dzire, Maruti
                  Ertiga, Toyota Rumion, Kia Carens,
                  Toyota Innova, Innova Crysta,
                  Tempo Traveller, Force Urbania and
                  Mini Bus. Customers can choose a
                  suitable vehicle based on their
                  seating requirements and travel plans.
                  <br />
                  <br />
                  Whether you need a Pune to Mumbai
                  Airport Cab, Pune to Mahabaleshwar
                  Cab, Pune to Lonavala Cab, Pune to
                  Matheran Cab or a 5 Jyotirlinga
                  Darshan Cab Package, Pandit Cabs
                  provides travel booking assistance
                  for your journey.
                </p>

                {/* SERVICE HIGHLIGHTS */}
                {/* <ul className="about-one__progress-box list-unstyled">
                  {highlights.map((item, index) => (
                    <li key={index}>
                      <div className="about-one__progress">

                        <h4 className="about-one__progress-title text-dark">
                          {item.title}
                        </h4>

                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent={item.percent}
                            style={{
                              width: item.percent,
                            }}
                          >
                            <div className="count-text">
                              {item.percent}
                            </div>
                          </div>
                        </div>

                      </div>
                    </li>
                  ))}
                </ul>

                <div className="about-one__btn-box-and-call-box">

                  <div className="about-one__btn-box">
                    <a
                      href="/contact"
                      className="about-one__btn thm-btn"
                    >
                      Contact Us
                      <span className="fas fa-arrow-right"></span>
                    </a>
                  </div>

                  <div className="about-one__call-box">

                    <div className="about-one__call-box-icon">
                      <span className="icon-call-2"></span>
                    </div>

                    <div className="about-one__call-box-content">
                      <p>Call for Cab Booking</p>

                      <h4 className="text-dark">
                        <a href="tel:+919890121689" className="text-dark">
                          +91 9890121689
                        </a>
                      </h4>
                    </div>

                  </div>
                </div> */}

              </div>
            </div>

          </div>
        </div>
      </section>

      <VisionMission/>
    </>
  );
};

export default AboutOne;
