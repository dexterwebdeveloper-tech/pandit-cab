
import React, { useState } from "react";
import "./Enquiry.css";

const WHATSAPP_NUMBER = "919890121689";

const initialFormData = {
  fullname: "",
  email: "",
  phone: "",
  vehicle: "",
  pickup: "",
  drop: "",
  triptype: "Outstation Trip",
  date: "",
  time: "",
  passengers: "1-4",
  message: "",
};

const vehicleGroups = [
  {
    label: "Sedan Cars",
    vehicles: [
      "Swift Dzire",
      "Hyundai Aura",
      "Maruti Suzuki Ciaz",
    ],
  },
  {
    label: "SUV / MUV Cars",
    vehicles: [
      "Maruti Ertiga",
      "Toyota Rumion",
      "Kia Carens",
      "Toyota Innova",
      "Toyota Innova Crysta",
    ],
  },
  {
    label: "Tempo Traveller",
    vehicles: [
      "9 Seater Tempo Traveller",
      "10 Seater Tempo Traveller",
      "12 Seater Tempo Traveller",
      "13 Seater Tempo Traveller",
      "14 Seater Tempo Traveller",
      "17 Seater Tempo Traveller",
      "20 Seater Tempo Traveller",
      "26 Seater Tempo Traveller",
    ],
  },
  {
    label: "Force Urbania",
    vehicles: [
      "9 Seater Force Urbania",
      "10 Seater Force Urbania",
      "13 Seater Force Urbania",
      "15 Seater Force Urbania",
      "17 Seater Force Urbania",
    ],
  },
  {
    label: "Mini Bus / Bus",
    vehicles: [
      "17 Seater Mini Bus",
      "20 Seater Mini Bus",
      "25 Seater Mini Bus",
      "30 Seater Mini Bus",
      "32 Seater Bus",
      "35 Seater Bus",
      "40 Seater Bus",
      "45 Seater Bus",
      "50 Seater Bus",
    ],
  },
];

const tripTypes = [
  "Outstation Trip",
  "One Way Trip",
  "Round Trip",
  "Pune Local",
  "Pune Airport Transfer",
  "Mumbai Airport Transfer",
  "Corporate Travel",
  "Family Tour",
  "Group Tour",
  "Wedding Travel",
  "School / College Trip",
  "Picnic",
  "Pilgrimage / Darshan",
];

const passengerOptions = [
  "1-4",
  "5-6",
  "7-9",
  "10-13",
  "14-17",
  "18-20",
  "21-25",
  "26-30",
  "31-35",
  "36-40",
  "41-50",
  "50+",
];

