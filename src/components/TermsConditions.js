
import React from "react";
import "./TermsConditions.css";

const terms = [
  {
    title: "Acceptance of Booking Terms",
    content:
      "By requesting or confirming transportation with Pandit Cabs, customers agree to the applicable booking conditions communicated before confirmation. These terms apply to local cab services, airport transfers, outstation journeys, one-way trips, round trips, and other transportation arrangements offered by Pandit Cabs, subject to applicable law."
  },
  {
    title: "Reservation and Booking Confirmation",
    content:
      "Customers are requested to provide correct passenger details, mobile number, pickup address, destination, travel date, pickup time, and preferred vehicle category. Submitting an enquiry does not automatically guarantee a reservation. A booking becomes confirmed only after Pandit Cabs communicates its acceptance and the applicable booking requirements are completed."
  },
  {
    title: "Vehicle Availability and Allocation",
    content:
      "Vehicle availability may vary according to travel dates, passenger requirements, route conditions, and operational circumstances. Pandit Cabs may offer an equivalent vehicle category when the originally requested vehicle is unavailable. Any material change to the agreed service or fare should be communicated to the customer before proceeding."
  },
  {
    title: "Cab Rental Fares and Quotations",
    content:
      "Travel quotations may depend on vehicle type, route, journey distance, duration, number of travel days, and selected package. Customers should review the inclusions and exclusions in the quotation. Charges for tolls, parking, state permits, driver allowances, additional kilometres, waiting time, or other applicable expenses may be payable separately unless expressly included."
  },
  {
    title: "Advance Payment and Balance Settlement",
    content:
      "Certain bookings may require an advance payment to reserve a vehicle. The required advance, balance amount, accepted payment methods, and payment deadlines will be communicated during booking. Customers should make payments only through payment instructions confirmed by Pandit Cabs and retain the relevant payment confirmation."
  },
  {
    title: "Booking Cancellation and Rescheduling",
    content:
      "Customers should notify Pandit Cabs as early as possible if they need to cancel or modify a confirmed reservation. Cancellation charges, rescheduling eligibility, and any applicable deductions depend on the terms disclosed and agreed for the specific booking. A change in travel date, vehicle, or route may require a revised quotation and confirmation."
  },
  {
    title: "Refunds and Payment Adjustments",
    content:
      "Where a refund is applicable under the agreed booking conditions or relevant law, Pandit Cabs will communicate the eligible amount and processing arrangements. Refund timing may depend on the payment method and financial service provider. Any applicable deductions should be explained to the customer."
  },
  {
    title: "Pickup Timing and Waiting Period",
    content:
      "Passengers should be ready at the confirmed pickup point at the agreed time. Customers should inform Pandit Cabs promptly about expected delays or changes in pickup arrangements. Waiting charges may apply when a complimentary waiting period, if offered, has been exceeded. The applicable waiting conditions should be confirmed before travel."
  },
  {
    title: "Local Cab and Airport Transfers",
    content:
      "Local rental packages may include a specified duration and kilometre allowance. Additional usage beyond those limits may attract extra charges. For airport pickups and drop-offs, customers should provide accurate terminal information and flight details where relevant. Airport entry, parking, and waiting charges may be charged according to the agreed quotation."
  },
  {
    title: "Outstation and Round-Trip Conditions",
    content:
      "Outstation journeys may be subject to minimum daily kilometre calculations, driver allowances, overnight arrangements, interstate permits, and applicable toll or parking charges. Package calculations and travel-day conditions can differ by vehicle and destination. Customers should confirm these details before approving the booking."
  },
  {
    title: "One-Way Cab Booking Conditions",
    content:
      "One-way fares are based on the agreed pickup location, destination, vehicle category, and travel schedule. Additional stops, route deviations, waiting time, or changes in the destination may affect the quoted fare. Customers should obtain confirmation before requesting changes to a one-way journey."
  },
  {
    title: "Passenger Conduct and Vehicle Care",
    content:
      "Passengers are expected to follow applicable safety rules, respect the driver, and maintain reasonable cleanliness inside the vehicle. Smoking where prohibited, unlawful activities, intentional damage, and carrying dangerous or prohibited materials are not permitted. Customers may be responsible for damage resulting from their misuse or negligence, subject to applicable law."
  },
  {
    title: "Luggage and Seating Capacity",
    content:
      "Passenger numbers and luggage must remain within the legal and practical capacity of the booked vehicle. Oversized baggage or special equipment should be disclosed before booking. Passengers are responsible for checking their personal belongings when leaving the vehicle. Any lost-property enquiry should be reported promptly to Pandit Cabs."
  },
  {
    title: "Route Changes, Extra Stops and Travel Delays",
    content:
      "Additional pickup points, unscheduled stops, destination changes, or extended travel duration may lead to revised charges. Journey times are estimates and can be affected by traffic, weather, road closures, vehicle breakdowns, or government restrictions. Pandit Cabs will make reasonable efforts to communicate significant disruptions and assist with practical alternatives."
  },
  {
    title: "Driver and Passenger Safety",
    content:
      "Drivers and passengers must comply with applicable traffic and road-safety requirements. Passengers must not request overspeeding, overloading, unsafe driving, or violations of traffic regulations. A driver may decline an unsafe or unlawful instruction. Travel arrangements may be adjusted when necessary to address genuine safety concerns."
  },
  {
    title: "Customer Complaints and Policy Updates",
    content:
      "Customers may contact Pandit Cabs for booking concerns, payment questions, feedback, or complaints using the official contact information below. Pandit Cabs may revise these Terms & Conditions to reflect changes in services, operations, or legal requirements. Confirmed bookings remain subject to the terms agreed at booking and applicable law."
  }
];

