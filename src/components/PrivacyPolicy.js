
import React from "react";
import "./PrivacyPolicy.css";

const policies = [
  {
    title: "Our Commitment to Your Privacy",
    content:
      "Pandit Cabs respects the privacy of individuals who enquire about, reserve, or use our cab and travel services. This policy describes how personal information is handled when customers communicate with us, explore our website, or arrange local and outstation transportation."
  },
  {
    title: "Personal Details You Provide",
    content:
      "When requesting a quotation or confirming a journey, you may provide your name, contact number, email address, pickup and destination details, travel dates, preferred vehicle, number of passengers, and special travel instructions. We collect the details reasonably necessary to respond to your request and organize your journey."
  },
  {
    title: "Website and Device Information",
    content:
      "Our website may receive technical information such as browser type, device information, IP address, pages visited, and general usage activity through hosting services, security systems, or analytics tools where enabled. This information may help maintain website functionality, diagnose technical issues, and understand service performance."
  },
  {
    title: "Purpose of Processing Information",
    content:
      "Customer information may be used to prepare travel estimates, arrange vehicles and drivers, coordinate pickups, communicate itinerary changes, respond to enquiries, manage customer support, maintain booking records, and meet applicable legal or accounting requirements."
  },
  {
    title: "Driver and Transport Coordination",
    content:
      "To provide booked transportation, relevant journey information may be communicated to the assigned driver or authorized transport partner. This can include the passenger's contact details, pickup point, destination, scheduled time, and instructions needed to complete the trip."
  },
  {
    title: "WhatsApp, Calls and Email Enquiries",
    content:
      "If you contact Pandit Cabs by telephone, WhatsApp, or email, we may use the information in your message to assist with your enquiry, provide a quotation, confirm travel arrangements, or address service concerns. Communications through third-party platforms are also subject to those platforms' own privacy practices."
  },
  {
    title: "Payments and Transaction Records",
    content:
      "Booking payments, receipts, billing information, and transaction references may be maintained for payment confirmation, accounting, refund handling, and dispute resolution. If an external payment service is used, its own privacy and security terms may apply. Customers should verify payment instructions before transferring funds."
  },
  {
    title: "Information Shared with Service Providers",
    content:
      "Information necessary for a booking may be shared with drivers, authorized transportation partners, payment providers, hosting services, or other operational vendors. Information may also be disclosed when required by law or a valid legal process. Pandit Cabs does not treat customer personal information as a product for sale."
  },
  {
    title: "Cookies and Online Preferences",
    content:
      "Cookies or similar technologies may be used to support website functionality, remember preferences, measure website performance, or maintain security where such tools are implemented. You may adjust cookie settings through your browser. Consent for optional tracking will be requested where legally required."
  },
  {
    title: "Protecting Customer Information",
    content:
      "We aim to apply reasonable administrative, organizational, and technical safeguards appropriate to the information handled. Access should be limited to people who need the information for legitimate business activities. Nevertheless, electronic communications and internet-based systems cannot be guaranteed to be completely risk-free."
  },
  {
    title: "How Long Information Is Kept",
    content:
      "Personal and booking information should be retained only for the period reasonably needed for travel operations, customer assistance, financial records, dispute management, or legal compliance. Records no longer required should be deleted or de-identified in accordance with applicable requirements."
  },
  {
    title: "Your Choices and Privacy Requests",
    content:
      "Depending on applicable law, you may request access to information about your personal data, correction of inaccurate records, withdrawal of consent where relevant, or deletion of eligible information. Certain records may remain necessary for legitimate legal, financial, or operational purposes."
  },
  {
    title: "Travel Bookings Involving Minors",
    content:
      "Travel arrangements for children should be made or authorized by a parent, guardian, or another legally responsible adult. Information relating to minors should be limited to what is necessary for the journey and handled in accordance with applicable requirements."
  },
  {
    title: "Promotional Messages",
    content:
      "Where permitted, Pandit Cabs may communicate service announcements, travel updates, or promotional offers using contact information provided by customers. Optional marketing communications should include an appropriate way to opt out, and customers may also contact us to request that such messages stop."
  },
  {
    title: "External Websites and Services",
    content:
      "Links to maps, messaging platforms, payment websites, or other external services may be provided for convenience. Those services may collect information independently under their own terms and privacy policies. We encourage customers to review the policies of services they choose to use."
  },
  {
    title: "Policy Revisions",
    content:
      "This Privacy Policy may be revised when website features, booking procedures, operational practices, or applicable requirements change. The latest published version will describe the current policy, and significant changes may be communicated through appropriate channels."
  },
  {
    title: "Contacting Pandit Cabs",
    content:
      "For questions about personal information, booking records, corrections, or privacy-related concerns, please contact Pandit Cabs using the official phone number, email address, or office address provided on this page. Include enough information for us to understand and respond to your request."
  }
];

const contact = {
  phone: "+91 9890121689",
  phoneLink: "tel:+919890121689",
  email: "tarun.pandey@panditcabs.com",
  address:
    "FL NO 301, Akshay Nest Road No. 10, Adarsh Nagar, Tingre Nagar, Pune, Maharashtra 411032"
};