const getTodayLocal = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default function Enquiry() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!formData.date || formData.date < getTodayLocal()) {
      setStatus("Please select today or a future travel date.");
      return;
    }

    const formattedDate = new Date(
      `${formData.date}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const whatsappMessage = [
      "🚖 *NEW CAB BOOKING ENQUIRY*",
      "*PANDIT CABS*",
      "",
      "👤 *CUSTOMER INFORMATION*",
      `Full Name: ${formData.fullname.trim()}`,
      `Mobile: +91 ${phone}`,
      `Email: ${formData.email.trim()}`,
      "",
      "🚘 *VEHICLE REQUIREMENTS*",
      `Selected Vehicle: ${formData.vehicle}`,
      `Passengers: ${formData.passengers}`,
      "",
      "📍 *JOURNEY INFORMATION*",
      `Pickup Location: ${formData.pickup.trim()}`,
      `Drop Location: ${formData.drop.trim()}`,
      `Trip Type: ${formData.triptype}`,
      `Travel Date: ${formattedDate}`,
      `Pickup Time: ${formData.time || "Not Specified"}`,
      "",
      "📝 *ADDITIONAL REQUIREMENTS*",
      formData.message.trim() || "No additional requirements",
      "",
      "Please confirm vehicle availability and share the best quotation for my trip.",
      "",
      "Thank you!",
    ].join("\n");

    window.location.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);
  };

  return (
    <main className="pc-enquiry-page">

      {/* HERO */}
      <section className="pc-enquiry-hero">
        <div className="pc-enquiry-container pc-enquiry-hero-inner">

          <div>
            <span className="pc-enquiry-eyebrow">
              PANDIT CABS / ONLINE ENQUIRY
            </span>

            <h1>
              Plan Your Trip. <span>Get a Cab Quote.</span>
            </h1>

            <p>
              Submit your travel requirements for local
              cab services, airport transfers, outstation
              journeys, family trips, and group transportation.
            </p>

            <div className="pc-enquiry-hero-tags">
              <span>Local & Outstation</span>
              <span>Airport Transfers</span>
              <span>Group Travel</span>
            </div>
          </div>

          <div className="pc-enquiry-hero-logo">
            <img
              src="/images/logo.jpg"
              alt="Pandit Cabs"
            />
            <p>Travel Enquiries Made Simple</p>
          </div>

        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="pc-enquiry-section">
        <div className="pc-enquiry-container">

          <div className="pc-enquiry-layout">

            {/* LEFT INFORMATION */}
            <aside className="pc-enquiry-sidebar">

              <span className="pc-enquiry-sidebar-label">
                YOUR TRAVEL PARTNER
              </span>

              <h2>
                Tell Us Where <span>You're Going.</span>
              </h2>

              <p className="pc-enquiry-sidebar-desc">
                Share your journey details with Pandit Cabs.
                Our team can review your enquiry and provide
                information about suitable vehicle options
                and travel quotations.
              </p>

              <div className="pc-enquiry-benefits">

                <div className="pc-enquiry-benefit">
                  <span>
                    <i className="fas fa-car-side" />
                  </span>
                  <div>
                    <h3>Vehicle Options</h3>
                    <p>
                      Enquire about sedans, SUVs,
                      Tempo Travellers, Urbania and buses.
                    </p>
                  </div>
                </div>

                <div className="pc-enquiry-benefit">
                  <span>
                    <i className="fas fa-route" />
                  </span>
                  <div>
                    <h3>Flexible Travel Plans</h3>
                    <p>
                      Local trips, outstation travel,
                      airport transfers and group journeys.
                    </p>
                  </div>
                </div>

                <div className="pc-enquiry-benefit">
                  <span>
                    <i className="fab fa-whatsapp" />
                  </span>
                  <div>
                    <h3>Direct WhatsApp Enquiry</h3>
                    <p>
                      Send your selected vehicle and
                      complete journey details directly.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pc-enquiry-contact">
                <span>NEED BOOKING ASSISTANCE?</span>

                <a href="tel:+919890121689">
                  <i className="fas fa-phone-alt" />
                  +91 9890121689
                </a>

                <a href="mailto:tarun.pandey@panditcabs.com">
                  <i className="fas fa-envelope" />
                  tarun.pandey@panditcabs.com
                </a>
              </div>

              <div className="pc-enquiry-address">
                <i className="fas fa-map-marker-alt" />
                <p>
                  <strong>Pandit Cabs</strong>
                  FL NO 301, Akshay Nest Road No. 10,
                  Adarsh Nagar, Tingre Nagar,
                  Pune, Maharashtra 411032
                </p>
              </div>

            </aside>

            {/* RIGHT FORM */}
            <div className="pc-enquiry-form-card">

              <div className="pc-enquiry-form-header">
                <span>BOOKING ENQUIRY FORM</span>

                <h2>Request Your Travel Quotation</h2>

                <p>
                  Complete the form below to prepare your
                  booking enquiry for WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* PERSONAL DETAILS */}
                <div className="pc-enquiry-form-group-title">
                  <span className="pc-enquiry-group-icon">
                    <i className="fas fa-user" />
                  </span>

                  <div>
                    <h3>Personal Information</h3>
                    <p>Your contact details</p>
                  </div>
                </div>

                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-fullname">
                        Full Name <span>*</span>
                      </label>

                      <input
                        id="pe-fullname"
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        value={formData.fullname}
                        onChange={handleChange}
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-email">
                        Email Address <span>*</span>
                      </label>

                      <input
                        id="pe-email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-phone">
                        Mobile Number <span>*</span>
                      </label>

                      <input
                        id="pe-phone"
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
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-vehicle">
                        Select Vehicle <span>*</span>
                      </label>

                      <select
                        id="pe-vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Choose Vehicle / Seating Capacity
                        </option>

                        {vehicleGroups.map((group) => (
                          <optgroup
                            key={group.label}
                            label={group.label}
                          >
                            {group.vehicles.map((vehicle) => (
                              <option
                                key={vehicle}
                                value={vehicle}
                              >
                                {vehicle}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* JOURNEY DETAILS */}
                <div className="pc-enquiry-form-group-title">
                  <span className="pc-enquiry-group-icon">
                    <i className="fas fa-map-marked-alt" />
                  </span>

                  <div>
                    <h3>Journey Information</h3>
                    <p>Pickup, destination and travel schedule</p>
                  </div>
                </div>

                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-pickup">
                        Pickup Location <span>*</span>
                      </label>

                      <input
                        id="pe-pickup"
                        type="text"
                        name="pickup"
                        placeholder="Enter pickup location"
                        value={formData.pickup}
                        onChange={handleChange}
                        maxLength={200}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-drop">
                        Drop Location <span>*</span>
                      </label>

                      <input
                        id="pe-drop"
                        type="text"
                        name="drop"
                        placeholder="Enter destination"
                        value={formData.drop}
                        onChange={handleChange}
                        maxLength={200}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-triptype">
                        Trip Type
                      </label>

                      <select
                        id="pe-triptype"
                        name="triptype"
                        value={formData.triptype}
                        onChange={handleChange}
                      >
                        {tripTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-passengers">
                        Number of Passengers
                      </label>

                      <select
                        id="pe-passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                      >
                        {passengerOptions.map((option) => (
                          <option key={option} value={option}>
                            {option === "50+"
                              ? "50+ Passengers"
                              : `${option.replace("-", " - ")} Passengers`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-date">
                        Travel Date <span>*</span>
                      </label>

                      <input
                        id="pe-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={getTodayLocal()}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="pc-enquiry-field">
                      <label htmlFor="pe-time">
                        Pickup Time
                      </label>

                      <input
                        id="pe-time"
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                </div>

                {/* ADDITIONAL DETAILS */}
                <div className="pc-enquiry-form-group-title">
                  <span className="pc-enquiry-group-icon">
                    <i className="fas fa-comment-dots" />
                  </span>

                  <div>
                    <h3>Additional Requirements</h3>
                    <p>Optional travel preferences</p>
                  </div>
                </div>

                <div className="pc-enquiry-field">
                  <label htmlFor="pe-message">
                    Message / Special Requirements
                  </label>

                  <textarea
                    id="pe-message"
                    name="message"
                    rows={5}
                    placeholder="Share trip duration, sightseeing plans, luggage details, additional stops or other requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={2000}
                  />
                </div>

                {/* ERROR */}
                {status && (
                  <div
                    className="pc-enquiry-error"
                    role="alert"
                  >
                    {status}
                  </div>
                )}

                {/* SUBMIT */}
                <div className="pc-enquiry-submit-area">
                  <button
                    type="submit"
                    className="pc-enquiry-submit-btn"
                  >
                    <i className="fab fa-whatsapp" />
                    Send Enquiry on WhatsApp
                    <i className="fas fa-arrow-right" />
                  </button>

                  <p>
                    WhatsApp will open with your booking details.
                    Review the message and press Send to submit
                    your enquiry.
                  </p>

                  <a
                    href="tel:+919890121689"
                    className="pc-enquiry-call-link"
                  >
                    <i className="fas fa-phone-alt" />
                    Or Call: +91 9890121689
                  </a>
                </div>

              </form>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
