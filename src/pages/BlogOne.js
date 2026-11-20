
import React from "react";
import "./BlogOne.css";

const BlogOne = () => {
  const blogs = [
    {
      image: "/images/keyword/11.jpg",
      category: "Cab Booking",
      title: "Pune To Mumbai Cabs",
      description:
        "Discover useful tips for choosing a comfortable and reliable cab service in Pune for local travel, airport transfers and family trips.",
      link: "/pune-to-mumbai-cabs",
    },
    {
      image: "/images/keyword/21.jpg",
      category: "Outstation Travel",
      title: "Corporate Cab Service In Pune",
      description:
        "Explore popular destinations like Mumbai, Mahabaleshwar, Lonavala and Shirdi with suitable cab options for your next outstation journey.",
      link: "/corporate-cab-service-in-pune",
    },
    {
      image: "/images/keyword/1.jpg",
      category: "Airport Transfers",
      title: "Pune Airport Taxi Cabs Service",
      description:
        "Plan your Pune to Mumbai Airport journey with helpful information about vehicle selection, pickup planning and comfortable airport transfers.",
      link: "/pune-airport-taxi-cabs-service",
    },
  ];

  return (
    <section className="blog-one">
      <div className="blog-one__shape-1"></div>
      <div className="blog-one__shape-2"></div>

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
              Pandit Cabs Travel Blog
            </span>
          </div>

          <h2 className="section-title__title title-animation text-white">
            Latest Cab Booking Tips & Travel Guides
          </h2>
        </div>

        {/* THREE STATIC BLOG CARDS */}
        <div className="row g-4">

          {blogs.map((blog, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
            >
              <div className="blog-one__single">

                {/* BLOG IMAGE */}
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <a href={blog.link}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                      />
                    </a>

                    <div className="blog-one__tags">
                      <span>{blog.category}</span>
                    </div>
                  </div>
                </div>

                {/* BLOG CONTENT */}
                <div className="blog-one__content">

                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <span className="fas fa-user"></span>
                      <span>Pandit Cabs</span>
                    </li>
                  </ul>

                  <h3 className="blog-one__title">
                    <a href={blog.link}>
                      {blog.title}
                    </a>
                  </h3>

                  <p className="blog-one__text">
                    {blog.description}
                  </p>

                  <a
                    href={blog.link}
                    className="blog-one__read-more"
                  >
                    Read More
                    <span className="fas fa-arrow-right"></span>
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BlogOne;
