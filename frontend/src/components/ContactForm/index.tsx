import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

// Define the base URL for API calls
const API_BASE_URL = 'http://localhost:3001';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      console.log('Attempting to submit form data:', formData);
      console.log('Submitting to URL:', `${API_BASE_URL}/api/contact/submit`);
      
      const response = await axios.post(`${API_BASE_URL}/api/contact/submit`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000, // 5 second timeout
      });
      
      console.log('Server response received:', response.data);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(response.data.error || 'Failed to submit form');
      }
    } catch (error: any) {
      console.error('Form submission error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        networkError: error.isAxiosError,
      });
      
      let errorMessage = 'Something went wrong. Please try again later.';
      
      if (error.response) {
        // Server responded with an error
        errorMessage = error.response.data?.details?.[0] || 
                      error.response.data?.error ||
                      'Server error. Please try again.';
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'Could not connect to server. Please check your internet connection.';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <p>Have questions about our services? We'd love to hear from you.</p>
      
      {status.type && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 