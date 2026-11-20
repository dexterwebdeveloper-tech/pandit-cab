
import React, { useEffect, useRef, useState } from "react";

// Animated Counter
const Counter = ({ target, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startCount, target]);

  return (
    <h3 className="odometer">
      {count.toLocaleString("en-IN")}
    </h3>
  );
};

const CounterOne = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Replace these sample figures with verified business data.
  const counterData = [
    {
      icon: "icon-car",
      target: 9,
      suffix: "+",
      title: "Vehicle Categories",
      animation: "fadeInLeft",
      delay: "100ms",
    },
    {
      icon: "icon-mileage",
      target: 100,
      suffix: "+",
      title: "Travel Destinations",
      animation: "fadeInRight",
      delay: "200ms",
    },
    {
      icon: "icon-range",
      target: 5000,
      suffix: "+",
      title: "Cab Bookings",
      animation: "fadeInLeft",
      delay: "300ms",
    },
    {
      icon: "icon-pin-2",
      target: 1000,
      suffix: "+",
      title: "Pickup & Drop Trips",
      animation: "fadeInRight",
      delay: "400ms",
    },
  ];

  return (
    <section className="counter-one" ref={sectionRef}>
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-xl-6">
            <div className="counter-one__left">

              {/* SECTION TITLE */}
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  {/* <div className="section-title__tagline-shape">
                    <img
                      src="/images/shapes/section-title-tagline-shape-2.png"
                      alt=""
                    />
                  </div> */}

                  <span className="section-title__tagline">
                    Pandit Cabs at a Glance
                  </span>
                </div>

                <h2 className="section-title__title title-animation">
                  Your Trusted Partner for Cab Booking
                  in Pune
                </h2>
              </div>

              {/* DESCRIPTION */}
              {/* <p className="counter-one__text">
                Pandit Cabs provides comfortable and
                convenient cab rental services in Pune
                and Pimpri-Chinchwad. Choose from a
                range of vehicles for airport transfers,
                local sightseeing, corporate travel,
                outstation journeys and family tours.
              </p> */}

              {/* COUNTERS */}
              <div className="counter-one__main-content">
                <ul className="list-unstyled counter-one__list">

                  {counterData.map((item, index) => (
                    <li
                      key={index}
                      className={`wow ${item.animation}`}
                      data-wow-delay={item.delay}
                      data-wow-duration="1500ms"
                    >
                      <div className="counter-one__single">

                        <div className="counter-one__shape-1"></div>
                        <div className="counter-one__shape-2"></div>

                        <div className="counter-one__single-inner">

                          {/* ICON */}
                          <div className="counter-one__icon">
                            <span className={item.icon}></span>
                          </div>

                          {/* ANIMATED NUMBER */}
                          <div className="counter-one__count-box">
                            <Counter
                              target={item.target}
                              startCount={startCount}
                            />
                            <span>{item.suffix}</span>
                          </div>

                          {/* COUNTER TITLE */}
                          <p className="counter-one__count-text">
                            {item.title}
                          </p>

                        </div>
                      </div>
                    </li>
                  ))}

                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6">
            <div className="counter-one__right">
              <div className="counter-one__img-box">

                <div className="counter-one__img reveal">
                  <img
                    src="/images/counter-one-img-12.png"
                    alt="Pandit Cabs - Cab Rental Service in Pune"
                    loading="lazy"
                  />
                </div>

                {/* <div className="counter-one__img-two reveal img-fluid">
                  <img
                    src="/images/resources/counter-one-img-2.jpg"
                    alt="Pandit Cabs - Outstation Cab Service in Pune"
                    loading="lazy"
                  />
                </div> */}

                {/* <div className="counter-one__dot-1">
                  <img
                    src="/images/shapes/counter-one-dot-1.png"
                    alt=""
                  />
                </div> */}

                <div className="counter-one__dot-2 float-bob-y">
                  <img
                    src="/images/shapes/counter-one-dot-2.png"
                    alt=""
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CounterOne;
