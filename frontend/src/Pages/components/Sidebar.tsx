import React, { useState } from 'react';
import { FaCalendarAlt, FaCloudSun, FaTicketAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showTicketDropdown, setShowTicketDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {/* Calendar Button */}
        <div className="relative">
          <button
            onClick={handleCalendarClick}
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            title="Calendar"
          >
            <FaCalendarAlt className="text-2xl text-amber-600" />
            <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Calendar
            </span>
          </button>

          {/* Calendar Popup */}
          {showCalendar && (
            <div className="absolute right-full mr-4 top-0 bg-white rounded-lg shadow-lg p-4 z-50">
              <Calendar
                onChange={(value) => setDate(value as Date)}
                value={date}
                className="custom-calendar"
              />
            </div>
          )}
        </div>

        {/* Weather Button */}
        <button
          onClick={() => openInNewTab('https://www.msn.com/en-in/weather/monthlyforecast/in-Gunupur,Odisha?loc=eyJsIjoiR3VudXB1ciIsInIiOiJPZGlzaGEiLCJyMiI6IlJheWFnYWRhIiwiYyI6IkluZGlhIiwiaSI6IklOIiwiZyI6ImVuLWluIiwieCI6IjgzLjgzNDk5OTA4NDQ3MjY2IiwieSI6IjE5LjA1Mjk5OTQ5NjQ1OTk2In0%3D&weadegreetype=C')}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          title="Weather"
        >
          <FaCloudSun className="text-2xl text-amber-600" />
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Weather
          </span>
        </button>

        {/* Ticket Booking Button */}
        <div className="relative group">
          <button
            onClick={() => setShowTicketDropdown(!showTicketDropdown)}
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative"
            title="Book Tickets"
          >
            <FaTicketAlt className="text-2xl text-amber-600" />
            <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Book Tickets
            </span>
          </button>

          {/* Ticket Dropdown */}
          {showTicketDropdown && (
            <div className="absolute right-full mr-2 top-0 bg-white rounded-lg shadow-lg py-2 w-48">
              <button
                onClick={() => openInNewTab('https://www.makemytrip.com/flights/')}
                className="w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors duration-300"
              >
                Book Flight Tickets
              </button>
              <button
                onClick={() => openInNewTab('https://www.irctc.co.in/nget/train-search')}
                className="w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors duration-300"
              >
                Book Train Tickets
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 