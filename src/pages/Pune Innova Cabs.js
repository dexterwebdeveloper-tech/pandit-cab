import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puneinnovacabs() {










const cardData = {
  keyword: "Pune Innova Cabs",

  headingDescription:
    "Book Pune Innova cabs with Pandit Cab for outstation journeys, airport transfers, family holidays, corporate travel, and wedding transportation. Travellers can enquire about chauffeur-driven Toyota Innova and Innova Crysta vehicles from Pune, Pimpri Chinchwad, Hinjewadi, Wakad, Baner, and nearby locations. Plan private SUV transportation to Shirdi, Nashik, Mumbai, Mahabaleshwar, Kolhapur, Goa, and other destinations. Whether arranging an airport drop, one-way transfer, round-trip journey, or multi-day rental, Pandit Cab assists with vehicle availability, seating requirements, pickup coordination, journey-based quotations, and booking conditions.",

  topPlaces: [
    {
      title: "Shirdi",
      description:
        "Book a Pune to Shirdi Innova cab for Sai Baba darshan, family pilgrimages, and religious journeys. Discuss suitable Innova or Innova Crysta availability according to passenger count, luggage requirements, temple schedules, and preferred return plans."
    },
    {
      title: "Mumbai",
      description:
        "Arrange a Pune to Mumbai Innova taxi for airport transfers, corporate meetings, family visits, and city journeys. Enquire about suitable SUV transportation according to pickup address, destination, passenger requirements, and travel dates."
    },
    {
      title: "Mahabaleshwar",
      description:
        "Book a Pune to Mahabaleshwar Innova cab for family holidays, hill station sightseeing, and weekend getaways. Discuss suitable transportation according to accommodation location, passenger count, luggage capacity, and preferred sightseeing itinerary."
    },
    {
      title: "Nashik",
      description:
        "Arrange a Pune to Nashik Innova taxi for family visits, business appointments, vineyard outings, and religious journeys. Enquire about suitable vehicle availability according to destination address, passenger requirements, travel dates, and return schedule."
    },
    {
      title: "Kolhapur",
      description:
        "Book a Pune to Kolhapur Innova cab for Mahalaxmi Temple darshan, family functions, and regional travel. Discuss suitable chauffeur-driven SUV arrangements according to passenger count, luggage requirements, temple schedules, and journey duration."
    },
    {
      title: "Alibaug",
      description:
        "Arrange a Pune to Alibaug Innova cab for beach holidays, family outings, and coastal sightseeing. Enquire about suitable transportation according to resort location, passenger count, luggage requirements, and preferred return timing."
    },
    {
      title: "Chhatrapati Sambhajinagar",
      description:
        "Book a Pune to Chhatrapati Sambhajinagar Innova taxi for business visits, family journeys, and heritage sightseeing. Discuss suitable vehicle arrangements according to destination, passenger requirements, planned stops, and travel dates."
    },
    {
      title: "Ganpatipule",
      description:
        "Arrange a Pune to Ganpatipule Innova cab for Ganpati Temple darshan, beach holidays, and family coastal journeys. Enquire about suitable SUV transportation according to luggage capacity, passenger count, accommodation plans, and return requirements."
    },
    {
      title: "Hyderabad",
      description:
        "Book a Pune to Hyderabad Innova taxi for long-distance family travel, corporate appointments, and planned outstation journeys. Discuss suitable arrangements according to passenger count, luggage requirements, route distance, travel dates, and driver rest considerations."
    },
    {
      title: "Goa",
      description:
        "Arrange a Pune to Goa Innova cab for family vacations, coastal holidays, and extended outstation journeys. Enquire about suitable Innova Crysta arrangements according to passenger requirements, luggage capacity, accommodation locations, and travel duration."
    }
  ],

  services: [
    {
      name: "Innova Taxi",
      description:
        "Innova taxi enquiries with Pandit Cab support chauffeur-driven SUV transportation for family trips, airport transfers, and outstation journeys. Discuss suitable Toyota Innova availability according to passenger count, luggage requirements, pickup location, and travel dates."
    },
    {
      name: "Book Innova for Outstation",
      description:
        "Book Innova for outstation travel enquiries support private SUV transportation for family holidays, business journeys, and religious trips. Share your pickup location, destination, travel dates, passenger count, and luggage requirements to discuss suitable vehicle arrangements."
    },
    {
      name: "Innova Taxi Near Me Pune",
      description:
        "Innova taxi near me Pune enquiries help travellers arrange chauffeur-driven SUV transportation from suitable pickup locations across Pune. Discuss vehicle availability according to your exact address, passenger requirements, destination, and preferred travel schedule."
    },
    {
      name: "Innova Cab Booking",
      description:
        "Innova cab booking helps travellers plan private SUV transportation for airport transfers, family outings, and outstation journeys. Provide your pickup address, destination, passenger count, luggage requirements, and travel dates to discuss suitable booking arrangements."
    },
    {
      name: "Innova Booking Near Me Pimpri",
      description:
        "Innova booking near me Pimpri supports enquiries for chauffeur-driven SUV transportation from Pimpri and nearby PCMC locations. Discuss suitable vehicle availability according to pickup address, passenger count, destination, luggage capacity, and travel dates."
    },
    {
      name: "Innova Car Rental for Outstation",
      description:
        "Innova car rental for outstation journeys supports private transportation for family holidays, pilgrimages, and corporate travel. Enquire about suitable vehicle arrangements according to route distance, passenger requirements, travel duration, and applicable rental conditions."
    },
    {
      name: "Innova for Airport Drop",
      description:
        "Innova for airport drop enquiries support private SUV transportation to Pune Airport, Mumbai Airport, and other requested airport destinations. Discuss suitable vehicle availability according to flight schedule, terminal, passenger count, luggage requirements, and pickup location."
    },
    {
      name: "Book Innova Crysta for Outstation",
      description:
        "Book Innova Crysta for outstation travel enquiries support chauffeur-driven SUV transportation for family vacations and long-distance journeys. Discuss suitable vehicle availability according to passenger requirements, luggage capacity, destination, travel dates, and return plans."
    },
    {
      name: "Innova Crysta Taxi",
      description:
        "Innova Crysta taxi enquiries support private SUV transportation for airport transfers, family holidays, corporate journeys, and religious visits. Pandit Cab accepts enquiries according to passenger count, pickup location, luggage requirements, and travel dates."
    },
    {
      name: "Innova Cab Rental",
      description:
        "Innova cab rental enquiries support chauffeur-driven transportation for one-way journeys, round trips, and multi-day outstation travel. Discuss suitable vehicle arrangements according to passenger requirements, route distance, luggage capacity, and applicable rental conditions."
    },
    {
      name: "Innova Outstation Charges",
      description:
        "Innova outstation charges depend on journey distance, travel duration, pickup location, and applicable rental terms. Request a quotation and clarify tolls, parking charges, driver allowances, minimum distance conditions, and other applicable expenses."
    },
    {
      name: "Pune Innova for Outstation",
      description:
        "Pune Innova for outstation enquiries support private SUV transportation to destinations such as Shirdi, Nashik, Mumbai, Kolhapur, and Mahabaleshwar. Discuss suitable vehicle availability according to passenger count, luggage requirements, travel dates, and journey duration."
    },
    {
      name: "Innova Taxi Booking",
      description:
        "Innova taxi booking supports advance planning for chauffeur-driven airport transfers, family outings, and long-distance journeys. Share your pickup location, destination, travel date, passenger requirements, and preferred return schedule to discuss suitable availability."
    },
    {
      name: "Innova on Rent for Outstation",
      description:
        "Innova on rent for outstation enquiries support chauffeur-driven SUV transportation for family holidays, corporate trips, and pilgrimage journeys. Discuss suitable arrangements according to passenger count, luggage capacity, route distance, and preferred travel dates."
    },
    {
      name: "Innova Crysta Outstation Charges",
      description:
        "Innova Crysta outstation charges depend on travel distance, journey duration, pickup location, and rental conditions. Enquire about a suitable quotation while clarifying tolls, parking charges, driver allowances, waiting time, and applicable minimum-distance terms."
    },
    {
      name: "Innova Outstation Rentals",
      description:
        "Innova outstation rentals support private SUV transportation for intercity travel, family vacations, and multi-destination journeys. Discuss suitable one-way, round-trip, and multi-day arrangements according to passenger requirements, luggage capacity, and travel itinerary."
    },
    {
      name: "Innova Crysta Cab Booking",
      description:
        "Innova Crysta cab booking helps travellers arrange chauffeur-driven SUV transportation for airport transfers, family trips, and corporate journeys. Provide your pickup address, destination, passenger count, luggage requirements, and travel dates to discuss suitable vehicle availability."
    },
    {
      name: "8 Seater Innova on Rent in Pune",
      description:
        "8 seater Innova on rent in Pune enquiries help groups explore suitable vehicle seating configurations for family and outstation travel. Confirm the actual passenger seating capacity, luggage space, and availability of the requested Innova variant before booking."
    },
    {
      name: "Innova Booking for Marriage in Pune",
      description:
        "Innova booking for marriage in Pune supports chauffeur-driven transportation enquiries for wedding guests, family members, and event travel. Discuss suitable vehicle arrangements according to pickup locations, guest count, event timings, travel dates, and waiting requirements."
    },
    {
      name: "Innova Cab for Rent in Pune",
      description:
        "Innova cab for rent in Pune supports chauffeur-driven SUV transportation for family holidays, airport transfers, and outstation journeys. Enquire about suitable vehicle availability according to pickup location, passenger count, luggage requirements, and journey duration."
    },
    {
      name: "Innova Cab for Outstation",
      description:
        "Innova cab for outstation enquiries support private transportation for long-distance family trips, corporate journeys, and religious travel. Discuss suitable vehicle arrangements according to route distance, passenger requirements, luggage capacity, and preferred return schedule."
    },
    {
      name: "Innova Cab Service in Pune",
      description:
        "Innova cab service in Pune supports chauffeur-driven transportation enquiries for airport transfers, family functions, and outstation journeys. Discuss suitable vehicle availability according to pickup address, passenger count, destination, travel dates, and applicable rental conditions."
    },
    {
      name: "Innova Car Taxi in PCMC",
      description:
        "Innova car taxi in PCMC supports private SUV transportation enquiries from Pimpri, Chinchwad, Nigdi, Akurdi, and nearby areas. Discuss suitable vehicle arrangements according to pickup location, passenger requirements, luggage capacity, and travel dates."
    },
    {
      name: "Innova Crysta Booking in Pune",
      description:
        "Innova Crysta booking in Pune supports chauffeur-driven SUV transportation for family holidays, airport transfers, and corporate journeys. Share your pickup location, destination, passenger count, luggage requirements, and travel dates to discuss suitable booking arrangements."
    },
    {
      name: "Innova Crysta Cab",
      description:
        "Innova Crysta cab enquiries support private SUV transportation for outstation journeys, airport transfers, and family travel. Discuss suitable vehicle availability according to seating requirements, luggage capacity, pickup location, journey duration, and preferred itinerary."
    },
    {
      name: "Innova Crysta for Taxi",
      description:
        "Innova Crysta for taxi enquiries support chauffeur-driven transportation for business travel, family outings, and intercity journeys. Enquire about suitable vehicle availability according to passenger count, luggage requirements, destination, and travel dates."
    },
    {
      name: "Innova Crysta Taxi Booking",
      description:
        "Innova Crysta taxi booking helps travellers plan private SUV transportation for airport transfers, corporate appointments, and family holidays. Discuss suitable arrangements according to pickup address, passenger requirements, travel dates, destination, and return plans."
    },
    {
      name: "Innova Crysta Taxi Price",
      description:
        "Innova Crysta taxi price depends on travel distance, pickup location, journey duration, and applicable rental conditions. Request a quotation and clarify tolls, parking charges, waiting expenses, driver allowances, and minimum-distance requirements before confirming."
    },
    {
      name: "Innova Crysta Taxi Price Per Km",
      description:
        "Innova Crysta taxi price per km enquiries help travellers understand distance-based rental calculations for outstation journeys. Confirm the applicable charging structure, minimum kilometres, driver allowances, tolls, parking expenses, and total estimated journey cost."
    },
    {
      name: "Innova for Rent Outstation",
      description:
        "Innova for rent outstation enquiries support chauffeur-driven SUV transportation for family vacations, pilgrimage journeys, and corporate travel. Discuss suitable vehicle arrangements according to passenger requirements, luggage capacity, destination, travel dates, and journey duration."
    },
    {
      name: "Innova for Outstation Trip",
      description:
        "Innova for outstation trip enquiries support private transportation for weekend getaways, family holidays, and long-distance journeys. Discuss suitable vehicle availability according to route planning, passenger count, luggage requirements, and preferred return itinerary."
    },
    {
      name: "Innova for Taxi",
      description:
        "Innova for taxi enquiries support chauffeur-driven SUV transportation for airport drops, family functions, and intercity travel. Enquire about suitable vehicle arrangements according to pickup location, destination, passenger requirements, and travel schedule."
    },
    {
      name: "Innova Rent Per Kilometer",
      description:
        "Innova rent per kilometer enquiries help travellers compare distance-based charges for chauffeur-driven SUV journeys. Discuss the applicable rate structure, minimum distance requirements, tolls, parking expenses, driver allowances, and total rental quotation."
    },
    {
      name: "Innova Taxi for Outstation",
      description:
        "Innova taxi for outstation enquiries support private SUV transportation for family holidays, religious tours, and business journeys. Discuss suitable one-way and round-trip arrangements according to passenger count, luggage capacity, destination, and travel dates."
    },
    {
      name: "Innova Taxi Rates for Outstation",
      description:
        "Innova taxi rates for outstation journeys depend on route distance, vehicle category, travel duration, and rental conditions. Request a suitable quotation and clarify minimum-distance rules, tolls, parking charges, driver allowances, and waiting expenses."
    },
    {
      name: "Online Innova Taxi Booking",
      description:
        "Online Innova taxi booking enquiries help travellers plan chauffeur-driven SUV transportation for airport transfers, family trips, and outstation journeys. Share your pickup address, destination, travel dates, passenger count, luggage requirements, and return plans to discuss booking arrangements."
    }
  ],

  tableData: [
    ["Innova Taxi"],
    ["Book Innova for Outstation"],
    ["Innova Taxi Near Me Pune"],
    ["Innova Cab Booking"],
    ["Innova Booking Near Me Pimpri"],
    ["Innova Car Rental for Outstation"],
    ["Innova for Airport Drop"],
    ["Book Innova Crysta for Outstation"],
    ["Innova Crysta Taxi"],
    ["Innova Cab Rental"],
    ["Innova Outstation Charges"],
    ["Pune Innova for Outstation"],
    ["Innova Taxi Booking"],
    ["Innova on Rent for Outstation"],
    ["Innova Crysta Outstation Charges"],
    ["Innova Outstation Rentals"],
    ["Innova Crysta Cab Booking"],
    ["8 Seater Innova on Rent in Pune"],
    ["Innova Booking for Marriage in Pune"],
    ["Innova Cab for Rent in Pune"],
    ["Innova Cab for Outstation"],
    ["Innova Cab Service in Pune"],
    ["Innova Car Taxi in PCMC"],
    ["Innova Crysta Booking in Pune"],
    ["Innova Crysta Cab"],
    ["Innova Crysta for Taxi"],
    ["Innova Crysta Taxi Booking"],
    ["Innova Crysta Taxi Price"],
    ["Innova Crysta Taxi Price Per Km"],
    ["Innova for Rent Outstation"],
    ["Innova for Outstation Trip"],
    ["Innova for Taxi"],
    ["Innova Rent Per Kilometer"],
    ["Innova Taxi for Outstation"],
    ["Innova Taxi Rates for Outstation"],
    ["Online Innova Taxi Booking"]
  ],

  whychoose: [
    {
      WhyChooseheading: "Pune Innova And Innova Crysta Cab Arrangements",
      WhyChoosedescription:
        "Pandit Cab accepts enquiries for chauffeur-driven Toyota Innova and Innova Crysta transportation from Pune and Pimpri Chinchwad. Customers can discuss suitable airport transfers, family outings, wedding transportation, and outstation journeys according to pickup location, passenger count, travel dates, and vehicle availability."
    },
    {
      WhyChooseheading: "Innova SUV Options For Family And Group Travel",
      WhyChoosedescription:
        "Travellers can enquire about suitable Innova and Innova Crysta seating configurations for families and small groups. Vehicle selection depends on the actual passenger capacity of the available variant, luggage requirements, journey duration, travel dates, and applicable rental conditions."
    },
    {
      WhyChooseheading: "Innova Outstation Cabs For Popular Destinations",
      WhyChoosedescription:
        "Customers can discuss private Innova transportation to Mumbai, Shirdi, Nashik, Mahabaleshwar, Kolhapur, Goa, Hyderabad, and other destinations. Suitable arrangements depend on route distance, passenger requirements, luggage capacity, travel dates, and preferred return itinerary."
    },
    {
      WhyChooseheading: "Innova Airport Transfers And Corporate Journeys",
      WhyChoosedescription:
        "Pandit Cab accepts enquiries for Innova airport drops, airport pickups, business meetings, and corporate travel arrangements. Customers can share flight details, terminal information, pickup addresses, passenger count, luggage requirements, and travel schedules to discuss suitable transportation."
    },
    {
      WhyChooseheading: "One-Way Round-Trip And Multi-Day Innova Rentals",
      WhyChoosedescription:
        "Pune Innova cab enquiries support direct transfers, planned return journeys, and extended outstation rentals. Customers can discuss suitable arrangements according to destination, journey duration, intermediate stops, driver rest requirements, and applicable one-way or round-trip conditions."
    },
    {
      WhyChooseheading: "Pune Airport Hinjewadi Wakad And PCMC Pickups",
      WhyChoosedescription:
        "Travellers can enquire about Innova cab pickups from Pune Airport, Hinjewadi, Wakad, Baner, Kothrud, Hadapsar, Kharadi, Viman Nagar, Pimpri, Chinchwad, and nearby locations. Share your complete pickup address, destination, passenger count, luggage requirements, and travel dates to discuss suitable vehicle availability."
    },
    {
      WhyChooseheading: "Journey Based Innova Cab Rental Quotations",
      WhyChoosedescription:
        "Innova cab rental quotations depend on vehicle variant, pickup location, route distance, journey duration, and applicable charging structure. Customers can request fare information and clarify minimum kilometres, tolls, parking charges, waiting expenses, driver allowances, and other applicable costs before confirming."
    },
    {
      WhyChooseheading: "Simple Pune Innova Cab Booking Enquiries",
      WhyChoosedescription:
        "Planning an Innova journey becomes easier when travel details are shared in advance. Provide your pickup location, destination, travel date, passenger count, luggage requirements, preferred Innova variant, and return plans. Pandit Cab assists with discussing suitable vehicle availability, seating configurations, rental quotations, and booking conditions."
    }
  ]
};













const faqData = [
  {
    question: "How can I book Pune Innova cabs with Pandit Cabs?",
    answer: "You can enquire about Pune Innova cab services with Pandit Cabs by sharing your pickup location, travel date, preferred departure time, passenger count, and destination. Whether you need an Innova for family travel, corporate meetings, airport transfers, or outstation journeys, you can discuss available Toyota Innova categories, estimated rental fares, seating requirements, and booking arrangements."
  },
  {
    question: "What is the rental fare for Innova cabs in Pune?",
    answer: "Pune Innova cab rental fares generally depend on the vehicle model, pickup location, travel date, journey distance, booking duration, and whether you require local or outstation travel. Additional expenses such as tolls, parking, waiting charges, driver allowances, and applicable taxes may apply. Contact Pandit Cabs with your travel requirements to request an estimated Innova cab fare before confirming your booking."
  },
  {
    question: "Which Toyota Innova models can I enquire about with Pandit Cabs?",
    answer: "You can enquire about Toyota Innova, Innova Crysta, and other applicable Innova variants, subject to vehicle availability. Different models may offer variations in seating configuration, cabin features, luggage capacity, and passenger comfort. Share your preferred Innova model, passenger count, and travel requirements with Pandit Cabs to discuss suitable vehicle options and estimated rental charges."
  },
  {
    question: "How many passengers can travel in an Innova cab in Pune?",
    answer: "Toyota Innova vehicles commonly come in six-passenger or seven-passenger seating configurations excluding the driver, depending on the model and seating layout. Actual passenger capacity may vary by vehicle. For a comfortable journey with luggage, share your passenger count, baggage requirements, and preferred seating arrangement with Pandit Cabs before confirming an Innova cab booking."
  },
  {
    question: "Can I book an Innova cab in Pune for outstation travel?",
    answer: "Yes, you can enquire about Innova cab arrangements from Pune for outstation destinations such as Mumbai, Shirdi, Nashik, Mahabaleshwar, Lonavala, Kolhapur, Bhimashankar, Alibaug, Satara, and Sambhajinagar. Innova vehicles can be suitable for family holidays, religious pilgrimages, and group journeys. Share your destination, travel dates, and passenger requirements to discuss available vehicles and estimated outstation fares."
  },
  {
    question: "Can I book an Innova cab in Pune for airport pickup and drop?",
    answer: "You can enquire about Pune Innova cab arrangements for Pune Airport pickup and drop services. These transfers may be suitable for families, corporate travellers, and passengers carrying additional luggage. Share your flight arrival or departure time, pickup address, passenger count, and baggage details with Pandit Cabs to discuss suitable vehicle availability and estimated airport transfer charges."
  },
  {
    question: "Can I hire an Innova cab in Pune for local sightseeing and Pune Darshan?",
    answer: "You can enquire about Innova cab arrangements for Pune Darshan, local sightseeing, family outings, and personal travel. Popular attractions include Shaniwar Wada, Aga Khan Palace, Dagdusheth Ganpati Temple, Saras Baug, and Sinhagad Fort. Share your preferred attractions, pickup location, travel date, and sightseeing duration with Pandit Cabs to discuss suitable local travel arrangements and estimated charges."
  },
  {
    question: "Can I book Pune Innova cabs for weddings and corporate travel?",
    answer: "You can enquire about Innova cab arrangements for wedding transportation, corporate meetings, business visits, family functions, and guest transfers in Pune. Innova vehicles may be suitable for small groups seeking additional passenger space and comfortable seating. Share your event date, pickup and drop locations, number of passengers, and required booking duration to discuss suitable vehicle arrangements and estimated fares."
  },
  {
    question: "Is Innova cab pickup available from Hinjewadi, Wakad, and Pimpri-Chinchwad?",
    answer: "You can enquire about Pune Innova cab pickups from Hinjewadi, Wakad, Baner, Balewadi, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Pune Airport, Nigdi, Chinchwad, Bhosari, Ravet, Pimple Saudagar, and nearby areas. Pickup availability depends on your travel date and vehicle arrangements. Share your complete pickup address with Pandit Cabs to discuss service coverage and estimated rental charges."
  },
  {
    question: "Why should I choose Pandit Cabs for Pune Innova cab booking?",
    answer: "Pandit Cabs helps travellers explore Pune Innova cab arrangements for local sightseeing, airport transfers, corporate travel, weddings, family vacations, and outstation journeys. Customers can discuss suitable Toyota Innova models, seating requirements, pickup schedules, one-way or round-trip bookings, and estimated rental fares before confirming their journey. Advance enquiries are recommended during weekends, holidays, wedding seasons, and busy travel periods."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Abhijit Kulkarni",
    feedback: "I contacted Pandit Cabs while searching for Pune Innova cabs for a family trip to Mahabaleshwar. The information about Innova vehicle options, seating arrangements, luggage space, and estimated outstation fares was clear and helpful. It allowed us to plan our family journey and understand the booking requirements.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Sneha Deshpande",
    feedback: "We were looking for an Innova cab in Pune for an airport pickup and family transportation. Pandit Cabs explained the available Innova categories, passenger capacity, pickup arrangements, and estimated rental charges. The communication helped us choose a suitable vehicle category and prepare our travel schedule before confirming the booking.",
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









const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Pune Innova Cabs",
  "image": "https://www.panditcabs.com/assets/images/pune-innova-cabs.webp",
  "description": "Book Pune Innova Cabs with Pandit Cabs for comfortable local, airport, and outstation travel. Choose an Innova or Innova Crysta for family trips, group journeys, and convenient airport transfers. Call +91 9890121689 for booking assistance.",
  "brand": {
    "@type": "Brand",
    "name": "Pandit Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "25000"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.panditcabs.com/pune-innova-cabs",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Pandit Cabs",
      "telephone": "+91 9890121689",
      "url": "https://www.panditcabs.com/"
    }
  }
};





  return (
    <div>


<Helmet>
  <title>Pune Innova Cabs | Innova Taxi | Book Innova for Outstation | +91 9890121689</title>
  <meta
    name="description"
    content="Book Pune Innova Cabs with Pandit Cabs for outstation trips, airport drops, and comfortable family travel. Choose Innova and Innova Crysta taxi options with easy booking assistance. Call +91 9890121689."
  />
  <meta
    name="keywords"
    content="Innova Taxi, Book Innova for Outstation, Innova Taxi Near Me Pune, Innova Cab Booking, Innova Booking Near Me Pimpri, Innova Car Rental for Outstation, Innova for Airport Drop, Book Innova Crysta for Outstation, Innova Crysta Taxi, Innova Cab Rental"
  />
  <link
    rel="canonical"
    href="https://www.panditcabs.com/pune-innova-cabs"
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

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
              <img src='/images/keyword/87.jpg' alt='img' className='img-fluid' />
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

export default Puneinnovacabs;