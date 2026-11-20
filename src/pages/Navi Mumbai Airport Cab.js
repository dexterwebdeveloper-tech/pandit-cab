import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Navimumbaiarportcab() {










const cardData = {
  keyword: "Navi Mumbai Airport Cab",

  headingDescription:
    "Airport journeys become more convenient when your pickup location, flight schedule, and vehicle requirements are planned in advance. Pandit Cab offers Navi Mumbai Airport Cab arrangements for travellers seeking private airport pickups, departures, family transfers, and corporate transportation. Whether you are travelling from Vashi, Nerul, Belapur, Kharghar, Panvel, Ulwe, or nearby locations, enquire about suitable sedan, Ertiga, Innova Crysta, SUV, and luxury cab options. Our airport taxi enquiries cover chauffeur-driven transportation, luggage requirements, early-morning departures, late-night arrivals, and clear fare quotations based on your journey details and vehicle availability.",

  topPlaces: [
    {
      title: "Vashi",
      description:
        "Arrange a Navi Mumbai Airport to Vashi cab for residential transfers, corporate meetings, hotel pickups, and convenient airport transportation. Discuss suitable sedan and SUV arrangements according to passenger count, luggage requirements, flight timing, and exact pickup or drop address."
    },
    {
      title: "Kharghar",
      description:
        "Book a Navi Mumbai Airport to Kharghar taxi for family journeys, residential transfers, hotel transportation, and business travel. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, airport pickup timing, and destination location."
    },
    {
      title: "Nerul",
      description:
        "Arrange a Navi Mumbai Airport to Nerul cab for airport arrivals, departures, family visits, and corporate transportation. Discuss suitable vehicle options according to passenger count, luggage requirements, flight schedule, and exact residential or business destination."
    },
    {
      title: "CBD Belapur",
      description:
        "Book a Navi Mumbai Airport to CBD Belapur taxi for government office visits, corporate appointments, hotel transfers, and residential transportation. Enquire about suitable sedan and SUV arrangements according to passenger count, luggage capacity, flight timing, and destination address."
    },
    {
      title: "Panvel",
      description:
        "Arrange a Navi Mumbai Airport to Panvel cab for railway station connections, residential visits, family transportation, and private airport transfers. Discuss suitable vehicle arrangements according to passenger count, luggage requirements, pickup location, and preferred arrival timing."
    },
    {
      title: "Ulwe",
      description:
        "Book a Navi Mumbai Airport to Ulwe cab for nearby residential transfers, hotel transportation, business appointments, and airport pickups. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, exact destination address, and flight schedule."
    },
    {
      title: "Seawoods",
      description:
        "Arrange a Navi Mumbai Airport to Seawoods taxi for residential visits, shopping destinations, corporate appointments, and family airport transfers. Discuss suitable transportation according to passenger count, luggage requirements, pickup timing, and exact destination location."
    },
    {
      title: "Airoli",
      description:
        "Book a Navi Mumbai Airport to Airoli cab for IT park visits, corporate travel, residential transfers, and private airport transportation. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, office or residential address, and flight schedule."
    },
    {
      title: "Ghansoli",
      description:
        "Arrange a Navi Mumbai Airport to Ghansoli taxi for corporate meetings, office transfers, family visits, and residential transportation. Discuss suitable sedan and SUV arrangements according to passenger count, luggage requirements, airport pickup timing, and destination address."
    },
    {
      title: "Kamothe",
      description:
        "Book a Navi Mumbai Airport to Kamothe cab for residential transfers, family journeys, hospital visits, and private airport transportation. Enquire about suitable vehicle options according to passenger count, luggage capacity, flight schedule, and exact pickup or drop location."
    }
  ],

  services: [
    {
      name: "Navi Mumbai Airport Cab",
      description:
        "Navi Mumbai Airport Cab supports private chauffeur-driven transportation for airport arrivals, departures, family journeys, and corporate travel. Pandit Cab assists travellers with suitable vehicle enquiries according to passenger count, flight schedule, pickup address, luggage requirements, and destination."
    },
    {
      name: "Navi Mumbai Airport Taxi",
      description:
        "Navi Mumbai Airport Taxi supports private transportation between the airport and residential, commercial, or hotel destinations. Discuss suitable sedan and SUV arrangements according to passenger count, luggage capacity, flight timing, pickup location, and preferred drop address."
    },
    {
      name: "Navi Mumbai Airport Cab Service",
      description:
        "Navi Mumbai Airport Cab Service supports chauffeur-driven airport transportation for business travellers, families, individuals, and visiting passengers. Enquire about suitable vehicle arrangements according to passenger count, luggage requirements, airport pickup or drop timing, and destination."
    },
    {
      name: "Navi Mumbai Airport Taxi Service",
      description:
        "Navi Mumbai Airport Taxi Service supports private airport transfers for residential visits, corporate appointments, hotel transportation, and personal journeys. Discuss suitable vehicle categories according to passenger count, flight details, luggage capacity, pickup address, and travel schedule."
    },
    {
      name: "Cab Service at Navi Mumbai Airport",
      description:
        "Cab Service at Navi Mumbai Airport supports enquiries for prearranged private pickups and airport drop transportation. Share your flight details, passenger count, luggage requirements, pickup or drop address, and preferred vehicle category to discuss suitable arrangements and permitted meeting points."
    },
    {
      name: "Taxi Service at Navi Mumbai Airport",
      description:
        "Taxi Service at Navi Mumbai Airport supports private chauffeur-driven transportation for airport passengers travelling to Navi Mumbai, Mumbai, and nearby destinations. Discuss suitable vehicle arrangements according to passenger count, luggage capacity, flight schedule, and designated pickup location."
    },
    {
      name: "Airport Cab Navi Mumbai",
      description:
        "Airport Cab Navi Mumbai supports private airport transportation for individuals, families, corporate travellers, and visitors. Enquire about suitable sedan, MPV, and SUV arrangements according to passenger count, luggage requirements, airport timing, and destination address."
    },
    {
      name: "Navi Mumbai Airport Cab Booking",
      description:
        "Navi Mumbai Airport Cab Booking supports advance enquiries for private airport pickups, departures, and chauffeur-driven transportation. Share your travel date, flight details, passenger count, luggage requirements, pickup location, and destination to discuss suitable vehicle availability."
    },
    {
      name: "Navi Mumbai Airport Taxi Booking Online",
      description:
        "Navi Mumbai Airport Taxi Booking Online supports advance travel enquiries for private airport transportation. Provide your flight schedule, pickup or drop address, passenger count, luggage requirements, and preferred vehicle category to discuss suitable arrangements and booking conditions."
    },
    {
      name: "Navi Mumbai Airport Cab Fare",
      description:
        "Navi Mumbai Airport Cab Fare depends on vehicle category, travel distance, pickup location, airport timing, and journey requirements. Request a detailed quotation covering applicable tolls, parking charges, airport access fees, waiting periods, and other relevant expenses."
    },
    {
      name: "Navi Mumbai Airport Taxi Charges",
      description:
        "Navi Mumbai Airport Taxi Charges vary according to vehicle selection, pickup and drop locations, journey distance, and travel timing. Discuss applicable parking charges, tolls, airport access fees, waiting periods, and additional rental conditions before confirming transportation."
    },
    {
      name: "Navi Mumbai Airport Cab Price",
      description:
        "Navi Mumbai Airport Cab Price depends on the requested vehicle category, passenger count, luggage requirements, route distance, and travel schedule. Enquire about suitable fare quotations with details of applicable tolls, parking fees, waiting charges, and airport-related expenses."
    },
    {
      name: "Best Navi Mumbai Airport Cab Service",
      description:
        "Best Navi Mumbai Airport Cab Service supports travellers comparing private airport transportation for comfort, vehicle suitability, and convenient pickup arrangements. Pandit Cab assists with discussing available vehicle categories, seating capacity, luggage arrangements, flight coordination, and rental quotations."
    },
    {
      name: "Cheap Navi Mumbai Airport Cab",
      description:
        "Cheap Navi Mumbai Airport Cab helps travellers enquire about economical private transportation options according to passenger count, luggage capacity, and journey requirements. Compare suitable sedan and other vehicle quotations while reviewing applicable tolls, parking charges, waiting fees, and airport expenses."
    },
    {
      name: "24x7 Navi Mumbai Airport Cab Service",
      description:
        "24x7 Navi Mumbai Airport Cab Service supports enquiries for early-morning departures, late-night arrivals, and airport transportation at different travel hours. Discuss the required pickup timing, flight schedule, passenger count, luggage requirements, vehicle availability, and applicable night travel conditions."
    },
    {
      name: "Navi Mumbai Airport Innova Cab",
      description:
        "Navi Mumbai Airport Innova Cab supports enquiries for spacious SUV transportation suitable for families, corporate travellers, and passengers carrying additional luggage. Discuss Innova or Innova Crysta availability, seating configuration, luggage capacity, airport pickup location, and rental conditions."
    },
    {
      name: "Navi Mumbai Airport Ertiga Cab",
      description:
        "Navi Mumbai Airport Ertiga Cab supports enquiries for family-friendly MPV transportation during airport arrivals, departures, and private transfers. Discuss Ertiga availability, seating configuration, passenger count, luggage capacity, flight timing, and rental quotations."
    },
    {
      name: "Navi Mumbai Airport Sedan Taxi",
      description:
        "Navi Mumbai Airport Sedan Taxi supports chauffeur-driven transportation for individuals, couples, small families, and business passengers. Enquire about suitable sedan availability according to passenger count, luggage requirements, flight details, pickup location, and destination address."
    },
    {
      name: "Navi Mumbai Airport SUV Cab",
      description:
        "Navi Mumbai Airport SUV Cab supports enquiries for spacious vehicles suitable for family airport transfers, corporate travel, and small group transportation. Discuss available SUV categories, seating capacity, luggage arrangements, flight schedule, pickup location, and rental quotations."
    },
    {
      name: "Navi Mumbai Airport AC Cab",
      description:
        "Navi Mumbai Airport AC Cab supports enquiries for air-conditioned chauffeur-driven transportation for airport passengers and private transfers. Discuss suitable vehicle categories according to passenger count, luggage capacity, pickup timing, destination address, and rental conditions."
    },
    {
      name: "Navi Mumbai Airport Luxury Cab",
      description:
        "Navi Mumbai Airport Luxury Cab supports premium chauffeur-driven transportation enquiries for business executives, special guests, family occasions, and private airport journeys. Enquire about available luxury vehicle categories, seating comfort, luggage capacity, flight coordination, and rental quotations."
    }
  ],

  tableData: [
    ["Navi Mumbai Airport Cab"],
    ["Navi Mumbai Airport Taxi"],
    ["Navi Mumbai Airport Cab Service"],
    ["Navi Mumbai Airport Taxi Service"],
    ["Cab Service at Navi Mumbai Airport"],
    ["Taxi Service at Navi Mumbai Airport"],
    ["Airport Cab Navi Mumbai"],
    ["Navi Mumbai Airport Cab Booking"],
    ["Navi Mumbai Airport Taxi Booking Online"],
    ["Navi Mumbai Airport Cab Fare"],
    ["Navi Mumbai Airport Taxi Charges"],
    ["Navi Mumbai Airport Cab Price"],
    ["Best Navi Mumbai Airport Cab Service"],
    ["Cheap Navi Mumbai Airport Cab"],
    ["24x7 Navi Mumbai Airport Cab Service"],
    ["Navi Mumbai Airport Innova Cab"],
    ["Navi Mumbai Airport Ertiga Cab"],
    ["Navi Mumbai Airport Sedan Taxi"],
    ["Navi Mumbai Airport SUV Cab"],
    ["Navi Mumbai Airport AC Cab"],
    ["Navi Mumbai Airport Luxury Cab"]
  ],

  whychoose: [
    {
      WhyChooseheading: "Convenient Navi Mumbai Airport Cab Arrangements",
      WhyChoosedescription:
        "Pandit Cab accepts enquiries for chauffeur-driven private transportation involving Navi Mumbai International Airport and nearby destinations. Customers can discuss suitable arrangements according to passenger count, luggage capacity, flight schedule, pickup address, destination, and preferred travel timing."
    },
    {
      WhyChooseheading: "Sedan Ertiga Innova Crysta And SUV Vehicle Options",
      WhyChoosedescription:
        "Travellers can enquire about sedan, Ertiga, Innova, Innova Crysta, SUV, and premium car transportation according to availability. Discuss actual seating capacity, luggage space, vehicle comfort, passenger requirements, and airport transfer quotations before confirming a particular vehicle."
    },
    {
      WhyChooseheading: "Vashi Nerul Belapur Kharghar And Panvel Transfers",
      WhyChoosedescription:
        "Navi Mumbai Airport cab enquiries can include transfers to Vashi, Nerul, CBD Belapur, Kharghar, Panvel, Ulwe, Seawoods, Airoli, Ghansoli, and Kamothe. Customers can share their exact hotel, office, residential address, or other destination to discuss suitable airport transportation."
    },
    {
      WhyChooseheading: "Airport Pickup Drop And Flight Schedule Coordination",
      WhyChoosedescription:
        "Private airport cab arrangements can support scheduled departures, airport arrivals, hotel transfers, and residential transportation. Customers can share their flight details, passenger count, luggage requirements, airport pickup or drop location, and preferred arrival timing to discuss suitable arrangements."
    },
    {
      WhyChooseheading: "Early Morning And Late Night Airport Travel Enquiries",
      WhyChoosedescription:
        "Navi Mumbai Airport cab enquiries can include early-morning departures and late-night arrival transportation according to vehicle availability. Customers can discuss suitable pickup timing, flight schedules, passenger count, luggage requirements, night travel conditions, and rental quotations."
    },
    {
      WhyChooseheading: "Family Airport Transfers And Corporate Transportation",
      WhyChoosedescription:
        "Navi Mumbai Airport private taxi arrangements support family journeys, business travel, executive transportation, and personal airport transfers. Customers can discuss suitable vehicle capacity according to passenger count, luggage requirements, travel preferences, pickup location, and destination."
    },
    {
      WhyChooseheading: "Clear Navi Mumbai Airport Cab Fare And Quotations",
      WhyChoosedescription:
        "Navi Mumbai Airport taxi quotations depend on vehicle category, travel distance, pickup location, airport timing, and journey requirements. Customers can request details of applicable tolls, parking charges, airport access fees, waiting periods, and other relevant rental costs."
    },
    {
      WhyChooseheading: "Simple Navi Mumbai Airport Cab Booking Support",
      WhyChoosedescription:
        "Planning a Navi Mumbai Airport cab becomes easier when travel details are shared in advance. Provide your flight schedule, pickup or drop address, travel date, passenger count, luggage requirements, and preferred vehicle category. Pandit Cab assists with discussing suitable vehicle availability, permitted pickup coordination, rental quotations, and booking conditions."
    }
  ]
};













const faqData = [
  {
    question: "How can I book a Navi Mumbai Airport Cab with Pandit Cabs?",
    answer: "You can enquire about Navi Mumbai Airport Cab booking with Pandit Cabs by sharing your pickup address, travel date, flight details, passenger count, and preferred vehicle category. Whether you are travelling for business, a family holiday, an international flight, or an airport pickup, you can discuss suitable sedan and SUV options, estimated fares, vehicle availability, and scheduled airport transfer arrangements."
  },
  {
    question: "What is the fare for Navi Mumbai Airport Cab Service?",
    answer: "Navi Mumbai Airport Cab fares generally depend on your pickup or drop location, selected vehicle category, total travel distance, booking date, and transfer requirements. Additional expenses such as tolls, airport parking, waiting charges, and applicable taxes may apply. Share your complete airport transfer details with Pandit Cabs to request an estimated fare quotation and clarify the included charges before confirming your booking."
  },
  {
    question: "Where is Navi Mumbai International Airport located?",
    answer: "Navi Mumbai International Airport is located in the Ulwe area of Navi Mumbai, Maharashtra, near Panvel. The airport serves travellers from Navi Mumbai, Mumbai, Thane, Panvel, and surrounding regions. Road distance and travel time depend on your starting location and selected route. Share your pickup address and flight schedule with Pandit Cabs to discuss suitable airport cab arrangements."
  },
  {
    question: "Which cars are available for Navi Mumbai Airport Cab booking?",
    answer: "You can enquire about sedan and SUV options for Navi Mumbai Airport Cab transfers, subject to vehicle availability. Common preferences include Swift Dzire, Hyundai Aura, Maruti Suzuki Ertiga, Kia Carens, Toyota Innova, and Innova Crysta. Sedans may suit individual travellers and small families, while SUVs can be considered for larger groups. Share your passenger count, suitcase quantity, and vehicle preferences with Pandit Cabs."
  },
  {
    question: "Can I book a Navi Mumbai Airport Cab for airport pickup and drop?",
    answer: "You can enquire about Navi Mumbai Airport Cab arrangements for both airport pickup and drop-off services. Airport transfers may be planned for business travellers, families, tourists, and passengers with early-morning or late-night flights. Share your flight number, arrival or departure time, pickup address, destination, passenger count, and luggage requirements with Pandit Cabs to discuss suitable scheduling and estimated transfer fares."
  },
  {
    question: "Can I book a Navi Mumbai Airport Cab for early-morning or late-night flights?",
    answer: "You can enquire about Navi Mumbai Airport Cab arrangements for early-morning departures, late-night arrivals, and scheduled flight transfers, subject to driver and vehicle availability. Advance booking is advisable for travel during unusual hours. Share your flight timing, airport terminal details, pickup location, passenger count, and luggage requirements with Pandit Cabs to discuss suitable transfer scheduling and possible additional charges."
  },
  {
    question: "Can I book a Navi Mumbai Airport Cab from Pune, Lonavala, or Mumbai?",
    answer: "You can enquire about Navi Mumbai Airport Cab transfers from Pune, Pimpri-Chinchwad, Lonavala, Mumbai, Thane, and nearby cities. Outstation airport transfer arrangements depend on your pickup location, selected vehicle category, travel date, and flight schedule. Share your complete boarding address, departure time, passenger count, and luggage details with Pandit Cabs to discuss route feasibility and estimated airport transfer fares."
  },
  {
    question: "Can I book an Innova Crysta or Ertiga for Navi Mumbai Airport transfers?",
    answer: "You can enquire about Toyota Innova Crysta, Maruti Suzuki Ertiga, Kia Carens, and other SUV options for Navi Mumbai Airport Cab travel, subject to availability. These vehicle categories may suit families, corporate travellers, and passengers carrying multiple suitcases. Share your passenger count, luggage quantity, flight schedule, pickup location, and preferred vehicle with Pandit Cabs to discuss seating suitability and estimated rental fares."
  },
  {
    question: "Is Navi Mumbai Airport Cab Service available from Vashi, Nerul, Belapur, Kharghar, and Panvel?",
    answer: "You can enquire about Navi Mumbai Airport Cab pickups and drops from Vashi, Sanpada, Nerul, Seawoods, CBD Belapur, Kharghar, Kamothe, Kalamboli, Panvel, Ulwe, Ghansoli, Airoli, and nearby locations. Transfer availability depends on your exact address, travel date, and selected vehicle category. Share your pickup or drop location with Pandit Cabs to discuss suitable routes, scheduling, and estimated fares."
  },
  {
    question: "Why should I choose Pandit Cabs for Navi Mumbai Airport Cab booking?",
    answer: "Pandit Cabs helps travellers explore Navi Mumbai Airport Cab arrangements for domestic and international flights, business travel, family holidays, and outstation airport transfers. Customers can discuss sedan and SUV categories, airport pickup and drop schedules, luggage requirements, flight timings, pickup locations, and estimated fares before confirming their journey. Advance enquiries are recommended during holidays, weekends, and busy travel periods."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Aditya Sawant",
    feedback: "I contacted Pandit Cabs while searching for a Navi Mumbai Airport Cab from Kharghar for an upcoming business flight. The information about sedan and SUV options, pickup scheduling, luggage requirements, and estimated transfer fares was clear and helpful. It allowed me to organise my airport journey and compare suitable transportation options before confirming the booking.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Rutuja Patil",
    feedback: "We were looking for a Navi Mumbai Airport Cab for our family trip from Pune. Pandit Cabs explained the available vehicle categories, outstation airport transfer arrangements, flight timing considerations, and estimated travel charges. The communication helped us plan our departure schedule, understand luggage capacity requirements, and prepare for a comfortable airport journey before making our booking decision.",
    rating: 5
  }
];






















































  const Images = [
    {
      place: "/images/keyword/1.jpg",
      text: "Pune Airport Taxi Cabs Service",
      link: "pune-airport-taxi-cabs-service",
    },
    {
      place: "/images/keyword/2.jpg",
      text: "Pune Local Cab Service",
      link: "pune-local-cab-service",
    },
    {
      place: "/images/keyword/3.jpg",
      text: "Pune to Alibaug Cab",
      link: "pune-to-alibaug-cab",
    },
    {
      place: "/images/keyword/4.jpg",
      text: "Pune to Aurangabad Cab Service",
      link: "pune-to-aurangabad-cab-service",
    },
    {
      place: "/images/keyword/5.jpg",
      text: "Pune to Bangalore Cab",
      link: "pune-to-bangalore-cab",
    },
    {
      place: "/images/keyword/6.jpg",
      text: "Pune to Goa Cab Service",
      link: "pune-to-goa-cab-service",
    },
    {
      place: "/images/keyword/7.jpg",
      text: "Pune to Kolhapur Cab Service",
      link: "pune-to-kolhapur-cab-service",
    },
    {
      place: "/images/keyword/8.jpg",
      text: "Pune to Lavasa Car Rental",
      link: "pune-to-lavasa-car-rental",
    },
    {
      place: "/images/keyword/9.jpg",
      text: "Pune to Lonavala Cab",
      link: "pune-to-lonavala-cab",
    },
    {
      place: "/images/keyword/10.jpg",
      text: "Pune to Mahabaleshwar Cab",
      link: "pune-to-mahabaleshwar-cab",
    },
    {
      place: "/images/keyword/11.jpg",
      text: "Pune to Mumbai Cabs",
      link: "pune-to-mumbai-cabs",
    },
    {
      place: "/images/keyword/12.jpg",
      text: "Pune To Mumbai Taxi Cabs",
      link: "pune-to-mumbai-taxi-cabs",
    },
    {
      place: "/images/keyword/13.jpg",
      text: "Pune to Nagpur Cab",
      link: "pune-to-nagpur-cab",
    },
    {
      place: "/images/keyword/14.jpg",
      text: "Pune To Sangli Satara Cabs",
      link: "pune-to-sangli-satara-cabs",
    },
    {
      place: "/images/keyword/15.jpg",
      text: "Pune to Shirdi Cab Taxi",
      link: "pune-to-shirdi-cab-taxi",
    },
    {
      place: "/images/keyword/16.jpg",
      text: "Pune to Solapur Cab",
      link: "pune-to-solapur-cab",
    },
    {
      place: "/images/keyword/17.jpg",
      text: "Ashtavinayak Darshan Cab Pune",
      link: "ashtavinayak-darshan-cab-pune",
    },
    {
      place: "/images/keyword/18.jpg",
      text: "Car Hire In Koregaon Park Kalyani Nagar",
      link: "car-hire-in-koregaon-park-kalyani-nagar",
    },
    {
      place: "/images/keyword/19.jpg",
      text: "Car Hire In Kothrud Pune",
      link: "car-hire-in-kothrud-pune",
    },
    {
      place: "/images/keyword/20.jpg",
      text: "Car Rental In Magarpatta City",
      link: "car-rental-in-magarpatta-city",
    },
    {
      place: "/images/keyword/21.jpg",
      text: "Corporate Cab Service in Pune",
      link: "corporate-cab-service-in-pune",
    },
    {
      place: "/images/keyword/22.jpg",
      text: "Best Outstation Cab Service in Pune",
      link: "best-outstation-cab-service-in-pune",
    },
    {
      place: "/images/keyword/23.jpg",
      text: "Shirdi To Pune Cabs Taxi",
      link: "shirdi-to-pune-cabs-taxi",
    },
    {
      place: "/images/keyword/24.jpg",
      text: "Mahabaleshwar To Pune Cabs",
      link: "mahabaleshwar-to-pune-cabs",
    },
    {
      place: "/images/keyword/25.jpg",
      text: "Book Innova For Outstation Pune",
      link: "book-innova-for-outstation-pune",
    },
  ];














  return (
    <div>



      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/images/backgrounds/page-header-bg.jpg)"
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3> {cardData.keyword}</h3>
          </div>
        </div>
      </section>











      <section>
        <div className="container-fluid p-0" >
          <div className="row container-fluid px-md-2">
            <div className="col-12 col-md-7 bg-foootr">
              <img src='/images/keyword/146.jpg' alt='img' className='img-fluid' />
              <h3 className="py-1"
                style={{
                  color: '#183765', // Red color for the title 
                  textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                  fontWeight: 'bold'
                }}


              >Pandit Cabs: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

              <div className="topPlaces">

                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                {cardData.topPlaces.map((place, index) => (
                  <article key={index} className="placeCard borderr" tabIndex="0">
                    <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                    <div className="placeBody">
                      <h4 className="placeTitle">{place.title}</h4>
                      <p className="placeDesc">{place.description}</p>

                    </div>

                    <span className="placeArrow" aria-hidden>›</span>
                  </article>
                ))}
              </div>





              <div className="services-section">
                {cardData.services.map((service, index) => (
                  <div className="service-card" key={index}>
                    <div className="service-content">
                      <h4>{service.name}</h4>
                      <span className="line"></span>
                      <p>{service.description}</p>
                    </div>

                    <div className="service-icon">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                ))}
              </div>

              <div className="keyword-grid">
                {cardData.tableData.flat().map((keyword, index) => (
                  <div key={index} className="keyword-item">
                    <span className="keyword-bullet">-</span>
                    {keyword}
                  </div>
                ))}
              </div>



              <div id="why-choose-section" className="why-choose-section">

                <h2 className="section-title text-dark">
                  Why Choose <span>Pandit Cabs</span>
                </h2>

                <div className="bento-grid">
                  {cardData.whychoose.map((item, index) => (
                    <div className="bento-card" key={index}>

                      <div className="bento-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h4>{item.WhyChooseheading}</h4>

                      <p>{item.WhyChoosedescription}</p>

                    </div>
                  ))}
                </div>

              </div>



              <div className="row twm-faq-section-1 m-b30">


                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                  <div className="twm-faq-info-wrap">

                    <div className="section-head left">
                      <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Pandit Cabs </h2>
                    </div>


                    <div className="twm-faq-info">
                      <div className="accordion twm-acdn" id="sf-faq-accordion">

                        <FaqSection
                          title=""
                          subtitle=""
                          items={faqData}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TestimonialSectionKeyword
                testimonials={testimonials}
              />


              <ContactShowcase keyword={cardData.keyword} />
            </div>

            <div className='col-12 col-md-4' >
              <div className="routeList">
                {Images.map((e, i) => {
                  const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                  const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                  return (
                    <a
                      key={e.link || i}
                      href={href}
                      className="routeItem"
                      aria-label={e.text}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <div className="routeThumb">
                        <img src={e.place} alt="" loading="lazy" />
                      </div>

                      <div className="routeMeta">
                        <h6 className="routeTitle">{e.text}</h6>
                        <span className="routeUnderline" />
                      </div>

                      <span className="routeArrow" aria-hidden>›</span>
                    </a>
                  );
                })}
              </div>




              <div>
                <FleetHighway />
              </div>
              <div className="pc-contact">
                <h4 className="pc-title">Contact Information</h4>

                <div className="pc-grid">
                  {/* Phones */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fas fa-phone-alt"></i>
                      <span>Phone Numbers</span>
                    </header>

                    <div className="pc-list">
                      <a href="tel:+919890121689" className="pc-call">+91 9890121689 </a>
                    </div>
                    <div className="pc-list">
                      <a href="tel:+919175950844" className="pc-call">+91 9175950844 </a>
                    </div>
                    <div className="pc-list">
                      <a href="tel:+919766958304" className="pc-call">+91 9766958304 </a>
                    </div>

                    <div className="pc-cta">
                      <a
                        href="https://wa.me/919890121689 "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pc-whats"
                      >
                        <i className="bi bi-whatsapp"></i> WhatsApp
                      </a>
                      <a href="tel:+919890121689 " className="pc-primary">
                        Call Now
                      </a>
                    </div>
                  </section>

                  {/* Email */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fa-solid fa-envelope"></i>
                      <span>Email</span>
                    </header>

                    <a href="mailto:booking@panditcabs.com" className="pc-email">
                      booking@panditcabs.com
                    </a>
                  </section>

                  {/* Address */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Address</span>
                    </header>

                    <address className="pc-address">
                      <strong>Pandit Cabs</strong><br />
                      Office No.301, Akshay Nest Road No.10
                      Adarsh Nagar, Tingre Nagar,
                      Pune, Maharashtra, 41103





                    </address>
                  </section>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Navimumbaiarportcab;