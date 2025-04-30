import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import axios from 'axios';

interface BookingFormProps {
  venue: {
    id: number;
    name: string;
    location: string;
    seatingCapacity: number;
    rooms: number;
    halls: number;
    category: string;
  };
  onClose: () => void;
}

interface BookingDetails {
  startDate: Date | null;
  endDate: Date | null;
  guestCount: number;
  roomsRequired: number;
  hallsRequired: number;
}

const API_BASE_URL = 'http://localhost:3001';

const BookingForm: React.FC<BookingFormProps> = ({ venue, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    startDate: null,
    endDate: null,
    guestCount: 100,
    roomsRequired: 1,
    hallsRequired: 1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  
  const PRICE_PER_DAY = 50000; 
  const PRICE_PER_ROOM = 5000; 
  const PRICE_PER_HALL = 25000;

  const calculateTotalDays = () => {
    if (bookingDetails.startDate && bookingDetails.endDate) {
      const diffTime = Math.abs(bookingDetails.endDate.getTime() - bookingDetails.startDate.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotalAmount = () => {
    const days = calculateTotalDays();
    const basePrice = days * PRICE_PER_DAY;
    const roomsPrice = days * bookingDetails.roomsRequired * PRICE_PER_ROOM;
    const hallsPrice = days * bookingDetails.hallsRequired * PRICE_PER_HALL;
    return basePrice + roomsPrice + hallsPrice;
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setBookingDetails(prev => ({
      ...prev,
      startDate: start,
      endDate: end
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Please fill in all required fields');
        setIsProcessing(false);
        return;
      }

      // Prepare data for API
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        venueName: venue.name,
        eventDate: bookingDetails.startDate,
        endDate: bookingDetails.endDate,
        guestCount: bookingDetails.guestCount,
        roomsRequired: bookingDetails.roomsRequired,
        hallsRequired: bookingDetails.hallsRequired,
        totalAmount: calculateTotalAmount(),
        message: formData.message || `Booking for ${venue.name}. Rooms: ${bookingDetails.roomsRequired}, Halls: ${bookingDetails.hallsRequired}, Total Amount: ₹${calculateTotalAmount().toLocaleString()}`
      };

      console.log('Submitting booking data:', bookingData);
      
      // Send data to backend API
      const response = await axios.post(`${API_BASE_URL}/api/venues/book`, bookingData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Server response:', response.data);
      
      if (response.data.success) {
        toast.success('Booking confirmed successfully!');
        onClose();
        navigate('/venues'); 
      } else {
        toast.error(response.data.error || 'Failed to submit booking');
      }
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      toast.error(
        error.response?.data?.details?.[0] ||
        error.response?.data?.error ||
        'Failed to submit booking. Please try again.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const isDateRangeValid = bookingDetails.startDate && bookingDetails.endDate;
  const totalAmount = calculateTotalAmount();

  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-amber-800">Book {venue.name}</h2>
        <button 
          onClick={onClose}
          className="text-amber-800 hover:text-amber-600"
        >
          ✕
        </button>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className="block text-amber-800 mb-2">Select Dates</label>
            <DatePicker
              selectsRange
              startDate={bookingDetails.startDate}
              endDate={bookingDetails.endDate}
              onChange={handleDateChange}
              minDate={new Date()}
              className="w-full p-2 border border-amber-200 rounded-md"
              placeholderText="Select date range"
            />
          </div>

          <div>
            <label className="block text-amber-800 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guestCount"
              value={bookingDetails.guestCount}
              onChange={handleInputChange}
              min="1"
              max={venue.seatingCapacity}
              className="w-full p-2 border border-amber-200 rounded-md"
            />
            <p className="text-sm text-amber-600 mt-1">Max capacity: {venue.seatingCapacity}</p>
          </div>

          <div>
            <label className="block text-amber-800 mb-2">Number of Rooms Required</label>
            <input
              type="number"
              name="roomsRequired"
              value={bookingDetails.roomsRequired}
              onChange={handleInputChange}
              min="0"
              max={venue.rooms}
              className="w-full p-2 border border-amber-200 rounded-md"
            />
            <p className="text-sm text-amber-600 mt-1">Available rooms: {venue.rooms}</p>
          </div>

          <div>
            <label className="block text-amber-800 mb-2">Number of Halls Required</label>
            <input
              type="number"
              name="hallsRequired"
              value={bookingDetails.hallsRequired}
              onChange={handleInputChange}
              min="1"
              max={venue.halls}
              className="w-full p-2 border border-amber-200 rounded-md"
            />
            <p className="text-sm text-amber-600 mt-1">Available halls: {venue.halls}</p>
          </div>

          {isDateRangeValid && (
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Booking Summary</h3>
              <div className="space-y-2 text-amber-700">
                <p>Duration: {calculateTotalDays()} days</p>
                <p>Total Amount: ₹{totalAmount.toLocaleString()}</p>
              </div>
            </div>
          )}

          <button
            onClick={() => setStep(2)}
            disabled={!isDateRangeValid}
            className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
              isDateRangeValid
                ? 'bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-700 hover:to-yellow-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Payment Details</h3>
            <p className="text-amber-700 mb-2">Total Amount: ₹{totalAmount.toLocaleString()}</p>
            
            {/* Personal Information Form */}
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleFormInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleFormInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={3} 
                  value={formData.message}
                  onChange={handleFormInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>
            </div>
            
            {/* Payment Method Selection */}
            <div className="space-y-3 mt-4">
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" value="upi" defaultChecked />
                <span>UPI Payment</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" value="card" />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" value="netbanking" />
                <span>Net Banking</span>
              </label>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-3 bg-amber-50 text-amber-800 rounded-full font-medium hover:bg-amber-100 transition-all duration-300"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-full font-medium hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Confirm Booking'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm; 