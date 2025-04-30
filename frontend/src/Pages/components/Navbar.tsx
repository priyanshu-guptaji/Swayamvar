import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaCloudSun, FaTicketAlt, FaGift, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [showTicketDropdown, setShowTicketDropdown] = useState(false);

  const handleTicketClick = () => {
    setShowTicketDropdown(!showTicketDropdown);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showTicketDropdown) {
        setShowTicketDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showTicketDropdown]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Swayamvar" className="h-12 w-12" />
            <Link to="/" className="text-2xl font-bold text-amber-800 ml-2">
              Swayamvar
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-800 hover:text-amber-600">Home</Link>
            <Link to="/decorations" className="text-amber-800 hover:text-amber-600">Decorations</Link>
            <Link to="/return-gifts" className="text-amber-800 hover:text-amber-600">
              <div className="flex items-center space-x-1">
                <FaGift className="text-xl" />
                <span>Return Gifts</span>
              </div>
            </Link>
            <Link to="/invitation-cards" className="text-amber-800 hover:text-amber-600">
              <div className="flex items-center space-x-1">
                <FaEnvelope className="text-xl" />
                <span>Invitation Cards</span>
              </div>
            </Link>
            <Link to="/contact" className="text-amber-800 hover:text-amber-600">Contact</Link>
            <Link to="/wishlist" className="text-amber-800 hover:text-amber-600">
              ❤️ Wishlist
            </Link>

            {/* Calculator */}
            <Link to="/calculator" className="text-amber-800 hover:text-amber-600">
              <div className="flex items-center space-x-1">
                <FaCalculator className="text-xl" />
                <span>Calculator</span>
              </div>
            </Link>

            {/* Weather */}
            <Link to="/weather" className="text-amber-800 hover:text-amber-600">
              <div className="flex items-center space-x-1">
                <FaCloudSun className="text-xl" />
                <span>Weather</span>
              </div>
            </Link>

            {/* Ticket Booking */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={handleTicketClick}
                className="flex items-center space-x-1 text-amber-800 hover:text-amber-600"
              >
                <FaTicketAlt className="text-xl" />
                <span>Book Tickets</span>
              </button>

              {/* Dropdown Menu */}
              {showTicketDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => openInNewTab('https://www.makemytrip.com/flights/')}
                    className="block w-full text-left px-4 py-2 text-sm text-amber-800 hover:bg-amber-50"
                  >
                    Book Flight Tickets
                  </button>
                  <button
                    onClick={() => openInNewTab('https://www.irctc.co.in/nget/train-search')}
                    className="block w-full text-left px-4 py-2 text-sm text-amber-800 hover:bg-amber-50"
                  >
                    Book Train Tickets
                  </button>
                </div>
              )}
            </div>

            {/* Login/Register buttons */}
            <Link to="/login" className="bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition-all duration-300">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 