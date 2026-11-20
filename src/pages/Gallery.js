
import React, { useEffect, useState } from "react";
import "./Gallery.css";



const galleryImages = [
  {
    id: 1,
    title: "Swift Dzire",
    category: "Sedan",
    image: "/images/fleet/Swift-Dzire.jpg",
    description: "4+1 Seater | Comfortable sedan travel",
  },
  {
    id: 2,
    title: "Maruti Suzuki Ertiga",
    category: "SUV",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    description: "6+1 Seater | Family and outstation travel",
  },
  {
    id: 3,
    title: "Toyota Rumion",
    category: "SUV",
    image: "/images/fleet/Toyota-Rumion.jpg",
    description: "6+1 Seater | Spacious family journeys",
  },
  {
    id: 4,
    title: "Kia Carens",
    category: "SUV",
    image: "/images/fleet/Kia-Carens.jpg",
    description: "6+1 Seater | Premium family travel",
  },
  {
    id: 5,
    title: "Toyota Innova",
    category: "SUV",
    image: "/images/fleet/Innova-Cab.jpg",
    description: "7+1 Seater | Comfortable outstation journeys",
  },
  {
    id: 6,
    title: "Toyota Innova Crysta",
    category: "SUV",
    image: "/images/fleet/Innova-Crysta.jpg",
    description: "7+1 Seater | Premium SUV travel",
  },
  {
    id: 7,
    title: "Tempo Traveller",
    category: "Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    description: "Group Travel | Multiple seating options",
  },
  {
    id: 8,
    title: "Force Urbania",
    category: "Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    description: "Luxury Group Travel | Multiple seating options",
  },
  {
    id: 9,
    title: "Mini Bus",
    category: "Bus",
    image: "/images/fleet/Mini-Bus.jpg",
    description: "Large Group Travel | Multiple seating options",
  },
];



const categories = [
  "All",
  "Sedan",
  "SUV",
  "Urbania",
  "Traveller",
  "Bus",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [failedImages, setFailedImages] = useState([]);
  const [touchStart, setTouchStart] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev + 1) % filteredImages.length
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) %
          filteredImages.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          (prev + 1) % filteredImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          (prev - 1 + filteredImages.length) %
          filteredImages.length
        );
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredImages.length]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    setTouchStart(null);
  };

  const handleImageError = (id) => {
    setFailedImages((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  return (
    <main className="pc-gallery-page">

      {/* HERO */}
   
     <section className="page-header">
            <div
                className="page-header__bg"
                style={{
                    backgroundImage: "url(/images/backgrounds/page-header-bg.jpg)"
                }}
            ></div>
            <div className="container">
                <div className="page-header__inner">
                    <h3>Gallery</h3>
                </div>
            </div>
        </section>

      {/* GALLERY */}
      <section className="pc-gallery-section">
        <div className="pc-gallery-container">

          <div className="pc-gallery-heading">
            <div>
              <span className="pc-gallery-overline">
                DISCOVER OUR COLLECTION
              </span>

              <h2>
                Our Travel <span>Gallery</span>
              </h2>

              <p>
                Browse vehicle images and click any photo
                to view it in full screen.
              </p>
            </div>

            <div className="pc-gallery-count">
              <strong>{filteredImages.length}</strong>
              <span>Photos</span>
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div
            className="pc-gallery-filters"
            aria-label="Filter gallery"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`pc-gallery-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() => changeCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PHOTO GRID */}
          <div className="pc-gallery-grid">
            {filteredImages.map((item, index) => (
              <button
                type="button"
                className="pc-gallery-card"
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title} image`}
              >
                <div className="pc-gallery-image-wrap">
                  {failedImages.includes(item.id) ? (
                    <div className="pc-gallery-placeholder">
                      <span>Image unavailable</span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onError={() =>
                        handleImageError(item.id)
                      }
                    />
                  )}

                  <span className="pc-gallery-category">
                    {item.category}
                  </span>

                  <span className="pc-gallery-zoom">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="10.5" cy="10.5" r="6.5" />
                      <path d="M16 16l5 5M10.5 7v7M7 10.5h7" />
                    </svg>
                  </span>
                </div>

                <div className="pc-gallery-card-content">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="pc-gallery-card-arrow">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="pc-gallery-cta">
            <div>
              <span>PLAN YOUR NEXT JOURNEY</span>
              <h2>Looking for a Comfortable Ride?</h2>
              <p>
                Contact Pandit Cabs to enquire about
                vehicle availability and travel bookings.
              </p>
            </div>

            <a
              href="https://wa.me/919890121689?text=Hello%20Pandit%20Cabs%2C%20I%20would%20like%20to%20enquire%20about%20cab%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="pc-gallery-cta-btn"
            >
              Enquire on WhatsApp
              <span>↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedImage && (
        <div
          className="pc-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          onClick={closeLightbox}
        >
          <div className="pc-gallery-lightbox-top">
            <div className="pc-gallery-lightbox-brand">
              <span className="pc-gallery-brand-mark">
                P
              </span>

              <div>
                <strong>PANDIT CABS</strong>
                <small>PHOTO GALLERY</small>
              </div>
            </div>

            <div className="pc-gallery-lightbox-actions">
              <span className="pc-gallery-lightbox-counter">
                {selectedIndex + 1} / {filteredImages.length}
              </span>

              <button
                type="button"
                className="pc-gallery-close"
                onClick={closeLightbox}
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>
          </div>

          <div
            className="pc-gallery-lightbox-main"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) =>
              setTouchStart(e.touches[0].clientX)
            }
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="pc-gallery-nav pc-gallery-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="pc-gallery-lightbox-image">
              {failedImages.includes(selectedImage.id) ? (
                <div className="pc-gallery-placeholder">
                  Image unavailable
                </div>
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  onError={() =>
                    handleImageError(selectedImage.id)
                  }
                />
              )}
            </div>

            <button
              type="button"
              className="pc-gallery-nav pc-gallery-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div
            className="pc-gallery-lightbox-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pc-gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>

            <div className="pc-gallery-thumbnails">
              {filteredImages.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`pc-gallery-thumb ${
                    selectedIndex === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View ${item.title}`}
                  aria-pressed={selectedIndex === index}
                >
                  {!failedImages.includes(item.id) && (
                    <img
                      src={item.image}
                      alt=""
                      onError={() =>
                        handleImageError(item.id)
                      }
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
