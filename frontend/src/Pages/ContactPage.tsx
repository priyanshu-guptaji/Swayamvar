import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const ContactPage = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    try {
      console.log('Form submitted:', formData);
      
      const response = await axios.post(`${API_BASE_URL}/api/contact/submit`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Server response:', response.data);
      
      if (response.data.success) {
        // Show success popup
        setShowSuccessPopup(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Hide popup after 5 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 5000);
      } else {
        setErrorMessage(response.data.error || 'Failed to submit form');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMessage(
        error.response?.data?.details?.[0] ||
        error.response?.data?.error ||
        'Failed to submit form. Please try again.'
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-8 text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-amber-100">Get in touch with our team for any queries or assistance</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Reach Out To Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-lg text-gray-600">9348132197</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-lg text-gray-600">info@swayamvar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-lg text-gray-600">Gunupur, Odisha</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <p className="mt-1 text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Send a Message</h2>
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {errorMessage}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-3 px-4 rounded-md shadow-md hover:from-amber-700 hover:to-yellow-600 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowSuccessPopup(false)}></div>
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full mx-4 z-10 relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowSuccessPopup(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">Thank you for contacting us. Our team will get back to you soon.</p>
              <button
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:from-amber-700 hover:to-yellow-600 transition-colors duration-300"
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage; 