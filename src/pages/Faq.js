





import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I book a cab with Pandit Cabs?",
      answer:
        "You can book a cab by calling or WhatsApping Pandit Cabs at +91 9890121689. Share your pickup location, destination, travel date, and preferred vehicle.",
    },
    {
      question: "What types of vehicles are available?",
      answer:
        "Pandit Cabs offers Swift Dzire, Ertiga, Rumion, Kia Carens, Toyota Innova, Innova Crysta, Tempo Traveller, Force Urbania, and Mini Bus for different travel needs.",
    },
    {
      question: "Do you provide outstation cab services?",
      answer:
        "Yes, Pandit Cabs provides outstation cab services from Pune to Mumbai, Nashik, Shirdi, Lonavala, Mahabaleshwar, Kolhapur, Goa, and other destinations.",
    },
    {
      question: "Can I book a Pune to Mumbai Airport cab?",
      answer:
        "Yes, you can book a Pune to Mumbai Airport cab with Pandit Cabs. Contact our team to check vehicle availability, pickup arrangements, and rental charges.",
    },
    {
      question: "How can I check cab rental charges?",
      answer:
        "Contact Pandit Cabs with your travel date, route, pickup location, and vehicle preference. Our team can share the available options and applicable rental charges.",
    },
  ];

  const handleAccordion = (index) => {
    setActiveIndex((previous) =>
      previous === index ? null : index
    );
  };

  return (
    <section className="faq-one">
      <div className="faq-one__shape-1"></div>
      <div className="faq-one__shape-2"></div>

      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-xl-6 col-lg-5">
            <div className="faq-one__left">

              {/* SECTION TITLE */}
              <div className="section-title text-left sec-title-animation animation-style2">

                <div className="section-title__tagline-box">
                  {/* <div className="section-title__tagline-shape">
                    <img
                      src="/images/shapes/section-title-tagline-shape-2.png"
                      alt=""
                    />
                  </div> */}

                  <span className="section-title__tagline">
                    Pandit Cabs FAQs
                  </span>
                </div>

                <h2 className="section-title__title title-animation text-white">
                  Frequently Asked Questions About
                  Cab Booking in Pune
                </h2>

              </div>

              {/* FAQ IMAGE */}
              <div className="faq-one__img-box">

                <div className="faq-one__img reveal">
                  <img
                    src="/images/faq-one-img-1.png"
                    alt="Pandit Cabs - Cab Booking Services in Pune"
                    loading="lazy"
                  />
                </div>

                {/* BOOKING HIGHLIGHT */}
                <div className="faq-one__experience-box">

                  <div className="faq-one__experience-year">
                    <h2>24/7</h2>
                  </div>

                  <p className="faq-one__experience-text">
                    Cab Booking <br />
                    Assistance
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6 col-lg-7">
            <div className="faq-one__right">

              <div
                className="faq-one-accrodion"
                data-grp-name="faq-one-accrodion"
              >

                {faqs.map((faq, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={index}
                      className={`accrodion ${
                        isActive ? "active" : ""
                      } wow ${
                        index % 2 === 0
                          ? "fadeInLeft"
                          : "fadeInRight"
                      }`}
                      data-wow-delay={`${index * 100}ms`}
                      data-wow-duration="1500ms"
                    >

                      {/* QUESTION */}
                      <div
                        className="accrodion-title"
                      >
                        <button
                          type="button"
                          className="faq-one__question-btn"
                          onClick={() =>
                            handleAccordion(index)
                          }
                          aria-expanded={isActive}
                          aria-controls={`faq-answer-${index}`}
                          id={`faq-question-${index}`}
                        >
                          <span className="faq-one__question-text">
                            {faq.question}
                          </span>

                          {/* ORIGINAL ORANGE CIRCLE */}
                          <span
                            className="faq-one__toggle-icon"
                            aria-hidden="true"
                          >
                            {isActive ? "−" : "+"}
                          </span>
                        </button>
                      </div>

                      {/* ANSWER */}
                      <div
                        id={`faq-answer-${index}`}
                        className="accrodion-content"
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        hidden={!isActive}
                        style={{
                          display: isActive
                            ? "block"
                            : "none",
                        }}
                      >
                        <div className="inner">
                          <p>{faq.answer}</p>
                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
