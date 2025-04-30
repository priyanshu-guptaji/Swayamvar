import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import BookingForm from './BookingForm';
import ImageModal from '../../components/ImageModal';

interface VenueType {
  id: number;
  image: string;
  name: string;
  location: string;
  seatingCapacity: number;
  rooms: number;
  halls: number;
  category: 'banquet-halls' | 'farmhouses' | 'resorts' | 'hotels' | 'marriage-gardens';
  pricePerDay: number;
  managerName: string;
  managerContact: string;
  managerEmail: string;
  isFavorite: boolean;
}

const VenuePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVenue, setSelectedVenue] = useState<VenueType | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [venues, setVenues] = useState<VenueType[]>([
    {
      id: 1,
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
      name: "The Grand Palace",
      location: "Delhi",
      seatingCapacity: 1000,
      rooms: 50,
      halls: 3,
      category: 'banquet-halls',
      pricePerDay: 50000,
      managerName: "Rajesh Kumar",
      managerContact: "+91 98765 43210",
      managerEmail: "rajesh.kumar@grandpalace.com",
      isFavorite: false
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/226786/pexels-photo-226786.jpeg",
      name: "Royal Gardens",
      location: "Gurgaon",
      seatingCapacity: 800,
      rooms: 35,
      halls: 2,
      category: 'farmhouses',
      pricePerDay: 45000,
      managerName: "Priya Singh",
      managerContact: "+91 98765 43211",
      managerEmail: "priya.singh@royalgardens.com",
      isFavorite: false
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      name: "Luxury Resort",
      location: "Noida",
      seatingCapacity: 1200,
      rooms: 60,
      halls: 4,
      category: 'resorts',
      pricePerDay: 60000,
      managerName: "Amit Sharma",
      managerContact: "+91 98765 43212",
      managerEmail: "amit.sharma@luxuryresort.com",
      isFavorite: false
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      name: "Heritage Hotel",
      location: "Delhi",
      seatingCapacity: 600,
      rooms: 30,
      halls: 2,
      category: 'hotels',
      pricePerDay: 30000,
      managerName: "Neha Verma",
      managerContact: "+91 98765 43213",
      managerEmail: "neha.verma@heritagehotel.com",
      isFavorite: false
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg",
      name: "Modern Banquet",
      location: "Gurgaon",
      seatingCapacity: 1500,
      rooms: 75,
      halls: 5,
      category: 'marriage-gardens',
      pricePerDay: 75000,
      managerName: "Sanjay Gupta",
      managerContact: "+91 98765 43214",
      managerEmail: "sanjay.gupta@modernbanquet.com",
      isFavorite: false
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      name: "Garden Resort",
      location: "Faridabad",
      seatingCapacity: 900,
      rooms: 45,
      halls: 3,
      category: 'resorts',
      pricePerDay: 50000,
      managerName: "Ritu Singh",
      managerContact: "+91 98765 43215",
      managerEmail: "ritu.singh@gardenresort.com",
      isFavorite: false
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
      name: "City Banquet",
      location: "Delhi",
      seatingCapacity: 700,
      rooms: 40,
      halls: 2,
      category: 'banquet-halls',
      pricePerDay: 40000,
      managerName: "Rajat Verma",
      managerContact: "+91 98765 43216",
      managerEmail: "rajat.verma@citybanquet.com",
      isFavorite: false
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      name: "Riverside Resort",
      location: "Gurgaon",
      seatingCapacity: 850,
      rooms: 42,
      halls: 3,
      category: 'resorts',
      pricePerDay: 55000,
      managerName: "Sneha Kapoor",
      managerContact: "+91 98765 43217",
      managerEmail: "sneha.kapoor@riversideresort.com",
      isFavorite: false
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg",
      name: "The Grand Hotel",
      location: "Delhi",
      seatingCapacity: 1100,
      rooms: 55,
      halls: 4,
      category: 'hotels',
      pricePerDay: 45000,
      managerName: "Aarav Patel",
      managerContact: "+91 98765 43218",
      managerEmail: "aarav.patel@thegrandhotel.com",
      isFavorite: false
    },
    {
      id: 10,
      image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
      name: "Green Valley Farmhouse",
      location: "Faridabad",
      seatingCapacity: 600,
      rooms: 25,
      halls: 2,
      category: 'farmhouses',
      pricePerDay: 35000,
      managerName: "Rajeshwari Singh",
      managerContact: "+91 98765 43219",
      managerEmail: "rajeshwari.singh@greenvalleyfarmhouse.com",
      isFavorite: false
    },
    {
      id: 11,
      image: "https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg",
      name: "Royal Wedding Garden",
      location: "Noida",
      seatingCapacity: 1300,
      rooms: 65,
      halls: 5,
      category: 'marriage-gardens',
      pricePerDay: 80000,
      managerName: "Anjali Gupta",
      managerContact: "+91 98765 43220",
      managerEmail: "anjali.gupta@royalweddinggarden.com",
      isFavorite: false
    },
    {
      id: 12,
      image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg",
      name: "Luxury Banquet",
      location: "Gurgaon",
      seatingCapacity: 950,
      rooms: 48,
      halls: 3,
      category: 'banquet-halls',
      pricePerDay: 60000,
      managerName: "Vikram Singh",
      managerContact: "+91 98765 43221",
      managerEmail: "vikram.singh@luxurybanquet.com",
      isFavorite: false
    },
    {
      id: 13,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      name: "Hill View Resort",
      location: "Delhi",
      seatingCapacity: 750,
      rooms: 38,
      halls: 2,
      category: 'resorts',
      pricePerDay: 45000,
      managerName: "Rajeshwari Verma",
      managerContact: "+91 98765 43222",
      managerEmail: "rajeshwari.verma@hillviewresort.com",
      isFavorite: false
    },
    {
      id: 14,
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      name: "Sunset Farmhouse",
      location: "Noida",
      seatingCapacity: 550,
      rooms: 28,
      halls: 2,
      category: 'farmhouses',
      pricePerDay: 30000,
      managerName: "Rajeshwari Singh",
      managerContact: "+91 98765 43223",
      managerEmail: "rajeshwari.singh@sunsetfarmhouse.com",
      isFavorite: false
    },
    {
      id: 15,
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      name: "The Luxury Hotel",
      location: "Gurgaon",
      seatingCapacity: 1000,
      rooms: 50,
      halls: 4,
      category: 'hotels',
      pricePerDay: 50000,
      managerName: "Aarav Patel",
      managerContact: "+91 98765 43224",
      managerEmail: "aarav.patel@thelaxuryhotel.com",
      isFavorite: false
    }
  ]);

  // Extract category from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [location]);

  // Load wishlist state from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update venues with saved wishlist state
    setVenues(prevVenues => 
      prevVenues.map(venue => ({
        ...venue,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === venue.id && wishlistItem.collection === 'venue'
        )
      }))
    );
  }, []);

  const categories = [
    { id: 'all', name: 'All Venues' },
    { id: 'banquet-halls', name: 'Banquet Halls' },
    { id: 'farmhouses', name: 'Farmhouses' },
    { id: 'resorts', name: 'Resorts' },
    { id: 'hotels', name: 'Hotels' },
    { id: 'marriage-gardens', name: 'Marriage Gardens' }
  ];

  const filteredVenues = activeCategory === 'all' 
    ? venues 
    : venues.filter(venue => venue.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/venues?category=${categoryId}`);
  };

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    // Prevent event propagation to avoid triggering the image click
    e.stopPropagation();
    
    const updatedVenues = venues.map(venue =>
      venue.id === id ? { ...venue, isFavorite: !venue.isFavorite } : venue
    );
    setVenues(updatedVenues);

    // Update wishlist in localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const venue = venues.find(venue => venue.id === id);
    
    if (venue) {
      if (!venue.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...venue,
          collection: 'venue',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'venue')
        );
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }
    }
  };

  const openImageModal = (imageUrl: string, title: string) => {
    setModalImage(imageUrl);
    setModalTitle(title);
  };

  const closeImageModal = () => {
    setModalImage(null);
    setModalTitle(null);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-amber-800 mb-8">Explore Venues</h1>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-amber-600 to-yellow-500 text-white shadow-md border border-amber-400'
                : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map((venue) => (
          <div 
            key={venue.id}
            className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg shadow-md border border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              <img 
                src={venue.image} 
                alt={venue.name}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => openImageModal(venue.image, venue.name)}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(venue.id, e);
                }}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${venue.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">{venue.name}</h3>
              <p className="text-amber-700 mb-4">{venue.location}</p>
              <div className="space-y-2 text-amber-700">
                <p>Seating Capacity: {venue.seatingCapacity}</p>
                <p>Rooms: {venue.rooms}</p>
                <p>Halls: {venue.halls}</p>
                <p className="font-semibold text-amber-800">Price per day: ₹{venue.pricePerDay.toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedVenue(venue)}
                className="mt-4 w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 shadow-md border border-amber-400"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for venue details */}
      {selectedVenue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {showBookingForm ? (
            <BookingForm 
              venue={selectedVenue} 
              onClose={() => {
                setShowBookingForm(false);
                setSelectedVenue(null);
              }} 
            />
          ) : (
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button 
                onClick={() => setSelectedVenue(null)}
                className="absolute top-4 right-4 text-amber-800 hover:text-amber-600"
              >
                ✕
              </button>
              <img 
                src={selectedVenue.image} 
                alt={selectedVenue.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">{selectedVenue.name}</h2>
              <div className="space-y-3 text-amber-700">
                <p><strong>Location:</strong> {selectedVenue.location}</p>
                <p><strong>Category:</strong> {categories.find(c => c.id === selectedVenue.category)?.name}</p>
                <p><strong>Seating Capacity:</strong> {selectedVenue.seatingCapacity}</p>
                <p><strong>Rooms:</strong> {selectedVenue.rooms}</p>
                <p><strong>Halls:</strong> {selectedVenue.halls}</p>
                <p><strong>Price per day:</strong> ₹{selectedVenue.pricePerDay.toLocaleString()}</p>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">Venue Manager Details</h3>
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {selectedVenue.managerName}</p>
                    <p><strong>Contact:</strong> {selectedVenue.managerContact}</p>
                    <p><strong>Email:</strong> {selectedVenue.managerEmail}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="mt-6 w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 shadow-md border border-amber-400"
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      )}

      <ImageModal 
        isOpen={!!modalImage}
        onClose={closeImageModal}
        imageUrl={modalImage || ''}
        title={modalTitle || ''}
      />
    </div>
  );
};

export default VenuePage; 