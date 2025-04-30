import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

interface ThemeTab {
  id: string;
  label: string;
  folderName: string;
  filePrefix: string;
}

interface DecorationItem {
  id: string;
  image: string;
  title: string;
  description: string;
  theme: string;
  isFavorite: boolean;
}

const DecorationPage = () => {
  const themes: ThemeTab[] = [
    { id: 'haldi', label: 'Haldi', folderName: 'HALDI', filePrefix: 'haldi' },
    { id: 'mehandi', label: 'Mehandi', folderName: 'MEHANDI', filePrefix: 'mehendi' },
    { id: 'sangeet', label: 'Sangeet', folderName: 'SANGEET', filePrefix: 'sangeet' },
    { id: 'reception', label: 'Reception', folderName: 'RECEPTIIN', filePrefix: 'recep' },
    { id: 'mandap', label: 'Mandap', folderName: 'MABDAP', filePrefix: 'mandap' },
  ];

  const [activeTheme, setActiveTheme] = useState<string>(themes[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<DecorationItem[]>([]);

  // Get the current theme object
  const currentTheme = themes.find(t => t.id === activeTheme) || themes[0];

  // Initialize items and handle wishlist state
  useEffect(() => {
    const initializeItems = () => {
      // Create new items based on the current theme
      const newItems = Array.from({ length: 15 }, (_, i) => i + 1).map(num => {
        const imageSrc = `/images/DECOR/${currentTheme.folderName}/${currentTheme.filePrefix}${num}.jpg`;
        return {
          id: `${currentTheme.id}-${num}`,
          image: imageSrc,
          title: `${currentTheme.label} Style ${num}`,
          description: `Beautiful decoration for your ${currentTheme.label} ceremony`,
          theme: currentTheme.id,
          isFavorite: false
        };
      });

      // Load wishlist state
      const savedWishlist = localStorage.getItem('wishlist') || '[]';
      const wishlistItems = JSON.parse(savedWishlist);
      
      // Update items with saved wishlist state
      return newItems.map(item => ({
        ...item,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === item.id && wishlistItem.collection === 'decoration'
        )
      }));
    };

    setItems(initializeItems());
  }, [currentTheme.id, currentTheme.folderName, currentTheme.filePrefix, currentTheme.label]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    // Prevent event propagation to avoid triggering the image click
    e.stopPropagation();
    
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setItems(updatedItems);

    // Update wishlist in localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const item = items.find(item => item.id === id);
    
    if (item) {
      if (!item.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...item,
          collection: 'decoration',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'decoration')
        );
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-6">Wedding Decorations</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Explore our beautiful decoration themes for different wedding ceremonies. From traditional to contemporary designs, 
        find the perfect decoration to make your special day memorable.
      </p>
      
      {/* Theme Tabs */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-amber-200">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={`px-6 py-3 font-medium transition-colors duration-300 ${
              activeTheme === theme.id
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-amber-500'
            }`}
            onClick={() => setActiveTheme(theme.id)}
          >
            {theme.label}
          </button>
        ))}
      </div>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform group-hover:shadow-lg group-hover:scale-105 cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                onClick={() => handleImageClick(item.image)}
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
              <button
                onClick={(e) => toggleFavorite(item.id, e)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
            <h3 className="mt-2 text-lg font-medium text-amber-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Like What You See?</h2>
        <p className="text-gray-600 mb-6">
          Contact our decoration team to discuss your requirements and get a customized decoration plan for your wedding.
        </p>
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center mb-2">
          </div>
        </div>
        <Link to="/contact">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors duration-300 shadow-md">
            Contact Decoration Team
          </button>
        </Link>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl mx-auto p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size decoration"
              className="max-h-[90vh] w-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DecorationPage; 