









import React, { useState } from "react";
import "./OnlinePayment.css";

// Add only Pandit Cabs' verified merchant UPI ID.
const MERCHANT_UPI_ID = "";
const MERCHANT_NAME = "Pandit Cabs";

const WHATSAPP_NUMBER = "919890121689";
const CONTACT_NUMBER = "+91 9890121689";
const CONTACT_EMAIL = "booking@panditcabs.com";

const initialForm = {
  fullname: "",
  phone: "",
  bookingId: "",
  amount: "",
  paymentMethod: "upi",
  transactionId: "",
  paymentDate: "",
  message: "",
};

const OnlinePayment = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  const isUpiConfigured = Boolean(MERCHANT_UPI_ID.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setCopied(false);

    if (["fullname", "phone", "bookingId", "amount"].includes(name)) {
      setShowPayment(false);
    }
  };

  const validateBooking = () => {
    if (!form.fullname.trim()) {
      return "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      return "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!form.bookingId.trim()) {
      return "Please enter your booking reference.";
    }

    const amount = Number(form.amount);

    if (
      !form.amount ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return "Please enter a valid payment amount.";
    }

    if (!isUpiConfigured) {
      return "Online UPI payment is not configured yet. Please contact Pandit Cabs for verified payment details.";
    }

    return "";
  };

  const handleProceed = (e) => {
    e.preventDefault();

    const validationError = validateBooking();

    if (validationError) {
      setError(validationError);
      setShowPayment(false);
      return;
    }

    setError("");
    setShowPayment(true);
  };

  const upiUrl = isUpiConfigured
    ? `upi://pay?${new URLSearchParams({
        pa: MERCHANT_UPI_ID.trim(),
        pn: MERCHANT_NAME,
        am: Number(form.amount || 0).toFixed(2),
        cu: "INR",
        tn: `Booking ${form.bookingId.trim()}`,
      }).toString()}`
    : "";

  const copyUpiId = async () => {
    if (!isUpiConfigured) return;

    try {
      await navigator.clipboard.writeText(MERCHANT_UPI_ID);
      setCopied(true);
      setError("");
    } catch {
      setError("Unable to copy the UPI ID. Please copy it manually.");
    }
  };

  const sendPaymentDetails = () => {
    const phone = form.phone.replace(/\D/g, "");

    if (!form.fullname.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.bookingId.trim()) {
      setError("Please enter your booking reference.");
      return;
    }

    if (
      !form.amount ||
      !Number.isFinite(Number(form.amount)) ||
      Number(form.amount) <= 0
    ) {
      setError("Please enter a valid payment amount.");
      return;
    }

    if (!form.transactionId.trim()) {
      setError("Please enter the transaction / UTR number.");
      return;
    }

    if (!form.paymentDate) {
      setError("Please select the payment date.");
      return;
    }

    const today = new Date();
    const localToday = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    if (form.paymentDate > localToday) {
      setError("Payment date cannot be in the future.");
      return;
    }

    const message = [
      "💳 *PAYMENT VERIFICATION REQUEST*",
      "*PANDIT CABS*",
      "",
      "👤 *CUSTOMER DETAILS*",
      `Name: ${form.fullname.trim()}`,
      `Mobile: +91 ${phone}`,
      `Booking Reference: ${form.bookingId.trim()}`,
      "",
      "💰 *PAYMENT DETAILS*",
      `Amount: ₹${Number(form.amount).toFixed(2)}`,
      "Payment Method: UPI",
      `Transaction / UTR ID: ${form.transactionId.trim()}`,
      `Payment Date: ${form.paymentDate}`,
      "",
      "📝 *ADDITIONAL MESSAGE*",
      form.message.trim() || "No additional message",
      "",
      "Please verify this transaction and confirm receipt of payment.",
      "",
      "Thank you!",
    ].join("\n");

    setError("");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const supportMessage = encodeURIComponent(
    "Hello Pandit Cabs, I need assistance with my cab booking payment. Please share your verified payment details."
  );

  return (
    <main className="vpay-page">

      {/* HERO SECTION */}
      <section className="vpay-hero">
        <div className="container">
          <div className="vpay-hero-content">
            <span className="vpay-eyebrow">
              <i className="fas fa-credit-card"></i>
              PANDIT CABS
            </span>

            <h1>
              Online <span>Payment</span>
            </h1>

            <p>
              Conveniently pay for your confirmed cab booking
              and share your transaction details with the
              Pandit Cabs team for verification.
            </p>

            <div className="vpay-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <strong>Online Payment</strong>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN PAYMENT SECTION */}
      <section className="vpay-section">
        <div className="container">

          <div className="vpay-section-heading">
            <span>SECURE PAYMENT CENTRE</span>

            <h2>
              Pay for Your <em>Cab Booking</em>
            </h2>

            <p>
              Enter your confirmed booking details and
              payment amount provided by Pandit Cabs.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">

            {/* LEFT PAYMENT FORM */}
            <div className="col-12 col-lg-8">
              <div className="vpay-form-card">

                <div className="vpay-card-heading">
                  <div className="vpay-card-heading-icon">
                    <i className="fas fa-receipt"></i>
                  </div>

                  <div>
                    <span>STEP 01</span>
                    <h3>Booking & Payment Details</h3>
                  </div>
                </div>

                <form onSubmit={handleProceed}>
                  <div className="row g-3">

                    <div className="col-12 col-md-6">
                      <label className="vpay-label" htmlFor="vpay-fullname">
                        Customer Name *
                      </label>

                      <input
                        id="vpay-fullname"
                        type="text"
                        className="form-control vpay-input"
                        name="fullname"
                        placeholder="Enter full name"
                        value={form.fullname}
                        onChange={handleChange}
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label" htmlFor="vpay-phone">
                        Mobile Number *
                      </label>

                      <input
                        id="vpay-phone"
                        type="tel"
                        className="form-control vpay-input"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          handleChange({
                            target: {
                              name: "phone",
                              value,
                            },
                          });
                        }}
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label" htmlFor="vpay-booking">
                        Booking Reference *
                      </label>

                      <input
                        id="vpay-booking"
                        type="text"
                        className="form-control vpay-input"
                        name="bookingId"
                        placeholder="Booking ID / Reference"
                        value={form.bookingId}
                        onChange={handleChange}
                        maxLength={80}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label" htmlFor="vpay-amount">
                        Payment Amount (₹) *
                      </label>

                      <input
                        id="vpay-amount"
                        type="number"
                        className="form-control vpay-input"
                        name="amount"
                        placeholder="Enter payment amount"
                        min="0.01"
                        step="0.01"
                        value={form.amount}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="vpay-method-title">
                        Select Payment Method
                      </div>

                      <div className="vpay-method-card">
                        <div className="vpay-method-icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>

                        <div>
                          <strong>UPI Payment</strong>
                          <p>
                            Pay using a supported UPI application.
                          </p>
                        </div>

                        <span className="vpay-method-check">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                    </div>

                    {!isUpiConfigured && (
                      <div className="col-12">
                        <div className="vpay-config-notice">
                          <i className="fas fa-info-circle"></i>
                          <div>
                            <strong>UPI payment setup pending</strong>
                            <p>
                              Please contact Pandit Cabs at{" "}
                              <a href="tel:+919890121689">
                                {CONTACT_NUMBER}
                              </a>{" "}
                              for verified payment details.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {error && (
                      <div className="col-12">
                        <div
                          className="alert alert-danger vpay-error"
                          role="alert"
                        >
                          {error}
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      {isUpiConfigured ? (
                        <button
                          type="submit"
                          className="vpay-proceed-btn"
                        >
                          <i className="fas fa-arrow-right"></i>
                          Proceed to UPI Payment
                        </button>
                      ) : (
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${supportMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vpay-proceed-btn"
                        >
                          <i className="fab fa-whatsapp"></i>
                          Request Verified Payment Details
                        </a>
                      )}
                    </div>

                  </div>
                </form>

                {/* STEP 02 - UPI PAYMENT */}
                {showPayment && isUpiConfigured && (
                  <div className="vpay-payment-panel">

                    <div className="vpay-payment-panel-heading">
                      <span>STEP 02</span>
                      <h3>Complete Your Payment</h3>
                      <p>
                        Check the recipient name and amount
                        in your UPI app before approving.
                      </p>
                    </div>

                    <div className="vpay-amount-display">
                      <span>PAYMENT AMOUNT</span>
                      <strong>
                        ₹{Number(form.amount).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </strong>
                    </div>

                    <div className="vpay-upi-details">
                      <span>Merchant UPI ID</span>

                      <div>
                        <strong>{MERCHANT_UPI_ID}</strong>

                        <button
                          type="button"
                          onClick={copyUpiId}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>

                    <a
                      className="vpay-upi-btn"
                      href={upiUrl}
                    >
                      <i className="fas fa-mobile-alt"></i>
                      Open UPI App to Pay
                    </a>

                    <p className="vpay-upi-note">
                      Payment is completed in your UPI app,
                      not on this website. Return here
                      after payment and submit your
                      transaction details for verification.
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT INFORMATION */}
            <div className="col-12 col-lg-4">
              <aside className="vpay-info-card">

                <div className="vpay-info-icon">
                  <i className="fas fa-headset"></i>
                </div>

                <h3>Payment Assistance</h3>

                <p>
                  Need help with your cab booking payment?
                  Contact Pandit Cabs before making any transfer.
                </p>

                <div className="vpay-info-item">
                  <i className="fas fa-phone-alt"></i>

                  <div>
                    <span>CALL US</span>
                    <a href="tel:+919890121689">
                      {CONTACT_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="vpay-info-item">
                  <i className="fas fa-envelope"></i>

                  <div>
                    <span>EMAIL US</span>
                    <a href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="vpay-info-divider"></div>

                <h4>Before You Pay</h4>

                <ul>
                  <li>Confirm your booking with Pandit Cabs.</li>
                  <li>Verify the correct payment amount.</li>
                  <li>Check the merchant UPI recipient details.</li>
                  <li>Keep your transaction reference number.</li>
                  <li>Never share your UPI PIN or OTP.</li>
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${supportMessage}`}
                  className="vpay-help-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Support
                </a>

              </aside>
            </div>
          </div>

          {/* STEP 03 - PAYMENT VERIFICATION */}
          <div className="vpay-verification">

            <div className="vpay-verification-header">
              <span>STEP 03</span>

              <h3>Already Made a Payment?</h3>

              <p>
                If you have already paid using verified
                Pandit Cabs payment details, submit your
                transaction information on WhatsApp
                for manual verification.
              </p>
            </div>

            <div className="row g-3">

              <div className="col-12 col-md-4">
                <label className="vpay-label" htmlFor="vpay-utr">
                  Transaction / UTR Number *
                </label>

                <input
                  id="vpay-utr"
                  type="text"
                  className="form-control vpay-input"
                  name="transactionId"
                  placeholder="Enter transaction reference"
                  value={form.transactionId}
                  onChange={handleChange}
                  maxLength={100}
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="vpay-label" htmlFor="vpay-date">
                  Payment Date *
                </label>

                <input
                  id="vpay-date"
                  type="date"
                  className="form-control vpay-input"
                  name="paymentDate"
                  value={form.paymentDate}
                  onChange={handleChange}
                  max={(() => {
                    const today = new Date();
                    return [
                      today.getFullYear(),
                      String(today.getMonth() + 1).padStart(2, "0"),
                      String(today.getDate()).padStart(2, "0"),
                    ].join("-");
                  })()}
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="vpay-label" htmlFor="vpay-message">
                  Additional Message
                </label>

                <input
                  id="vpay-message"
                  type="text"
                  className="form-control vpay-input"
                  name="message"
                  placeholder="Optional note"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={300}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  type="button"
                  className="vpay-confirm-btn"
                  onClick={sendPaymentDetails}
                >
                  <i className="fab fa-whatsapp"></i>
                  Send Payment Details on WhatsApp
                </button>
              </div>

              {error && (
                <div className="col-12">
                  <p className="vpay-verification-error" role="alert">
                    {error}
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default OnlinePayment;
