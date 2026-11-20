import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceAreas.css";

// All active service links from your Pandit Cabs footer are retained.
const serviceLinks = [
  {
    "to": "/pune-airport-taxi-cabs-service",
    "label": "Pune Airport Taxi Cabs Service"
  },
  {
    "to": "/pune-local-cab-service",
    "label": "Pune Local Cab Service"
  },
  {
    "to": "/pune-to-alibaug-cab",
    "label": "Pune to Alibaug Cab"
  },
  {
    "to": "/pune-to-aurangabad-cab-service",
    "label": "Pune to Aurangabad Cab Service"
  },
  {
    "to": "/pune-to-bangalore-cab",
    "label": "Pune to Bangalore Cab"
  },
  {
    "to": "/pune-to-goa-cab-service",
    "label": "Pune to Goa Cab Service"
  },
  {
    "to": "/pune-to-kolhapur-cab-service",
    "label": "Pune to Kolhapur Cab Service"
  },
  {
    "to": "/pune-to-lavasa-car-rental",
    "label": "Pune to Lavasa Car Rental"
  },
  {
    "to": "/pune-to-lonavala-cab",
    "label": "Pune to Lonavala Cab"
  },
  {
    "to": "/pune-to-mahabaleshwar-cab",
    "label": "Pune to Mahabaleshwar Cab"
  },
  {
    "to": "/pune-to-mumbai-cabs",
    "label": "Pune to Mumbai Cabs"
  },
  {
    "to": "/pune-to-mumbai-taxi-cabs",
    "label": "Pune To Mumbai Taxi Cabs"
  },
  {
    "to": "/pune-to-nagpur-cab",
    "label": "Pune to Nagpur Cab"
  },
  {
    "to": "/pune-to-sangli-satara-cabs",
    "label": "Pune To Sangli Satara Cabs"
  },
  {
    "to": "/pune-to-shirdi-cab-taxi",
    "label": "Pune to Shirdi Cab Taxi"
  },
  {
    "to": "/pune-to-solapur-cab",
    "label": "Pune to Solapur Cab"
  },
  {
    "to": "/ashtavinayak-darshan-cab-pune",
    "label": "Ashtavinayak Darshan Cab Pune"
  },
  {
    "to": "/car-hire-in-koregaon-park-kalyani-nagar",
    "label": "Car Hire In Koregaon Park Kalyani Nagar"
  },
  {
    "to": "/car-hire-in-kothrud-pune",
    "label": "Car Hire In Kothrud Pune"
  },
  {
    "to": "/car-rental-in-magarpatta-city",
    "label": "Car Rental In Magarpatta City"
  },
  {
    "to": "/corporate-cab-service-in-pune",
    "label": "Corporate Cab Service in Pune"
  },
  {
    "to": "/best-outstation-cab-service-in-pune",
    "label": "Best Outstation Cab Service in Pune"
  },
  {
    "to": "/shirdi-to-pune-cabs-taxi",
    "label": "Shirdi To Pune Cabs Taxi"
  },
  {
    "to": "/mahabaleshwar-to-pune-cabs",
    "label": "Mahabaleshwar To Pune Cabs"
  },
  {
    "to": "/book-innova-for-outstation-pune",
    "label": "Book Innova For Outstation Pune"
  },
  {
    "to": "/book-taxi-in-pune",
    "label": "Book Taxi In Pune"
  },
  {
    "to": "/bus-on-rent-in-pune",
    "label": "Bus On Rent in Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-pune",
    "label": "Tempo Traveller On Rent in Pune"
  },
  {
    "to": "/ertiga-on-rent-in-pune",
    "label": "Ertiga On Rent in Pune"
  },
  {
    "to": "/luxury-car-on-rent-in-pune",
    "label": "Luxury Car On Rent In Pune"
  },
  {
    "to": "/toyota-etios-on-rent-in-pune",
    "label": "Toyota Etios On Rent In Pune"
  },
  {
    "to": "/swift-dzire-on-rent-in-pune",
    "label": "Swift Dzire On Rent in Pune"
  },
  {
    "to": "/pune-one-way-cabs",
    "label": "Pune One Way Cabs"
  },
  {
    "to": "/taxi-service-near-me-pune",
    "label": "Taxi Service Near Me Pune"
  },
  {
    "to": "/pune-to-mumbai-airport-cab",
    "label": "Pune to Mumbai Airport Cab"
  },
  {
    "to": "/pune-to-outstations-cabs",
    "label": "Pune to Outstations Cabs"
  },
  {
    "to": "/pune-to-matheran-cabs",
    "label": "Pune to Matheran Cabs"
  },
  {
    "to": "/pune-to-5-jyotirlinga-darshan-cab",
    "label": "Pune to 5 Jyotirlinga Darshan Cab"
  },
  {
    "to": "/pune-to-bhimashankar-cab",
    "label": "Pune to Bhimashankar Cab"
  },
  {
    "to": "/pune-to-nashik-cab-service",
    "label": "Pune to Nashik Cab Service"
  },
  {
    "to": "/innova-crysta-cab-in-pune",
    "label": "Innova Crysta Cab in Pune"
  },
  {
    "to": "/pune-to-jyotirlinga-darshan-package",
    "label": "Pune to Jyotirlinga Darshan Package"
  },
  {
    "to": "/pune-to-akkalkot-cabs",
    "label": "Pune to Akkalkot Cabs"
  },
  {
    "to": "/pune-to-pandharpur-cab",
    "label": "Pune to Pandharpur Cab"
  },
  {
    "to": "/pune-to-grishneshwar-jyotirlinga-cab",
    "label": "Pune to Grishneshwar Jyotirlinga Cab"
  },
  {
    "to": "/innova-crysta-on-rent-in-pune",
    "label": "Innova Crysta On Rent in Pune"
  },
  {
    "to": "/ertiga-hire-in-pune",
    "label": "Ertiga Hire in Pune"
  },
  {
    "to": "/pune-to-shrivardhan-cab",
    "label": "Pune to Shrivardhan Cab"
  },
  {
    "to": "/pune-to-jyotiba-cab",
    "label": "Pune to Jyotiba Cab"
  },
  {
    "to": "/sedan-cab-service-in-pune",
    "label": "Sedan Cab Service in Pune"
  },
  {
    "to": "/hyundai-xcent-cabs-in-pune",
    "label": "Hyundai Xcent Cabs in Pune"
  },
  {
    "to": "/aura-cab-service-in-pune",
    "label": "Aura Cab Service in Pune"
  },
  {
    "to": "/pune-darshan-sedan-cab-booking",
    "label": "Pune Darshan Sedan Cab Booking"
  },
  {
    "to": "/pune-to-ayodhya-tour-package",
    "label": "Pune to Ayodhya Tour Package"
  },
  {
    "to": "/pune-to-mahabaleshwar-sedan-cab",
    "label": "Pune to Mahabaleshwar Sedan Cab"
  },
  {
    "to": "/pune-airport-cab-sedan-service",
    "label": "Pune Airport Cab Sedan Service"
  },
  {
    "to": "/pune-to-shirdi-sedan-cabs",
    "label": "Pune to Shirdi Sedan Cabs"
  },
  {
    "to": "/pune-hyundai-aura-cab",
    "label": "Pune Hyundai Aura Cab"
  },
  {
    "to": "/pune-to-lonavala-sedan-cabs",
    "label": "Pune to Lonavala Sedan Cabs"
  },
  {
    "to": "/online-sedan-cab-booking-pune",
    "label": "Online Sedan Cab Booking Pune"
  },
  {
    "to": "/pune-to-vidarbha-cab-service",
    "label": "Pune to Vidarbha Cab Service"
  },
  {
    "to": "/pune-to-hyderabad-cab",
    "label": "Pune to Hyderabad Cab"
  },
  {
    "to": "/pune-to-ujjain-cab",
    "label": "Pune to Ujjain Cab"
  },
  {
    "to": "/pune-railway-station-cab-service",
    "label": "Pune Railway Station Cab Service"
  },
  {
    "to": "/cheap-cab-service-in-pune",
    "label": "Cheap Cab Service in Pune"
  },
  {
    "to": "/online-cab-booking-pune",
    "label": "Online Cab Booking Pune"
  },
  {
    "to": "/pune-to-gujarat-cab-service",
    "label": "Pune to Gujarat Cab Service"
  },
  {
    "to": "/pune-to-ahmednagar-cab",
    "label": "Pune to Ahmednagar Cab"
  },
  {
    "to": "/pune-to-latur-cab",
    "label": "Pune to Latur Cab"
  },
  {
    "to": "/pune-to-mumbai-darshan-cab",
    "label": "Pune to Mumbai Darshan Cab"
  },
  {
    "to": "/pune-airport-cab",
    "label": "Pune Airport Cab"
  },
  {
    "to": "/pune-to-outstation-cabs",
    "label": "Pune to Outstation Cabs"
  },
  {
    "to": "/pune-to-rajasthan-cabs",
    "label": "Pune to Rajasthan Cabs"
  },
  {
    "to": "/pune-to-sambhajinagar-cab",
    "label": "Pune to Sambhajinagar Cab"
  },
  {
    "to": "/pune-to-dhule-cabs",
    "label": "Pune to Dhule Cabs"
  },
  {
    "to": "/pune-to-jalgaon-cab-service",
    "label": "Pune to Jalgaon Cab Service"
  },
  {
    "to": "/pune-to-thane-cab",
    "label": "Pune to Thane Cab"
  },
  {
    "to": "/pune-to-panvel-cabs",
    "label": "Pune to Panvel Cabs"
  },
  {
    "to": "/pune-to-nanded-cab-service",
    "label": "Pune to Nanded Cab Service"
  },
  {
    "to": "/pune-to-surat-cabs",
    "label": "Pune to Surat Cabs"
  },
  {
    "to": "/pune-to-ahmedabad-cab",
    "label": "Pune to Ahmedabad Cab"
  },
  {
    "to": "/pune-to-igatpuri-taxi",
    "label": "Pune to Igatpuri Taxi"
  },
  {
    "to": "/pune-to-tamhini-ghat-cab",
    "label": "Pune to Tamhini Ghat Cab"
  },
  {
    "to": "/pune-to-trimbakeshwar-cab-service",
    "label": "Pune to Trimbakeshwar Cab Service"
  },
  {
    "to": "/pune-to-jejuri-cab-service",
    "label": "Pune to Jejuri Cab Service"
  },
  {
    "to": "/pune-to-aundha-nagnath-cab",
    "label": "Pune to Aundha Nagnath Cab"
  },
  {
    "to": "/pune-to-konkan-darshan-cab",
    "label": "Pune to Konkan Darshan Cab"
  },
  {
    "to": "/pune-innova-cabs",
    "label": "Pune Innova Cabs"
  },
  {
    "to": "/pune-to-panchgani-cabs",
    "label": "Pune to Panchgani Cabs"
  },
  {
    "to": "/hinjewadi-cab-service",
    "label": "Hinjewadi Cab Service"
  },
  {
    "to": "/cab-service-in-kharadi",
    "label": "Cab Service in Kharadi"
  },
  {
    "to": "/cab-service-in-wagholi",
    "label": "Cab Service in Wagholi"
  },
  {
    "to": "/cab-service-in-mundhwa",
    "label": "Cab Service in Mundhwa"
  },
  {
    "to": "/cab-service-in-kalyani-nagar",
    "label": "Cab Service in Kalyani Nagar"
  },
  {
    "to": "/cab-service-in-kothrud",
    "label": "Cab Service in Kothrud"
  },
  {
    "to": "/pune-to-mahabaleshwar-tempo-traveller",
    "label": "Pune to Mahabaleshwar Tempo Traveller"
  },
  {
    "to": "/pune-to-outstation-tempo-traveller",
    "label": "Pune to Outstation Tempo Traveller"
  },
  {
    "to": "/mini-bus-on-rent-in-pune",
    "label": "Mini Bus On Rent in Pune"
  },
  {
    "to": "/outstation-mini-bus-on-rent-pune",
    "label": "Outstation Mini Bus on Rent Pune"
  },
  {
    "to": "/14-seater-tempo-traveller-on-rent",
    "label": "14 Seater Tempo Traveller on Rent"
  },
  {
    "to": "/17-seater-bus-on-rent-pune",
    "label": "17 Seater Bus on Rent Pune"
  },
  {
    "to": "/pune-to-shirdi-tempo-traveller",
    "label": "Pune to Shirdi Tempo Traveller"
  },
  {
    "to": "/20-seater-bus-on-rent-in-pune",
    "label": "20 Seater Bus on Rent in Pune"
  },
  {
    "to": "/luxury-force-urbania-on-rent-in-pune",
    "label": "Luxury Force Urbania On Rent in Pune"
  },
  {
    "to": "/force-urbania-luxury-mini-bus-on-rent",
    "label": "Force Urbania Luxury Mini Bus On Rent"
  },
  {
    "to": "/14-17-20-25-seater-bus-on-rent-in-pune",
    "label": "14 17 20 25 Seater Bus on Rent in Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-pune",
    "label": "Tempo Traveller Hire in Pune"
  },
  {
    "to": "/force-urbania-on-rent-for-ashtavinayak-darshan",
    "label": "Force Urbania on Rent for Ashtavinayak Darshan"
  },
  {
    "to": "/pune-to-mahabaleshwar-urbania-on-rent",
    "label": "Pune to Mahabaleshwar Urbania on Rent"
  },
  {
    "to": "/bus-on-rent-in-kharadi-pune",
    "label": "Bus on Rent in Kharadi Pune"
  },
  {
    "to": "/bus-on-rent-in-hinjewadi-pune",
    "label": "Bus on Rent in Hinjewadi Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-kharadi-pune",
    "label": "Tempo Traveller on Rent in Kharadi Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-wakad-pune",
    "label": "Tempo Traveller Hire in Wakad Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-baner-pune",
    "label": "Tempo Traveller on Rent in Baner Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-hadapsar-pune",
    "label": "Tempo Traveller Hire in Hadapsar Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-pimpri-chinchwad",
    "label": "Tempo Traveller on Rent in Pimpri Chinchwad"
  },
  {
    "to": "/tempo-traveller-hire-in-viman-nagar-pune",
    "label": "Tempo Traveller Hire in Viman Nagar Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-kothrud-pune",
    "label": "Tempo Traveller on Rent in Kothrud Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-wagholi-pune",
    "label": "Tempo Traveller Hire in Wagholi Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-aundh-pune",
    "label": "Tempo Traveller on Rent in Aundh Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-magarpatta-pune",
    "label": "Tempo Traveller Hire in Magarpatta Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-bavdhan-pune",
    "label": "Tempo Traveller on Rent in Bavdhan Pune"
  },
  {
    "to": "/tempo-traveller-hire-in-pimple-saudagar-pune",
    "label": "Tempo Traveller Hire in Pimple Saudagar Pune"
  },
  {
    "to": "/tempo-traveller-on-rent-in-chinchwad-pune",
    "label": "Tempo Traveller on Rent in Chinchwad Pune"
  },
  {
    "to": "/wedding-mini-bus-rental-in-pune",
    "label": "Wedding Mini Bus Rental in Pune"
  },
  {
    "to": "/pune-to-shirdi-mini-bus",
    "label": "Pune to Shirdi Mini Bus"
  },
  {
    "to": "/pune-to-mahabaleshwar-mini-bus",
    "label": "Pune to Mahabaleshwar Mini Bus"
  },
  {
    "to": "/mini-bus-on-rent-in-hinjewadi",
    "label": "Mini Bus on Rent in Hinjewadi"
  },
  {
    "to": "/mini-bus-on-rent-in-viman-nagar",
    "label": "Mini Bus on Rent in Viman Nagar"
  },
  {
    "to": "/mini-bus-on-rent-in-kothrud",
    "label": "Mini Bus on Rent in Kothrud"
  },
  {
    "to": "/mini-bus-in-chinchwad-pune",
    "label": "Mini Bus in Chinchwad Pune"
  },
  {
    "to": "/mumbai-airport-to-pune-cab",
    "label": "Mumbai Airport to Pune Cab"
  },
  {
    "to": "/mumbai-to-ratnagiri-cab",
    "label": "Mumbai to Ratnagiri Cab"
  },
  {
    "to": "/mumbai-to-bangalore-cab",
    "label": "Mumbai to Bangalore Cab"
  },
  {
    "to": "/mumbai-to-goa-cab",
    "label": "Mumbai to Goa Cab"
  },
  {
    "to": "/mumbai-to-lonavala-cab",
    "label": "Mumbai to Lonavala Cab"
  },
  {
    "to": "/mumbai-to-nashik-cab",
    "label": "Mumbai to Nashik Cab"
  },
  {
    "to": "/mumbai-to-pune-cab",
    "label": "Mumbai to Pune Cab"
  },
  {
    "to": "/mumbai-to-shirdi-cab",
    "label": "Mumbai to Shirdi Cab"
  },
  {
    "to": "/mumbai-to-surat-cab",
    "label": "Mumbai to Surat Cab"
  },
  {
    "to": "/shirdi-to-mumbai-cab",
    "label": "Shirdi to Mumbai Cab"
  },
  {
    "to": "/mahabaleshwar-to-mumbai-cab",
    "label": "Mahabaleshwar to Mumbai Cab"
  },
  {
    "to": "/outstation-cab-service-in-mumbai",
    "label": "Outstation Cab Service in Mumbai"
  },
  {
    "to": "/navi-mumbai-airport-cab",
    "label": "Navi Mumbai Airport Cab"
  },
  {
    "to": "/cab-service-in-navi-mumbai",
    "label": "Cab Service in Navi Mumbai"
  },
  {
    "to": "/innova-crysta-on-rent-in-mumbai",
    "label": "Innova Crysta on Rent in Mumbai"
  },
  {
    "to": "/ertiga-on-rent-in-mumbai",
    "label": "Ertiga on Rent in Mumbai"
  },
  {
    "to": "/mumbai-to-mahabaleshwar-cab",
    "label": "Mumbai to Mahabaleshwar Cab"
  },
  {
    "to": "/cab-service-in-thane",
    "label": "Cab Service in Thane"
  },
  {
    "to": "/urbania-on-rent-in-pune",
    "label": "Urbania on Rent in Pune"
  },
  {
    "to": "/urbania-on-rent-in-pimpri-chinchwad",
    "label": "Urbania on Rent in Pimpri Chinchwad"
  },
  {
    "to": "/urbania-hire-for-corporate-events-in-pune",
    "label": "Urbania Hire for Corporate Events in Pune"
  },
  {
    "to": "/17-seater-urbania-on-rent-in-pune",
    "label": "17 Seater Urbania on Rent in Pune"
  },
  {
    "to": "/14-seater-urbania-on-rent-in-pune",
    "label": "14 Seater Urbania on Rent in Pune"
  },
  {
    "to": "/urbania-on-rent-in-kharadi",
    "label": "Urbania on Rent in Kharadi"
  },
  {
    "to": "/urbania-on-rent-in-hadapsar",
    "label": "Urbania on Rent in Hadapsar"
  },
  {
    "to": "/urbania-on-rent-in-kothrud",
    "label": "Urbania on Rent in Kothrud"
  },
  {
    "to": "/urbania-on-rent-in-bibwewadi",
    "label": "Urbania on Rent in Bibwewadi"
  },
  {
    "to": "/urbania-on-rent-in-koregaon-park",
    "label": "Urbania on Rent in Koregaon Park"
  },
  {
    "to": "/explore-india-pan-india-cab-booking-services",
    "label": "Explore India Pan India Cab Booking Services"
  }
];

