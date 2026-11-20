
import React, { useState, useRef } from "react";
import "./Career.css";

const WHATSAPP_NUMBER = "919890121689";

const initialFormData = {
  fullname: "",
  phone: "",
  email: "",
  position: "",
  experience: "",
  location: "",
  license: "",
  message: "",
};

const openings = [
  {
    icon: "fas fa-car-side",
    title: "Cab & Tourist Drivers",
    position: "Driver",
    description:
      "Experienced drivers can share their profiles for potential sedan, SUV, Innova Crysta, Tempo Traveller, and other passenger transport opportunities.",
    category: "TRANSPORT OPERATIONS",
  },
  {
    icon: "fas fa-route",
    title: "Travel Operations",
    position: "Operations Executive",
    description:
      "Interested in managing travel schedules, vehicle assignments, airport transfers, and outstation trip coordination? Submit your details.",
    category: "OPERATIONS TEAM",
  },
  {
    icon: "fas fa-headset",
    title: "Booking & Customer Care",
    position: "Customer Support",
    description:
      "Explore opportunities involving customer enquiries, travel quotations, reservations, and coordination between passengers and drivers.",
    category: "CUSTOMER SERVICES",
  },
  {
    icon: "fas fa-handshake",
    title: "Vehicle & Fleet Partners",
    position: "Fleet Partner",
    description:
      "Vehicle owners and transport service providers can express interest in possible business partnerships with Pandit Cabs.",
    category: "BUSINESS PARTNERSHIPS",
  },
  {
    icon: "fas fa-laptop",
    title: "Marketing & Digital Support",
    position: "Digital Marketing",
    description:
      "Share your interest in digital marketing, online customer engagement, travel promotion, and website-related support activities.",
    category: "DIGITAL OPERATIONS",
  },
];

const positions = [
  "Driver",
  "Operations Executive",
  "Customer Support",
  "Fleet Partner",
  "Digital Marketing",
  "Other Opportunity",
];

const experienceOptions = [
  "Fresher",
  "Less than 1 Year",
  "1-2 Years",
  "3-5 Years",
  "5-10 Years",
  "10+ Years",
];

const licenseOptions = [
  "Valid LMV Driving Licence",
  "Commercial Driving Licence",
  "Heavy Vehicle Licence",
  "No Driving Licence",
  "Not Applicable",
];

