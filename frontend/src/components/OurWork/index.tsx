import React from 'react';
import './OurWork.css';

const OurWork: React.FC = () => {
  const stats = [
    { number: "500+", label: "Weddings Organized" },
    { number: "1000+", label: "Happy Couples" },
    { number: "300+", label: "Venues Partnered" },
    { number: "50+", label: "Cities Covered" }
  ];

  const reviews = [
    {
      name: "Priya & Rahul",
      review: "Swayamvar made our dream wedding come true. Their attention to detail and professional service exceeded our expectations.",
      image: "/images/reviews/couple1.jpg",
      rating: 5
    },
    {
      name: "Meera & Aditya",
      review: "From venue selection to decoration, everything was perfectly managed. Highly recommend their services!",
      image: "/images/reviews/couple2.jpg",
      rating: 5
    },
    {
      name: "Anita & Vikram",
      review: "The team was very responsive and helped us plan our destination wedding seamlessly.",
      image: "/images/reviews/couple3.jpg",
      rating: 5
    }
  ];

  return (
    <div className="our-work">
      <div className="our-work-header">
        <h2>Our Work</h2>
        <p>Creating Memorable Wedding Experiences</p>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="reviews-section">
        <h3>What Our Clients Say</h3>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <p className="review-text">"{review.review}"</p>
                <div className="review-author">
                  <div className="stars">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="author-name">- {review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork; 