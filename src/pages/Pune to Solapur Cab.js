import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetosolapurcab() {









const cardData = {
  keyword: "Pune To Solapur Cab",
  headingDescription: "Pandit Cab offers convenient Pune to Solapur cab services for passengers travelling between Pune, Solapur, and nearby religious destinations in Maharashtra. Whether you need a one-way taxi, round-trip cab, outstation transfer, family pilgrimage vehicle, or private car rental, choose a suitable option according to your travel requirements. Passengers can enquire about Dzire, Etios, sedan, Ertiga, Innova, Innova Crysta, SUV, 7-seater vehicles, and tempo travellers for individual and group journeys. We also arrange pickup enquiries from Hinjewadi, Wakad, Baner, Kothrud, Hadapsar, Kharadi, Viman Nagar, Swargate, Pune Railway Station, and other Pune locations. Travellers visiting Tuljapur, Akkalkot, and Pandharpur can also enquire about suitable cab arrangements. Contact Pandit Cab to check Pune to Solapur cab fares, taxi charges, vehicle availability, one-way packages, and round-trip booking details.",
  topPlaces: [
    {
      title: "Solapur City",
      description: "Solapur City is an important commercial and residential destination in Maharashtra, known for its textile industry, business establishments, educational institutions, and local markets. Passengers travelling from Pune can arrange a direct cab drop to their preferred residential, commercial, or professional destination within the city."
    },
    {
      title: "Siddheshwar Temple",
      description: "Siddheshwar Temple is one of the most prominent religious landmarks in Solapur, dedicated to Lord Siddheshwar. The temple attracts devotees throughout the year, particularly during religious festivals and the annual fair. Passengers travelling from Pune can include this sacred destination in their Solapur visit."
    },
    {
      title: "Akkalkot",
      description: "Akkalkot is a renowned pilgrimage destination near Solapur, associated with Shri Swami Samarth Maharaj. Devotees from different parts of Maharashtra visit the Swami Samarth Maharaj Temple for darshan and prayers. A private Pune to Solapur cab can also be arranged for passengers planning an extended pilgrimage to Akkalkot."
    },
    {
      title: "Tuljapur",
      description: "Tuljapur is a famous religious destination in Dharashiv district, known for the sacred Shri Tulja Bhavani Temple. Devotees frequently travel here for darshan, family pilgrimages, and religious occasions. Passengers travelling from Pune can plan a private cab journey with convenient pickup and drop arrangements."
    },
    {
      title: "Pandharpur",
      description: "Pandharpur is one of Maharashtra's most important pilgrimage destinations, famous for the Shri Vitthal Rukmini Temple. The town attracts devotees throughout the year, especially during Ashadhi and Kartiki Wari. Travellers can enquire about private cab arrangements from Pune to Pandharpur for comfortable religious journeys."
    },
    {
      title: "Barshi",
      description: "Barshi is an important town in Solapur district, known for its agricultural trade, educational institutions, and local commercial activities. It is a relevant destination for passengers travelling from Pune for family visits, business appointments, and personal commitments in the surrounding region."
    },
    {
      title: "Akluj",
      description: "Akluj is a prominent town in Solapur district with agricultural businesses, residential developments, educational institutions, and local attractions. Passengers travelling from Pune can arrange a private cab for family functions, professional work, and visits to nearby villages and commercial areas."
    },
    {
      title: "Mohol",
      description: "Mohol is a developing town in Solapur district, serving nearby agricultural communities and local businesses. It is a practical destination for passengers travelling for agricultural work, family visits, and commercial requirements. A dedicated intercity cab offers direct transportation from Pune to the preferred location."
    },
    {
      title: "Great Indian Bustard Sanctuary",
      description: "The Great Indian Bustard Sanctuary near Nannaj is an important wildlife conservation area in Solapur district. Nature enthusiasts and visitors interested in wildlife conservation can consider this destination as part of a planned regional outing. Discuss additional sightseeing stops and travel arrangements with Pandit Cab."
    },
    {
      title: "Solapur Textile Market",
      description: "Solapur Textile Market is known for the city's popular textile products, including bedsheets, towels, and traditional chaddars. Business visitors, wholesalers, and shoppers travelling from Pune can arrange a convenient cab drop near their preferred shopping and commercial destinations."
    }
  ],
  services: [
    {
      name: "Cab From Solapur To Pune",
      description: "Book a cab from Solapur to Pune for a convenient return journey between the two cities. Whether you are travelling for professional commitments, family visits, educational purposes, or personal work, enquire about suitable vehicle categories, pickup locations, and one-way or round-trip arrangements with Pandit Cab."
    },
    {
      name: "Pune To Solapur Cab",
      description: "Choose a Pune to Solapur cab for private transportation to your preferred destination in Solapur. Pandit Cab helps passengers enquire about suitable sedan, SUV, and family vehicle options according to their passenger count, luggage requirements, and preferred departure schedule."
    },
    {
      name: "Pune To Solapur One Way Cab",
      description: "A Pune to Solapur one way cab is suitable for passengers who require a direct drop without arranging a return journey. Share your pickup address, destination, and travel date to enquire about one-way vehicle availability and applicable fare details."
    },
    {
      name: "Pune To Tuljapur Cab",
      description: "Arrange a Pune to Tuljapur cab for a private pilgrimage to the famous Shri Tulja Bhavani Temple. Whether you are travelling with family, senior citizens, or a group of devotees, enquire about suitable vehicles and pickup arrangements for your religious journey."
    },
    {
      name: "Pune To Tuljapur Cab Fare",
      description: "Check the Pune to Tuljapur cab fare according to your selected vehicle, booking type, and travel schedule. The quotation may vary for one-way and round-trip journeys. Contact Pandit Cab to clarify tolls, parking, driver allowance, waiting charges, and other applicable expenses."
    },
    {
      name: "Pune To Tuljapur Car Rentals",
      description: "Pune to Tuljapur car rentals are suitable for devotees and families looking for private transportation to the Tulja Bhavani Temple. Enquire about sedan, Ertiga, Innova, and SUV options according to your group size and preferred travel arrangements."
    },
    {
      name: "Pune To Akkalkot Car Rental Price",
      description: "The Pune to Akkalkot car rental price depends on the selected vehicle, one-way or round-trip booking, pickup location, and additional travel requirements. Contact Pandit Cab with your pilgrimage schedule and passenger details to receive a customised rental quotation."
    },
    {
      name: "Pune To Akkalkot Taxi",
      description: "Choose a Pune to Akkalkot taxi for a convenient private journey to the Shri Swami Samarth Maharaj Temple. This option is useful for individual devotees, families, and groups planning darshan. Share your travel date and preferred car category to enquire about booking arrangements."
    },
    {
      name: "Pune To Akkalkot Cabs",
      description: "Book Pune to Akkalkot cabs for private pilgrimage transportation from your preferred location in Pune. Passengers can enquire about different vehicle categories, convenient pickup arrangements, and one-way or return journey packages according to their temple visit schedule."
    },
    {
      name: "Pune To Pandharpur Cab",
      description: "A Pune to Pandharpur cab provides private transportation for devotees visiting the famous Shri Vitthal Rukmini Temple. Whether you are planning regular darshan, a family pilgrimage, or travel during religious occasions, discuss suitable vehicle options and booking details with Pandit Cab."
    },
    {
      name: "Pune To Pandharpur Cab Service",
      description: "Pandit Cab offers Pune to Pandharpur cab service enquiries for individuals, families, and groups of devotees. Arrange a suitable private vehicle for temple visits, religious functions, and personal journeys while discussing pickup locations, departure times, and applicable trip charges."
    },
    {
      name: "Pune To Pandharpur Car Rental",
      description: "Choose Pune to Pandharpur car rental for a dedicated vehicle and driver for your pilgrimage. Enquire about sedan, Ertiga, Innova, and SUV categories according to your passenger count, luggage space, and preferred travel schedule."
    },
    {
      name: "Pune To Pandharpur Taxi",
      description: "Book a Pune to Pandharpur taxi for direct road transportation to your preferred destination in Pandharpur. It is a practical option for devotees visiting during Ashadhi Wari, Kartiki Wari, and other religious occasions. Discuss vehicle availability and journey charges before booking."
    },
    {
      name: "Pune To Solapur Taxi",
      description: "A Pune to Solapur taxi offers private transportation for business travellers, families, students, and passengers visiting relatives. Choose a suitable vehicle based on your group size and travel requirements, and enquire about pickup coordination and the complete trip quotation."
    },
    {
      name: "Pune To Solapur Cab Service",
      description: "Pandit Cab provides Pune to Solapur cab service options for personal, family, corporate, and pilgrimage journeys. Passengers can enquire about dedicated vehicles, convenient pickup points, one-way drops, and round-trip arrangements for travelling between the two cities."
    },
    {
      name: "Pune To Solapur Taxi Service",
      description: "Choose Pune to Solapur taxi service for a private intercity journey with convenient pickup and drop arrangements. Whether you are travelling for business meetings, family functions, or personal commitments, share your itinerary to discuss a suitable vehicle and booking schedule."
    },
    {
      name: "Cab From Pune To Solapur",
      description: "Arrange a cab from Pune to Solapur for direct transportation from your residence, office, airport, or railway station. Pandit Cab helps passengers enquire about suitable car categories and travel arrangements based on their departure time, destination, and passenger requirements."
    },
    {
      name: "Taxi From Pune To Solapur",
      description: "A taxi from Pune to Solapur is a suitable choice for passengers who prefer a dedicated vehicle instead of depending on fixed public transport schedules. Enquire about available cars, pickup arrangements, one-way pricing, and round-trip booking conditions."
    },
    {
      name: "Pune To Solapur Outstation Cab",
      description: "Choose a Pune to Solapur outstation cab for a planned long-distance road journey. Whether you need a private drop, family transfer, or business-related transportation, discuss the available vehicle categories, travel schedule, and fare inclusions with Pandit Cab."
    },
    {
      name: "Pune To Solapur Cab Booking",
      description: "Complete your Pune to Solapur cab booking by sharing your pickup address, drop location, travel date, preferred departure time, and passenger count. Confirm vehicle availability, fare details, booking conditions, and applicable additional expenses before finalising your journey."
    },
    {
      name: "Pune To Solapur Taxi Booking Online",
      description: "Pune to Solapur taxi booking online offers a convenient way to enquire about private intercity transportation before travelling. Contact Pandit Cab with your journey details to discuss suitable vehicle options, estimated charges, pickup arrangements, and booking confirmation."
    },
    {
      name: "Pune To Solapur Cab Fare",
      description: "The Pune to Solapur cab fare depends on the vehicle category, journey type, pickup location, and additional travel requirements. Request a customised quotation from Pandit Cab and check whether tolls, parking, driver allowance, and waiting charges are included."
    },
    {
      name: "Pune To Solapur Taxi Fare",
      description: "Check the Pune to Solapur taxi fare before planning your intercity journey. Share your preferred car category and booking requirements to receive a suitable quotation. Comparing the complete fare and applicable expenses helps you select the right transportation arrangement."
    },
    {
      name: "Pune To Solapur Cab Price",
      description: "Enquire about the Pune to Solapur cab price according to your selected vehicle and travel schedule. Whether you need a sedan, Ertiga, Innova, or SUV, contact Pandit Cab for trip-specific pricing and details about the applicable booking conditions."
    },
    {
      name: "Pune To Solapur Taxi Charges",
      description: "Pune to Solapur taxi charges can vary depending on the car model, one-way or round-trip arrangement, and journey requirements. Ask for a detailed quotation covering base fare, toll expenses, parking, driver allowance, and other applicable costs before confirming."
    },
    {
      name: "Best Pune To Solapur Cab Service",
      description: "When selecting the best Pune to Solapur cab service, consider vehicle suitability, driver experience, transparent fare information, pickup coordination, and booking support. Pandit Cab helps passengers enquire about private taxi arrangements for comfortable and convenient intercity transportation."
    },
    {
      name: "Cheap Pune To Solapur Cab",
      description: "Passengers searching for a cheap Pune to Solapur cab can enquire about different car categories and booking options according to their budget. Compare the complete trip quotation and check tolls, parking, driver allowance, and other applicable expenses before selecting a vehicle."
    },
    {
      name: "Pune To Solapur Round Trip Taxi",
      description: "Book a Pune to Solapur round trip taxi when you plan to return to Pune after completing your visit or professional work. Share your expected return date, waiting duration, and travel schedule to discuss suitable vehicle arrangements and round-trip charges."
    },
    {
      name: "Pune To Solapur Innova Cab",
      description: "Choose a Pune to Solapur Innova cab for family travel and group journeys requiring additional seating and luggage space. Enquire about available vehicle models, seating capacity, and total booking charges according to your planned departure date."
    },
    {
      name: "Pune To Solapur Innova Crysta Cab",
      description: "A Pune to Solapur Innova Crysta cab is suitable for passengers seeking a spacious vehicle for an intercity journey. It can be considered for family pilgrimages, corporate travel, and group transfers. Confirm vehicle availability, passenger capacity, and fare details before booking."
    },
    {
      name: "Pune To Solapur Ertiga Cab",
      description: "Book a Pune to Solapur Ertiga cab for family journeys and small-group travel. Enquire about seating arrangements, luggage capacity, available vehicle models, and total trip charges to select a suitable option for your intercity transfer."
    },
    {
      name: "Pune To Solapur Sedan Cab",
      description: "A Pune to Solapur sedan cab is a practical choice for individuals, couples, and small families who prefer private transportation. Ask about available sedan models, including Dzire and Etios, along with passenger capacity and applicable travel charges."
    },
    {
      name: "Pune To Solapur SUV Taxi",
      description: "Choose a Pune to Solapur SUV taxi when you require additional space for family members, luggage, or group travel. Enquire about available SUV models, seating capacity, and fare arrangements according to your travel date and pickup location."
    },
    {
      name: "Pune To Solapur AC Cab",
      description: "Travel in a Pune to Solapur AC cab for a private journey with air-conditioned transportation. Passengers can enquire about available sedan and SUV categories and confirm the vehicle facilities, pickup schedule, and total booking charges before starting their journey."
    },
    {
      name: "Pune To Solapur Sedan Cab",
      description: "Choose a Pune to Solapur sedan cab for direct intercity transportation suited to individuals and small families. Whether you prefer a Dzire or Etios, discuss vehicle availability, luggage requirements, and the complete fare quotation with Pandit Cab."
    },
    {
      name: "Pune To Solapur Dzire Cab",
      description: "A Pune to Solapur Dzire cab is a suitable option for individuals, couples, and small families looking for a private sedan journey. Enquire about vehicle availability, passenger capacity, pickup arrangements, and applicable one-way or round-trip charges."
    },
    {
      name: "Pune To Solapur Etios Cab",
      description: "Book a Pune to Solapur Etios cab for a private journey in a sedan category vehicle. Passengers can discuss the availability of the car, preferred departure schedule, pickup location, and total trip quotation according to their travel requirements."
    },
    {
      name: "Pune To Solapur Ertiga Cab",
      description: "Choose a Pune to Solapur Ertiga cab for family travel and small groups who need additional seating compared with a regular sedan. Confirm the available vehicle, luggage arrangements, and applicable fare before finalising your booking."
    },
    {
      name: "Pune To Solapur Innova Cab",
      description: "A Pune to Solapur Innova cab provides a spacious transportation option for families and groups travelling together. Enquire about the available Innova model, passenger capacity, luggage space, and trip pricing for your preferred travel date."
    },
    {
      name: "Pune To Solapur Innova Crysta",
      description: "Pune to Solapur Innova Crysta transportation can be considered for passengers who prefer a spacious vehicle for family, corporate, and group journeys. Contact Pandit Cab to enquire about model availability, seating arrangements, and customised trip charges."
    },
    {
      name: "Pune To Solapur SUV Cab",
      description: "Choose a Pune to Solapur SUV cab for private transportation when you need additional passenger and luggage space. Discuss the available SUV category, seating requirements, and travel schedule to receive a suitable booking quotation."
    },
    {
      name: "Pune To Solapur 7 Seater Cab",
      description: "A Pune to Solapur 7-seater cab is suitable for families and groups who prefer travelling together in one vehicle. Enquire about Ertiga, Innova, and other available options according to passenger count, luggage requirements, and booking conditions."
    },
    {
      name: "Pune To Solapur Tempo Traveller",
      description: "Choose a Pune to Solapur tempo traveller for group journeys, family functions, religious visits, and organised travel. Share the number of passengers, luggage requirements, and travel date to enquire about suitable seating capacities and applicable rental charges."
    },
    {
      name: "Pune To Solapur 12 Seater Traveller",
      description: "A Pune to Solapur 12-seater traveller can be considered for larger family groups, friends, and organised journeys. Contact Pandit Cab to discuss vehicle availability, passenger arrangements, luggage capacity, and complete trip pricing before confirming your booking."
    },
    {
      name: "Pune To Solapur Minibus",
      description: "Arrange a Pune to Solapur minibus for group transportation, corporate outings, family events, and organised travel. Share your passenger count, departure schedule, pickup location, and destination details to enquire about suitable vehicle arrangements."
    },
    {
      name: "Pune To Solapur Luxury Cab",
      description: "A Pune to Solapur luxury cab can be considered for executive journeys, special occasions, and passengers who prefer a premium vehicle category. Contact Pandit Cab to enquire about available models, booking conditions, and customised pricing."
    },
    {
      name: "Pune To Solapur Group Travel Cab",
      description: "Choose a Pune to Solapur group travel cab for friends, colleagues, relatives, and families travelling together. Discuss the group size, luggage requirements, and preferred vehicle type to arrange suitable private transportation for your journey."
    },
    {
      name: "Hinjewadi To Solapur Cab",
      description: "Book a Hinjewadi to Solapur cab for direct transportation from Pune's major IT and business hub. This route is useful for IT professionals, employees, families, and visitors who need a convenient pickup from Hinjewadi and a private drop in Solapur."
    },
    {
      name: "Wakad To Solapur Cab",
      description: "A Wakad to Solapur cab provides private intercity transportation for residents and passengers starting their journey from Wakad and nearby residential areas. Share your exact pickup address and destination to enquire about vehicle availability and applicable fares."
    },
    {
      name: "Baner To Solapur Cab",
      description: "Arrange a Baner to Solapur cab for passengers travelling from the residential and commercial neighbourhoods of western Pune. Whether you need transportation for business, family visits, or personal work, enquire about suitable cars and convenient pickup arrangements."
    },
    {
      name: "Aundh To Solapur Cab",
      description: "Choose an Aundh to Solapur cab for a private journey from Aundh and surrounding areas. Passengers can share their pickup address, preferred departure time, and vehicle requirements to discuss a suitable intercity travel arrangement with Pandit Cab."
    },
    {
      name: "Kothrud To Solapur Cab",
      description: "Book a Kothrud to Solapur cab for convenient transportation from western Pune to your selected destination in Solapur. This option is suitable for families, professionals, and residents who prefer a direct private vehicle for their journey."
    },
    {
      name: "Hadapsar To Solapur Cab",
      description: "A Hadapsar to Solapur cab is useful for passengers travelling from eastern Pune for business appointments, family visits, and pilgrimage journeys. Provide your exact pickup location and preferred car category to enquire about booking arrangements and trip charges."
    },
    {
      name: "Kharadi To Solapur Cab",
      description: "Arrange a Kharadi to Solapur cab for IT professionals, working families, and residents travelling from the eastern Pune business district. Pandit Cab helps passengers enquire about private sedan and SUV options according to their passenger count and journey schedule."
    },
    {
      name: "Viman Nagar To Solapur Cab",
      description: "Choose a Viman Nagar to Solapur cab for direct transportation from one of Pune's prominent residential and commercial areas. Share your pickup address, travel date, and drop location to discuss suitable vehicle options and applicable cab charges."
    },
    {
      name: "Wagholi To Solapur Cab",
      description: "Book a Wagholi to Solapur cab for private transportation from eastern Pune and nearby residential developments. Whether you are travelling for personal work, business, or family commitments, enquire about convenient pickup arrangements and suitable vehicle categories."
    },
    {
      name: "Swargate To Solapur Cab",
      description: "A Swargate to Solapur cab offers private transportation from an important transport and commercial area in Pune. Passengers can arrange a direct pickup from their preferred location near Swargate and enquire about suitable vehicles and intercity booking charges."
    },
    {
      name: "Shivajinagar To Solapur Cab",
      description: "Arrange a Shivajinagar to Solapur cab for passengers travelling from central Pune. Whether you are starting from a residential area, office, or nearby transport point, share your exact pickup location to coordinate a convenient private journey."
    },
    {
      name: "PCMC To Solapur Cab",
      description: "Choose a PCMC to Solapur cab for private transportation from the Pimpri-Chinchwad region. This service is useful for employees, families, industrial visitors, and residents travelling to Solapur. Enquire about pickup coordination and vehicle availability."
    },
    {
      name: "Pimpri Chinchwad To Solapur Cab",
      description: "Book a Pimpri-Chinchwad to Solapur cab for a dedicated intercity journey from Pimpri, Chinchwad, and surrounding localities. Share your starting address, destination, passenger count, and travel date to discuss suitable car options and trip pricing."
    },
    {
      name: "Pune Railway Station To Solapur Cab",
      description: "Arrange a Pune Railway Station to Solapur cab for passengers who need direct transportation after arriving in Pune by train. Share your train arrival time, pickup requirements, passenger count, and preferred destination to coordinate a suitable cab transfer."
    }
  ],
  tableData: [
    ["Cab From Solapur To Pune"],
    ["Pune To Solapur Cab"],
    ["Pune To Solapur One Way Cab"],
    ["Pune To Tuljapur Cab"],
    ["Pune To Tuljapur Cab Fare"],
    ["Pune To Tuljapur Car Rentals"],
    ["Pune To Akkalkot Car Rental Price"],
    ["Pune To Akkalkot Taxi"],
    ["Pune To Akkalkot Cabs"],
    ["Pune To Pandharpur Cab"],
    ["Pune To Pandharpur Cab Service"],
    ["Pune To Pandharpur Car Rental"],
    ["Pune To Pandharpur Taxi"],
    ["Pune To Solapur Cab"],
    ["Pune To Solapur Taxi"],
    ["Pune To Solapur Cab Service"],
    ["Pune To Solapur Taxi Service"],
    ["Cab From Pune To Solapur"],
    ["Taxi From Pune To Solapur"],
    ["Pune To Solapur Outstation Cab"],
    ["Pune To Solapur Cab Booking"],
    ["Pune To Solapur Taxi Booking Online"],
    ["Pune To Solapur Cab Fare"],
    ["Pune To Solapur Taxi Fare"],
    ["Pune To Solapur Cab Price"],
    ["Pune To Solapur Taxi Charges"],
    ["Best Pune To Solapur Cab Service"],
    ["Cheap Pune To Solapur Cab"],
    ["Pune To Solapur One Way Cab"],
    ["Pune To Solapur Round Trip Taxi"],
    ["Pune To Solapur Innova Cab"],
    ["Pune To Solapur Innova Crysta Cab"],
    ["Pune To Solapur Ertiga Cab"],
    ["Pune To Solapur Sedan Cab"],
    ["Pune To Solapur SUV Taxi"],
    ["Pune To Solapur AC Cab"],
    ["Pune To Solapur Sedan Cab"],
    ["Pune To Solapur Dzire Cab"],
    ["Pune To Solapur Etios Cab"],
    ["Pune To Solapur Ertiga Cab"],
    ["Pune To Solapur Innova Cab"],
    ["Pune To Solapur Innova Crysta"],
    ["Pune To Solapur SUV Cab"],
    ["Pune To Solapur 7 Seater Cab"],
    ["Pune To Solapur Tempo Traveller"],
    ["Pune To Solapur 12 Seater Traveller"],
    ["Pune To Solapur Minibus"],
    ["Pune To Solapur Luxury Cab"],
    ["Pune To Solapur Group Travel Cab"],
    ["Hinjewadi To Solapur Cab"],
    ["Wakad To Solapur Cab"],
    ["Baner To Solapur Cab"],
    ["Aundh To Solapur Cab"],
    ["Kothrud To Solapur Cab"],
    ["Hadapsar To Solapur Cab"],
    ["Kharadi To Solapur Cab"],
    ["Viman Nagar To Solapur Cab"],
    ["Wagholi To Solapur Cab"],
    ["Swargate To Solapur Cab"],
    ["Shivajinagar To Solapur Cab"],
    ["PCMC To Solapur Cab"],
    ["Pimpri-Chinchwad To Solapur Cab"],
    ["Pune Railway Station To Solapur Cab"]
  ],
  whychoose: [
    {
      WhyChooseheading: "Convenient Pune To Solapur Cab Booking",
      WhyChoosedescription: "Pandit Cab helps passengers arrange private transportation from Pune to Solapur and nearby destinations according to their preferred travel schedule. Whether you are travelling for business, family commitments, religious visits, or personal requirements, share your pickup address, destination, and journey date to discuss suitable booking arrangements."
    },
    {
      WhyChooseheading: "Multiple Cars And Group Travel Options",
      WhyChoosedescription: "Different passengers have different vehicle requirements depending on their group size and luggage. Enquire about Dzire, Etios, sedan, Ertiga, Innova, Innova Crysta, SUV, 7-seater vehicles, tempo travellers, and minibuses to find an appropriate transportation option for individual and group journeys."
    },
    {
      WhyChooseheading: "One-Way And Round-Trip Cab Arrangements",
      WhyChoosedescription: "Whether you require a direct drop in Solapur or plan to return to Pune after completing your visit, Pandit Cab can help you enquire about suitable one-way and round-trip arrangements. Share your complete itinerary, expected return date, and waiting requirements to understand the applicable booking charges."
    },
    {
      WhyChooseheading: "Private Pilgrimage Transportation To Nearby Destinations",
      WhyChoosedescription: "Solapur district and surrounding regions have several important religious destinations, including Akkalkot, Pandharpur, and nearby Tuljapur. Devotees can discuss private cab arrangements for temple visits, family pilgrimages, and religious occasions with convenient pickup and drop facilities according to their travel schedule."
    },
    {
      WhyChooseheading: "Pickup From Multiple Pune Locations",
      WhyChoosedescription: "Passengers can enquire about convenient pickups from different residential, commercial, and transport areas across Pune. Whether you are starting from Hinjewadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Swargate, Shivajinagar, or Pune Railway Station, share your exact address to coordinate your journey."
    },
    {
      WhyChooseheading: "Suitable For Families, Businesses, And Groups",
      WhyChoosedescription: "Private cab arrangements are useful for family functions, corporate visits, industrial appointments, educational journeys, and group travel. Select a suitable sedan, SUV, or larger passenger vehicle according to your requirements and discuss the preferred pickup schedule with Pandit Cab."
    },
    {
      WhyChooseheading: "Clear Fare And Rental Information",
      WhyChoosedescription: "Understanding the complete trip quotation helps passengers plan their travel expenses in advance. Enquire about vehicle rental rates, one-way and round-trip charges, tolls, parking, driver allowance, waiting fees, and additional costs applicable to your booking before confirming the journey."
    },
    {
      WhyChooseheading: "Flexible Intercity And Sightseeing Arrangements",
      WhyChoosedescription: "Apart from travelling directly to Solapur, passengers can enquire about additional stops and nearby destinations according to their itinerary. Whether you plan to visit Siddheshwar Temple, Akkalkot, Tuljapur, Pandharpur, or other regional attractions, discuss your route, waiting duration, and vehicle requirements to organise a suitable private cab journey."
    }
  ]
};










const faqData = [
  {
    question: "How do I book a Pune to Solapur cab with Pandit Cab?",
    answer: "To reserve a Pune to Solapur cab with Pandit Cab, provide your pickup address, destination, travel date, preferred departure time, and passenger count. You can enquire about available sedan, Ertiga, Innova, and SUV options along with the applicable fare before confirming your journey."
  },
  {
    question: "What is the approximate Pune to Solapur cab distance?",
    answer: "The road distance between Pune and Solapur is approximately 250 to 260 km. The journey generally follows the Pune–Solapur Highway, passing through regions such as Yavat, Indapur, and other highway-connected towns."
  },
  {
    question: "How many hours does a Pune to Solapur taxi take?",
    answer: "A Pune to Solapur taxi generally takes around 4.5 to 5.5 hours. Your actual arrival time may depend on traffic conditions, road maintenance, weather, pickup location, and refreshment breaks along the highway."
  },
  {
    question: "Are one-way Pune to Solapur cab services available?",
    answer: "Yes, you can enquire about one-way Pune to Solapur cab services with Pandit Cab. This option is convenient for passengers travelling for work, family visits, educational purposes, or personal commitments. You can also enquire about return transportation from Solapur to Pune."
  },
  {
    question: "Can I book a Pune to Solapur cab for a round trip?",
    answer: "You can discuss round-trip cab arrangements for travelling from Pune to Solapur and returning on your preferred date. Whether you need a same-day return or a longer stay, share your schedule and expected waiting time to plan the appropriate taxi arrangement."
  },
  {
    question: "Which car is suitable for a Pune to Solapur outstation trip?",
    answer: "The best vehicle depends on your group size and travel preferences. You can enquire about Swift Dzire, Etios, sedan, Maruti Ertiga, Toyota Innova, and Innova Crysta options. Spacious SUVs and larger vehicles can also be discussed for families travelling with additional luggage."
  },
  {
    question: "Can I hire a cab from Pune to Solapur for Tuljapur and Akkalkot Darshan?",
    answer: "Yes, you can discuss a customized pilgrimage itinerary covering Solapur, Tuljapur, and Akkalkot with Pandit Cab. These destinations are popular among devotees visiting religious sites. Share your temple visit preferences, number of passengers, and return schedule to coordinate the journey."
  },
  {
    question: "Does Pandit Cab provide pickup from different areas of Pune for Solapur travel?",
    answer: "You can request pickup from several Pune locations, including Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Kharadi, Viman Nagar, Swargate, Shivajinagar, and Pimpri-Chinchwad. Mention your exact pickup address while booking so that suitable travel arrangements can be discussed."
  },
  {
    question: "What factors affect Pune to Solapur cab fare and taxi charges?",
    answer: "The Pune to Solapur cab fare depends on the selected vehicle, one-way or round-trip booking, travel date, pickup and drop-off points, and additional requirements. Sedan, Dzire, Ertiga, Innova, and SUV taxi charges may vary according to the vehicle category. Contact Pandit Cab for applicable fare details."
  },
  {
    question: "Can I reserve a Pune to Solapur AC cab for group or corporate travel?",
    answer: "Yes, you can enquire about AC sedan, Ertiga, Innova, Innova Crysta, and larger group travel vehicles for Pune to Solapur journeys. These options can be considered for corporate visits, family functions, religious tours, and group transportation. Discuss your seating requirements and vehicle availability with Pandit Cab before confirming."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Omkar Jadhav",
    feedback: "I was looking for a private taxi from Pune to Solapur for a family visit and wanted a comfortable vehicle for the highway journey. Pandit Cab helped me discuss the pickup arrangements and suitable car options. We also planned our return schedule in advance, which made organising the trip easier.",
    rating: 5
  },
  {
    id: 2,
    name: "Miss. Vaishnavi Patil",
    feedback: "Our family wanted to travel from Pune to Solapur and include a visit to Tuljapur during the same trip. I contacted Pandit Cab to understand the cab arrangements and discuss our preferred itinerary. The communication helped us plan the journey, vehicle requirements, and return timing more comfortably.",
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
  "name": "Pune to Solapur Cab Service",
  "image": "https://www.panditcabs.com/assets/images/pune-to-solapur-cab.webp",
  "description": "Pune to Solapur Cab Service by Pandit Cabs provides comfortable, reliable and convenient chauffeur-driven taxi services for one-way trips, round trips, family travel, business journeys, religious tours, personal visits and long-distance outstation transportation. Customers searching for Pune to Solapur cab, Pune to Solapur taxi, Pune to Solapur one way cab or cab from Solapur to Pune can arrange suitable transportation according to their travel schedule, passenger count, luggage requirements and preferred vehicle category. Pandit Cabs offers Pune to Solapur cab booking services for individuals, families, business professionals, senior citizens and groups who prefer private road transportation. Our Pune to Solapur one way taxi service is suitable for passengers requiring single-direction travel, while Pune to Solapur round trip cab arrangements can be planned for same-day returns, full-day journeys and multi-day outstation travel. Customers can also enquire about Pune to Tuljapur cab, Pune to Tuljapur cab fare, Pune to Tuljapur car rentals and Pune to Tuljapur taxi booking for religious journeys to the famous Tulja Bhavani Temple. Our Pune to Tuljapur cab service is suitable for devotees planning Tulja Bhavani Darshan, family pilgrimages, festival visits and other religious travel requirements. Pune to Solapur taxi booking can be arranged from Pune city, Pimpri Chinchwad, Hinjewadi, Wakad, Baner, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi and nearby locations. Pandit Cabs provides suitable vehicle options including Swift Dzire, Ertiga, Kia Carens, Innova Crysta and other available sedan and SUV categories based on passenger requirements and vehicle availability. Customers looking for Pune to Solapur cab fare, Pune to Solapur taxi fare, Pune to Solapur cab charges or Pune to Solapur taxi price can request a quotation based on the selected vehicle, pickup point, destination, travel distance and journey type. Our Pune to Solapur outstation cab service supports transportation for corporate meetings, industrial visits, educational travel, weddings, family functions, medical appointments and personal journeys. Pune to Tuljapur taxi services can also be arranged for temple visits, religious events, family tours and planned pilgrimage itineraries. Travellers requiring transportation from Pune Airport to Solapur or Pune Airport to Tuljapur can enquire about scheduled airport pickup and drop arrangements. Customers searching for Solapur to Pune cab, Solapur to Pune taxi, Solapur to Pune cab booking and Solapur to Pune one way cab can also discuss return-direction transportation based on vehicle availability. Our chauffeur-driven cab services allow passengers to plan convenient pickup times, preferred routes and suitable travel arrangements according to their requirements. Pune to Solapur car rental with driver is suitable for passengers who prefer dedicated transportation without the need to drive themselves. Families and small groups can select vehicles according to seating capacity, luggage space and comfort preferences. Pandit Cabs also supports travel enquiries for destinations around Solapur and Tuljapur, including Akkalkot, Pandharpur and nearby religious locations, subject to the requested itinerary and applicable charges. Customers can share their pickup address, destination, journey date, passenger count, preferred vehicle type and return schedule to discuss a suitable taxi booking arrangement. Final fares and vehicle availability depend on the selected cab category, travel duration, route, distance, toll charges, parking fees, waiting requirements and additional travel conditions. Book Pune to Solapur Cab Service with Pandit Cabs for convenient one-way taxi booking, round-trip transportation, Pune to Tuljapur cab arrangements and comfortable outstation travel across Maharashtra.",
  "brand": {
    "@type": "Brand",
    "name": "Pandit Cabs"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.panditcabs.com/pune-to-solapur-cab"
  }
};









  return (
    <div>

<Helmet>
  <title>
    Pune to Solapur Cab | Pune to Tuljapur Taxi | +91 9890121689
  </title>

  <meta
    name="description"
    content="Book Pune to Solapur Cab with Pandit Cabs. One way taxi, round trip cabs, Pune to Tuljapur car rental, Solapur taxi booking and cab fare enquiries. Call +91 9890121689."
  />

  <meta
    name="keywords"
    content="Pune to Solapur Cab, Pune to Solapur Cab Service, Pune to Solapur Taxi, Pune to Solapur Taxi Service, Pune to Solapur Cab Booking, Pune to Solapur Taxi Booking, Cab from Solapur to Pune, Pune to Solapur One Way Cab, Pune to Solapur One Way Taxi, Pune to Tuljapur Cab, Pune to Tuljapur Cab Fare, Pune to Tuljapur Car Rentals, Pune to Tuljapur Taxi, Pune to Tuljapur Taxi Service, Pune to Tuljapur Cab Service, Pune to Tuljapur Cab Booking, Pune to Tuljapur Taxi Booking, Pune to Tuljapur Taxi Fare, Pune to Tuljapur Cab Charges, Pune to Tuljapur Cab Price, Pune to Tuljapur Taxi Price, Pune to Tuljapur Car Hire, Pune to Tuljapur Car Rental, Pune to Solapur Cab Fare, Pune to Solapur Taxi Fare, Pune to Solapur Cab Charges, Pune to Solapur Cab Price, Pune to Solapur Taxi Charges, Pune to Solapur Taxi Price, Pune to Solapur One Way Cab Fare, Pune to Solapur One Way Taxi Fare, One Way Cab from Pune to Solapur, One Way Taxi from Pune to Solapur, Pune to Solapur Round Trip Cab, Pune to Solapur Round Trip Taxi, Pune to Solapur Return Cab, Pune to Solapur Return Taxi, Pune to Solapur Outstation Cab, Pune to Solapur Outstation Taxi, Pune to Solapur Car Rental, Pune to Solapur Car Hire, Pune to Solapur Cab Rental, Pune to Solapur Taxi Rental, Pune to Solapur Car Rental with Driver, Pune to Solapur Chauffeur Driven Cab, Solapur to Pune Cab, Solapur to Pune Taxi, Solapur to Pune Cab Service, Solapur to Pune Taxi Service, Solapur to Pune Cab Booking, Solapur to Pune Taxi Booking, Solapur to Pune One Way Cab, Solapur to Pune One Way Taxi, Solapur to Pune Cab Fare, Solapur to Pune Taxi Fare, Solapur to Pune Car Rental, Solapur to Pune Car Hire, Pune to Tuljapur One Way Cab, Pune to Tuljapur One Way Taxi, Pune to Tuljapur Round Trip Cab, Pune to Tuljapur Round Trip Taxi, Pune to Tuljapur Outstation Cab, Pune to Tuljapur Outstation Taxi, Pune to Tuljapur Darshan Cab, Pune to Tuljapur Darshan Taxi, Pune to Tulja Bhavani Temple Cab, Pune to Tulja Bhavani Darshan Taxi, Pune to Tuljapur Temple Taxi, Pune to Tuljapur Family Cab, Pune to Tuljapur Pilgrimage Cab, Pune to Tuljapur Religious Tour Cab, Pune to Solapur Sedan Cab, Pune to Solapur SUV Cab, Pune to Solapur Swift Dzire Cab, Pune to Solapur Ertiga Cab, Pune to Solapur Kia Carens Cab, Pune to Solapur Innova Crysta Cab, Pune to Tuljapur Ertiga Cab, Pune to Tuljapur Innova Crysta Cab, Pune Airport to Solapur Cab, Pune Airport to Solapur Taxi, Pune Airport to Tuljapur Cab, Pune Airport to Tuljapur Taxi, Pimpri Chinchwad to Solapur Cab, PCMC to Solapur Cab, Pimpri Chinchwad to Tuljapur Cab, PCMC to Tuljapur Cab, Hinjewadi to Solapur Cab, Wakad to Solapur Cab, Hadapsar to Solapur Cab, Kharadi to Solapur Cab, Pune to Solapur Online Cab Booking, Pune to Tuljapur Online Cab Booking, Pune to Solapur Private Taxi, Pune to Solapur AC Cab, Pune to Solapur Family Cab, Pune to Solapur Corporate Cab, Pune to Solapur Industrial Visit Cab, Pune to Solapur Business Travel Taxi, Pune to Solapur Wedding Cab, Pune to Solapur Medical Travel Cab, Pune to Solapur Akkalkot Cab, Pune to Solapur Pandharpur Cab, Pune to Solapur Tuljapur Tour Package, Pune to Akkalkot Tuljapur Cab, Pune to Solapur Tuljapur Taxi Package, Best Pune to Solapur Cab Service, Best Pune to Tuljapur Cab Service, Pandit Cabs Pune to Solapur, Pandit Cabs Pune to Tuljapur"
  />

  <link
    rel="canonical"
    href="https://www.panditcabs.com/pune-to-solapur-cab"
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
              <img src='/images/keyword/16.jpg' alt='img' className='img-fluid' />
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

export default Punetosolapurcab;