
import React from "react";

const About = () => {
  const progressData = [
    {
      title: "Time Awareness",
      percent: "90%",
    },
    {
      title: "Driver Experience",
      percent: "70%",
    },
  ];

  return (
    <section className="about-one">
      <div className="container">
        <div className="row">

          {/* About Left Side */}
          <div className="col-xl-6">
            <div
              className="about-one__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-one__img-box">

                <div className="about-one__img">
                  <img
                    src="/images/resources/about-one-img-1.jpg"
                    alt="Pandit Cabs - Cab Service in Pune"
                    loading="lazy"
                  />
                </div>

                <div className="about-one__shape-2 float-bob-y">
                  <img
                    src="/images/shapes/about-one-shape-2.png"
                    alt=""
                  />
                </div>

                <div className="about-one__shape-1">
                  <img
                    src="/images/shapes/about-one-shape-1.png"
                    alt=""
                  />
                </div>

                <div className="about-one__shape-4 float-bob-x">
                  <img
                    src="/images/shapes/about-one-shape-4.png"
                    alt=""
                  />
                </div>

                <div className="about-one__shape-3 float-bob-x">
                  <img
                    src="/images/shapes/about-one-shape-3.png"
                    alt=""
                  />
                </div>

                <div className="about-one__img-2">
                  <img
                    src="/images/resources/about-one-img-2.jpg"
                    alt="Pandit Cabs - Comfortable Car Rental Services in Pune"
                    loading="lazy"
                  />
                </div>

                {/* Experience / Service Highlight */}
                <div className="about-one__experience">
                  <div className="about-one__experience-count">
                    <h3>
                      24
                    </h3>
                    <span>/7</span>
                  </div>

                  <p className="about-one__experience-text">
                    Cab Booking <br /> Assistance
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* About Right Side */}
          <div className="col-xl-6">
            <div className="about-one__right">

              {/* Section Title */}
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  {/* <div className="section-title__tagline-shape">
                    <img
                      src="/images/shapes/section-title-tagline-shape-2.png"
                      alt=""
                    />
                  </div> */}

                  <span className="section-title__tagline">
                    About Pandit Cabs
                  </span>
                </div>

                <h2 className="section-title__title title-animation">
                  Welcome to Pandit Cabs – Your Trusted Cab Service
                  in Pune
                </h2>
              </div>

              {/* Intro Text */}
              <p className="about-one__text-1">
                Comfortable, Reliable & Affordable Cab Booking
                Services in Pune and Pimpri-Chinchwad.
              </p>

              {/* Description */}
              <p className="about-one__text-2">
                Pandit Cabs provides convenient cab rental and taxi
                booking services in Pune, Pimpri-Chinchwad and
                surrounding areas. We offer comfortable travel
                solutions for local sightseeing, airport transfers,
                outstation journeys, corporate transportation,
                family vacations and religious tours.
                <br />
                <br />
                Our vehicle options include Swift Dzire, Maruti
                Ertiga, Toyota Rumion, Kia Carens, Toyota Innova,
                Innova Crysta, Tempo Traveller, Force Urbania
                and Mini Bus. Whether you are planning a Pune to
                Mumbai Airport transfer, Mahabaleshwar trip,
                Lonavala getaway, Shirdi Darshan or a long-distance
                outstation journey, Pandit Cabs helps you choose
                a suitable vehicle for your travel requirements.
              </p>

              {/* Progress Bars */}
              <ul className="about-one__progress-box list-unstyled">
                {progressData.map((item, index) => (
                  <li key={index}>
                    <div className="about-one__progress">

                      <h4 className="about-one__progress-title">
                        {item.title}
                      </h4>

                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent={item.percent}
                          style={{ width: item.percent }}
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

              {/* Button and Call Box */}
              <div className="about-one__btn-box-and-call-box">

                <div className="about-one__btn-box">
                  <a
                    href="/about"
                    className="about-one__btn thm-btn"
                  >
                    Read More
                    <span className="fas fa-arrow-right"></span>
                  </a>
                </div>

                <div className="about-one__call-box">

                  <div className="about-one__call-box-icon">
                    <span className="icon-call-2"></span>
                  </div>

                  <div className="about-one__call-box-content">
                    <p>Call Us for Cab Booking</p>

                    <h4>
                      <a href="tel:+919890121689">
                        +91 9890121689
                      </a>
                    </h4>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
