import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface StateWearItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'BENGALI' | 'MARATHI' | 'PUNJABI' | 'RAJASTHANI' | 'SOUTHINDIAN';
}

const categories = [
  'BENGALI',
  'MARATHI',
  'PUNJABI',
  'RAJASTHANI',
  'SOUTHINDIAN'
];

const GroomStateWear = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<StateWearItem[]>([
    // Bengali Category
    {
      id: 'b1',
      image: '/images/groom_collection/groom_state_wear/BENAGLI/bengali1.jpg',
      title: 'Traditional Bengali Dhoti',
      description: 'Classic Bengali wedding attire with silk dhoti and kurta',
      price: 25000,
      isFavorite: false,
      category: 'BENGALI'
    },
    {
      id: 'b2',
      image: '/images/groom_collection/groom_state_wear/BENAGLI/bengali2.jpg',
      title: 'Royal Bengali Ensemble',
      description: 'Premium Bengali wedding collection with golden details',
      price: 28000,
      isFavorite: false,
      category: 'BENGALI'
    },
    {
      id: 'b3',
      image: '/images/groom_collection/groom_state_wear/BENAGLI/bengali3.jpg',
      title: 'Modern Bengali Fusion',
      description: 'Contemporary take on traditional Bengali wear',
      price: 27000,
      isFavorite: false,
      category: 'BENGALI'
    },
    {
      id: 'b4',
      image: '/images/groom_collection/groom_state_wear/BENAGLI/bengali4.jpg',
      title: 'Heritage Bengali Style',
      description: 'Heritage-inspired Bengali groom collection',
      price: 30000,
      isFavorite: false,
      category: 'BENGALI'
    },
    {
      id: 'b5',
      image: '/images/groom_collection/groom_state_wear/BENAGLI/bengali5.jpg',
      title: 'Premium Bengali Collection',
      description: 'Luxury Bengali wedding attire with intricate work',
      price: 32000,
      isFavorite: false,
      category: 'BENGALI'
    },

    // Marathi Category
    {
      id: 'm1',
      image: '/images/groom_collection/groom_state_wear/marathi/marathi1.jpg',
      title: 'Traditional Marathi Kurta',
      description: 'Classic Maharashtrian wedding kurta with dhoti',
      price: 22000,
      isFavorite: false,
      category: 'MARATHI'
    },
    {
      id: 'm2',
      image: '/images/groom_collection/groom_state_wear/marathi/marathi2.jpg',
      title: 'Peshwai Style',
      description: 'Traditional Peshwai style wedding outfit',
      price: 25000,
      isFavorite: false,
      category: 'MARATHI'
    },
    {
      id: 'm3',
      image: '/images/groom_collection/groom_state_wear/marathi/marathi3.jpg',
      title: 'Modern Marathi Fusion',
      description: 'Contemporary Maharashtrian wedding collection',
      price: 24000,
      isFavorite: false,
      category: 'MARATHI'
    },
    {
      id: 'm4',
      image: '/images/groom_collection/groom_state_wear/marathi/marathi4.jpg',
      title: 'Royal Marathi Ensemble',
      description: 'Premium Marathi wedding attire',
      price: 28000,
      isFavorite: false,
      category: 'MARATHI'
    },
    {
      id: 'm5',
      image: '/images/groom_collection/groom_state_wear/marathi/marathi5.jpg',
      title: 'Heritage Marathi Collection',
      description: 'Heritage-inspired Maharashtrian wear',
      price: 26000,
      isFavorite: false,
      category: 'MARATHI'
    },

    // Punjabi Category
    {
      id: 'p1',
      image: '/images/groom_collection/groom_state_wear/PUNJABI/punjabi1.jpg',
      title: 'Royal Punjabi Sherwani',
      description: 'Luxurious Punjabi wedding sherwani',
      price: 35000,
      isFavorite: false,
      category: 'PUNJABI'
    },
    {
      id: 'p2',
      image: '/images/groom_collection/groom_state_wear/PUNJABI/punjabi2.jpg',
      title: 'Modern Punjabi Style',
      description: 'Contemporary Punjabi wedding collection',
      price: 32000,
      isFavorite: false,
      category: 'PUNJABI'
    },
    {
      id: 'p3',
      image: '/images/groom_collection/groom_state_wear/PUNJABI/punjabi3.jpg',
      title: 'Traditional Punjabi Kurta',
      description: 'Classic Punjabi wedding kurta set',
      price: 28000,
      isFavorite: false,
      category: 'PUNJABI'
    },
    {
      id: 'p4',
      image: '/images/groom_collection/groom_state_wear/PUNJABI/punjabi4.jpg',
      title: 'Designer Punjabi Collection',
      description: 'Premium designer Punjabi wear',
      price: 38000,
      isFavorite: false,
      category: 'PUNJABI'
    },
    {
      id: 'p5',
      image: '/images/groom_collection/groom_state_wear/PUNJABI/punjabi5.jpg',
      title: 'Heritage Punjabi Ensemble',
      description: 'Heritage-inspired Punjabi wedding attire',
      price: 36000,
      isFavorite: false,
      category: 'PUNJABI'
    },

    // Rajasthani Category
    {
      id: 'r1',
      image: '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani1.jpg',
      title: 'Royal Rajasthani Sherwani',
      description: 'Traditional Rajasthani wedding sherwani',
      price: 40000,
      isFavorite: false,
      category: 'RAJASTHANI'
    },
    {
      id: 'r2',
      image: '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani2.jpg',
      title: 'Heritage Rajputana Style',
      description: 'Classic Rajputana wedding collection',
      price: 45000,
      isFavorite: false,
      category: 'RAJASTHANI'
    },
    {
      id: 'r3',
      image: '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani3.jpg',
      title: 'Modern Rajasthani Fusion',
      description: 'Contemporary Rajasthani wedding wear',
      price: 42000,
      isFavorite: false,
      category: 'RAJASTHANI'
    },
    {
      id: 'r4',
      image: '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani4.jpg',
      title: 'Premium Rajasthani Collection',
      description: 'Luxury Rajasthani wedding attire',
      price: 48000,
      isFavorite: false,
      category: 'RAJASTHANI'
    },
    {
      id: 'r5',
      image: '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani5.jpg',
      title: 'Designer Rajasthani Ensemble',
      description: 'Designer Rajasthani wedding collection',
      price: 46000,
      isFavorite: false,
      category: 'RAJASTHANI'
    },

    // South Indian Category
    {
      id: 's1',
      image: '/images/groom_collection/groom_state_wear/SOUTHINDIAN/southindian1.jpg',
      title: 'Traditional Silk Veshti',
      description: 'Classic South Indian silk veshti set',
      price: 28000,
      isFavorite: false,
      category: 'SOUTHINDIAN'
    },
    {
      id: 's2',
      image: '/images/groom_collection/groom_state_wear/SOUTHINDIAN/southindian2.jpg',
      title: 'Premium Silk Collection',
      description: 'Premium South Indian wedding attire',
      price: 32000,
      isFavorite: false,
      category: 'SOUTHINDIAN'
    },
    {
      id: 's3',
      image: '/images/groom_collection/groom_state_wear/SOUTHINDIAN/southindian3.jpg',
      title: 'Modern South Indian Style',
      description: 'Contemporary South Indian wedding wear',
      price: 30000,
      isFavorite: false,
      category: 'SOUTHINDIAN'
    },
    {
      id: 's4',
      image: '/images/groom_collection/groom_state_wear/SOUTHINDIAN/southindian4.jpg',
      title: 'Heritage Silk Ensemble',
      description: 'Heritage-inspired South Indian collection',
      price: 35000,
      isFavorite: false,
      category: 'SOUTHINDIAN'
    },
    {
      id: 's5',
      image: '/images/groom_collection/groom_state_wear/SOUTHINDIAN/southindian5.jpg',
      title: 'Designer South Indian Collection',
      description: 'Designer South Indian wedding attire',
      price: 38000,
      isFavorite: false,
      category: 'SOUTHINDIAN'
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
          Heritage Collection
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our exclusive collection of traditional wedding attire from different states of India. 
          Each piece is crafted to perfection, representing the rich cultural heritage of its region.
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

export default GroomStateWear; 