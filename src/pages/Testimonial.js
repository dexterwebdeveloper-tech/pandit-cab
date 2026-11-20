
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  // Sample testimonials - replace with verified customer reviews.
  const testimonials = [
    {
      name: "Mr. Rahul Sharma",
      image: "testimonial-1-1.jpg",
      title: "Outstation Traveller",
      review:
        "We booked an Innova Crysta for our Pune to Mahabaleshwar trip. The journey was comfortable, and the booking process was simple and convenient.",
    },
    {
      name: "Miss Priya Patil",
      image: "testimonial-1-2.jpg",
      title: "Airport Transfer Customer",
      review:
        "I booked a cab for my Pune Airport transfer. The pickup arrangements were convenient, and the overall travel experience was comfortable.",
    },
    {
      name: "Mr. Amit Deshmukh",
      image: "testimonial-1-3.jpg",
      title: "Family Tour Customer",
      review:
        "Pandit Cabs helped us arrange an Ertiga for our family trip to Lonavala. The vehicle was comfortable and suitable for our travel needs.",
    },
    {
      name: "Miss Sneha Kulkarni",
      image: "testimonial-1-4.jpg",
      title: "Local Cab Customer",
      review:
        "I had a pleasant experience booking a local cab in Pune. The communication was clear, and the journey was convenient and comfortable.",
    },
    {
      name: "Mr. Rohit Jadhav",
      image: "testimonial-1-5.jpg",
      title: "Corporate Travel Customer",
      review:
        "We arranged a cab for business travel through Pandit Cabs. The booking assistance was helpful, and the vehicle suited our requirements.",
    },
    {
      name: "Miss Neha Joshi",
      image: "testimonial-1-6.jpg",
      title: "Outstation Cab Customer",
      review:
        "Our Pune to Shirdi journey was comfortable with Pandit Cabs. The vehicle selection and booking arrangements made planning the trip easier.",
    },
  ];

  return (
    <section className="testimonial-one">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title text-left sec-title-animation animation-style2">

          <div className="section-title__tagline-box">
            {/* <div className="section-title__tagline-shape">
              <img
                src="/images/shapes/section-title-tagline-shape-2.png"
                alt=""
              />
            </div> */}

            <span className="section-title__tagline">
              Pandit Cabs Testimonials
            </span>
          </div>

          <h2 className="section-title__title title-animation">
            What Our Customers Say <br />
            About Pandit Cabs
          </h2>

        </div>

        {/* TESTIMONIAL SLIDER */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          className="testimonial-one__carousel"
          loop={true}
          speed={1000}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >

          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-one__single">

                {/* CUSTOMER INFO */}
                <div className="testimonial-one__client-info">

                  {/* <div className="testimonial-one__img">
                    <img
                      src={`/images/testimonial/${testimonial.image}`}
                      alt={testimonial.name}
                      loading="lazy"
                    />
                  </div> */}

                  <div className="testimonial-one__content">
                    <h4 className="testimonial-one__client-name">
                      {testimonial.name}
                    </h4>

                    <p className="testimonial-one__sub-title">
                      {testimonial.title}
                    </p>
                  </div>

                </div>

                {/* CUSTOMER REVIEW */}
                <p className="testimonial-one__text">
                  {testimonial.review}
                </p>

                {/* RATING ICONS - DECORATIVE PLACEHOLDERS */}
                <div
                  className="testimonial-one__rating"
                  aria-hidden="true"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="icon-star"
                    ></span>
                  ))}
                </div>

                {/* QUOTE ICON */}
                <div className="testimonial-one__quote">
                  <span className="icon-quote"></span>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Testimonial;
