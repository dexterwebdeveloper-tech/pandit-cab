
import React from "react";

const ContactInfo = () => {
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
            <h3>Contact Us</h3>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row">

            {/* Contact Info */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <a href="tel:+919890121689">
                    +91 9890121689
                  </a>
                  <br />
                  <a href="tel:+919175950844">
                    +91 9175950844
                  </a>
                  <br />
                  <a href="tel:+919766958304">
                    +91 9766958304
                  </a>
                </h3>
              </div>
            </div>

            {/* Email Info */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-email"></span>
                </div>
                <p>Mail Us</p>
                <h3>
                  <a href="mailto:tarun.pandey@panditcabs.com">
                    tarun.pandey@panditcabs.com
                  </a>
                </h3>
              </div>
            </div>

            {/* Office Location */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Our Office Location</p>
                <h3>
                  Pandit Cabs<br />
                  FL NO 301, Akshay Nest Road No. 10<br />
                  Adarsh Nagar, Tingre Nagar,<br />
                  Pune, Maharashtra 411032
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184448.5491866619!2d73.874624!3d18.50358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c163d659a60742f%3A0x53574e44ae6b777f!2sPandit%20Cabs!5e1!3m2!1sen!2sin!4v1795169245527!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </>
  );
};

export default ContactInfo;