export default function Career() {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "position" && value !== "Driver"
        ? { license: "" }
        : {}),
    }));

    setErrorMessage("");
  };

  const handleApply = (position) => {
    setFormData((prev) => ({
      ...prev,
      position,
      license: position === "Driver" ? prev.license : "",
    }));

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (formData.position === "Driver" && !formData.license) {
      setErrorMessage("Please select your driving licence status.");
      return;
    }

    setErrorMessage("");

    const message = [
      "🚘 *NEW CAREER APPLICATION*",
      "*PANDIT CABS*",
      "",
      "👤 *APPLICANT INFORMATION*",
      `Full Name: ${formData.fullname.trim()}`,
      `Mobile: +91 ${phone}`,
      `Email: ${formData.email.trim() || "Not Provided"}`,
      `Current Location: ${formData.location.trim()}`,
      "",
      "💼 *CAREER DETAILS*",
      `Position: ${formData.position}`,
      `Experience: ${formData.experience}`,
      `Driving Licence: ${
        formData.position === "Driver"
          ? formData.license
          : "Not Applicable"
      }`,
      "",
      "📝 *ADDITIONAL INFORMATION*",
      formData.message.trim() || "Not Provided",
      "",
      "I am interested in career or partnership opportunities with Pandit Cabs.",
      "Please review my application and contact me if a suitable opportunity is available.",
      "",
      "Thank you!",
    ].join("\n");

    window.location.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);
  };

  return (
    <main className="pc-career-page">

      {/* HERO */}
      <section className="pc-career-hero">
        <div className="pc-career-container pc-career-hero-grid">

          <div className="pc-career-hero-content">
            <span className="pc-career-eyebrow">
              PANDIT CABS / CAREER OPPORTUNITIES
            </span>

            <h1>
              Drive Your Future <span>With Us.</span>
            </h1>

            <p>
              Explore career and partnership enquiry categories
              with Pandit Cabs. Share your skills, experience,
              and interest in the passenger transportation industry.
            </p>

            <a
              href="#pc-career-openings"
              className="pc-career-hero-btn"
            >
              Explore Opportunities
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </div>

          <div className="pc-career-hero-brand">
            <img
              src="/images/logo.jpg"
              alt="Pandit Cabs"
            />

            <div className="pc-career-brand-divider" />

            <span>CAREERS & PARTNERSHIPS</span>
            <h3>Move Forward With Pandit Cabs</h3>
            <p>
              Driving · Operations · Customer Support · Partnerships
            </p>
          </div>

        </div>
      </section>

      {/* OPENINGS */}
      <section
        className="pc-career-openings"
        id="pc-career-openings"
      >
        <div className="pc-career-container">

          <div className="pc-career-section-heading">
            <span>EXPLORE YOUR OPPORTUNITIES</span>

            <h2>
              Career & <em>Partnership Categories</em>
            </h2>

            <p>
              Choose the category that matches your interests
              and send your profile for consideration.
            </p>
          </div>

          <div className="row g-3">
            {openings.map((job) => (
              <div className="col-12 col-md-4" key={job.position}>
                <article className="pc-career-job-card">

                  <div className="pc-career-job-top">
                    <div className="pc-career-job-icon">
                      <i className={job.icon} aria-hidden="true" />
                    </div>

                    <span className="pc-career-job-arrow">
                      <i
                        className="fas fa-arrow-up"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <span className="pc-career-job-category">
                    {job.category}
                  </span>

                  <h3>{job.title}</h3>
                  <p>{job.description}</p>

                  <button
                    type="button"
                    className="pc-career-job-btn"
                    onClick={() => handleApply(job.position)}
                  >
                    Apply Now
                    <i
                      className="fas fa-arrow-right"
                      aria-hidden="true"
                    />
                  </button>

                </article>
              </div>
            ))}
          </div>

          <p className="pc-career-openings-note">
            These are general career and partnership enquiry
            categories, not confirmed job vacancies. Opportunities
            depend on actual requirements and availability.
          </p>

        </div>
      </section>

      {/* APPLICATION */}
      <section
        className="pc-career-application"
        id="career-application"
        ref={formRef}
      >
        <div className="pc-career-container">

          <div className="pc-career-application-grid">

            {/* LEFT INFORMATION */}
            <div className="pc-career-info">

              <span className="pc-career-info-label">
                JOIN THE PANDIT CABS NETWORK
              </span>

              <h2>
                Your Skills Could <span>Take You Further.</span>
              </h2>

              <p className="pc-career-info-description">
                Whether you have professional driving experience,
                customer service skills, travel operations knowledge,
                or a vehicle partnership enquiry, you can introduce
                yourself through our application form.
              </p>

              <div className="pc-career-benefits">

                <div className="pc-career-benefit">
                  <span className="pc-career-benefit-icon">
                    <i className="fas fa-briefcase" />
                  </span>
                  <div>
                    <h4>Multiple Career Categories</h4>
                    <p>
                      Submit enquiries for driving, operations,
                      customer care, and related activities.
                    </p>
                  </div>
                </div>

                <div className="pc-career-benefit">
                  <span className="pc-career-benefit-icon">
                    <i className="fas fa-car-side" />
                  </span>
                  <div>
                    <h4>Passenger Transport Industry</h4>
                    <p>
                      Explore opportunities connected with
                      local, airport, and outstation travel.
                    </p>
                  </div>
                </div>

                <div className="pc-career-benefit">
                  <span className="pc-career-benefit-icon">
                    <i className="fas fa-handshake" />
                  </span>
                  <div>
                    <h4>Fleet Partnership Enquiries</h4>
                    <p>
                      Vehicle owners and transport operators
                      can share their business profiles.
                    </p>
                  </div>
                </div>

              </div>

              {/* CONTACT */}
              <div className="pc-career-contact-box">
                <span>CONTACT PANDIT CABS</span>

                <a href="tel:+919890121689">
                  <i className="fas fa-phone-alt" />
                  +91 9890121689
                </a>

                <a href="mailto:tarun.pandey@panditcabs.com">
                  <i className="fas fa-envelope" />
                  tarun.pandey@panditcabs.com
                </a>
              </div>

              <div className="pc-career-office">
                <i className="fas fa-map-marker-alt" />
                <p>
                  <strong>Pandit Cabs</strong>
                  FL NO 301, Akshay Nest Road No. 10,
                  Adarsh Nagar, Tingre Nagar,
                  Pune, Maharashtra 411032
                </p>
              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="pc-career-form-panel">

              <div className="pc-career-form-heading">
                <span>CAREER APPLICATION</span>

                <h2>Tell Us About Yourself</h2>

                <p>
                  Complete the details below to prepare your
                  application message on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-fullname">
                        Full Name *
                      </label>

                      <input
                        id="pc-fullname"
                        type="text"
                        name="fullname"
                        placeholder="Your full name"
                        value={formData.fullname}
                        onChange={handleChange}
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-phone">
                        Mobile Number *
                      </label>

                      <input
                        id="pc-phone"
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        autoComplete="tel-national"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-email">
                        Email Address
                      </label>

                      <input
                        id="pc-email"
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-position">
                        Applying For *
                      </label>

                      <select
                        id="pc-position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Position</option>

                        {positions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-experience">
                        Work Experience *
                      </label>

                      <select
                        id="pc-experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Experience</option>

                        {experienceOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-career-field">
                      <label htmlFor="pc-location">
                        Current Location *
                      </label>

                      <input
                        id="pc-location"
                        type="text"
                        name="location"
                        placeholder="e.g. Tingre Nagar, Pune"
                        value={formData.location}
                        onChange={handleChange}
                        maxLength={150}
                        required
                      />
                    </div>
                  </div>

                  {formData.position === "Driver" && (
                    <div className="col-12">
                      <div className="pc-career-field">
                        <label htmlFor="pc-license">
                          Driving Licence Status *
                        </label>

                        <select
                          id="pc-license"
                          name="license"
                          value={formData.license}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Driving Licence Status
                          </option>

                          {licenseOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <div className="pc-career-field">
                      <label htmlFor="pc-message">
                        Skills & Additional Information
                      </label>

                      <textarea
                        id="pc-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your experience, skills, previous work or partnership enquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={2000}
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="col-12">
                      <div
                        className="pc-career-error"
                        role="alert"
                      >
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <button
                      type="submit"
                      className="pc-career-submit"
                    >
                      <i className="fab fa-whatsapp" />
                      Send Application on WhatsApp
                      <i className="fas fa-arrow-right" />
                    </button>

                    <p className="pc-career-form-note">
                      <i className="fas fa-info-circle" />
                      WhatsApp will open with your application
                      details. Review the message and press Send
                      to submit it to Pandit Cabs.
                    </p>
                  </div>

                </div>
              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
