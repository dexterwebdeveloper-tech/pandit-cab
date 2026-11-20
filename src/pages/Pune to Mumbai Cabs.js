import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetomumbaicabs() {








const cardData = {
  keyword: "Pune To Mumbai Cabs",
  headingDescription:
    "Book a comfortable Pune to Mumbai cab with Pandit Cab for airport transfers, business travel, family visits, and outstation journeys. Choose from sedan, hatchback, Dzire, Etios, Ertiga, Innova, Innova Crysta, SUV, and tempo traveller options according to your travel requirements. Whether you need a one-way taxi, Mumbai Airport drop, corporate cab, or private car rental, arrange convenient pickup from Pune with suitable drop-off options across Mumbai.",

  topPlaces: [
    {
      title: "Chhatrapati Shivaji Maharaj International Airport",
      description:
        "Travel directly to Mumbai's international airport for domestic or international flight departures. A pre-booked Pune to Mumbai airport cab helps coordinate your pickup time, luggage requirements, and terminal drop-off according to your flight schedule."
    },
    {
      title: "Bandra Kurla Complex",
      description:
        "Bandra Kurla Complex is a major business district with corporate offices, financial institutions, and commercial establishments. Book a private cab from Pune for meetings, office visits, and professional travel to this important Mumbai business hub."
    },
    {
      title: "Andheri",
      description:
        "Andheri is a busy Mumbai locality with residential neighbourhoods, commercial centres, and transport connections. Arrange a direct cab from Pune to reach your preferred address conveniently for business, family, or personal travel."
    },
    {
      title: "Powai",
      description:
        "Powai is known for its business parks, residential communities, and scenic Powai Lake. A private Pune to Mumbai taxi is convenient for passengers travelling to offices, educational institutions, hotels, and residential locations in the area."
    },
    {
      title: "South Mumbai",
      description:
        "Explore South Mumbai's commercial districts, historic landmarks, and prominent waterfront areas with a convenient private cab from Pune. Share your exact destination to coordinate a direct drop at your preferred location."
    },
    {
      title: "Dadar",
      description:
        "Dadar is an important residential and commercial locality with railway connections, markets, and busy shopping areas. Book a Pune to Mumbai cab for convenient transportation to your home, workplace, or meeting destination."
    },
    {
      title: "Worli",
      description:
        "Worli is a prominent Mumbai neighbourhood featuring business establishments, residential developments, and coastal views. Arrange a private taxi from Pune for convenient travel to offices, hotels, and other destinations in the locality."
    },
    {
      title: "Thane",
      description:
        "Thane is a major urban destination within the Mumbai Metropolitan Region, with residential areas, business centres, and shopping destinations. Plan a direct cab journey from Pune for convenient travel to your preferred address."
    },
    {
      title: "Navi Mumbai",
      description:
        "Navi Mumbai includes several planned residential and commercial nodes, making it a frequent destination for business and personal travel. Book a private cab from Pune and specify your destination, such as Vashi, Nerul, or Belapur."
    },
    {
      title: "Juhu",
      description:
        "Juhu is a popular Mumbai neighbourhood known for its beach, hotels, restaurants, and residential surroundings. A private cab from Pune provides a convenient way to reach this destination for leisure visits, hotel transfers, and family travel."
    }
  ],

  services: [
    {
      name: "Pune To Mumbai Airport Cab",
      description:
        "Book a direct airport transfer from Pune to Mumbai with Pandit Cab. Share your flight departure time, preferred pickup address, terminal details, and passenger count to coordinate a convenient airport drop."
    },
    {
      name: "Pune Mumbai Cab",
      description:
        "Choose a private Pune Mumbai cab for business meetings, family visits, airport transfers, and personal travel. Select a suitable vehicle and arrange pickup and drop-off according to your journey requirements."
    },
    {
      name: "Pune To Mumbai Taxi",
      description:
        "Arrange a private taxi from Pune to Mumbai for a comfortable intercity journey. This option is suitable for individuals, couples, families, and groups who prefer direct transportation to their chosen Mumbai destination."
    },
    {
      name: "Pune To Mumbai Airport Cab Fare",
      description:
        "Enquire about the Pune to Mumbai airport cab fare according to your pickup point, vehicle category, and travel schedule. Confirm the complete quotation and applicable inclusions before booking your airport transfer."
    },
    {
      name: "Pune Mumbai Airport Drop",
      description:
        "Plan a timely airport drop from Pune to Mumbai by sharing your flight departure time and pickup address. Choose an appropriate vehicle based on your passenger count and luggage requirements."
    },
    {
      name: "Best Cab Service Pune To Mumbai",
      description:
        "Find a cab service that suits your preferred travel time, vehicle category, and budget for the Pune to Mumbai route. Pandit Cab helps organise private transfers for airport travel, business visits, and personal journeys."
    },
    {
      name: "Pune To Mumbai Cab Service",
      description:
        "Pandit Cab offers private cab booking assistance for journeys between Pune and Mumbai. Enquire about available cars, pickup locations, destination addresses, and one-way or return trip arrangements."
    },
    {
      name: "Pune To Mumbai Cab Fare",
      description:
        "Check the applicable cab fare for your Pune to Mumbai journey before confirming the reservation. Pricing may depend on the vehicle category, pickup location, destination, and selected trip arrangement."
    },
    {
      name: "Pune To Mumbai Cab Charges",
      description:
        "Get information about cab charges for your planned Pune to Mumbai trip. Discuss the vehicle type, one-way or round-trip requirement, and any additional travel conditions to understand the complete quotation."
    },
    {
      name: "Pune Mumbai Taxi Fare",
      description:
        "Enquire about the taxi fare between Pune and Mumbai according to your preferred pickup and drop locations. The final quotation can vary with vehicle selection, journey schedule, and trip requirements."
    },
    {
      name: "Pune To Mumbai International Airport Cab",
      description:
        "Arrange a private cab from Pune to Chhatrapati Shivaji Maharaj International Airport for international flight departures. Share your terminal, flight timing, pickup address, and luggage details when making your booking enquiry."
    },
    {
      name: "Pune To Mumbai Cab Price",
      description:
        "Understand the Pune to Mumbai cab price before planning your journey. Request a quotation based on your preferred car, pickup point, drop location, and one-way or return travel requirements."
    },
    {
      name: "Pune To Mumbai Taxi One Way",
      description:
        "Book a one-way taxi from Pune to Mumbai when you only require a drop at your destination. This arrangement is suitable for airport transfers, office visits, relocation travel, and personal journeys."
    },
    {
      name: "Pune To Mumbai Innova Cab",
      description:
        "Choose an Innova cab for a spacious journey from Pune to Mumbai with family or friends. It is a convenient option for passengers who need additional seating space and room for luggage."
    },
    {
      name: "Pune To Mumbai Airport Cab Price",
      description:
        "Check the airport cab price from Pune according to your pickup address, selected vehicle, and required drop terminal. Confirm the fare and booking conditions before scheduling your airport transfer."
    },
    {
      name: "Pune To Mumbai Cab Booking",
      description:
        "Complete your Pune to Mumbai cab booking by sharing your travel date, pickup location, destination, passenger count, and preferred vehicle. Advance coordination helps organise your journey around your schedule."
    },
    {
      name: "Pune To Mumbai Cab Cost",
      description:
        "Get an estimate of the total cab cost for your Pune to Mumbai journey. Charges may depend on the selected car category, pickup and drop locations, trip type, and any additional requirements."
    },
    {
      name: "Pune To Mumbai Airport Taxi",
      description:
        "Book an airport taxi from Pune for convenient travel to Mumbai Airport. Share your flight details and preferred pickup time to help coordinate a suitable vehicle for your departure."
    },
    {
      name: "Pune To Mumbai Airport Drop Innova",
      description:
        "Choose an Innova for your Pune to Mumbai airport drop when you need a spacious vehicle for family members and luggage. Confirm the terminal, reporting time, and applicable fare while arranging your booking."
    },
    {
      name: "Pune Mumbai Car Hire",
      description:
        "Hire a private car for travel between Pune and Mumbai for business visits, family journeys, airport transfers, or personal requirements. Select a vehicle according to your passenger capacity and travel preferences."
    },
    {
      name: "Pune Mumbai Pune Cab",
      description:
        "Arrange a return cab for travel from Pune to Mumbai and back to Pune. This option is useful for meetings, family visits, shopping trips, and other journeys where return transportation is required."
    },
    {
      name: "Best Pune To Mumbai Cab Service",
      description:
        "Choose a Pune to Mumbai cab service based on your travel requirements, preferred vehicle, and pickup schedule. Enquire about available cars and fare details before confirming your private intercity journey."
    },
    {
      name: "Cheap Cabs From Mumbai To Pune",
      description:
        "Travellers returning from Mumbai can enquire about budget-friendly cab options to Pune. Compare suitable vehicle categories and confirm the applicable fare, pickup point, and drop-off arrangements before booking."
    },
    {
      name: "Pune To Mumbai Cabs",
      description:
        "Book Pune to Mumbai cabs for airport transfers, corporate travel, family visits, and outstation journeys. Choose from available vehicle categories and coordinate a convenient pickup and destination drop."
    },
    {
      name: "Pune To Mumbai Cab",
      description:
        "Arrange a private cab from Pune to Mumbai for direct point-to-point travel. Share your journey details and preferred car category to organise transportation according to your schedule."
    },
    {
      name: "Pune To Mumbai Taxi",
      description:
        "Travel between Pune and Mumbai with a private taxi arranged according to your pickup and drop requirements. Enquire about sedan, hatchback, SUV, and larger vehicle options for your journey."
    },
    {
      name: "Pune To Mumbai Cab Booking",
      description:
        "Reserve your cab in advance for a planned Pune to Mumbai journey. Provide the travel date, pickup address, destination, number of passengers, and preferred vehicle to coordinate the booking."
    },
    {
      name: "Pune To Mumbai Taxi Service",
      description:
        "Choose a taxi service for private intercity transportation from Pune to Mumbai. It is suitable for passengers travelling for business, airport transfers, family occasions, and personal commitments."
    },
    {
      name: "Pune Mumbai Cab Service",
      description:
        "Pandit Cab helps organise private cab services between Pune and Mumbai with vehicle options for different passenger requirements. Discuss your preferred pickup time, destination, and trip type before confirming."
    },
    {
      name: "Cab From Pune To Mumbai",
      description:
        "Book a cab from Pune to Mumbai for a direct journey to your preferred residential, commercial, or airport destination. Select an available vehicle that matches your group size and luggage needs."
    },
    {
      name: "Taxi From Pune To Mumbai",
      description:
        "Arrange a private taxi from Pune for convenient travel to Mumbai. Share your pickup and drop-off details to receive suitable vehicle options and information about the applicable trip fare."
    },
    {
      name: "Pune To Mumbai Car Rental",
      description:
        "Choose a car rental service for your Pune to Mumbai journey, whether you are travelling for work, leisure, or a personal visit. Enquire about available cars and rental arrangements according to your schedule."
    },
    {
      name: "Pune To Mumbai Outstation Cab",
      description:
        "Book an outstation cab for travel between Pune and Mumbai with convenient pickup and drop arrangements. Discuss whether you need a one-way journey or return transportation when requesting a quotation."
    },
    {
      name: "Pune To Mumbai Sedan Cab",
      description:
        "A sedan cab is a practical option for couples, small families, and business travellers travelling from Pune to Mumbai. Choose an available sedan according to your passenger count and luggage requirements."
    },
    {
      name: "Pune To Mumbai Hatchback Cab",
      description:
        "Book a hatchback cab for a convenient journey from Pune to Mumbai when travelling individually or with a small group. Enquire about vehicle availability and luggage capacity before confirming your trip."
    },
    {
      name: "Pune To Mumbai Dzire Cab",
      description:
        "Choose a Dzire cab for a comfortable private journey from Pune to Mumbai. This sedan option is suitable for small families, couples, and passengers looking for convenient intercity transportation."
    },
    {
      name: "Pune To Mumbai Etios Cab",
      description:
        "Arrange an Etios cab for your Pune to Mumbai trip when you prefer a private sedan. Confirm the available vehicle, pickup schedule, and fare details while making your booking enquiry."
    },
    {
      name: "Pune To Mumbai Ertiga Cab",
      description:
        "An Ertiga cab is a useful option for families and small groups travelling from Pune to Mumbai. Its multi-row seating arrangement provides additional passenger capacity compared with a standard sedan."
    },
    {
      name: "Pune To Mumbai Innova Cab",
      description:
        "Book an Innova cab for a spacious journey between Pune and Mumbai. It is suitable for family travel, group transfers, and passengers carrying additional luggage."
    },
    {
      name: "Pune To Mumbai Innova Crysta",
      description:
        "Choose an Innova Crysta for a spacious and comfortable Pune to Mumbai journey. Enquire about availability and applicable rental charges for airport transfers, corporate travel, or family transportation."
    },
    {
      name: "Pune To Mumbai SUV Cab",
      description:
        "Select an SUV cab for your Pune to Mumbai journey when you prefer a larger vehicle with additional cabin space. Discuss the available models and seating capacity according to your group requirements."
    },
    {
      name: "Pune To Mumbai 7-Seater Cab",
      description:
        "A seven-seater cab can be a convenient choice for larger families and groups travelling from Pune to Mumbai. Confirm the actual seating configuration, luggage capacity, and vehicle availability before booking."
    },
    {
      name: "Pune To Mumbai Tempo Traveller",
      description:
        "Arrange a tempo traveller for group transportation between Pune and Mumbai. It is suitable for corporate outings, family gatherings, events, and group airport transfers. Share your passenger count to enquire about the right vehicle size."
    },
    {
      name: "Pune To Mumbai Luxury Cab",
      description:
        "Choose a luxury cab for a premium travel experience between Pune and Mumbai. Enquire about available premium vehicle models, seating arrangements, and applicable charges before finalising your reservation."
    },
    {
      name: "Pune To Mumbai Corporate Taxi",
      description:
        "Arrange corporate taxi services for employees, business meetings, client visits, and professional travel between Pune and Mumbai. Discuss pickup schedules, passenger requirements, and recurring transportation needs with the booking team."
    }
  ],

  tableData: [
    ["Pune To Mumbai Airport Cab"],
    ["Pune Mumbai Cab"],
    ["Pune To Mumbai Taxi"],
    ["Pune To Mumbai Airport Cab Fare"],
    ["Pune Mumbai Airport Drop"],
    ["Best Cab Service Pune To Mumbai"],
    ["Pune To Mumbai Cab Service"],
    ["Pune To Mumbai Cab Fare"],
    ["Pune To Mumbai Cab Charges"],
    ["Pune Mumbai Taxi Fare"],
    ["Pune To Mumbai International Airport Cab"],
    ["Pune To Mumbai Cab Price"],
    ["Pune To Mumbai Taxi One Way"],
    ["Pune To Mumbai Innova Cab"],
    ["Pune To Mumbai Airport Cab Price"],
    ["Pune To Mumbai Cab Booking"],
    ["Pune To Mumbai Cab Cost"],
    ["Pune To Mumbai Airport Taxi"],
    ["Pune To Mumbai Airport Drop Innova"],
    ["Pune Mumbai Car Hire"],
    ["Pune Mumbai Pune Cab"],
    ["Best Pune To Mumbai Cab Service"],
    ["Cheap Cabs From Mumbai To Pune"],
    ["Pune To Mumbai Cabs"],
    ["Pune To Mumbai Cab"],
    ["Pune To Mumbai Taxi"],
    ["Pune To Mumbai Cab Booking"],
    ["Pune To Mumbai Taxi Service"],
    ["Pune Mumbai Cab Service"],
    ["Cab From Pune To Mumbai"],
    ["Taxi From Pune To Mumbai"],
    ["Pune To Mumbai Car Rental"],
    ["Pune To Mumbai Outstation Cab"],
    ["Pune To Mumbai Sedan Cab"],
    ["Pune To Mumbai Hatchback Cab"],
    ["Pune To Mumbai Dzire Cab"],
    ["Pune To Mumbai Etios Cab"],
    ["Pune To Mumbai Ertiga Cab"],
    ["Pune To Mumbai Innova Cab"],
    ["Pune To Mumbai Innova Crysta"],
    ["Pune To Mumbai SUV Cab"],
    ["Pune To Mumbai 7-Seater Cab"],
    ["Pune To Mumbai Tempo Traveller"],
    ["Pune To Mumbai Luxury Cab"],
    ["Pune To Mumbai Corporate Taxi"]
  ],

  whychoose: [
    {
      WhyChooseheading: "Private Intercity Cab Service",
      WhyChoosedescription:
        "Pandit Cab helps passengers arrange private transportation between Pune and Mumbai for airport transfers, business visits, family travel, and personal journeys. Choose a suitable vehicle and coordinate your pickup and drop-off according to your schedule."
    },
    {
      WhyChooseheading: "Convenient Mumbai Airport Transfers",
      WhyChoosedescription:
        "Plan a direct transfer from Pune to Chhatrapati Shivaji Maharaj International Airport with pickup timing based on your flight schedule. Share your terminal details, luggage requirements, and departure time to coordinate the airport drop."
    },
    {
      WhyChooseheading: "Multiple Vehicle Categories",
      WhyChoosedescription:
        "Choose from hatchbacks, sedans, Dzire, Etios, Ertiga, Innova, Innova Crysta, SUVs, and tempo travellers, subject to availability. These options help individuals, families, and groups select a vehicle according to passenger capacity and luggage needs."
    },
    {
      WhyChooseheading: "One-Way And Return Journey Options",
      WhyChoosedescription:
        "Whether you need a one-way taxi to Mumbai or a return cab back to Pune, discuss the appropriate trip arrangement during booking. Confirm the travel schedule, waiting requirements, and applicable charges before finalising your reservation."
    },
    {
      WhyChooseheading: "Pickup From Preferred Locations",
      WhyChoosedescription:
        "Arrange pickup from your home, office, hotel, or another preferred location in Pune. Provide your exact pickup address and Mumbai destination to coordinate a direct journey that suits your travel requirements."
    },
    {
      WhyChooseheading: "Corporate And Business Travel",
      WhyChoosedescription:
        "Plan transportation for office meetings, client visits, employee transfers, and corporate travel between Pune and Mumbai. Discuss passenger requirements and scheduling needs when enquiring about individual or recurring cab arrangements."
    },
    {
      WhyChooseheading: "Clear Fare And Booking Details",
      WhyChoosedescription:
        "Get information about the applicable cab fare before confirming your journey. Charges may depend on the vehicle category, pickup and drop locations, one-way or round-trip booking, and other travel requirements."
    },
    {
      WhyChooseheading: "Suitable For Families And Group Travel",
      WhyChoosedescription:
        "Travel together with family members, colleagues, or friends by selecting a vehicle with suitable seating and luggage capacity. Pandit Cab helps you enquire about different car categories for small groups and larger travel requirements."
    }
  ]
};










const faqData = [
  {
    question: "How can I book a Pune to Mumbai cab with Pandit Cab?",
    answer: "You can book a Pune to Mumbai cab with Pandit Cab by sharing your pickup address, Mumbai drop location, travel date, preferred departure time, and passenger details. Discuss the available vehicle categories and fare before confirming your intercity taxi reservation."
  },
  {
    question: "What is the road distance between Pune and Mumbai by cab?",
    answer: "The approximate road distance between Pune and Mumbai is around 150 to 160 km, depending on the pickup and drop-off locations. Most cab journeys use the Mumbai–Pune Expressway, offering a convenient road connection between the two cities."
  },
  {
    question: "How long does a Pune to Mumbai taxi journey take?",
    answer: "A Pune to Mumbai taxi journey generally takes around 3 to 4.5 hours. The actual duration depends on traffic conditions, your destination within Mumbai, expressway congestion, weather, and departure time."
  },
  {
    question: "Can I reserve a one-way cab from Pune to Mumbai?",
    answer: "Yes, you can enquire about one-way cab services from Pune to Mumbai with Pandit Cab. This arrangement is useful for airport transfers, business meetings, family visits, and personal travel. Provide your exact pickup and drop addresses to check the available booking options."
  },
  {
    question: "Does Pandit Cab provide round-trip taxi services from Pune to Mumbai?",
    answer: "You can enquire about Pune to Mumbai round-trip taxi arrangements for business visits, shopping trips, family functions, or personal requirements. Share your return date, waiting duration, and preferred schedule to discuss a suitable travel package."
  },
  {
    question: "Which cars can I hire for travelling from Pune to Mumbai?",
    answer: "Depending on your group size and luggage requirements, you can enquire about hatchbacks, sedans, Maruti Ertiga, and Toyota Innova vehicles. Pandit Cab can help you explore suitable options based on comfort preferences and vehicle availability."
  },
  {
    question: "Can I book a Pune to Mumbai cab for airport transportation?",
    answer: "Yes, you can discuss private cab arrangements from Pune to Chhatrapati Shivaji Maharaj International Airport or other locations in Mumbai. Share your flight schedule, terminal details, pickup address, and required arrival time to plan the transfer accordingly."
  },
  {
    question: "Is a private taxi suitable for travelling from Pune to Mumbai with family?",
    answer: "A private Pune to Mumbai taxi is a convenient choice for families who prefer travelling together without changing transport modes. You can select a spacious vehicle according to your passenger count, luggage, and comfort requirements while arranging suitable pickup and drop-off timings."
  },
  {
    question: "What is the Pune to Mumbai cab fare?",
    answer: "The Pune to Mumbai cab fare depends on the vehicle category, one-way or round-trip arrangement, pickup and drop locations, travel date, and applicable additional charges. Contact Pandit Cab with your journey details to confirm the fare for your preferred booking."
  },
  {
    question: "Can I arrange an early morning or late-night cab from Pune to Mumbai?",
    answer: "You can enquire about early morning and late-night cab arrangements for travelling between Pune and Mumbai. These timings are useful for airport transfers, office schedules, and time-sensitive journeys. Advance coordination with Pandit Cab is recommended to confirm vehicle availability and your preferred departure time."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Siddhant Bhosale",
    feedback: "I needed a private cab from Pune to Mumbai for an important business meeting near BKC. Pandit Cab helped me discuss the pickup location, departure schedule, and suitable vehicle option. Having a dedicated taxi for the intercity journey made planning my business travel more convenient.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Rutuja Jadhav",
    feedback: "My parents and I were travelling from Pune to Mumbai for a family function. We contacted Pandit Cab to discuss a comfortable vehicle and our preferred drop location. The booking communication was helpful, and arranging our family journey in advance made the travel planning easier.",
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
  "name": "Pune to Mumbai Cabs",
  "image": "https://www.panditcabs.com/assets/images/pune-to-mumbai-cabs.webp",
  "description": "Pune to Mumbai Cabs service is a convenient intercity transportation solution for passengers looking for comfortable and private road travel between Pune and Mumbai. Pandit Cabs provides Pune to Mumbai cab services for families, tourists, business professionals, corporate travelers and individuals requiring reliable city-to-city transportation. Pune Mumbai cab bookings are suitable for airport transfers, business meetings, family visits, shopping trips, hotel transfers and personal travel. Passengers looking for a Pune to Mumbai taxi can arrange private transportation according to their preferred departure time, pickup address and destination. Pune to Mumbai cab service can be planned for residential pickups, office transfers, railway station drops, hotel transportation and direct airport journeys. Pune to Mumbai airport cab services are suitable for travelers who need convenient transfers from Pune to Chhatrapati Shivaji Maharaj International Airport and other airport terminals in Mumbai. Customers can also arrange Pune to Mumbai airport drop services according to their flight departure schedules and preferred reporting times. Pune to Mumbai airport cab fare depends on the pickup location, airport terminal, vehicle category, travel distance, toll charges, parking and additional requirements. Passengers can enquire about Pune to Mumbai cab fare, Pune to Mumbai cab charges and Pune Mumbai taxi fare by sharing their journey details before confirming a booking. Pune to Mumbai cab price varies according to the selected vehicle, one-way or round-trip requirements, journey duration and additional travel arrangements. Customers looking for the best cab service Pune to Mumbai can enquire about comfortable sedan cars, Ertiga and Innova vehicles depending on passenger count and luggage capacity. Pune to Mumbai taxi one way service is suitable for passengers requiring a direct transfer without arranging a return journey, while round-trip bookings can be discussed for business visits, family travel and scheduled appointments. Pune to Mumbai international airport cab arrangements can be coordinated for passengers traveling to international flight terminals and requiring timely airport transportation. The service can also support transfers to Mumbai railway stations, hotels, business districts, commercial establishments and residential areas. Passengers traveling to locations such as Andheri, Bandra, Powai, Thane, Navi Mumbai, Vashi, BKC, Dadar, Lower Parel and other parts of Mumbai can discuss convenient drop-off arrangements. Business travelers can arrange dedicated transportation for corporate meetings and office visits, while families can choose spacious vehicles for comfortable group journeys. Pune to Mumbai cab bookings can be planned for early morning departures, daytime travel, evening transfers and advance reservations, subject to vehicle availability. Customers can also discuss multiple pickups, additional stops, waiting time and customized travel schedules according to their requirements. Pandit Cabs aims to make Pune to Mumbai road travel convenient through organized booking assistance, comfortable vehicle options and flexible transportation arrangements. Passengers can provide their pickup address, Mumbai destination, travel date, departure time, passenger count, luggage details and preferred vehicle category to enquire about availability and applicable cab charges.",
  "brand": {
    "@type": "Brand",
    "name": "Pandit Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "34729"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.panditcabs.com/pune-to-mumbai-cabs"
  }
};



  return (
    <div>

<Helmet>
  <title>
    Pune to Mumbai Cabs | Airport Transfer & One Way Taxi | +91 9890121689
  </title>

  <meta
    name="description"
    content="Book Pune to Mumbai Cabs for one-way taxi journeys, Mumbai airport pickups and drops, international airport transfers and comfortable private outstation travel."
  />

  <meta
    name="keywords"
    content="Pune to Mumbai airport cab, Pune Mumbai cab, Pune to Mumbai taxi, Pune to Mumbai airport cab fare, Pune Mumbai airport drop, Best cab service Pune to Mumbai, Pune to Mumbai cab service, Pune to Mumbai cab fare, Pune to Mumbai cab charges, Pune Mumbai taxi fare, Pune to Mumbai international airport cab, Pune to Mumbai cab price, Pune to Mumbai taxi one way"
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
              <img src='/images/keyword/11.jpg' alt='img' className='img-fluid' />
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

export default Punetomumbaicabs;