const pickups = [
  "Pune", "Pimpri-Chinchwad", "Hinjewadi", "Kharadi", "Hadapsar",
  "Kothrud", "Baner", "Wakad", "Chinchwad", "Viman Nagar",
  "Wagholi", "Kalyani Nagar", "Mundhwa", "Pune Airport", "Aundh",
  "Koregaon Park", "Magarpatta", "Bavdhan", "Pimple Saudagar", "Tingre Nagar"
];

const categories = ["All Services", "Pune & Outstation", "Mumbai & Beyond", "Vehicle Rentals", "Local Pickup Areas", "Darshan & Tours"];

function categoryFor({ to, label }) {
  const s = `${to} ${label}`.toLowerCase();
  if (/darshan|jyotirlinga|ashtavinayak|shirdi|pandharpur|akkalkot|jejuri|trimbakeshwar|aundha|ayodhya|bhimashankar|grishneshwar|jyotiba|ujjain|temple/.test(s)) return "Darshan & Tours";
  if (/urbania|tempo-traveller|tempo traveller|mini-bus|mini bus|bus-on-rent|bus on rent|innova|ertiga|sedan|swift-dzire|swift dzire|toyota-etios|hyundai-xcent|aura|luxury-car|car-hire|car-rental/.test(s)) return "Vehicle Rentals";
  if (/^\/mumbai-|^\/shirdi-to-mumbai|^\/mahabaleshwar-to-mumbai|navi-mumbai|in-mumbai|in-thane/.test(s)) return "Mumbai & Beyond";
  if (/in-kharadi|in-wagholi|in-mundhwa|in-kalyani-nagar|in-kothrud|hinjewadi-cab|pune-local|railway-station|near-me|pune-airport-cab|pune-airport-taxi/.test(s)) return "Local Pickup Areas";
  return "Pune & Outstation";
}

