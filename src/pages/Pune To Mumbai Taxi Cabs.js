import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetomumbaitaxicab() {








const cardData = {
  keyword: "Pune To Mumbai Taxi Cabs",
  headingDescription: "Pandit Cab offers convenient Pune to Mumbai taxi cabs for passengers looking for comfortable, flexible, and dependable intercity transportation. Whether you need a one-way drop, a return journey, an airport transfer, a family trip, or a corporate ride, choose a suitable vehicle according to your travel requirements. Book a sedan, SUV, Innova, Ertiga, or luxury car for your Pune to Mumbai journey with convenient pickup arrangements and experienced drivers. Contact Pandit Cab to enquire about the Pune Mumbai cab fare, taxi charges, vehicle options, and travel schedule before confirming your booking.",
  topPlaces: [
    {
      title: "Gateway of India",
      description: "Visit the iconic Gateway of India, one of Mumbai's most recognised waterfront landmarks. Its location near the Arabian Sea and Colaba makes it a popular destination for sightseeing, photography, and exploring the historic surroundings after arriving from Pune."
    },
    {
      title: "Marine Drive",
      description: "Marine Drive is a favourite destination for enjoying Mumbai's coastal views and city atmosphere. Passengers travelling from Pune can plan a visit to this scenic promenade for an evening walk, sea-facing views, and a relaxing break during their Mumbai trip."
    },
    {
      title: "Chhatrapati Shivaji Maharaj International Airport",
      description: "Mumbai International Airport is an important destination for passengers travelling for domestic or international flights. A pre-arranged Pune to Mumbai airport taxi can help organise a direct transfer to the required terminal, with pickup timing planned according to flight schedules."
    },
    {
      title: "Bandra Kurla Complex",
      description: "Bandra Kurla Complex is a major commercial district with corporate offices, business centres, and conference venues. It is a useful destination for professionals travelling from Pune for meetings, office visits, interviews, and other business commitments."
    },
    {
      title: "Juhu Beach",
      description: "Juhu Beach attracts families, tourists, and visitors looking to enjoy Mumbai's lively coastal surroundings. Travellers can include this popular beach in their sightseeing plans and explore nearby restaurants, shopping areas, and entertainment spots."
    },
    {
      title: "Siddhivinayak Temple",
      description: "Siddhivinayak Temple in Prabhadevi is a well-known religious destination visited by devotees throughout the year. A private cab from Pune offers a convenient way to plan a temple visit along with other important destinations across Mumbai."
    },
    {
      title: "Bandra-Worli Sea Link",
      description: "The Bandra-Worli Sea Link is a prominent infrastructure landmark connecting important parts of Mumbai. Visitors often appreciate its impressive coastal views, while business and leisure travellers can include nearby Bandra and Worli locations in their travel itinerary."
    },
    {
      title: "Powai",
      description: "Powai is a popular Mumbai neighbourhood known for its business establishments, residential communities, educational institutions, and Powai Lake. It is a relevant drop location for families, working professionals, students, and visitors travelling from Pune."
    },
    {
      title: "Colaba Causeway",
      description: "Colaba Causeway is a lively shopping and sightseeing area offering street markets, cafes, and access to several South Mumbai attractions. Passengers planning a city visit can arrange a Pune to Mumbai cab for a comfortable journey to this popular neighbourhood."
    },
    {
      title: "Navi Mumbai",
      description: "Navi Mumbai is an important destination for residential, commercial, educational, and industrial travel. Whether your destination is Vashi, Nerul, Belapur, or another nearby area, a private intercity cab can provide a direct pickup-to-drop journey from Pune."
    }
  ],
  services: [
    {
      name: "Pune To Mumbai Taxi",
      description: "Book a Pune to Mumbai taxi with Pandit Cab for a convenient intercity journey. Choose a suitable vehicle for individual travel, family visits, airport transfers, or business trips, and discuss your preferred pickup point and drop location while booking."
    },
    {
      name: "Pune To Mumbai Cab Service",
      description: "Pandit Cab provides Pune to Mumbai cab service for passengers who prefer private transportation over crowded public travel. Plan your journey with a sedan or larger vehicle according to passenger count, luggage requirements, and travel preferences."
    },
    {
      name: "Pune Mumbai One Way Cab",
      description: "A Pune Mumbai one way cab is a practical choice when you need transportation to Mumbai without planning a return journey on the same booking. Enquire about one-way travel options and confirm the applicable fare, pickup details, and drop arrangements."
    },
    {
      name: "Pune To Mumbai Car Rental",
      description: "Choose Pune to Mumbai car rental for a private road journey with flexible pickup and destination arrangements. Select a vehicle suitable for your travel group and discuss whether you need a direct transfer, multiple stops, or a customised itinerary."
    },
    {
      name: "Pune To Mumbai Taxi Booking",
      description: "Make your Pune to Mumbai taxi booking by sharing your journey date, preferred pickup time, pickup address, destination, and passenger count. Pandit Cab can help you enquire about suitable vehicles and booking charges before you confirm the trip."
    },
    {
      name: "Pune Mumbai Cab Fare",
      description: "The Pune Mumbai cab fare depends on the selected vehicle, one-way or round-trip arrangement, travel date, route requirements, and any additional stops. Contact Pandit Cab for a trip-specific quotation instead of relying on a generic estimated price."
    },
    {
      name: "Pune To Mumbai Taxi Charges",
      description: "Understand the Pune to Mumbai taxi charges before finalising your travel plan. Ask for details about the applicable fare, included kilometres, tolls, parking, driver allowance, and other relevant trip conditions so you can plan your budget clearly."
    },
    {
      name: "Pune To Mumbai Drop Service",
      description: "Arrange a Pune to Mumbai drop service for a direct journey to your home, office, hotel, airport, or another preferred destination. Doorstep pickup and destination details can be discussed in advance to make the transfer more convenient."
    },
    {
      name: "Pune To Mumbai Round Trip Cab",
      description: "Book a Pune to Mumbai round trip cab when you plan to return to Pune after completing your work, shopping, family visit, or sightseeing. Share your return date and expected waiting duration to enquire about an appropriate round-trip package."
    },
    {
      name: "Pune To Mumbai Sedan Rental",
      description: "Pune to Mumbai sedan rental is suitable for individuals, couples, and small families looking for a practical private travel option. Enquire about available sedan models, passenger capacity, luggage space, and the fare for your selected journey."
    },
    {
      name: "Pune To Mumbai Innova Cab",
      description: "Choose a Pune to Mumbai Innova cab for family travel, group transfers, and journeys requiring additional passenger and luggage space. Confirm the available Innova model, seating arrangement, and trip quotation with Pandit Cab before booking."
    },
    {
      name: "Pune To Mumbai Ertiga Taxi",
      description: "A Pune to Mumbai Ertiga taxi offers a useful option for families and small groups travelling together. Its practical seating layout makes it suitable for intercity transfers, subject to passenger and luggage requirements."
    },
    {
      name: "Pune Mumbai Airport Drop",
      description: "Arrange a Pune Mumbai airport drop for a planned departure from Chhatrapati Shivaji Maharaj International Airport. Share your flight timing, terminal, pickup location, and luggage details so the journey can be scheduled with an appropriate time buffer."
    },
    {
      name: "Pune To Mumbai Outstation Cab",
      description: "Pandit Cab offers outstation cab booking options for passengers travelling between Pune and Mumbai. Whether the trip is for personal work, a family occasion, or a business requirement, choose a vehicle and travel arrangement that matches your itinerary."
    },
    {
      name: "Pune Mumbai Private Taxi",
      description: "Travel with a Pune Mumbai private taxi when you prefer a dedicated vehicle for your group instead of sharing the journey with unknown passengers. Discuss your pickup address, drop location, travel time, and preferred car category during booking."
    },
    {
      name: "Pune To Mumbai Car Hire",
      description: "Pune to Mumbai car hire is convenient for passengers who want a private vehicle with a driver for their intercity travel. Select from available car categories and enquire about one-way, return, or customised travel arrangements."
    },
    {
      name: "Pune Mumbai Travel Service",
      description: "Use Pandit Cab's Pune Mumbai travel service for planned journeys involving residential, commercial, airport, and tourist destinations. Share your complete travel requirements to find a suitable cab arrangement for your trip."
    },
    {
      name: "Pune To Mumbai Family Trip Cab",
      description: "Plan a Pune to Mumbai family trip cab for visiting relatives, attending celebrations, exploring tourist attractions, or enjoying a weekend outing. Choose a vehicle based on the number of family members and the luggage you expect to carry."
    },
    {
      name: "Pune To Mumbai Corporate Travel",
      description: "Pune to Mumbai corporate travel cab arrangements are useful for office meetings, client visits, conferences, and business appointments. Companies and professionals can enquire about private transfers, scheduled pickups, and suitable vehicle categories."
    },
    {
      name: "Pune To Mumbai Driver Service",
      description: "Arrange a Pune to Mumbai driver service through a suitable cab booking when you need a driver-assisted intercity journey. Confirm the vehicle arrangement, driver details, pickup schedule, and applicable charges before starting your trip."
    },
    {
      name: "Pune Mumbai Pickup And Drop",
      description: "Pune Mumbai pickup and drop service helps passengers plan travel from their preferred Pune address to a specific Mumbai destination. Provide accurate location details to coordinate a convenient point-to-point transfer."
    },
    {
      name: "Pune To Mumbai Luxury Car",
      description: "Choose a Pune to Mumbai luxury car for premium personal travel, special occasions, executive visits, or comfortable long-distance transportation. Enquire about the available premium vehicle models, passenger capacity, and booking terms."
    },
    {
      name: "Pune To Mumbai SUV Rental",
      description: "Pune to Mumbai SUV rental is a suitable choice for families and groups who prefer a spacious vehicle for their road journey. Ask about available SUV options, seating capacity, luggage accommodation, and the total trip quotation."
    },
    {
      name: "Affordable Pune To Mumbai Cab",
      description: "Find an affordable Pune to Mumbai cab by comparing available vehicle categories and booking arrangements for your journey. Share your travel details with Pandit Cab to receive a quotation that matches your passenger count and trip requirements."
    },
    {
      name: "Best Taxi From Pune To Mumbai",
      description: "When selecting the best taxi from Pune to Mumbai, consider vehicle condition, passenger comfort, driver experience, transparent fare details, and convenient pickup arrangements. Pandit Cab helps travellers enquire about suitable private cab options for their route."
    },
    {
      name: "Pune To Mumbai Online Cab Booking",
      description: "Pune to Mumbai online cab booking makes it easier to enquire about your intercity journey in advance. Share the travel date, pickup and drop locations, passenger count, and preferred vehicle to discuss availability and booking confirmation."
    },
    {
      name: "Pune Mumbai Return Taxi",
      description: "A Pune Mumbai return taxi is useful when you need transportation to Mumbai as well as a planned journey back to Pune. Provide your return date and timing so the fare can be discussed according to the complete travel schedule."
    },
    {
      name: "Pune To Mumbai Bus Alternative Cab",
      description: "Choose a Pune to Mumbai bus alternative cab if you prefer private, direct transportation with pickup from your chosen location. A dedicated taxi can be more convenient for families, passengers carrying luggage, and travellers with specific arrival requirements."
    },
    {
      name: "Pune To Mumbai Doorstep Pickup",
      description: "Arrange Pune to Mumbai doorstep pickup for a more convenient start to your intercity journey. Provide your home, hotel, office, or other pickup address along with your destination to coordinate the cab transfer."
    },
    {
      name: "Pune To Mumbai Intercity Cab",
      description: "A Pune to Mumbai intercity cab provides private road transportation between two major Maharashtra cities. It is suitable for personal visits, business travel, airport transfers, and family journeys with flexible pickup and drop arrangements."
    },
    {
      name: "Pune Mumbai 24 Hour Taxi",
      description: "Enquire about a Pune Mumbai 24 hour taxi for early-morning departures, late-night travel, and journeys outside regular daytime schedules. Advance booking is recommended so the pickup time and vehicle arrangement can be confirmed."
    },
    {
      name: "Pune To Mumbai Airport Taxi Booking",
      description: "Complete your Pune to Mumbai airport taxi booking by sharing your flight departure time, airport terminal, Pune pickup address, and passenger details. Plan the journey with sufficient time for highway traffic, airport entry, and check-in requirements."
    },
    {
      name: "Pune To Mumbai Tourist Cab",
      description: "Book a Pune to Mumbai tourist cab for sightseeing, shopping, family outings, and visits to popular city attractions. If you plan to cover multiple places, share your itinerary in advance to discuss the route and suitable travel package."
    },
    {
      name: "Pune Mumbai Car Transfer",
      description: "Pune Mumbai car transfer is a convenient option for passengers who need a private vehicle to move between specific addresses in both cities. Enquire about direct transfers for residential, commercial, hotel, and airport destinations."
    },
    {
      name: "Pune To Mumbai Travel Cab",
      description: "Choose a Pune to Mumbai travel cab for a planned road journey with a dedicated vehicle and driver. Pandit Cab can help you discuss car categories, pickup arrangements, destination details, and the applicable fare for your travel date."
    },
    {
      name: "Book One Way Taxi Pune To Mumbai",
      description: "Book one way taxi Pune to Mumbai when your travel plan requires a single drop without a return transfer. Share your preferred pickup time and exact destination to enquire about the one-way cab fare and suitable vehicle options."
    }
  ],
  tableData: [
    ["Pune To Mumbai Taxi"],
    ["Pune To Mumbai Cab Service"],
    ["Pune Mumbai One Way Cab"],
    ["Pune To Mumbai Car Rental"],
    ["Pune To Mumbai Taxi Booking"],
    ["Pune Mumbai Cab Fare"],
    ["Pune To Mumbai Taxi Charges"],
    ["Pune To Mumbai Drop Service"],
    ["Pune To Mumbai Round Trip Cab"],
    ["Pune To Mumbai Sedan Rental"],
    ["Pune To Mumbai Innova Cab"],
    ["Pune To Mumbai Ertiga Taxi"],
    ["Pune Mumbai Airport Drop"],
    ["Pune To Mumbai Outstation Cab"],
    ["Pune Mumbai Private Taxi"],
    ["Pune To Mumbai Car Hire"],
    ["Pune Mumbai Travel Service"],
    ["Pune To Mumbai Family Trip Cab"],
    ["Pune To Mumbai Corporate Travel"],
    ["Pune To Mumbai Driver Service"],
    ["Pune Mumbai Pickup And Drop"],
    ["Pune To Mumbai Luxury Car"],
    ["Pune To Mumbai SUV Rental"],
    ["Affordable Pune To Mumbai Cab"],
    ["Best Taxi From Pune To Mumbai"],
    ["Pune To Mumbai Online Cab Booking"],
    ["Pune Mumbai Return Taxi"],
    ["Pune To Mumbai Bus Alternative Cab"],
    ["Pune To Mumbai Doorstep Pickup"],
    ["Pune To Mumbai Intercity Cab"],
    ["Pune Mumbai 24 Hour Taxi"],
    ["Pune To Mumbai Airport Taxi Booking"],
    ["Pune To Mumbai Tourist Cab"],
    ["Pune Mumbai Car Transfer"],
    ["Pune To Mumbai Travel Cab"],
    ["Book One Way Taxi Pune To Mumbai"]
  ],
  whychoose: [
    {
      WhyChooseheading: "Convenient Intercity Cab Booking",
      WhyChoosedescription: "Pandit Cab makes it easier to arrange private transportation between Pune and Mumbai for personal, family, and professional travel. Share your journey details, preferred vehicle, and pickup schedule to enquire about an appropriate cab booking."
    },
    {
      WhyChooseheading: "Multiple Vehicle Categories",
      WhyChoosedescription: "Different journeys require different vehicle arrangements. Passengers can enquire about sedan, Ertiga, Innova, SUV, and luxury car options depending on group size, luggage requirements, and preferred level of comfort."
    },
    {
      WhyChooseheading: "One-Way And Round-Trip Options",
      WhyChoosedescription: "Whether you need a single drop in Mumbai or a return journey to Pune, you can discuss the appropriate booking arrangement with Pandit Cab. Sharing your complete itinerary helps clarify the fare and travel schedule."
    },
    {
      WhyChooseheading: "Flexible Pickup And Drop Locations",
      WhyChoosedescription: "Plan your journey from a preferred Pune address to an airport, office, hotel, residential area, or other destination in Mumbai. Providing accurate pickup and drop details helps coordinate a convenient point-to-point transfer."
    },
    {
      WhyChooseheading: "Suitable For Families And Groups",
      WhyChoosedescription: "From individual passengers to families and small groups, Pandit Cab offers different vehicle categories to consider for Pune Mumbai travel. Select a car according to the number of passengers and the luggage you need to accommodate."
    },
    {
      WhyChooseheading: "Airport And Corporate Transfers",
      WhyChoosedescription: "Arrange intercity transportation for Mumbai airport departures, corporate meetings, office visits, and business appointments. Advance planning with flight or meeting timings helps you organise a more suitable pickup schedule."
    },
    {
      WhyChooseheading: "Fare Details Before Confirmation",
      WhyChoosedescription: "Get a trip-specific quotation before confirming your Pune to Mumbai taxi booking. Ask about the vehicle fare, tolls, parking, driver allowance, waiting charges, and any other applicable costs to understand the overall travel expense."
    },
    {
      WhyChooseheading: "Planned Travel With Driver Assistance",
      WhyChoosedescription: "A dedicated cab and driver arrangement can make an intercity journey more convenient, particularly when travelling with family, luggage, or a fixed schedule. Share your requirements in advance and confirm the vehicle, pickup time, and booking conditions with Pandit Cab."
    }
  ]
};










const faqData = [
  {
    question: "How do I book a Pune to Mumbai taxi cab with Pandit Cab?",
    answer: "To arrange a Pune to Mumbai taxi cab with Pandit Cab, share your pickup address, destination in Mumbai, travel date, preferred departure time, and passenger count. You can discuss suitable vehicle options and confirm the applicable fare before finalising your reservation."
  },
  {
    question: "What is the approximate Pune to Mumbai taxi cab distance?",
    answer: "The road distance from Pune to Mumbai is approximately 150 to 160 km, depending on your pickup and drop-off locations. The journey generally follows the Mumbai–Pune Expressway, connecting major areas of both cities."
  },
  {
    question: "How many hours are required to travel from Pune to Mumbai by taxi?",
    answer: "Travelling from Pune to Mumbai by taxi usually takes around 3 to 4.5 hours. Traffic near expressway entry points, road conditions, weather, and your final destination in Mumbai can affect the overall journey duration."
  },
  {
    question: "Can I hire a Pune to Mumbai taxi cab for a one-way journey?",
    answer: "Yes, Pandit Cab can help you enquire about one-way taxi arrangements from Pune to Mumbai. This option is suitable for airport transfers, corporate travel, relocation, and personal visits. Provide your exact travel details to check the available booking arrangements."
  },
  {
    question: "Are round-trip Pune to Mumbai taxi services available?",
    answer: "You can enquire about round-trip taxi arrangements for travelling from Pune to Mumbai and returning on the same day or a later date. Share your return schedule, expected waiting time, and travel requirements to discuss a suitable cab arrangement."
  },
  {
    question: "Which taxi is suitable for a Pune to Mumbai family journey?",
    answer: "Families can choose a vehicle according to their passenger count, luggage space, and comfort preferences. Hatchbacks and sedans may suit smaller groups, while Maruti Ertiga and Toyota Innova options can be considered for larger families, subject to availability."
  },
  {
    question: "Can I book a Pune to Mumbai taxi for an airport drop?",
    answer: "Yes, you can enquire about a private taxi from Pune to Chhatrapati Shivaji Maharaj International Airport in Mumbai. Share your flight departure time, airport terminal, pickup location, and preferred reporting time so that the journey can be planned accordingly."
  },
  {
    question: "Does Pandit Cab provide Pune to Mumbai taxi service for corporate travel?",
    answer: "Pandit Cab can assist with enquiries for corporate taxi travel between Pune and Mumbai. Whether you have a client meeting, office visit, conference, or business appointment, you can discuss pickup timings, destination details, and suitable vehicle arrangements."
  },
  {
    question: "How much does a Pune to Mumbai taxi cab cost?",
    answer: "The Pune to Mumbai taxi cost depends on the vehicle selected, journey type, pickup and drop locations, travel date, and additional requirements. Contact Pandit Cab with your complete itinerary to check the applicable one-way or round-trip fare."
  },
  {
    question: "Can I reserve a Pune to Mumbai taxi for late-night or early-morning travel?",
    answer: "You can enquire about late-night and early-morning taxi bookings from Pune to Mumbai according to your travel schedule. These services can be useful for airport journeys, business commitments, and personal travel. Advance booking is recommended to coordinate the preferred departure time and vehicle availability."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Nikhil Shinde",
    feedback: "I regularly need to travel between Pune and Mumbai for professional commitments. This time, I contacted Pandit Cab to discuss a private taxi for my meeting schedule. The team helped me understand the vehicle options and booking arrangements, making it easier to organise my intercity travel.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Prajakta Sawant",
    feedback: "We had to travel from Pune to Mumbai with several family members and luggage. Finding a suitable taxi was an important part of our planning. Pandit Cab helped us discuss a spacious vehicle and the required pickup details. The overall booking coordination was useful for our family journey.",
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
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune To Mumbai Taxi Cabs",
  "image": "https://www.panditcabs.com/assets/images/pune-to-mumbai-taxi-cabs.webp",
  "description": "Book Pune to Mumbai Taxi Cabs with Pandit Cabs for comfortable, convenient, and reliable intercity travel. We provide Pune to Mumbai taxi services for one-way drops, round trips, airport transfers, business journeys, family travel, and personal trips. Choose a suitable vehicle for your journey and enjoy a convenient Pune to Mumbai cab service with experienced drivers and a planned travel route. Whether you need a Pune Mumbai one way cab, Pune to Mumbai car rental, or a Pune to Mumbai drop service, you can contact us for booking details and fare information. Our Pune to Mumbai taxi booking service helps passengers plan travel according to their pickup location, destination, travel date, passenger count, and luggage requirements. Get information about Pune Mumbai cab fare, Pune to Mumbai taxi charges, and available vehicle options before confirming your trip. Pandit Cabs makes intercity travel between Pune and Mumbai easier for airport transfers, corporate visits, family outings, and personal transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Pandit Cabs"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.panditcabs.com/pune-to-mumbai-taxi-cabs"
  }
};






  return (
    <div>
<Helmet>
  <title>Pune To Mumbai Taxi Cabs | One Way Cab & Car Rental - +91 9890121689</title>
  <meta
    name="description"
    content="Book Pune to Mumbai taxi cabs with Pandit Cabs. Get one way cab service, car rental, taxi booking, airport drops and fare details. Call +91 9890121689."
  />
  <meta
    name="keywords"
    content="pune to mumbai taxi, pune to mumbai cab service, pune mumbai one way cab, pune to mumbai car rental, pune to mumbai taxi booking, pune mumbai cab fare, pune to mumbai taxi charges, pune to mumbai drop service"
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
              <img src='/images/keyword/12.jpg' alt='img' className='img-fluid' />
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

export default Punetomumbaitaxicab;