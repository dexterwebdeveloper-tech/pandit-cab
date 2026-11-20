import React from 'react';
import Carousel from './Carousel';
import VideoSlider from './VideoSlider';
import Services from '../pages/Services';
import About from '../pages/About';
import Process from '../pages/Process';
import WhyChooseUs from '../pages/WhyChooseUs';
import CounterOne from '../pages/Counter';
import Listing from '../pages/Listing';
import Call from '../pages/Call';
import Testimonial from '../pages/Testimonial';
import Faq from '../pages/Faq';
import BlogOne from '../pages/BlogOne';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              <Carousel/>
              {/* <VideoSlider/> */}
              <Services/>
              {/* <About/> */}
              <Process/>
              <WhyChooseUs/>
              <CounterOne/>
              <Listing/>
              <Call/>
              <Testimonial/>
              <Faq/>
              <BlogOne/>
    </div>
  );
};

export default HeroSection;
