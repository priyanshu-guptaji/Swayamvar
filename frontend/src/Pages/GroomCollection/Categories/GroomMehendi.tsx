import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface MehendiItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'Traditional' | 'Arabic' | 'Modern';
}

const categories = [
  'Traditional',
  'Arabic',
  'Modern'
];

const GroomMehendi = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<MehendiItem[]>([
    // Traditional Category
    {
      id: 't1',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi1.jpg',
      title: 'Classic Traditional Design',
      description: 'Traditional full hand coverage with intricate details',
      price: 5000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't2',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi2.jpg',
      title: 'Royal Traditional Pattern',
      description: 'Traditional design with royal motifs',
      price: 4500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't3',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi3.jpg',
      title: 'Heritage Design',
      description: 'Heritage-inspired traditional patterns',
      price: 5500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't4',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi4.jpg',
      title: 'Classic Groom Special',
      description: 'Traditional full coverage design for groom',
      price: 6000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't5',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi5.jpg',
      title: 'Royal Rajasthani',
      description: 'Traditional Rajasthani groom mehendi pattern',
      price: 7000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't6',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi6.jpg',
      title: 'Traditional Elegance',
      description: 'Elegant traditional patterns for groom',
      price: 5500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't7',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi7.jpg',
      title: 'Mandala Collection',
      description: 'Traditional mandala-based design',
      price: 6500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't8',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi8.jpg',
      title: 'Dulha Special',
      description: 'Complete traditional set for groom',
      price: 8000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't9',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi9.jpg',
      title: 'Temple Design',
      description: 'Temple architecture inspired patterns',
      price: 7500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't10',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi10.jpg',
      title: 'Mughal Pattern',
      description: 'Royal Mughal-inspired design',
      price: 8500,
      isFavorite: false,
      category: 'Traditional'
    },

    // Arabic Category
    {
      id: 'a1',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi11.jpg',
      title: 'Modern Arabic Pattern',
      description: 'Contemporary Arabic design for groom',
      price: 4000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a2',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi12.jpg',
      title: 'Arabic Fusion',
      description: 'Indo-Arabic fusion design',
      price: 4500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a3',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi13.jpg',
      title: 'Minimalist Arabic',
      description: 'Simple yet elegant Arabic pattern',
      price: 3500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a4',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi14.jpg',
      title: 'Gulf Style',
      description: 'Traditional Gulf-inspired Arabic design',
      price: 5000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a5',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi15.jpg',
      title: 'Contemporary Arabic',
      description: 'Modern take on classic Arabic patterns',
      price: 4800,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a6',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi16.jpg',
      title: 'Geometric Arabic',
      description: 'Geometric patterns in Arabic style',
      price: 4200,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a7',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi17.jpg',
      title: 'Dubai Special',
      description: 'Luxury Arabic design with premium details',
      price: 6000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a8',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi18.jpg',
      title: 'Persian Touch',
      description: 'Persian-inspired Arabic patterns',
      price: 5500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a9',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi19.jpg',
      title: 'Moroccan Magic',
      description: 'Moroccan-style Arabic mehendi',
      price: 5800,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a10',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi20.jpg',
      title: 'Arabian Nights',
      description: 'Elegant night-themed Arabic patterns',
      price: 6200,
      isFavorite: false,
      category: 'Arabic'
    },

    // Modern Category
    {
      id: 'm1',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi21.jpg',
      title: 'Contemporary Design',
      description: 'Modern minimalist pattern',
      price: 3000,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm2',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi22.jpg',
      title: 'Fusion Pattern',
      description: 'Modern fusion design',
      price: 3500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm3',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi23.jpg',
      title: 'Minimalist Modern',
      description: 'Simple modern design',
      price: 2500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm4',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi24.jpg',
      title: 'Abstract Modern',
      description: 'Abstract patterns with modern elements',
      price: 4000,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm5',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi25.jpg',
      title: 'Contemporary Fusion',
      description: 'Blend of modern and traditional elements',
      price: 4500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm6',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi26.jpg',
      title: 'Bohemian Modern',
      description: 'Boho-inspired modern patterns',
      price: 3800,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm7',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi27.jpg',
      title: 'Minimalist Chic',
      description: 'Ultra-modern minimalist design',
      price: 3200,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm8',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi28.jpg',
      title: 'Geometric Glam',
      description: 'Modern geometric patterns with a twist',
      price: 4500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm9',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi29.jpg',
      title: 'Contemporary Chic',
      description: 'Stylish modern design for the trendy groom',
      price: 4800,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm10',
      image: '/images/groom_collection/groom_mehendi/groom_mehendi30.jpg',
      title: 'Minimalist Maven',
      description: 'Clean lines with modern aesthetic',
      price: 4200,
      isFavorite: false,
      category: 'Modern'
    }
  ]);

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  useEffect(() => {
    // Load wishlist state from localStorage
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update items with saved wishlist state
    setItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === item.id && wishlistItem.collection === 'groom'
        )
      }))
    );
  }, []);

  const toggleFavorite = (id: string) => {
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
          collection: 'groom',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'groom')
        );
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8 text-center font-playfair">
          Groom Mehendi Designs
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our exclusive collection of mehendi designs crafted specifically for the modern groom. 
          From traditional patterns to contemporary designs, find the perfect mehendi style for your special day.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300 ${
              !selectedCategory
                ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                : 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#FDF5E6]'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                  : 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#FDF5E6]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
                </button>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#8B4513] shadow-md">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-end items-center">
                  <span className="text-lg font-semibold text-[#B8860B]">₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-[#D4AF37] transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroomMehendi; 