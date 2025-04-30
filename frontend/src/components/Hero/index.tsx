import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Welcome to Swayamvar',
      subtitle: 'Creating Timeless Moments for Your Perfect Day'
    },
    {
      image: 'https://images.unsplash.com/photo-1611235115922-72aece5cf686?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Elegant Celebrations',
      subtitle: 'Where Dreams Turn Into Beautiful Memories'
    },
    {
      image: 'https://images.unsplash.com/photo-1620162009575-973a0b03d372?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Luxury Wedding Planning',
      subtitle: 'Experience the Magic of Perfect Celebrations'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 