const contact = {
  phone: "+91 9890121689",
  phoneUrl: "tel:+919890121689",
  whatsapp: "919890121689",
  email: "tarun.pandey@panditcabs.com",
  address:
    "FL NO 301, Akshay Nest Road No. 10, Adarsh Nagar, Tingre Nagar, Pune, Maharashtra 411032"
};

export default function TermsConditions() {
  const whatsappMessage = encodeURIComponent(
    "Hello Pandit Cabs, I have a question about your booking Terms & Conditions. Please assist me."
  );

  return (
    <div className="pct-page">

      {/* HERO SECTION */}
      <section className="pct-hero">
        <div className="pct-container pct-hero-grid">

          <div className="pct-hero-content">
            <span className="pct-eyebrow">
              PANDIT CABS / BOOKING GUIDELINES
            </span>

            <h1>
              Terms <span>& Conditions</span>
            </h1>

            <p>
              Understand the guidelines that apply to
              your cab bookings, travel arrangements,
              payments, and passenger responsibilities
              before beginning your journey.
            </p>

            <div className="pct-hero-tags">
              <span>Clear Booking Terms</span>
              <span>Travel Guidelines</span>
              <span>Customer Assistance</span>
            </div>
          </div>

          <div className="pct-hero-brand">
            <img
              src="/images/logo.jpg"
              alt="Pandit Cabs"
            />

            <div className="pct-brand-divider" />

            <strong>Travel Plans Made Clear</strong>

            <p>
              Important information for local, airport,
              and outstation cab bookings.
            </p>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="pct-main">
        <div className="pct-container">

          {/* INTRODUCTION */}
          <div className="pct-intro">
            <div className="pct-intro-symbol">✓</div>

            <div>
              <span>BEFORE YOU BOOK</span>

              <h2>Welcome to Pandit Cabs</h2>

              <p>
                We believe customers should understand
                the arrangements and conditions associated
                with their journey. Please read the following
                terms before confirming a reservation.
                Specific prices, package limits, and
                cancellation conditions should be reviewed
                with our team at the time of booking.
              </p>
            </div>
          </div>

          {/* CONTENT LAYOUT */}
          <div className="pct-layout">

            <div className="pct-content">

              <div className="pct-section-heading">
                <span>OUR TRAVEL POLICIES</span>

                <h2>Booking Terms & Service Guidelines</h2>

                <p>
                  Review the information below to understand
                  our booking process and your responsibilities
                  while using Pandit Cabs services.
                </p>
              </div>

              {/* TERMS */}
              <div className="pct-terms-list">
                {terms.map((term, index) => (
                  <article
                    className="pct-term-card"
                    id={`pandit-term-${index + 1}`}
                    key={term.title}
                  >
                    <div className="pct-term-top">
                      <span className="pct-term-icon">✓</span>
                      <span className="pct-term-label">
                        SERVICE GUIDELINE
                      </span>
                    </div>

                    <h3>{term.title}</h3>
                    <p>{term.content}</p>
                  </article>
                ))}
              </div>

              {/* IMPORTANT NOTICE */}
              <div className="pct-notice">
                <span className="pct-notice-icon">!</span>

                <div>
                  <h3>Important Booking Information</h3>

                  <p>
                    Please confirm your final fare,
                    cancellation conditions, included
                    kilometres, driver allowances, tolls,
                    parking, permits, and any additional
                    charges before making payment.
                    Nothing in these terms excludes
                    customer rights protected by
                    applicable law.
                  </p>
                </div>
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="pct-sidebar">

              <div className="pct-navigation">
                <span className="pct-sidebar-eyebrow">
                  QUICK ACCESS
                </span>

                <h3>Explore Our Terms</h3>

                <nav aria-label="Terms and Conditions sections">
                  {terms.map((term, index) => (
                    <a
                      href={`#pandit-term-${index + 1}`}
                      key={term.title}
                    >
                      <span className="pct-nav-dot" />
                      {term.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CONTACT */}
              <div className="pct-contact-card">
                <span className="pct-sidebar-eyebrow">
                  PANDIT CABS SUPPORT
                </span>

                <h3>Need Help With a Booking?</h3>

                <p>
                  Contact our team for questions about
                  reservations, fare details, or travel policies.
                </p>

                <div className="pct-contact-item">
                  <span>CALL US</span>
                  <a href={contact.phoneUrl}>
                    {contact.phone}
                  </a>
                </div>

                <div className="pct-contact-item">
                  <span>EMAIL US</span>
                  <a href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </div>

                <div className="pct-contact-item">
                  <span>OUR LOCATION</span>
                  <address>
                    <strong>Pandit Cabs</strong>
                    {contact.address}
                  </address>
                </div>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pct-contact-btn"
                >
                  WhatsApp Enquiry ↗
                </a>
              </div>

            </aside>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <section className="pct-footer">
        <div className="pct-container pct-footer-inner">

          <div>
            <span>PANDIT CABS</span>
            <h2>Plan Your Journey With Confidence</h2>
            <p>
              Clear booking information and convenient
              customer assistance for your travel needs.
            </p>
          </div>

          <a href={contact.phoneUrl}>
            Call +91 9890121689 ↗
          </a>

        </div>
      </section>

    </div>
  );
}
