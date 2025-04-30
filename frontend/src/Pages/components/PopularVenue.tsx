import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PopularVenue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  const venues = [
    {
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
      title: "Banquet Halls",
      category: "banquet-halls",
      locations: ["Gurgaon", "Delhi", "Noida"]
    },
    {
      image: "https://images.pexels.com/photos/226786/pexels-photo-226786.jpeg",
      title: "Farmhouses",
      category: "farmhouses",
      locations: ["Delhi", "Gurgaon", "Faridabad"]
    },
    {
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      title: "Resorts",
      category: "resorts",
      locations: ["Noida", "Delhi", "Gurgaon"]
    },
    {
      image: "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg",
      title: "Hotels",
      category: "hotels",
      locations: ["Delhi", "Noida", "Gurgaon"]
    },
    {
      image: "https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg",
      title: "Marriage Gardens",
      category: "marriage-gardens",
      locations: ["Gurgaon", "Faridabad", "Delhi"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= venues.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, venues.length - 3) : prevIndex - 3
    );
  };

  const handleVenueClick = (category: string) => {
    navigate(`/venues?category=${category}`);
  };

  const visibleVenues = venues.slice(currentIndex, currentIndex + 3);

  return (
    <div className='w-[80%] mx-auto py-10'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-[PoppinsRegular] text-amber-800">
          Popular Venue Searches
        </h1>
        <Link 
          to="/venues" 
          className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
        >
          View All
        </Link>
      </div>

      <div className="relative">
        <div className="grid grid-cols-3 gap-6">
          {visibleVenues.map((venue, i) => (
            <div 
              key={i} 
              className='bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg p-4 flex gap-4 items-center shadow-md border border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer'
              onClick={() => handleVenueClick(venue.category)}
            >
              <img src={venue.image} className='w-24 h-24 rounded-md object-cover' alt={venue.title} />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-amber-800 mb-2">{venue.title}</h2>
                <ul className="flex flex-wrap gap-2">
                  {venue.locations.map((location, j) => (
                    <li key={j} className="text-amber-600 text-sm">{location}</li>
                  ))}
                </ul>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVenueClick(venue.category);
                  }}
                  className='text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-300'
                >
                  All Locations
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-amber-100 hover:bg-amber-200 text-amber-800 p-2 rounded-full shadow-md border border-amber-200 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-amber-100 hover:bg-amber-200 text-amber-800 p-2 rounded-full shadow-md border border-amber-200 transition-all duration-300"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(venues.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index 
                  ? 'w-6 bg-amber-600' 
                  : 'w-2 bg-amber-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularVenue