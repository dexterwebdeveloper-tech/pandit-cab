import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinthane() {













const cardData = {
  keyword: "Cab Service in Thane",

  headingDescription:
    "From busy commercial neighbourhoods to peaceful lakeside destinations, travelling around Thane becomes more convenient with a private chauffeur-driven cab. Pandit Cab offers Cab Service in Thane for local journeys, airport transfers, corporate meetings, wedding transportation, and outstation travel. Arrange suitable sedan, Ertiga, Kia Carens, Innova Crysta, and SUV options for journeys across Ghodbunder Road, Majiwada, Hiranandani Estate, Wagle Estate, and nearby areas. Whether you need a Thane to Pune cab, Mumbai Airport transfer, Nashik taxi, or family holiday transportation, discuss vehicle availability, pickup arrangements, luggage requirements, and clear rental quotations.",

  topPlaces: [
    {
      title: "Ghodbunder Road",
      description:
        "Arrange a cab service along Ghodbunder Road for residential pickups, corporate meetings, family visits, and airport transfers. Pandit Cab helps travellers discuss suitable vehicle arrangements for different residential complexes, commercial locations, and connecting roads."
    },
    {
      title: "Hiranandani Estate",
      description:
        "Book a private cab in Hiranandani Estate for family outings, business appointments, airport transportation, and residential transfers. Discuss suitable sedan and SUV options according to passenger count, luggage requirements, pickup address, and travel schedule."
    },
    {
      title: "Majiwada",
      description:
        "Arrange a taxi service in Majiwada for hotel transfers, office meetings, family journeys, and outstation departures. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, pickup location, and preferred destination."
    },
    {
      title: "Wagle Estate",
      description:
        "Book a cab service in Wagle Estate for corporate meetings, industrial visits, employee transportation, and private city travel. Discuss suitable vehicle categories according to passenger count, office pickup requirements, luggage capacity, and travel timing."
    },
    {
      title: "Thane West",
      description:
        "Arrange a cab in Thane West for residential transfers, shopping visits, family functions, and airport journeys. Discuss suitable chauffeur-driven transportation according to passenger count, luggage requirements, pickup location, and destination."
    },
    {
      title: "Thane East",
      description:
        "Book a taxi in Thane East for railway station connections, office transportation, family visits, and private local journeys. Enquire about suitable vehicle availability according to passenger count, luggage capacity, pickup address, and travel schedule."
    },
    {
      title: "Kolshet Road",
      description:
        "Arrange a cab service on Kolshet Road for residential pickups, corporate appointments, family outings, and airport transfers. Discuss suitable vehicle arrangements according to passenger count, luggage requirements, exact pickup address, and preferred destination."
    },
    {
      title: "Upvan Lake",
      description:
        "Plan a private cab journey to Upvan Lake for family outings, leisure visits, and sightseeing around Thane. Enquire about suitable transportation for nearby residential areas, local attractions, pickup coordination, and onward travel."
    },
    {
      title: "Kopri",
      description:
        "Book a cab service in Kopri for residential transfers, railway station connections, corporate meetings, and family transportation. Discuss suitable vehicle options according to passenger count, luggage capacity, pickup location, and preferred travel timing."
    },
    {
      title: "Balkum",
      description:
        "Arrange a private taxi in Balkum for family visits, residential pickups, business appointments, and outstation departures. Enquire about suitable sedan, MPV, and SUV arrangements according to passenger count, luggage requirements, pickup address, and destination."
    }
  ],

  services: [
    {
      name: "Thane to Pune Cab",
      description:
        "Thane to Pune Cab supports private chauffeur-driven transportation for corporate meetings, family visits, airport transfers, and intercity journeys. Pandit Cab assists travellers with suitable vehicle enquiries according to passenger count, luggage requirements, Thane pickup address, Pune destination, and return plans."
    },
    {
      name: "Cab Booking in Thane",
      description:
        "Cab Booking in Thane supports advance enquiries for private local journeys, airport transportation, and outstation travel. Share your pickup address, destination, travel date, passenger count, luggage requirements, and preferred vehicle category to discuss suitable arrangements."
    },
    {
      name: "Car Rental in Thane for Outstation",
      description:
        "Car Rental in Thane for Outstation supports chauffeur-driven transportation for family holidays, religious tours, corporate assignments, and long-distance journeys. Discuss suitable vehicle arrangements according to passenger count, luggage capacity, destination, travel dates, and rental duration."
    },
    {
      name: "Pune Thane Cab Service",
      description:
        "Pune Thane Cab Service supports private intercity transportation between Pune and Thane for business meetings, family journeys, and personal travel. Enquire about suitable vehicle arrangements according to passenger count, luggage requirements, pickup location, destination, and preferred travel schedule."
    },
    {
      name: "Pune to Thane Taxi Fare",
      description:
        "Pune to Thane Taxi Fare depends on vehicle category, journey distance, pickup location, travel dates, and rental requirements. Request a detailed quotation covering applicable tolls, parking charges, driver allowances, waiting periods, and other relevant expenses."
    },
    {
      name: "Cab Service in Thane",
      description:
        "Cab Service in Thane supports private chauffeur-driven transportation for residential transfers, corporate meetings, family outings, airport journeys, and outstation travel. Pandit Cab assists with suitable vehicle enquiries according to passenger count, luggage requirements, pickup address, destination, and travel schedule."
    },
    {
      name: "Taxi Service in Thane",
      description:
        "Taxi Service in Thane supports private road transportation for local journeys, business appointments, railway station transfers, and family visits. Discuss suitable sedan, MPV, and SUV arrangements according to passenger count, luggage capacity, pickup location, and preferred destination."
    },
    {
      name: "Cabs in Thane",
      description:
        "Cabs in Thane support chauffeur-driven transportation across Ghodbunder Road, Majiwada, Wagle Estate, Hiranandani Estate, and nearby areas. Enquire about suitable vehicle arrangements according to passenger count, luggage requirements, pickup address, travel timing, and destination."
    },
    {
      name: "Taxi in Thane",
      description:
        "Taxi in Thane supports private transportation for individuals, couples, families, and corporate travellers. Discuss suitable vehicle options according to passenger count, luggage capacity, pickup location, journey duration, and preferred destination."
    },
    {
      name: "Thane Cab Service",
      description:
        "Thane Cab Service supports private transportation for residential visits, office meetings, airport pickups, and outstation journeys. Enquire about suitable vehicle arrangements according to passenger count, luggage requirements, pickup address, destination, and travel dates."
    },
    {
      name: "Thane Taxi Service",
      description:
        "Thane Taxi Service supports chauffeur-driven transportation for family outings, corporate assignments, railway station transfers, and personal journeys. Discuss suitable vehicle categories according to passenger count, luggage capacity, pickup location, and travel schedule."
    },
    {
      name: "Car Rental in Thane",
      description:
        "Car Rental in Thane supports private chauffeur-driven transportation for local sightseeing, corporate meetings, family holidays, and outstation journeys. Enquire about suitable sedan, Ertiga, Kia Carens, Innova Crysta, and SUV arrangements according to availability."
    },
    {
      name: "Cab Booking in Thane",
      description:
        "Cab Booking in Thane helps travellers arrange private transportation for airport transfers, family visits, business meetings, and intercity journeys. Provide your pickup location, travel date, passenger count, luggage requirements, destination, and preferred vehicle category to discuss booking conditions."
    },
    {
      name: "Taxi Booking Thane",
      description:
        "Taxi Booking Thane supports advance private transportation enquiries for local travel, corporate journeys, airport transfers, and outstation trips. Share your travel schedule, pickup address, destination, passenger count, and luggage requirements to discuss suitable vehicle availability."
    },
    {
      name: "Best Cab Service in Thane",
      description:
        "Best Cab Service in Thane supports travellers comparing private transportation options for vehicle comfort, seating capacity, and convenient pickup arrangements. Pandit Cab assists with discussing suitable vehicle categories, luggage requirements, journey duration, and rental quotations."
    },
    {
      name: "Cheap Cab Service in Thane",
      description:
        "Cheap Cab Service in Thane helps travellers enquire about economical private transportation according to passenger count, vehicle category, and journey requirements. Compare suitable rental quotations while reviewing applicable tolls, parking charges, waiting periods, and other expenses."
    },
    {
      name: "Affordable Taxi Service Thane",
      description:
        "Affordable Taxi Service Thane supports travellers looking for suitable chauffeur-driven transportation within their planned travel budget. Discuss vehicle categories, journey distance, passenger count, luggage requirements, and quotations covering applicable additional charges."
    },
    {
      name: "24x7 Cab Service in Thane",
      description:
        "24x7 Cab Service in Thane supports enquiries for early-morning departures, late-night airport transfers, and transportation at different travel hours. Discuss the required pickup timing, passenger count, luggage requirements, vehicle availability, and applicable night travel conditions."
    },
    {
      name: "Cab Service Near Me Thane",
      description:
        "Cab Service Near Me Thane supports location-specific private taxi enquiries across Thane West, Thane East, Ghodbunder Road, Majiwada, and surrounding areas. Share your exact pickup address, destination, passenger count, luggage requirements, and travel timing to discuss suitable arrangements."
    },
    {
      name: "Airport Cab Service Thane",
      description:
        "Airport Cab Service Thane supports private transportation to Mumbai Airport and Navi Mumbai International Airport according to travel requirements. Share your flight details, passenger count, luggage requirements, pickup address, airport terminal, and preferred arrival timing to discuss suitable transfers."
    },
    {
      name: "Outstation Cab Service Thane",
      description:
        "Outstation Cab Service Thane supports private journeys to Pune, Nashik, Lonavala, Shirdi, Goa, and other destinations. Discuss suitable vehicle arrangements according to passenger count, luggage capacity, pickup address, travel dates, route requirements, and return plans."
    },
    {
      name: "One Way Cab Thane",
      description:
        "One Way Cab Thane supports private point-to-point transportation for airport transfers, intercity travel, and outstation journeys without requiring a return trip. Discuss suitable vehicle arrangements according to passenger count, luggage requirements, pickup address, destination, and applicable one-way rental conditions."
    },
    {
      name: "Round Trip Taxi Thane",
      description:
        "Round Trip Taxi Thane supports private return journeys for family holidays, corporate travel, religious tours, and outstation trips. Discuss suitable transportation according to passenger count, journey duration, planned stops, luggage requirements, and preferred return schedule."
    },
    {
      name: "Corporate Cab Service Thane",
      description:
        "Corporate Cab Service Thane supports chauffeur-driven transportation for office meetings, employee travel, industrial visits, and executive assignments. Enquire about suitable vehicle arrangements according to employee count, office pickup points, business destination, travel schedule, and rental conditions."
    },
    {
      name: "Wedding Cab Service Thane",
      description:
        "Wedding Cab Service Thane supports private transportation for wedding guests, family members, and event-related journeys. Discuss suitable sedan, MPV, SUV, or group transportation options according to passenger count, venue location, event timing, and travel dates."
    },
    {
      name: "Thane to Mumbai Airport Cab",
      description:
        "Thane to Mumbai Airport Cab supports private transportation to Mumbai Airport terminals for domestic and international flight connections. Share your flight details, departure terminal, passenger count, luggage requirements, pickup address, and preferred arrival time to discuss suitable arrangements."
    },
    {
      name: "Thane to Pune Cab",
      description:
        "Thane to Pune Cab supports chauffeur-driven intercity transportation for corporate appointments, family visits, business assignments, and personal journeys. Discuss suitable sedan, Ertiga, Innova Crysta, and SUV arrangements according to passenger count, luggage capacity, pickup address, and Pune destination."
    },
    {
      name: "Thane to Nashik Cab",
      description:
        "Thane to Nashik Cab supports private transportation for business travel, family visits, temple darshan, and vineyard sightseeing. Discuss suitable vehicle arrangements according to passenger count, luggage requirements, pickup location, Nashik destination, and return schedule."
    },
    {
      name: "Thane to Lonavala Cab",
      description:
        "Thane to Lonavala Cab supports chauffeur-driven transportation for weekend getaways, family holidays, and hill station sightseeing. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, accommodation location, planned attractions, and return timing."
    },
    {
      name: "Thane to Shirdi Cab",
      description:
        "Thane to Shirdi Cab supports private transportation for Sai Baba darshan, family pilgrimages, and religious journeys. Discuss suitable vehicle arrangements according to passenger count, luggage requirements, temple visiting schedule, pickup address, and return plans."
    },
    {
      name: "Thane to Goa Cab",
      description:
        "Thane to Goa Cab supports private interstate transportation for beach vacations, family holidays, group outings, and extended coastal journeys. Enquire about suitable vehicle arrangements according to passenger count, luggage capacity, accommodation location, travel dates, and return itinerary."
    },
    {
      name: "SUV Cab Service in Thane",
      description:
        "SUV Cab Service in Thane supports spacious chauffeur-driven transportation for family holidays, corporate meetings, airport transfers, and outstation journeys. Discuss suitable SUV categories according to passenger count, seating configuration, luggage requirements, pickup address, and rental conditions."
    },
    {
      name: "7 Seater Cab in Thane",
      description:
        "7 Seater Cab in Thane supports enquiries for multi-row vehicles suitable for family travel, corporate transportation, and small group journeys. Discuss actual seating configuration, passenger count, luggage capacity, vehicle availability, pickup location, and rental quotations."
    },
    {
      name: "Innova Cab Service Thane",
      description:
        "Innova Cab Service Thane supports chauffeur-driven SUV transportation for family outings, corporate assignments, airport transfers, and outstation travel. Discuss suitable Innova availability according to passenger count, luggage capacity, pickup address, destination, and rental duration."
    },
    {
      name: "Innova Crysta on Rent in Thane",
      description:
        "Innova Crysta on Rent in Thane supports premium SUV transportation for families, corporate travellers, wedding guests, and small groups. Enquire about suitable vehicle availability, seating configuration, luggage capacity, pickup location, travel dates, and rental conditions."
    },
    {
      name: "Ertiga Cab in Thane",
      description:
        "Ertiga Cab in Thane supports private MPV transportation for family holidays, airport journeys, corporate meetings, and outstation travel. Discuss Ertiga availability, passenger count, luggage capacity, pickup address, travel schedule, and rental quotations."
    },
    {
      name: "Kia Carens Cab Thane",
      description:
        "Kia Carens Cab Thane supports chauffeur-driven MPV transportation enquiries for family outings, corporate travel, airport transfers, and private journeys. Discuss suitable Kia Carens availability, seating configuration, luggage requirements, pickup location, and rental conditions."
    },
    {
      name: "Family Cab Service in Thane",
      description:
        "Family Cab Service in Thane supports private transportation for family vacations, celebrations, airport transfers, and outstation journeys. Discuss suitable sedan, Ertiga, Kia Carens, Innova Crysta, and SUV arrangements according to family size, luggage requirements, travel dates, and destination."
    }
  ],

  tableData: [
    ["Thane to Pune Cab"],
    ["Cab Booking in Thane"],
    ["Car Rental in Thane for Outstation"],
    ["Pune Thane Cab Service"],
    ["Pune to Thane Taxi Fare"],
    ["Cab Service in Thane"],
    ["Taxi Service in Thane"],
    ["Cabs in Thane"],
    ["Taxi in Thane"],
    ["Thane Cab Service"],
    ["Thane Taxi Service"],
    ["Car Rental in Thane"],
    ["Cab Booking in Thane"],
    ["Taxi Booking Thane"],
    ["Best Cab Service in Thane"],
    ["Cheap Cab Service in Thane"],
    ["Affordable Taxi Service Thane"],
    ["24x7 Cab Service in Thane"],
    ["Cab Service Near Me Thane"],
    ["Airport Cab Service Thane"],
    ["Outstation Cab Service Thane"],
    ["One Way Cab Thane"],
    ["Round Trip Taxi Thane"],
    ["Corporate Cab Service Thane"],
    ["Wedding Cab Service Thane"],
    ["Thane to Mumbai Airport Cab"],
    ["Thane to Pune Cab"],
    ["Thane to Nashik Cab"],
    ["Thane to Lonavala Cab"],
    ["Thane to Shirdi Cab"],
    ["Thane to Goa Cab"],
    ["SUV Cab Service in Thane"],
    ["7 Seater Cab in Thane"],
    ["Innova Cab Service Thane"],
    ["Innova Crysta on Rent in Thane"],
    ["Ertiga Cab in Thane"],
    ["Kia Carens Cab Thane"],
    ["Family Cab Service in Thane"]
  ],

  whychoose: [
    {
      WhyChooseheading: "Convenient Thane Local Cab And Taxi Arrangements",
      WhyChoosedescription:
        "Pandit Cab accepts enquiries for chauffeur-driven private transportation across Thane's residential, commercial, and business locations. Customers can discuss suitable arrangements according to passenger count, luggage capacity, pickup address, destination, travel date, and preferred departure timing."
    },
    {
      WhyChooseheading: "Sedan Ertiga Kia Carens Innova Crysta And SUV Options",
      WhyChoosedescription:
        "Travellers can enquire about sedan, Ertiga, Kia Carens, Innova, Innova Crysta, SUV, and suitable group transportation options according to availability. Discuss actual seating capacity, luggage space, vehicle comfort, passenger requirements, and rental quotations before confirming a particular vehicle."
    },
    {
      WhyChooseheading: "Ghodbunder Road Majiwada Wagle Estate And Thane Coverage",
      WhyChoosedescription:
        "Thane cab enquiries can include pickups and drops across Ghodbunder Road, Majiwada, Hiranandani Estate, Wagle Estate, Thane West, Thane East, Kolshet Road, Kopri, and Balkum. Customers can share their exact office, hotel, railway station, residential address, or other destination to discuss suitable transportation."
    },
    {
      WhyChooseheading: "Mumbai Airport And Navi Mumbai Airport Transfers",
      WhyChoosedescription:
        "Private cab arrangements can include transportation from Thane to Mumbai Airport and Navi Mumbai International Airport according to travel requirements. Customers can share flight details, passenger count, luggage requirements, pickup location, airport terminal, and preferred arrival timing to discuss suitable arrangements."
    },
    {
      WhyChooseheading: "Pune Nashik Lonavala Shirdi And Goa Outstation Journeys",
      WhyChoosedescription:
        "Thane outstation cab enquiries can include journeys to Pune, Nashik, Lonavala, Shirdi, Goa, and other popular destinations. Customers can discuss suitable travel arrangements according to passenger count, luggage requirements, destination, travel dates, planned stops, and return schedule."
    },
    {
      WhyChooseheading: "Corporate Meetings Wedding Events And Family Travel",
      WhyChoosedescription:
        "Thane private taxi arrangements support corporate meetings, employee transportation, wedding guest travel, family outings, and personal journeys. Customers can discuss suitable vehicle capacity according to passenger count, luggage requirements, event timing, office location, and destination."
    },
    {
      WhyChooseheading: "Clear Thane Cab Fare And Rental Quotations",
      WhyChoosedescription:
        "Thane taxi quotations depend on vehicle category, travel distance, pickup location, journey duration, and travel requirements. Customers can request details of applicable tolls, parking charges, waiting periods, driver allowances, airport fees, and other relevant rental costs."
    },
    {
      WhyChooseheading: "Simple Thane Cab Booking And Travel Support",
      WhyChoosedescription:
        "Planning a cab journey in Thane becomes easier when travel details are shared in advance. Provide your pickup address, destination, travel dates, passenger count, luggage requirements, preferred vehicle category, airport details if applicable, and return schedule. Pandit Cab assists with discussing suitable vehicle availability, pickup coordination, rental quotations, and booking conditions."
    }
  ]
};




















const faqData = [
  {
    question: "How can I book a Cab Service in Thane with Pandit Cabs?",
    answer: "You can enquire about Cab Service in Thane with Pandit Cabs by sharing your pickup address, destination, travel date, passenger count, and preferred vehicle category. Whether you need transportation for business meetings, family visits, airport transfers, local sightseeing, or outstation journeys, you can discuss suitable sedan and SUV options, estimated fares, vehicle availability, and booking arrangements."
  },
  {
    question: "What is the fare for Cab Service in Thane?",
    answer: "Cab Service in Thane fares generally depend on your pickup and drop locations, selected vehicle category, total travel distance, trip duration, and booking requirements. Additional expenses such as tolls, parking, waiting charges, driver allowances, and applicable taxes may apply. Share your complete travel details with Pandit Cabs to request an estimated fare quotation and clarify all applicable charges before confirming your booking."
  },
  {
    question: "Which areas are covered by Cab Service in Thane?",
    answer: "You can enquire about cab pickups and drops across Thane locations such as Thane West, Thane East, Ghodbunder Road, Majiwada, Manpada, Hiranandani Estate, Kasarvadavali, Wagle Estate, Vartak Nagar, Naupada, Kalwa, Mumbra, and nearby areas. Travel arrangements to Mumbai and Navi Mumbai may also be discussed. Share your exact pickup address and destination with Pandit Cabs to explore suitable cab options."
  },
  {
    question: "Which cars are available for Cab Service in Thane?",
    answer: "You can enquire about sedan and SUV options for Cab Service in Thane, subject to vehicle availability. Common preferences include Swift Dzire, Hyundai Aura, Maruti Suzuki Ertiga, Kia Carens, Toyota Innova, and Innova Crysta. Sedans may suit individual travellers and small families, while SUVs can be considered for larger groups. Share your passenger count, luggage quantity, and comfort preferences with Pandit Cabs."
  },
  {
    question: "Can I book a Cab Service in Thane for local sightseeing?",
    answer: "You can enquire about Cab Service in Thane for local sightseeing, shopping trips, family outings, and recreational visits. Popular attractions include Upvan Lake, Masunda Lake, Yeoor Hills, Tikuji-ni-Wadi, and nearby entertainment destinations. Share your preferred sightseeing locations, pickup time, passenger count, and trip duration with Pandit Cabs to discuss suitable local travel arrangements and estimated rental charges."
  },
  {
    question: "Can I book an outstation Cab from Thane?",
    answer: "You can enquire about outstation cab arrangements from Thane to destinations such as Pune, Lonavala, Mahabaleshwar, Nashik, Shirdi, Alibaug, Igatpuri, Surat, and other cities. One-way and round-trip arrangements may be discussed depending on your travel plans. Share your destination, travel dates, passenger count, luggage requirements, and preferred vehicle with Pandit Cabs to explore suitable options and estimated outstation fares."
  },
  {
    question: "Is Cab Service in Thane available for Mumbai Airport and Navi Mumbai Airport transfers?",
    answer: "You can enquire about Cab Service in Thane for transfers to and from Chhatrapati Shivaji Maharaj International Airport and Navi Mumbai International Airport. Airport transfer arrangements depend on your pickup location, flight schedule, selected vehicle category, and availability. Share your flight number, terminal details, travel date, passenger count, and luggage requirements with Pandit Cabs to discuss suitable departure scheduling and estimated airport transfer fares."
  },
  {
    question: "Can I book an Innova Crysta or Ertiga for Cab Service in Thane?",
    answer: "You can enquire about Toyota Innova Crysta, Maruti Suzuki Ertiga, Kia Carens, and other SUV options for Cab Service in Thane, subject to availability. These vehicle categories may suit family vacations, corporate groups, airport transfers, and outstation journeys. Share your passenger count, suitcase quantity, travel date, pickup location, and preferred vehicle with Pandit Cabs to discuss seating suitability and estimated rental fares."
  },
  {
    question: "Can I book a Cab Service in Thane for corporate and business travel?",
    answer: "You can enquire about Cab Service in Thane for corporate meetings, employee transportation, client transfers, office visits, and business events. Popular commercial locations include Wagle Estate, Majiwada, Ghodbunder Road, Hiranandani Estate, and nearby business districts. Share your office location, pickup schedule, passenger count, destination, and travel frequency with Pandit Cabs to discuss suitable corporate transportation arrangements and estimated charges."
  },
  {
    question: "Why should I choose Pandit Cabs for Cab Service in Thane?",
    answer: "Pandit Cabs helps travellers explore Cab Service in Thane for local transportation, airport transfers, corporate travel, family outings, and outstation journeys. Customers can discuss sedan and SUV categories, pickup locations, one-way or round-trip bookings, sightseeing itineraries, luggage requirements, and estimated fares before confirming their journey. Advance enquiries are recommended during weekends, public holidays, festivals, and busy travel periods."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Omkar Patil",
    feedback: "I contacted Pandit Cabs while searching for a Cab Service in Thane for business meetings in Wagle Estate and Majiwada. The information about sedan and SUV options, pickup arrangements, travel scheduling, and estimated rental fares was clear and helpful. It allowed me to organise my meeting itinerary and compare suitable transportation options before confirming the journey.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Sayali Deshmukh",
    feedback: "We were looking for a Cab Service in Thane for a family outing covering Upvan Lake and Yeoor Hills. Pandit Cabs explained the available vehicle categories, local sightseeing arrangements, pickup scheduling, and estimated travel charges. The communication helped us prepare our itinerary, understand seating requirements, and plan suitable travel timings before making our booking decision.",
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
              <img src='/images/keyword/.jpg' alt='img' className='img-fluid' />
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

export default Cabserviceinthane;