const ServiceAreas = () => {
  const [active, setActive] = useState("All Services");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(() => serviceLinks.filter((item) => {
    const matchesCategory = active === "All Services" || categoryFor(item) === active;
    const matchesSearch = `${item.label} ${item.to}`.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  }), [active, search]);

  const isSearching = search.trim().length > 0;
  const visibleLinks = showAll || isSearching ? filtered : filtered.slice(0, visibleCount);
  const remaining = Math.max(0, filtered.length - visibleLinks.length);

  const selectCategory = (category) => {
    setActive(category);
    setVisibleCount(8);
    setShowAll(false);
  };

  return (
  <>
  
    <section className="pc-areas" aria-labelledby="pc-areas-title">
      <div className="container">
        <div className="pc-areas__heading">
          <span className="pc-areas__eyebrow">PANDIT CABS • SERVICE AREAS</span>
          <h2 id="pc-areas-title">Cab Pickups Across <span>Pune & PCMC</span></h2>
          <p>Convenient pickup options across Pune and Pimpri-Chinchwad, with cab services for local travel, airport transfers, outstation trips and group journeys.</p>
        </div>

        <div className="pc-areas__pickup-list" aria-label="Popular pickup areas">
          {pickups.map((name, i) => (
            <span className="pc-areas__pickup" key={name}>
              <span className={`pc-areas__pickup-dot pc-areas__pickup-dot--${i % 5}`} aria-hidden="true">
                <i className="fas fa-map-marker-alt" />
              </span>
              {name}
            </span>
          ))}
        </div>

        <div className="pc-areas__toolbar">
          <div>
            <span className="pc-areas__eyebrow">EXPLORE OUR ROUTES</span>
            <h3>Popular Cab Services & Destinations</h3>
            <p>Explore popular routes below, or open more services whenever you need them.</p>
          </div>
          <label className="pc-areas__search">
            <i className="fas fa-search" aria-hidden="true" />
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search destinations or services" aria-label="Search services" />
          </label>
        </div>

        <div className="pc-areas__filters" aria-label="Service categories">
          {categories.map((category) => (
            <button key={category} type="button" className={`pc-areas__filter ${active === category ? "is-active" : ""}`} onClick={() => selectCategory(category)} aria-pressed={active === category}>
              {category}
            </button>
          ))}
        </div>

        <div className="pc-areas__results" aria-live="polite">Showing {visibleLinks.length} of {filtered.length} matching services • {serviceLinks.length} total links available</div>
        <div className="pc-areas__grid">
          {visibleLinks.map((item, index) => (
            <Link to={item.to} className="pc-areas__route" key={item.to}>
              <span className={`pc-areas__route-icon pc-areas__route-icon--${index % 5}`} aria-hidden="true">
                <i className={categoryFor(item) === "Vehicle Rentals" ? "fas fa-shuttle-van" : categoryFor(item) === "Darshan & Tours" ? "fas fa-route" : "fas fa-car-side"} />
              </span>
              <span className="pc-areas__route-label">{item.label}</span>
              <i className="fas fa-arrow-right pc-areas__arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p className="pc-areas__empty">No matching service found. Try another keyword or select All Services.</p>}

        {!isSearching && filtered.length > 8 && (
          <div className="pc-areas__expand-actions">
            {!showAll && remaining > 0 && (
               <button type="button" className="pc-areas__expand-btn" onClick={() => setVisibleCount((count) => Math.min(count + 16, filtered.length))}>
                <i className="fas fa-plus-circle" aria-hidden="true" /> Show More Services 
              </button>
              // <button type="button" className="pc-areas__expand-btn" onClick={() => setVisibleCount((count) => Math.min(count + 16, filtered.length))}>
              //   <i className="fas fa-plus-circle" aria-hidden="true" /> Show More Services <span>({remaining} remaining)</span>
              // </button>
            )}
            {/* {!showAll && remaining > 0 && (
              <button type="button" className="pc-areas__expand-link" onClick={() => setShowAll(true)}>
                View All {filtered.length} <i className="fas fa-chevron-down" aria-hidden="true" />
              </button>
            )} */}

             {!showAll && remaining > 0 && (
              <button type="button" className="pc-areas__expand-link" onClick={() => setShowAll(true)}>
                View All <i className="fas fa-chevron-down" aria-hidden="true" />
              </button>
            )}
            {(showAll || visibleCount > 8) && (
              <button type="button" className="pc-areas__collapse-btn" onClick={() => { setVisibleCount(8); setShowAll(false); }}>
                <i className="fas fa-chevron-up" aria-hidden="true" /> Show Less
              </button>
            )}
          </div>
        )}

        {/* CONTACT DETAILS AND OFFICE MAP */}
        <div className="pc-areas__contact" id="pandit-cabs-contact">
          <div className="pc-areas__contact-heading">
            <span className="pc-areas__eyebrow">GET IN TOUCH</span>
            <h3>Contact <span>Pandit Cabs</span></h3>
            <p>Contact our team for cab availability, pickup arrangements and booking information.</p>
          </div>
          <div className="pc-areas__contact-grid">
            <div className="pc-areas__contact-details">
              <div className="pc-areas__detail">
                <span className="pc-areas__detail-icon"><i className="fas fa-map-marker-alt" aria-hidden="true" /></span>
                <div><h4>Office Address</h4><address>FL NO 301, Akshay Nest, Road No. 10,<br />Adarsh Nagar, Tingre Nagar,<br />Pune, Maharashtra 411032, India</address></div>
              </div>
              <div className="pc-areas__detail">
                <span className="pc-areas__detail-icon"><i className="fas fa-phone-alt" aria-hidden="true" /></span>
                <div><h4>Call for Cab Booking</h4><a href="tel:+919890121689">+91 9890121689</a></div>
              </div>
              <div className="pc-areas__detail">
                <span className="pc-areas__detail-icon"><i className="fas fa-envelope" aria-hidden="true" /></span>
                <div><h4>Email Us</h4><a href="mailto:tarun.pandey@panditcabs.com">tarun.pandey@panditcabs.com</a></div>
              </div>
              <div className="pc-areas__contact-actions">
                <a className="pc-areas__call-action" href="tel:+919890121689"><i className="fas fa-phone-alt" aria-hidden="true" /> Call Now</a>
                <a className="pc-areas__whatsapp-action" href="https://wa.me/919890121689?text=Hello%20Pandit%20Cabs%20Team%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20booking%20details." target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp</a>
              </div>
            </div>
            <div className="pc-areas__map">
              <div className="pc-areas__map-label"><i className="fas fa-map-marked-alt" aria-hidden="true" /> Find Our Pune Office</div>
              <iframe
                title="Pandit Cabs office location in Pune"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184448.5491866619!2d73.874624!3d18.50358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c163d659a60742f%3A0x53574e44ae6b777f!2sPandit%20Cabs!5e1!3m2!1sen!2sin!4v1795169245527!5m2!1sen!2sin"
                width="100%"
                height="330"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="pc-areas__cta">
          <div>
            <strong>Need a cab for your next journey?</strong>
            <p>Contact Pandit Cabs to discuss your pickup, destination and vehicle requirements.</p>
          </div>
          <a href="https://wa.me/919890121689?text=Hello%20Pandit%20Cabs%20Team%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20vehicle%20availability%20and%20booking%20details." target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /> Enquire on WhatsApp</a>
        </div>
      </div>
      
    </section>

          <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center row-gap-3 text-center">
              <div className="col-12">
                <p className="copyright-text text-white">
                  All Rights Reserved &copy;  <span className="darkcolorrr">Pandit Cabs</span> <span id="date">{new Date().getFullYear()}</span>{' '}
                  <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
                    <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
                  </a> | Hosted By <a href="https://www.urvahosting.com/" className='d-inline ' target="_blank" rel="noopener noreferrer">
                    <span className="darkcolorrr">&nbsp;Urva Hosting</span>
                  </a>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  
  </>
  );
};

export default ServiceAreas;



// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <footer className="footer footer-four pt-4 m-0 p-0">
//       {/* Footer Top */}
//       <div className="footer-top aos" data-aos="fade-up p-0 m-0 w-100">
//         <div className="container m0 p-0">
//           <div className="row">
//             {/* Footer Contact */}
//             <div className="col-lg-3">
//               <div className="footer-contact footer-widget">
//                 <div className="footer-logo mb-3">
//                   <img src="/images/logo.jpg" className="img-fluid aos" alt="logo" />
//                 </div>

//                 <div className="footer-contact-info">
//                   <p className="text-white">
//                     Pandit Cabs makes every journey smooth and stress-free with dependable taxi services tailored to your travel needs. From Pune airport pickups and daily city rides to business tours, special occasions, family vacations, and outstation travel, we ensure a safe, convenient, and pleasant travel experience every time.
//                   </p>

//                   {/* Phone */}

//                   <p className="d-flex align-items-center mb-2">
//                     <i className="fas fa-phone-alt me-2" style={{ color: "#CF191F" }}></i>
//                     <a href="tel:+919890121689 " style={{ color: "#fff", textDecoration: "none" }}>+91 9890121689 </a>
//                   </p>
//                   {/* Address */}
//                   <p className="d-fle align-items-start text-white">

//                     <h6 className="text-white"><i className="fas fa-map-marker-alt me-2 mt-1 text-white" style={{ color: "#CF191F" }}></i>Pandit Cabs</h6>

//                     FL NO 301, Akshay Nest Road No. 10
// Adarsh Nagar, Tingre Nagar,
// Pune, Maharashtra 411032

//                   </p>




//                 </div>

//  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184448.5491866619!2d73.874624!3d18.50358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c163d659a60742f%3A0x53574e44ae6b777f!2sPandit%20Cabs!5e1!3m2!1sen!2sin!4v1795169245527!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>


               








//                 <li className="d-flex gap-3">
//                   <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-instagram text-white"></i>
//                   </a>

//                   <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-facebook-f text-white"></i>
//                   </a>

//                   <a href="https://x.com/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-twitter text-white"></i>
//                   </a>

//                   <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-pinterest-p text-white"></i>
//                   </a>

//                   <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <i className="fab fa-youtube text-white"></i>
//                   </a>
//                 </li>
//               </div>
//             </div>

//             {/* Footer Menus */}
//             <div className="col-lg-9">
//               <div className="row">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">


// <li><Link to="/pune-airport-taxi-cabs-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Taxi Cabs Service</Link></li>
// <li><Link to="/pune-local-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Local Cab Service</Link></li>
// <li><Link to="/pune-to-alibaug-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Alibaug Cab</Link></li>
// <li><Link to="/pune-to-aurangabad-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aurangabad Cab Service</Link></li>
// <li><Link to="/pune-to-bangalore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bangalore Cab</Link></li>
// <li><Link to="/pune-to-goa-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Goa Cab Service</Link></li>
// <li><Link to="/pune-to-kolhapur-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Kolhapur Cab Service</Link></li>
// <li><Link to="/pune-to-lavasa-car-rental"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lavasa Car Rental</Link></li>
// <li><Link to="/pune-to-lonavala-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Cab</Link></li>
// <li><Link to="/pune-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Cab</Link></li>
// <li><Link to="/pune-to-mumbai-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Cabs</Link></li>
// <li><Link to="/pune-to-mumbai-taxi-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune To Mumbai Taxi Cabs</Link></li>
// <li><Link to="/pune-to-nagpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nagpur Cab</Link></li>
// <li><Link to="/pune-to-sangli-satara-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune To Sangli Satara Cabs</Link></li>
// <li><Link to="/pune-to-shirdi-cab-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Cab Taxi</Link></li>
// <li><Link to="/pune-to-solapur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Solapur Cab</Link></li>
// <li><Link to="/ashtavinayak-darshan-cab-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ashtavinayak Darshan Cab Pune</Link></li>
// <li><Link to="/car-hire-in-koregaon-park-kalyani-nagar"><i className="fa-solid fa-taxi darkcolor"></i> Car Hire In Koregaon Park Kalyani Nagar</Link></li>
// <li><Link to="/car-hire-in-kothrud-pune"><i className="fa-solid fa-taxi darkcolor"></i> Car Hire In Kothrud Pune</Link></li>
// <li><Link to="/car-rental-in-magarpatta-city"><i className="fa-solid fa-taxi darkcolor"></i> Car Rental In Magarpatta City</Link></li>
// <li><Link to="/corporate-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Corporate Cab Service in Pune</Link></li>
// <li><Link to="/best-outstation-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Best Outstation Cab Service in Pune</Link></li>
// <li><Link to="/shirdi-to-pune-cabs-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Shirdi To Pune Cabs Taxi</Link></li>
// <li><Link to="/mahabaleshwar-to-pune-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Mahabaleshwar To Pune Cabs</Link></li>
// <li><Link to="/book-innova-for-outstation-pune"><i className="fa-solid fa-taxi darkcolor"></i> Book Innova For Outstation Pune</Link></li>
// <li><Link to="/book-taxi-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Book Taxi In Pune</Link></li>
// <li><Link to="/bus-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Bus On Rent in Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller On Rent in Pune</Link></li>
// <li><Link to="/ertiga-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga On Rent in Pune</Link></li>
// <li><Link to="/luxury-car-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Luxury Car On Rent In Pune</Link></li>
// <li><Link to="/toyota-etios-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Toyota Etios On Rent In Pune</Link></li>
// <li><Link to="/swift-dzire-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Swift Dzire On Rent in Pune</Link></li>
// <li><Link to="/pune-one-way-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune One Way Cabs</Link></li>
// <li><Link to="/taxi-service-near-me-pune"><i className="fa-solid fa-taxi darkcolor"></i> Taxi Service Near Me Pune</Link></li>
// <li><Link to="/pune-to-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Airport Cab</Link></li>
// <li><Link to="/pune-to-outstations-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstations Cabs</Link></li>
// <li><Link to="/pune-to-matheran-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Matheran Cabs</Link></li>
// <li><Link to="/pune-to-5-jyotirlinga-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to 5 Jyotirlinga Darshan Cab</Link></li>
// <li><Link to="/pune-to-bhimashankar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bhimashankar Cab</Link></li>
// <li><Link to="/pune-to-nashik-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nashik Cab Service</Link></li>
// <li><Link to="/innova-crysta-cab-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta Cab in Pune</Link></li>
// <li><Link to="/pune-to-jyotirlinga-darshan-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotirlinga Darshan Package</Link></li>
// <li><Link to="/pune-to-akkalkot-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Akkalkot Cabs</Link></li>
// <li><Link to="/pune-to-pandharpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Pandharpur Cab</Link></li>
// <li><Link to="/pune-to-grishneshwar-jyotirlinga-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Grishneshwar Jyotirlinga Cab</Link></li>
// <li><Link to="/innova-crysta-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent in Pune</Link></li>
// <li><Link to="/ertiga-hire-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga Hire in Pune</Link></li>
// <li><Link to="/pune-to-shrivardhan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shrivardhan Cab</Link></li>
// <li><Link to="/pune-to-jyotiba-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotiba Cab</Link></li>
// <li><Link to="/sedan-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Sedan Cab Service in Pune</Link></li>
// <li><Link to="/hyundai-xcent-cabs-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Hyundai Xcent Cabs in Pune</Link></li>
// <li><Link to="/aura-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Aura Cab Service in Pune</Link></li>
// <li><Link to="/pune-darshan-sedan-cab-booking"><i className="fa-solid fa-taxi darkcolor"></i> Pune Darshan Sedan Cab Booking</Link></li>
// <li><Link to="/pune-to-ayodhya-tour-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ayodhya Tour Package</Link></li>

//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">
// <li><Link to="/pune-to-mahabaleshwar-sedan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Sedan Cab</Link></li>

// <li><Link to="/pune-airport-cab-sedan-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab Sedan Service</Link></li>
// <li><Link to="/pune-to-shirdi-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Sedan Cabs</Link></li>
// <li><Link to="/pune-hyundai-aura-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Hyundai Aura Cab</Link></li>
// <li><Link to="/pune-to-lonavala-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Sedan Cabs</Link></li>
// <li><Link to="/online-sedan-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Sedan Cab Booking Pune</Link></li>
// <li><Link to="/pune-to-vidarbha-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Vidarbha Cab Service</Link></li>
// <li><Link to="/pune-to-hyderabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Hyderabad Cab</Link></li>
// <li><Link to="/pune-to-ujjain-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ujjain Cab</Link></li>
// <li><Link to="/pune-railway-station-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Railway Station Cab Service</Link></li>
// <li><Link to="/cheap-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cheap Cab Service in Pune</Link></li>
// <li><Link to="/online-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Cab Booking Pune</Link></li>
// <li><Link to="/pune-to-gujarat-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Gujarat Cab Service</Link></li>
// <li><Link to="/pune-to-ahmednagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmednagar Cab</Link></li>
// <li><Link to="/pune-to-latur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Latur Cab</Link></li>
// <li><Link to="/pune-to-mumbai-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Darshan Cab</Link></li>
// <li><Link to="/pune-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab</Link></li>
// <li><Link to="/pune-to-outstation-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstation Cabs</Link></li>
// <li><Link to="/pune-to-rajasthan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Rajasthan Cabs</Link></li>
// <li><Link to="/pune-to-sambhajinagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Sambhajinagar Cab</Link></li>
// <li><Link to="/pune-to-dhule-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Dhule Cabs</Link></li>
// <li><Link to="/pune-to-jalgaon-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jalgaon Cab Service</Link></li>
// <li><Link to="/pune-to-thane-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Thane Cab</Link></li>
// <li><Link to="/pune-to-panvel-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panvel Cabs</Link></li>
// <li><Link to="/pune-to-nanded-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nanded Cab Service</Link></li>
// <li><Link to="/pune-to-surat-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Surat Cabs</Link></li>
// <li><Link to="/pune-to-ahmedabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmedabad Cab</Link></li>
// <li><Link to="/pune-to-igatpuri-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Igatpuri Taxi</Link></li>
// <li><Link to="/pune-to-tamhini-ghat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Tamhini Ghat Cab</Link></li>
// <li><Link to="/pune-to-trimbakeshwar-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Trimbakeshwar Cab Service</Link></li>
// <li><Link to="/pune-to-jejuri-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jejuri Cab Service</Link></li>
// <li><Link to="/pune-to-aundha-nagnath-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aundha Nagnath Cab</Link></li>
// <li><Link to="/pune-to-konkan-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Konkan Darshan Cab</Link></li>
// <li><Link to="/pune-innova-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune Innova Cabs</Link></li>
// <li><Link to="/pune-to-panchgani-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panchgani Cabs</Link></li>
// <li><Link to="/hinjewadi-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Hinjewadi Cab Service</Link></li>
// <li><Link to="/cab-service-in-kharadi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kharadi</Link></li>
// <li><Link to="/cab-service-in-wagholi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Wagholi</Link></li>
// <li><Link to="/cab-service-in-mundhwa"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Mundhwa</Link></li>
// <li><Link to="/cab-service-in-kalyani-nagar"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kalyani Nagar</Link></li>
// <li><Link to="/cab-service-in-kothrud"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kothrud</Link></li>
// <li><Link to="/pune-to-mahabaleshwar-tempo-traveller"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Tempo Traveller</Link></li>
// <li><Link to="/pune-to-outstation-tempo-traveller"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstation Tempo Traveller</Link></li>
// <li><Link to="/mini-bus-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Mini Bus On Rent in Pune</Link></li>
// <li><Link to="/outstation-mini-bus-on-rent-pune"><i className="fa-solid fa-taxi darkcolor"></i> Outstation Mini Bus on Rent Pune</Link></li>
// {/* <li><Link to="/14-seater-tempo-traveller-on-rent"><i className="fa-solid fa-taxi darkcolor"></i> 14 Seater Tempo Traveller on Rent</Link></li> */}
// <li><Link to="/17-seater-bus-on-rent-pune"><i className="fa-solid fa-taxi darkcolor"></i> 17 Seater Bus on Rent Pune</Link></li>
// <li><Link to="/pune-to-shirdi-tempo-traveller"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Tempo Traveller</Link></li>
// <li><Link to="/20-seater-bus-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> 20 Seater Bus on Rent in Pune</Link></li>
// <li><Link to="/luxury-force-urbania-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Luxury Force Urbania On Rent in Pune</Link></li>
// <li><Link to="/force-urbania-luxury-mini-bus-on-rent"><i className="fa-solid fa-taxi darkcolor"></i> Force Urbania Luxury Mini Bus On Rent</Link></li>
// <li><Link to="/14-17-20-25-seater-bus-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> 14 17 20 25 Seater Bus on Rent in Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Pune</Link></li>
               
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">

//                       <li><Link to="/force-urbania-on-rent-for-ashtavinayak-darshan"><i className="fa-solid fa-taxi darkcolor"></i> Force Urbania on Rent for Ashtavinayak Darshan</Link></li>
// <li><Link to="/pune-to-mahabaleshwar-urbania-on-rent"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Urbania on Rent</Link></li>
// <li><Link to="/bus-on-rent-in-kharadi-pune"><i className="fa-solid fa-taxi darkcolor"></i> Bus on Rent in Kharadi Pune</Link></li>
// <li><Link to="/bus-on-rent-in-hinjewadi-pune"><i className="fa-solid fa-taxi darkcolor"></i> Bus on Rent in Hinjewadi Pune</Link></li>

// <li><Link to="/tempo-traveller-on-rent-in-kharadi-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Kharadi Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-wakad-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Wakad Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-baner-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Baner Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-hadapsar-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Hadapsar Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-pimpri-chinchwad"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Pimpri Chinchwad</Link></li>
// <li><Link to="/tempo-traveller-hire-in-viman-nagar-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Viman Nagar Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-kothrud-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Kothrud Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-wagholi-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Wagholi Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-aundh-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Aundh Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-magarpatta-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Magarpatta Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-bavdhan-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Bavdhan Pune</Link></li>
// <li><Link to="/tempo-traveller-hire-in-pimple-saudagar-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller Hire in Pimple Saudagar Pune</Link></li>
// <li><Link to="/tempo-traveller-on-rent-in-chinchwad-pune"><i className="fa-solid fa-taxi darkcolor"></i> Tempo Traveller on Rent in Chinchwad Pune</Link></li>
// <li><Link to="/wedding-mini-bus-rental-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Wedding Mini Bus Rental in Pune</Link></li>
// <li><Link to="/pune-to-shirdi-mini-bus"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Mini Bus</Link></li>
// <li><Link to="/pune-to-mahabaleshwar-mini-bus"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Mini Bus</Link></li>
// <li><Link to="/mini-bus-on-rent-in-hinjewadi"><i className="fa-solid fa-taxi darkcolor"></i> Mini Bus on Rent in Hinjewadi</Link></li>
// <li><Link to="/mini-bus-on-rent-in-viman-nagar"><i className="fa-solid fa-taxi darkcolor"></i> Mini Bus on Rent in Viman Nagar</Link></li>
// <li><Link to="/mini-bus-on-rent-in-kothrud"><i className="fa-solid fa-taxi darkcolor"></i> Mini Bus on Rent in Kothrud</Link></li>
// <li><Link to="/mini-bus-in-chinchwad-pune"><i className="fa-solid fa-taxi darkcolor"></i> Mini Bus in Chinchwad Pune</Link></li>
// <li><Link to="/mumbai-airport-to-pune-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai Airport to Pune Cab</Link></li>
// <li><Link to="/mumbai-to-ratnagiri-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Ratnagiri Cab</Link></li>
// <li><Link to="/mumbai-to-bangalore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Bangalore Cab</Link></li>
// <li><Link to="/mumbai-to-goa-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Goa Cab</Link></li>
// <li><Link to="/mumbai-to-lonavala-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Lonavala Cab</Link></li>
// <li><Link to="/mumbai-to-nashik-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Nashik Cab</Link></li>
// <li><Link to="/mumbai-to-pune-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Pune Cab</Link></li>
// <li><Link to="/mumbai-to-shirdi-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Shirdi Cab</Link></li>
// <li><Link to="/mumbai-to-surat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Surat Cab</Link></li>
// <li><Link to="/shirdi-to-mumbai-cab"><i className="fa-solid fa-taxi darkcolor"></i> Shirdi to Mumbai Cab</Link></li>
// <li><Link to="/mahabaleshwar-to-mumbai-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mahabaleshwar to Mumbai Cab</Link></li>
// <li><Link to="/outstation-cab-service-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Outstation Cab Service in Mumbai</Link></li>
// <li><Link to="/navi-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Navi Mumbai Airport Cab</Link></li>
// <li><Link to="/cab-service-in-navi-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Navi Mumbai</Link></li>
// <li><Link to="/innova-crysta-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta on Rent in Mumbai</Link></li>
// <li><Link to="/ertiga-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga on Rent in Mumbai</Link></li>
// <li><Link to="/mumbai-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Mahabaleshwar Cab</Link></li>
// <li><Link to="/cab-service-in-thane"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Thane</Link></li>
// <li><Link to="/urbania-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Pune</Link></li>
// <li><Link to="/urbania-on-rent-in-pimpri-chinchwad"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Pimpri Chinchwad</Link></li>
// <li><Link to="/urbania-hire-for-corporate-events-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Urbania Hire for Corporate Events in Pune</Link></li>
// <li><Link to="/17-seater-urbania-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> 17 Seater Urbania on Rent in Pune</Link></li>
// <li><Link to="/14-seater-urbania-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> 14 Seater Urbania on Rent in Pune</Link></li>
// <li><Link to="/urbania-on-rent-in-kharadi"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Kharadi</Link></li>
// <li><Link to="/urbania-on-rent-in-hadapsar"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Hadapsar</Link></li>
// <li><Link to="/urbania-on-rent-in-kothrud"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Kothrud</Link></li>
// <li><Link to="/urbania-on-rent-in-bibwewadi"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Bibwewadi</Link></li>
// <li><Link to="/urbania-on-rent-in-koregaon-park"><i className="fa-solid fa-taxi darkcolor"></i> Urbania on Rent in Koregaon Park</Link></li>
// <li><Link to="/explore-india-pan-india-cab-booking-services"><i className="fa-solid fa-taxi darkcolor"></i> Explore India Pan India Cab Booking Services</Link></li>                    </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="copyright">
//             <div className="row align-items-center row-gap-3 text-center">
//               <div className="col-12">
//                 <p className="copyright-text text-white">
//                   All Rights Reserved &copy;  <span className="darkcolorrr">Pandit Cabs</span> <span id="date">{new Date().getFullYear()}</span>{' '}
//                   <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
//                     <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
//                   </a> | Hosted By <a href="https://www.urvahosting.com/" className='d-inline ' target="_blank" rel="noopener noreferrer">
//                     <span className="darkcolorrr">&nbsp;Urva Hosting</span>
//                   </a>
//                 </p>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








