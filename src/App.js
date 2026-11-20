
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeroSection from './components/HeroSlider';
import Header from './components/Header';
import AboutOne from './components/AboutSection';
import ContactInfo from './components/ContactInfo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Career from './components/Career';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Puneairporttaxicabsservice from './pages/Pune Airport Taxi Cabs Service';
import ScrollToTop from './components/ScrollToTop';
import Punelocalcabservice from './pages/Pune Local Cab Service';
import Punetoalibaugcab from './pages/Pune to Alibaug Cab';
import Punetoaurangabadcab from './pages/Pune to Aurangabad Cab Service';
import Punetobanglorecab from './pages/Pune to Bangalore Cab';
import Punetogoacabservice from './pages/Pune to Goa Cab Service';
import Punetokolhapurcab from './pages/Pune to Kolhapur Cab Service';
import Punetolavasaccarrental from './pages/Pune to Lavasa Car Rental';
import Punetolonavalacab from './pages/Pune to Lonavala Cab';
import Punetomahabaleshwarcab from './pages/Pune to Mahabaleshwar Cab';
import Punetomumbaicabs from './pages/Pune to Mumbai Cabs';
import Punetomumbaitaxicab from './pages/Pune To Mumbai Taxi Cabs';
import Punetonagpurcab from './pages/Pune to Nagpur Cab';
import Punetosanglisataracaab from './pages/Pune To Sangli Satara Cabs';
import Punetoshirdicabtaxi from './pages/Pune to Shirdi Cab Taxi';
import Punetosolapurcab from './pages/Pune to Solapur Cab';
import Ashtavinayakdarshancabpune from './pages/Ashtavinayak Darshan Cab Pune';
import Carhireinkoregaonpark from './pages/Car Hire In Koregaon Park Kalyani Nagar';
import Carhireinkothrudpune from './pages/Car Hire In Kothrud Pune';
import Carrentalinmagarpattacity from './pages/Car Rental In Magarpatta City';
import Corporatecabserviceinpune from './pages/Corporate Cab Service in Pune';
import Bestoutstationcabserviceinpune from './pages/Best Outstation Cab Service in Pune';
import Shirditoopunecabstaxi from './pages/Shirdi To Pune Cabs Taxi';
import Mahabaleshwartopunecabs from './pages/Mahabaleshwar To Pune Cabs';
import Bookinnovaforputstationpune from './pages/Book Innova For Outstation Pune';
import Booktaxiinpune from './pages/Book Taxi In Pune';
import Busonrentinpune from './pages/Bus On Rent in Pune';
import Tempotravelleronrentinpune from './pages/Tempo Traveller On Rent in Pune';
import Ertigaonrentinpune from './pages/Ertiga On Rent in Pune';
import Luxurycaronrentinpune from './pages/Luxury Car On Rent In Pune';
import Toyotaetiononrentinpune from './pages/Toyota Etios On Rent In Pune';
import Swiftdzireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Puneonewaycabs from './pages/Pune One Way Cabs';
import Taxiservicenearmepune from './pages/Taxi Service Near Me Pune';
import Punetomumbaiairportcab from './pages/Pune to Mumbai Airport Cab';
import Punetooutstationcabs from './pages/Pune to Outstations Cabs';
import Punetomatherancabs from './pages/Pune to Matheran Cabs';
import Punetofivejyotilingadarshancab from './pages/Pune to 5 Jyotirlinga Darshan Cab';
import Punetobhimashanakrcab from './pages/Pune to Bhimashankar Cab';
import Punetonashikcabservice from './pages/Pune to Nashik Cab Service';
import Innovacrystacabinpune from './pages/Innova Crysta Cab in Pune';
import Punetojyotilingadasrahnpackage from './pages/Pune to Jyotirlinga Darshan Package';
import Punetoakkalkotcabs from './pages/Pune to Akkalkot Cabs';
import Punetopandharpurcab from './pages/Pune to Pandharpur Cab';
import Punetogrishneshwarjyotilingacab from './pages/Pune to Grishneshwar Jyotirlinga Cab';
import Innovacrystaonrentinpune from './pages/Innova Crysta On Rent in Pune';
import Ertigahireinpune from './pages/Ertiga Hire in Pune';
import Punetoshrivasrahncab from './pages/Pune to Shrivardhan Cab';
import Punetojyotibacab from './pages/Pune to Jyotiba Cab';
import Sedancabserviceinpune from './pages/Sedan Cab Service in Pune';
import Hyundaixcentcabinpune from './pages/Hyundai Xcent Cabs in Pune';
import Auracabserviceinpune from './pages/Aura Cab Service in Pune';
import Punedarshansedancabbooking from './pages/Pune Darshan Sedan Cab Booking';
import Punetoayodhyatourpackages from './pages/Pune to Ayodhya Tour Package';
import Punetomahabaleshwarsedancab from './pages/Pune to Mahabaleshwar Sedan Cab';
import Puneairportcabsedanservice from './pages/Pune Airport Cab Sedan Service';
import Punetoshirdisedancabs from './pages/Pune to Shirdi Sedan Cabs';
import Punetohyundaiauracab from './pages/Pune Hyundai Aura Cab';
import Punetolonavalasedancabs from './pages/Pune to Lonavala Sedan Cabs';
import Onlinesedancabbookingpune from './pages/Online Sedan Cab Booking Pune';
import Punetovidharbhcabservice from './pages/Pune to Vidarbha Cab Service';
import Punetohyderabadcab from './pages/Pune to Hyderabad Cab';
import Punetoujjaincab from './pages/Pune to Ujjain Cab';
import Punerailwaystationcabservice from './pages/Pune Railway Station Cab Service';
import Cheapcabserviceinpune from './pages/Cheap Cab Service in Pune';
import Onlinecabbookingpune from './pages/Online Cab Booking Pune';
import Punetogujratcabservice from './pages/Pune to Gujarat Cab Service';
import Punetoahmednagarcab from './pages/Pune to Ahmednagar Cab';
import Punetolaturcab from './pages/Pune to Latur Cab';
import Punetomumbaidarshancab from './pages/Pune to Mumbai Darshan Cab';
import Puneairportcab from './pages/Pune Airport Cab';
import Puneottstationcabs from './pages/Pune to Outstation Cabs';
import Punetorajsthancabs from './pages/Pune to Rajasthan Cabs';
import Punetosambhajinagarcab from './pages/Pune to Sambhajinagar Cab';
import Punetodhulecab from './pages/Pune to Dhule Cabs';
import Punetojalgaoncabservice from './pages/Pune to Jalgaon Cab Service';
import Punetothanecab from './pages/Pune to Thane Cab';
import Punetopanvelcabs from './pages/Pune to Panvel Cabs';
import Punetonanddedcabservice from './pages/Pune to Nanded Cab Service';
import Punetosuratcabs from './pages/Pune to Surat Cabs';
import PunetoahmedabadCab from './pages/Pune to Ahmedabad Cab';
import Punetolagatpuritaxi from './pages/Pune to Igatpuri Taxi';
import Punetotamhinighatcab from './pages/Pune to Tamhini Ghat Cab';
import Punetotrimbkeshwarcabservice from './pages/Pune to Trimbakeshwar Cab Service';
import Punetojejuricabservice from './pages/Pune to Jejuri Cab Service';
import Punetoaundhnagnathcab from './pages/Pune to Aundha Nagnath Cab';
import Punetokonkandarshancab from './pages/Pune to Konkan Darshan Cab';
import Puneinnovacabs from './pages/Pune Innova Cabs';
import Punetopanchganicabs from './pages/Pune to Panchgani Cabs';
import Hinjewadicabservice from './pages/Hinjewadi Cab Service';
import Cabserviceinkharadi from './pages/Cab Service in Kharadi';
import Cabserviceinwagholi from './pages/Cab Service in Wagholi';
import Cabserviceinmundhwa from './pages/Cab Service in Mundhwa';
import Cabserviceinkalyaninagar from './pages/Cab Service in Kalyani Nagar';
import Cabserviceinkothrud from './pages/Cab Service in Kothrud';
import Punetomahabaleshwartempotraveller from './pages/Pune to Mahabaleshwar Tempo Traveller';
import Punetooutstationtempotraveller from './pages/Pune to Outstation Tempo Traveller';
import Minibusonrentinpune from './pages/Mini Bus On Rent in Pune';
import Outstationminibusonrentpune from './pages/Outstation Mini Bus on Rent Pune';
import Onefourtempotravelleronrent from './pages/14 Seater Tempo Traveller on Rent';
import Onesevanseaterbusonrentpune from './pages/17 Seater Bus on Rent Pune';
import Punetoshirditempotraveller from './pages/Pune to Shirdi Tempo Traveller';
import Twozeroseaterbusonrentinpune from './pages/20 Seater Bus on Rent in Pune';
import Luxuryforceurbaniaonrentinpune from './pages/Luxury Force Urbania On Rent in Pune';
import Forceurbanialuxuryminibusonrent from './pages/Force Urbania Luxury Mini Bus On Rent';
import Onefouronesevanseatetbus from './pages/14 17 20 25 Seater Bus on Rent in Pune';
import Tempotravellerhireinpune from './pages/Tempo Traveller Hire in Pune';
import Forceurbaniaonrentforashtavinayal from './pages/Force Urbania on Rent for Ashtavinayak Darshan';
import Punetomahabaleshwarurbania from './pages/Pune to Mahabaleshwar Urbania on Rent';
import Busonrentinkharadipune from './pages/Bus on Rent in Kharadi Pune';
import Busonrentinhinjewadipune from './pages/Bus on Rent in Hinjewadi Pune';
import TempoTravellerOnRentInKharadiPune from './pages/Tempo Traveller on Rent in Kharadi Pune';
import Tempotravellerhireinwakadpune from './pages/Tempo Traveller Hire in Wakad Pune';
import TempoTravellerOnRentInBanerPune from './pages/Tempo Traveller on Rent in Baner Pune';
import Tempotarvellerhireinhadapsarpune from './pages/Tempo Traveller Hire in Hadapsar Pune';
import Tempotravelleronrentinpimprichinchwad from './pages/Tempo Traveller on Rent in Pimpri Chinchwad';
import Tempotravellerhireinvimannagarpune from './pages/Tempo Traveller Hire in Viman Nagar Pune';
import TempoTravellerOnRentInKothrudPune from './pages/Tempo Traveller on Rent in Kothrud Pune';
import TempoTravellerHireInWagholiPune from './pages/Tempo Traveller Hire in Wagholi Pune';
import Tempotravelleronrentinaundhpune from './pages/Tempo Traveller on Rent in Aundh Pune';
import Tempotravellerhireinmagarpattapune from './pages/Tempo Traveller Hire in Magarpatta Pune';
import TempoTravellerOnRentInBavdhanPune from './pages/Tempo Traveller on Rent in Bavdhan Pune';
import Temptravellerhireinpimplesaudagar from './pages/Tempo Traveller Hire in Pimple Saudagar Pune';
import Tempotravelleronrentinchichwadpune from './pages/Tempo Traveller on Rent in Chinchwad Pune';
import Weddingminibusrental from './pages/Wedding Mini Bus Rental in Pune';
import Punetoshirdiminibus from './pages/Pune to Shirdi Mini Bus';
import Punettomahabaleshwarminibus from './pages/Pune to Mahabaleshwar Mini Bus';
import Minibusonrenthinjewadi from './pages/Mini Bus on Rent in Hinjewadi';
import Minibusonrentinvimannagar from './pages/Mini Bus on Rent in Viman Nagar';
import Minibusonrentinkothrud from './pages/Mini Bus on Rent in Kothrud';
import Minnibusinchichwadpune from './pages/Mini Bus in Chinchwad Pune';
import Mumbaiairporttopunecab from './pages/Mumbai Airport to Pune Cab';
import Mumbaitoratnagiricab from './pages/Mumbai to Ratnagiri Cab';
import Mumbaitobanglorecab from './pages/Mumbai to Bangalore Cab';
import Mumbaitogoacab from './pages/Mumbai to Goa Cab';
import Mumbaitolonavalacab from './pages/Mumbai to Lonavala Cab';
import Mumbaitonashikcab from './pages/Mumbai to Nashik Cab';
import Mumbaitopunecab from './pages/Mumbai to Pune Cab';
import Mumbaitoshirdicab from './pages/Mumbai to Shirdi Cab';
import Mumbaitosuratcab from './pages/Mumbai to Surat Cab';
import Shirditomumbaicab from './pages/Shirdi to Mumbai Cab';
import Mahabaleshwartomumbaicab from './pages/Mahabaleshwar to Mumbai Cab';
import Outstatiocabserviceinmumbai from './pages/Outstation Cab Service in Mumbai';
import Navimumbaiarportcab from './pages/Navi Mumbai Airport Cab';
import Cabserviceinnavimumbai from './pages/Cab Service in Navi Mumbai';
import Innovacrystaonrentinmumbai from './pages/Innova Crysta on Rent in Mumbai';
import Ertigaonrentinmumbai from './pages/Ertiga on Rent in Mumbai';
import Mumbaitomahabaleshwarcab from './pages/Mumbai to Mahabaleshwar Cab';
import Cabserviceinthane from './pages/Cab Service in Thane';
import Urbaniaonrentinpune from './pages/Urbania on Rent in Pune';
import Urbaniaonrentinpimprichichwad from './pages/Urbania on Rent in Pimpri Chinchwad';
import Urbaniahireforcorporateeventsinpune from './pages/Urbania Hire for Corporate Events in Pune';
import Onesevanurbaniaonrentinpune from './pages/17 Seater Urbania on Rent in Pune';
import Oneourseaterurbaniaonrent from './pages/14 Seater Urbania on Rent in Pune';
import Urabaniaonrentinkharadi from './pages/Urbania on Rent in Kharad';
import Urbaniaonrenthadapsar from './pages/Urbania on Rent in Hadapsar';
import Urbaniaonrentinkothrud from './pages/Urbania on Rent in Kothrud';
import Urbaniaonrentbibwewadi from './pages/Urbania on Rent in Bibwewadi';
import Urbaniaonrentoregaon from './pages/Urbania on Rent in Koregaon Park';
import Exploreindoapan from './pages/Explore India Pan India Cab Booking Services';
import OnlinePayment from './components/OnlinePayment';
import Packages from './pages/Packages';
import OurFleet from './pages/OurFleet';
import Services from './components/Services';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
      <ContactButtons />
      <ScrollToTop />
<Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutOne />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/contact-us" element={<ContactInfo />} />
        <Route path="/career" element={<Career />} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/our-fleet" element={<OurFleet/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/Online-Payment" element={<OnlinePayment/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/pune-airport-taxi-cabs-service" element={<Puneairporttaxicabsservice/>} />


        <Route path="/pune-local-cab-service" element={<Punelocalcabservice/>} />
<Route path="/pune-to-alibaug-cab" element={<Punetoalibaugcab/>} />
<Route path="/pune-to-aurangabad-cab-service" element={<Punetoaurangabadcab/>} />
<Route path="/pune-to-bangalore-cab" element={<Punetobanglorecab/>} />
<Route path="/pune-to-goa-cab-service" element={<Punetogoacabservice/>} />
<Route path="/pune-to-kolhapur-cab-service" element={<Punetokolhapurcab/>} />
<Route path="/pune-to-lavasa-car-rental" element={<Punetolavasaccarrental/>} />
<Route path="/pune-to-lonavala-cab" element={<Punetolonavalacab/>} />
<Route path="/pune-to-mahabaleshwar-cab" element={<Punetomahabaleshwarcab/>} />
<Route path="/pune-to-mumbai-cabs" element={<Punetomumbaicabs/>} />
<Route path="/pune-to-mumbai-taxi-cabs" element={<Punetomumbaitaxicab/>} />
<Route path="/pune-to-nagpur-cab" element={<Punetonagpurcab/>} />
<Route path="/pune-to-sangli-satara-cabs" element={<Punetosanglisataracaab/>} />
<Route path="/pune-to-shirdi-cab-taxi" element={<Punetoshirdicabtaxi/>} />
<Route path="/pune-to-solapur-cab" element={<Punetosolapurcab/>} />
<Route path="/ashtavinayak-darshan-cab-pune" element={<Ashtavinayakdarshancabpune/>} />
<Route path="/car-hire-in-koregaon-park-kalyani-nagar" element={<Carhireinkoregaonpark/>} />
<Route path="/car-hire-in-kothrud-pune" element={<Carhireinkothrudpune/>} />
<Route path="/car-rental-in-magarpatta-city" element={<Carrentalinmagarpattacity/>} />
<Route path="/corporate-cab-service-in-pune" element={<Corporatecabserviceinpune/>} />
<Route path="/best-outstation-cab-service-in-pune" element={<Bestoutstationcabserviceinpune/>} />
<Route path="/shirdi-to-pune-cabs-taxi" element={<Shirditoopunecabstaxi/>} />
<Route path="/mahabaleshwar-to-pune-cabs" element={<Mahabaleshwartopunecabs/>} />
<Route path="/book-innova-for-outstation-pune" element={<Bookinnovaforputstationpune/>} />
<Route path="/book-taxi-in-pune" element={<Booktaxiinpune/>} />
<Route path="/bus-on-rent-in-pune" element={<Busonrentinpune/>} />
<Route path="/tempo-traveller-on-rent-in-pune" element={<Tempotravelleronrentinpune/>} />
<Route path="/ertiga-on-rent-in-pune" element={<Ertigaonrentinpune/>} />
<Route path="/luxury-car-on-rent-in-pune" element={<Luxurycaronrentinpune/>} />
<Route path="/toyota-etios-on-rent-in-pune" element={<Toyotaetiononrentinpune/>} />
<Route path="/swift-dzire-on-rent-in-pune" element={<Swiftdzireonrentinpune/>} />
<Route path="/pune-one-way-cabs" element={<Puneonewaycabs/>} />
<Route path="/taxi-service-near-me-pune" element={<Taxiservicenearmepune/>} />
<Route path="/pune-to-mumbai-airport-cab" element={<Punetomumbaiairportcab/>} />
<Route path="/pune-to-outstations-cabs" element={<Punetooutstationcabs/>} />
<Route path="/pune-to-matheran-cabs" element={<Punetomatherancabs/>} />
<Route path="/pune-to-5-jyotirlinga-darshan-cab" element={<Punetofivejyotilingadarshancab/>} />
<Route path="/pune-to-bhimashankar-cab" element={<Punetobhimashanakrcab/>} />
<Route path="/pune-to-nashik-cab-service" element={<Punetonashikcabservice/>} />
<Route path="/innova-crysta-cab-in-pune" element={<Innovacrystacabinpune/>} />
<Route path="/pune-to-jyotirlinga-darshan-package" element={<Punetojyotilingadasrahnpackage/>} />
<Route path="/pune-to-akkalkot-cabs" element={<Punetoakkalkotcabs/>} />
<Route path="/pune-to-pandharpur-cab" element={<Punetopandharpurcab/>} />
<Route path="/pune-to-grishneshwar-jyotirlinga-cab" element={<Punetogrishneshwarjyotilingacab/>} />
<Route path="/innova-crysta-on-rent-in-pune" element={<Innovacrystaonrentinpune/>} />
<Route path="/ertiga-hire-in-pune" element={<Ertigahireinpune/>} />
<Route path="/pune-to-shrivardhan-cab" element={<Punetoshrivasrahncab/>} />
<Route path="/pune-to-jyotiba-cab" element={<Punetojyotibacab/>} />
<Route path="/sedan-cab-service-in-pune" element={<Sedancabserviceinpune/>} />
<Route path="/hyundai-xcent-cabs-in-pune" element={<Hyundaixcentcabinpune/>} />
<Route path="/aura-cab-service-in-pune" element={<Auracabserviceinpune/>} />
<Route path="/pune-darshan-sedan-cab-booking" element={<Punedarshansedancabbooking/>} />
<Route path="/pune-to-ayodhya-tour-package" element={<Punetoayodhyatourpackages/>} />
<Route path="/pune-to-mahabaleshwar-sedan-cab" element={<Punetomahabaleshwarsedancab/>} />

<Route path="/pune-airport-cab-sedan-service" element={<Puneairportcabsedanservice/>} />
<Route path="/pune-to-shirdi-sedan-cabs" element={<Punetoshirdisedancabs/>} />
<Route path="/pune-hyundai-aura-cab" element={<Punetohyundaiauracab/>} />
<Route path="/pune-to-lonavala-sedan-cabs" element={<Punetolonavalasedancabs/>} />
<Route path="/online-sedan-cab-booking-pune" element={<Onlinesedancabbookingpune/>} />
<Route path="/pune-to-vidarbha-cab-service" element={<Punetovidharbhcabservice/>} />
<Route path="/pune-to-hyderabad-cab" element={<Punetohyderabadcab/>} />
<Route path="/pune-to-ujjain-cab" element={<Punetoujjaincab/>} />
<Route path="/pune-railway-station-cab-service" element={<Punerailwaystationcabservice/>} />
<Route path="/cheap-cab-service-in-pune" element={<Cheapcabserviceinpune/>} />
<Route path="/online-cab-booking-pune" element={<Onlinecabbookingpune/>} />
<Route path="/pune-to-gujarat-cab-service" element={<Punetogujratcabservice/>} />
<Route path="/pune-to-ahmednagar-cab" element={<Punetoahmednagarcab/>} />
<Route path="/pune-to-latur-cab" element={<Punetolaturcab/>} />
<Route path="/pune-to-mumbai-darshan-cab" element={<Punetomumbaidarshancab/>} />
<Route path="/pune-airport-cab" element={<Puneairportcab/>} />
<Route path="/pune-to-outstation-cabs" element={<Puneottstationcabs/>} />
<Route path="/pune-to-rajasthan-cabs" element={<Punetorajsthancabs/>} />
<Route path="/pune-to-sambhajinagar-cab" element={<Punetosambhajinagarcab/>} />
<Route path="/pune-to-dhule-cabs" element={<Punetodhulecab/>} />
<Route path="/pune-to-jalgaon-cab-service" element={<Punetojalgaoncabservice/>} />
<Route path="/pune-to-thane-cab" element={<Punetothanecab/>} />
<Route path="/pune-to-panvel-cabs" element={<Punetopanvelcabs/>} />
<Route path="/pune-to-nanded-cab-service" element={<Punetonanddedcabservice/>} />
<Route path="/pune-to-surat-cabs" element={<Punetosuratcabs/>} />
<Route path="/pune-to-ahmedabad-cab" element={<PunetoahmedabadCab/>} />
<Route path="/pune-to-igatpuri-taxi" element={<Punetolagatpuritaxi/>} />
<Route path="/pune-to-tamhini-ghat-cab" element={<Punetotamhinighatcab/>} />
<Route path="/pune-to-trimbakeshwar-cab-service" element={<Punetotrimbkeshwarcabservice/>} />
<Route path="/pune-to-jejuri-cab-service" element={<Punetojejuricabservice/>} />
<Route path="/pune-to-aundha-nagnath-cab" element={<Punetoaundhnagnathcab/>} />
<Route path="/pune-to-konkan-darshan-cab" element={<Punetokonkandarshancab/>} />
<Route path="/pune-innova-cabs" element={<Puneinnovacabs/>} />
<Route path="/pune-to-panchgani-cabs" element={<Punetopanchganicabs/>} />
<Route path="/hinjewadi-cab-service" element={<Hinjewadicabservice/>} />
<Route path="/cab-service-in-kharadi" element={<Cabserviceinkharadi/>} />
<Route path="/cab-service-in-wagholi" element={<Cabserviceinwagholi/>} />
<Route path="/cab-service-in-mundhwa" element={<Cabserviceinmundhwa/>} />
<Route path="/cab-service-in-kalyani-nagar" element={<Cabserviceinkalyaninagar/>} />
<Route path="/cab-service-in-kothrud" element={<Cabserviceinkothrud/>} />
<Route path="/pune-to-mahabaleshwar-tempo-traveller" element={<Punetomahabaleshwartempotraveller/>} />
<Route path="/pune-to-outstation-tempo-traveller" element={<Punetooutstationtempotraveller/>} />
<Route path="/mini-bus-on-rent-in-pune" element={<Minibusonrentinpune/>} />
<Route path="/outstation-mini-bus-on-rent-pune" element={<Outstationminibusonrentpune/>} />
<Route path="/17-seater-bus-on-rent-pune" element={<Onesevanseaterbusonrentpune/>} />
<Route path="/pune-to-shirdi-tempo-traveller" element={<Punetoshirditempotraveller/>} />
<Route path="/20-seater-bus-on-rent-in-pune" element={<Twozeroseaterbusonrentinpune/>} />
<Route path="/luxury-force-urbania-on-rent-in-pune" element={<Luxuryforceurbaniaonrentinpune/>} />
<Route path="/force-urbania-luxury-mini-bus-on-rent" element={<Forceurbanialuxuryminibusonrent/>} />
<Route path="/14-17-20-25-seater-bus-on-rent-in-pune" element={<Onefouronesevanseatetbus/>} />




<Route path="/tempo-traveller-hire-in-pune" element={<Tempotravellerhireinpune/>} />
<Route path="/force-urbania-on-rent-for-ashtavinayak-darshan" element={<Forceurbaniaonrentforashtavinayal/>} />
<Route path="/pune-to-mahabaleshwar-urbania-on-rent" element={<Punetomahabaleshwarurbania/>} />
<Route path="/bus-on-rent-in-kharadi-pune" element={<Busonrentinkharadipune/>} />
<Route path="/bus-on-rent-in-hinjewadi-pune" element={<Busonrentinhinjewadipune/>} />
<Route path="/tempo-traveller-on-rent-in-kharadi-pune" element={<TempoTravellerOnRentInKharadiPune/>} />
<Route path="/tempo-traveller-hire-in-wakad-pune" element={<Tempotravellerhireinwakadpune/>} />
<Route path="/tempo-traveller-on-rent-in-baner-pune" element={<TempoTravellerOnRentInBanerPune/>} />
<Route path="/tempo-traveller-hire-in-hadapsar-pune" element={<Tempotarvellerhireinhadapsarpune/>} />
<Route path="/tempo-traveller-on-rent-in-pimpri-chinchwad" element={<Tempotravelleronrentinpimprichinchwad/>} />
<Route path="/tempo-traveller-hire-in-viman-nagar-pune" element={<Tempotravellerhireinvimannagarpune/>} />
<Route path="/tempo-traveller-on-rent-in-kothrud-pune" element={<TempoTravellerOnRentInKothrudPune/>} />
<Route path="/tempo-traveller-hire-in-wagholi-pune" element={<TempoTravellerHireInWagholiPune/>} />
<Route path="/tempo-traveller-on-rent-in-aundh-pune" element={<Tempotravelleronrentinaundhpune/>} />
<Route path="/tempo-traveller-hire-in-magarpatta-pune" element={<Tempotravellerhireinmagarpattapune/>} />
<Route path="/tempo-traveller-on-rent-in-bavdhan-pune" element={<TempoTravellerOnRentInBavdhanPune/>} />
<Route path="/tempo-traveller-hire-in-pimple-saudagar-pune" element={<Temptravellerhireinpimplesaudagar/>} />
<Route path="/tempo-traveller-on-rent-in-chinchwad-pune" element={<Tempotravelleronrentinchichwadpune/>} />
<Route path="/wedding-mini-bus-rental-in-pune" element={<Weddingminibusrental/>} />
<Route path="/pune-to-shirdi-mini-bus" element={<Punetoshirdiminibus/>} />
<Route path="/pune-to-mahabaleshwar-mini-bus" element={<Punettomahabaleshwarminibus/>} />
<Route path="/mini-bus-on-rent-in-hinjewadi" element={<Minibusonrenthinjewadi/>} />
<Route path="/mini-bus-on-rent-in-viman-nagar" element={<Minibusonrentinvimannagar/>} />
<Route path="/mini-bus-on-rent-in-kothrud" element={<Minibusonrentinkothrud/>} />
<Route path="/mini-bus-in-chinchwad-pune" element={<Minnibusinchichwadpune/>} />
<Route path="/mumbai-airport-to-pune-cab" element={<Mumbaiairporttopunecab/>} />
<Route path="/mumbai-to-ratnagiri-cab" element={<Mumbaitoratnagiricab/>} />
<Route path="/mumbai-to-bangalore-cab" element={<Mumbaitobanglorecab/>} />
<Route path="/mumbai-to-goa-cab" element={<Mumbaitogoacab/>} />
<Route path="/mumbai-to-lonavala-cab" element={<Mumbaitolonavalacab/>} />
<Route path="/mumbai-to-nashik-cab" element={<Mumbaitonashikcab/>} />
<Route path="/mumbai-to-pune-cab" element={<Mumbaitopunecab/>} />
<Route path="/mumbai-to-shirdi-cab" element={<Mumbaitoshirdicab/>} />
<Route path="/mumbai-to-surat-cab" element={<Mumbaitosuratcab/>} />
<Route path="/shirdi-to-mumbai-cab" element={<Shirditomumbaicab/>} />
<Route path="/mahabaleshwar-to-mumbai-cab" element={<Mahabaleshwartomumbaicab/>} />
<Route path="/outstation-cab-service-in-mumbai" element={<Outstatiocabserviceinmumbai/>} />
<Route path="/navi-mumbai-airport-cab" element={<Navimumbaiarportcab/>} />
<Route path="/cab-service-in-navi-mumbai" element={<Cabserviceinnavimumbai/>} />
<Route path="/innova-crysta-on-rent-in-mumbai" element={<Innovacrystaonrentinmumbai/>} />
<Route path="/ertiga-on-rent-in-mumbai" element={<Ertigaonrentinmumbai/>} />
<Route path="/mumbai-to-mahabaleshwar-cab" element={<Mumbaitomahabaleshwarcab/>} />
<Route path="/cab-service-in-thane" element={<Cabserviceinthane/>} />
<Route path="/urbania-on-rent-in-pune" element={<Urbaniaonrentinpune/>} />
<Route path="/urbania-on-rent-in-pimpri-chinchwad" element={<Urbaniaonrentinpimprichichwad/>} />
<Route path="/urbania-hire-for-corporate-events-in-pune" element={<Urbaniahireforcorporateeventsinpune/>} />
<Route path="/17-seater-urbania-on-rent-in-pune" element={<Onesevanurbaniaonrentinpune/>} />
<Route path="/14-seater-urbania-on-rent-in-pune" element={<Oneourseaterurbaniaonrent/>} />
<Route path="/urbania-on-rent-in-kharadi" element={<Urabaniaonrentinkharadi/>} />
<Route path="/urbania-on-rent-in-hadapsar" element={<Urbaniaonrenthadapsar/>} />
<Route path="/urbania-on-rent-in-kothrud" element={<Urbaniaonrentinkothrud/>} />
<Route path="/urbania-on-rent-in-bibwewadi" element={<Urbaniaonrentbibwewadi/>} />
<Route path="/urbania-on-rent-in-koregaon-park" element={<Urbaniaonrentoregaon/>} />
<Route path="/explore-india-pan-india-cab-booking-services" element={<Exploreindoapan/>} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
