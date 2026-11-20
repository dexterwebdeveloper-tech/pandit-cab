
import React from "react";
import "./CabRatesTable.css";

const CabRatesTable = () => {
  const ratesData = [
    {
      vehicle: "Dzire",
      capacity: "4+1",
      rate: 12,
      type: "Sedan",
      icon: "fa-car-side",
    },
    {
      vehicle: "Ertiga / Rumion",
      capacity: "6+1",
      rate: 15,
      type: "SUV",
      icon: "fa-car-side",
    },
    {
      vehicle: "Kia Carens",
      capacity: "6+1",
      rate: 18,
      type: "Premium SUV",
      icon: "fa-car-side",
    },
    {
      vehicle: "Innova Crysta",
      capacity: "7+1",
      rate: 20,
      type: "Premium SUV",
      icon: "fa-car-side",
    },
    {
      vehicle: "Innova Hycross",
      capacity: "7+1",
      rate: 26,
      type: "Luxury SUV",
      icon: "fa-car-side",
    },
    {
      vehicle: "Winger",
      capacity: "9+1 Seater",
      rate: 25,
      type: "Group Travel",
      icon: "fa-shuttle-van",
    },
    {
      vehicle: "Winger",
      capacity: "12 Seater",
      rate: 26,
      type: "Group Travel",
      icon: "fa-shuttle-van",
    },
    {
      vehicle: "Tempo Traveller",
      capacity: "17 Seater",
      rate: 28,
      type: "Tempo Traveller",
      icon: "fa-shuttle-van",
    },
    {
      vehicle: "Tempo Traveller",
      capacity: "20 Seater",
      rate: 32,
      type: "Tempo Traveller",
      icon: "fa-shuttle-van",
    },
    {
      vehicle: "Urbania",
      capacity: "—",
      rate: 38,
      type: "Luxury Traveller",
      icon: "fa-shuttle-van",
    },
  ];

  const WHATSAPP_NUMBER = "919890121689";

  const handleWhatsAppClick = (vehicle, capacity, rate) => {
    const message = [
      "Hello Pandit Cabs,",
      "",
      "I would like to enquire about a cab booking.",
      "",
      `Vehicle: ${vehicle}`,
      `Seating Capacity: ${capacity}`,
      `Listed Rate: ₹${rate}/KM`,
      "Minimum Running: 300 KM per day",
      "",
      "Please share vehicle availability,",
      "complete charges, and booking details.",
      "",
      "Thank you!",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="pc-rates-section">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="pc-rates-heading">
          <div className="pc-rates-heading-content">
            <span className="pc-rates-label">
              <i className="fas fa-route"></i>
              PANDIT CABS RATE CARD
            </span>

            <h2>
              Cab & Travel <span>Rates</span>
            </h2>

            <p>
              Explore our vehicle rental rates and choose
              the right cab for your next journey.
            </p>
          </div>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="pc-rates-call"
          >
            <i className="fas fa-phone-alt"></i>
            <span>
              <small>BOOKING HELPLINE</small>
              +91 9890121689
            </span>
          </a>
        </div>

        {/* IMPORTANT INFORMATION */}
        <div className="pc-rates-highlights">

          <div className="pc-rate-highlight">
            <div className="pc-highlight-icon">
              <i className="fas fa-car-side"></i>
            </div>

            <div>
              <span>OUR VEHICLES</span>
              <strong>AC Cab & Travels</strong>
            </div>
          </div>

          <div className="pc-rate-highlight">
            <div className="pc-highlight-icon">
              <i className="fas fa-road"></i>
            </div>

            <div>
              <span>MINIMUM RUNNING</span>
              <strong>300 KM / Day</strong>
            </div>
          </div>

          <div className="pc-rate-highlight">
            <div className="pc-highlight-icon">
              <i className="fas fa-receipt"></i>
            </div>

            <div>
              <span>ADDITIONAL CHARGES</span>
              <strong>Toll, Parking & Driver Food</strong>
            </div>
          </div>

        </div>

        {/* RATES TABLE */}
        <div className="pc-rates-table-wrapper">

          <div className="pc-rates-table-top">
            <div>
              <h3>
                <i className="fas fa-list-alt"></i>
                Vehicle Rental Price List
              </h3>

              <p>
                Select your preferred vehicle to enquire
                about availability.
              </p>
            </div>

            <span className="pc-rates-count">
              {ratesData.length} Vehicle Options
            </span>
          </div>

          <div className="pc-rates-responsive">
            <table className="pc-rates-table">

              <thead>
                <tr>
                  <th>VEHICLE TYPE</th>
                  <th>SEATING CAPACITY</th>
                  <th>RATE / KM</th>
                  <th>MINIMUM / DAY</th>
                  <th>EXTRA CHARGES</th>
                  <th>BOOKING</th>
                </tr>
              </thead>

              <tbody>
                {ratesData.map((item, index) => (
                  <tr key={`${item.vehicle}-${item.capacity}-${index}`}>

                    {/* VEHICLE */}
                    <td data-label="Vehicle">
                      <div className="pc-vehicle-info">
                        <div className="pc-vehicle-icon">
                          <i className={`fas ${item.icon}`}></i>
                        </div>

                        <div className="pc-vehicle-text">
                          <strong>{item.vehicle}</strong>
                          <span>{item.type}</span>
                        </div>
                      </div>
                    </td>

                    {/* CAPACITY */}
                    <td data-label="Capacity">
                      <span className="pc-capacity">
                        <i className="fas fa-users"></i>
                        {item.capacity}
                      </span>
                    </td>

                    {/* PRICE */}
                    <td data-label="Rate / KM">
                      <div className="pc-rate-price">
                        <strong>₹{item.rate}</strong>
                        <small>/ KM</small>
                      </div>
                    </td>

                    {/* MINIMUM KM */}
                    <td data-label="Minimum / Day">
                      <span className="pc-km-badge">
                        <i className="fas fa-road"></i>
                        300 KM
                      </span>
                    </td>

                    {/* EXTRA CHARGES */}
                    <td data-label="Extra Charges">
                      <div className="pc-extra-charges">
                        <i className="fas fa-info-circle"></i>
                        <span>
                          Toll + Parking
                          <small>+ Driver Food</small>
                        </span>
                      </div>
                    </td>

                    {/* BOOKING BUTTON */}
                    <td data-label="Booking">
                      <button
                        type="button"
                        className="pc-rate-book-btn"
                        onClick={() =>
                          handleWhatsAppClick(
                            item.vehicle,
                            item.capacity,
                            item.rate
                          )
                        }
                      >
                        <i className="fab fa-whatsapp"></i>
                        Book Now
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* TABLE FOOTER */}
          <div className="pc-rates-table-footer">
            <span>
              <i className="fas fa-shield-alt"></i>
              Confirm the final fare before booking
            </span>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Pandit Cabs, please share your latest cab rental rate card and vehicle availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Need Assistance?
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

        </div>

        {/* BOTTOM IMPORTANT NOTE */}
        <div className="pc-rates-bottom-note">
          <div className="pc-note-icon">
            <i className="fas fa-exclamation-circle"></i>
          </div>

          <p>
            <strong>Important Note:</strong> All listed rates are
            per kilometer. Minimum running is{" "}
            <strong>300 KM per day</strong>. Toll, parking,
            and driver food charges are{" "}
            <strong>additional</strong>. Please confirm
            the complete fare and booking conditions
            with Pandit Cabs before travelling.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CabRatesTable;