export default function PrivacyPolicy() {
  return (
    <div className="pc-privacy-page">

      {/* HERO */}
      <header className="pc-privacy-hero">
        <div className="pc-privacy-container">
          <div className="pc-privacy-hero-grid">

            <div className="pc-privacy-hero-content">
              <span className="pc-privacy-eyebrow">
                PANDIT CABS · CUSTOMER PRIVACY
              </span>

              <h1>
                Your Journey. <span>Your Privacy.</span>
              </h1>

              <p>
                Learn how Pandit Cabs handles travel enquiries,
                customer contact information, and booking details
                while arranging cab and transportation services.
              </p>

              <div className="pc-privacy-hero-features">
                <span>Responsible Data Handling</span>
                <span>Booking Transparency</span>
                <span>Customer Privacy Choices</span>
              </div>
            </div>

            <div className="pc-privacy-hero-panel">
              <div className="pc-privacy-hero-logo">
                <img
                  src="/images/logo.jpg"
                  alt="Pandit Cabs"
                />
              </div>

              <div className="pc-privacy-panel-divider" />

              <span>PRIVACY POLICY</span>
              <strong>
                Clear information for every journey
              </strong>
              <p>
                Local Cab · Airport Transfer · Outstation Travel
              </p>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pc-privacy-main">
        <div className="pc-privacy-container">

          <div className="pc-privacy-intro">
            <div className="pc-privacy-intro-mark">✓</div>
            <div>
              <span>WELCOME TO PANDIT CABS</span>
              <h2>Privacy Information You Can Understand</h2>
              <p>
                When you plan a journey with us, certain information
                is needed to organize your booking. This page
                explains the categories of information involved,
                why they may be used, and how you can contact
                us with privacy-related questions.
              </p>
            </div>
          </div>

          <div className="pc-privacy-layout">

            {/* POLICY CONTENT */}
            <div className="pc-privacy-content">
              <div className="pc-privacy-section-heading">
                <span>INFORMATION & DATA PRACTICES</span>
                <h2>Our Privacy Policy</h2>
                <p>
                  Explore the following sections for information
                  about customer records, booking communications,
                  data protection, and privacy requests.
                </p>
              </div>

              <div className="pc-privacy-policy-list">
                {policies.map((policy, index) => (
                  <article
                    className="pc-privacy-policy-card"
                    key={policy.title}
                    id={`pc-privacy-${index + 1}`}
                  >
                    <div className="pc-privacy-policy-top">
                      <span className="pc-privacy-policy-dot" />
                      <span className="pc-privacy-policy-category">
                        PRIVACY GUIDELINE
                      </span>
                    </div>

                    <h3>{policy.title}</h3>
                    <p>{policy.content}</p>
                  </article>
                ))}
              </div>

              <div className="pc-privacy-notice">
                <div className="pc-privacy-notice-icon">i</div>
                <div>
                  <h3>A Note About Consent</h3>
                  <p>
                    Using our website does not replace any
                    consent required by applicable law.
                    Where specific consent is legally required,
                    it should be obtained separately. Customers
                    retain the rights available to them under
                    applicable privacy laws.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="pc-privacy-sidebar">

              <div className="pc-privacy-menu">
                <span className="pc-privacy-sidebar-label">
                  QUICK NAVIGATION
                </span>
                <h3>Policy Sections</h3>

                <nav aria-label="Privacy policy navigation">
                  {policies.map((policy, index) => (
                    <a
                      href={`#pc-privacy-${index + 1}`}
                      key={policy.title}
                    >
                      <span className="pc-privacy-menu-dot" />
                      {policy.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pc-privacy-contact-card">
                <span className="pc-privacy-sidebar-label">
                  CUSTOMER ASSISTANCE
                </span>

                <h3>Contact Pandit Cabs</h3>
                <p>
                  For privacy questions or assistance with
                  your booking information, reach our team.
                </p>

                <div className="pc-privacy-contact-item">
                  <span>PHONE NUMBER</span>
                  <a href={contact.phoneLink}>
                    {contact.phone}
                  </a>
                </div>

                <div className="pc-privacy-contact-item">
                  <span>EMAIL ADDRESS</span>
                  <a href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </div>

                <div className="pc-privacy-contact-item">
                  <span>OFFICE ADDRESS</span>
                  <address>
                    <strong>Pandit Cabs</strong>
                    {contact.address}
                  </address>
                </div>

                <a
                  className="pc-privacy-contact-button"
                  href={`mailto:${contact.email}?subject=Privacy%20Enquiry`}
                >
                  Send Privacy Enquiry ↗
                </a>
              </div>

            </aside>
          </div>
        </div>
      </main>

      {/* FOOTER CTA */}
      <section className="pc-privacy-footer">
        <div className="pc-privacy-container">
          <div className="pc-privacy-footer-inner">
            <div>
              <span>PANDIT CABS</span>
              <h2>Travel with Confidence.</h2>
              <p>
                Have a question about your information?
                Our team is available through our official
                contact channels.
              </p>
            </div>

            <a href={contact.phoneLink}>
              Call +91 9890121689
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
