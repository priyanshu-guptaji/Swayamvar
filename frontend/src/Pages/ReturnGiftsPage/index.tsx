import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import './ReturnGiftsPage.css';

interface ReturnGiftItem {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isFavorite: boolean;
}

const ReturnGiftsPage = () => {
  const [items, setItems] = useState<ReturnGiftItem[]>([
    {
      id: 'rg1',
      image: 'https://i.pinimg.com/474x/d5/0e/c2/d50ec25632c7567180f4049a569a2973.jpg',
      name: 'Traditional Gift Box',
      description: 'Elegant traditional gift box with assorted items',
      price: 500,
      category: 'Traditional',
      isFavorite: false
    },
    {
      id: 'rg2',
      image: 'https://i.pinimg.com/474x/13/f9/01/13f901daad75a48ec9f387664dfd3aee.jpg',
      name: 'Modern Gift Set',
      description: 'Contemporary gift set with modern designs',
      price: 750,
      category: 'Modern',
      isFavorite: false
    },
    {
      id: 'rg3',
      image: 'https://i.pinimg.com/474x/8a/7c/8d/8a7c8d9b2c1d3e4f5a6b7c8d9e0f1a2b.jpg',
      name: 'Luxury Candle Set',
      description: 'Premium scented candles in elegant packaging',
      price: 1200,
      category: 'Luxury',
      isFavorite: false
    },
    {
      id: 'rg4',
      image: 'https://i.pinimg.com/474x/9b/8d/7c/9b8d7c6e5f4d3c2b1a0f9e8d7c6b5a4.jpg',
      name: 'Heritage Tea Set',
      description: 'Traditional tea set with cultural motifs',
      price: 1500,
      category: 'Traditional',
      isFavorite: false
    },
    {
      id: 'rg5',
      image: 'https://i.pinimg.com/474x/7c/6d/5e/7c6d5e4f3d2c1b0a9f8e7d6c5b4a3f2.jpg',
      name: 'Designer Photo Frame',
      description: 'Modern photo frame with intricate designs',
      price: 800,
      category: 'Modern',
      isFavorite: false
    },
    {
      id: 'rg6',
      image: 'https://i.pinimg.com/474x/6e/5f/4d/6e5f4d3c2b1a0f9e8d7c6b5a4f3e2d1.jpg',
      name: 'Silver Coaster Set',
      description: 'Elegant silver coasters with traditional patterns',
      price: 2000,
      category: 'Luxury',
      isFavorite: false
    },
    {
      id: 'rg7',
      image: 'https://i.pinimg.com/474x/5d/4e/3c/5d4e3c2b1a0f9e8d7c6b5a4f3e2d1c0.jpg',
      name: 'Handcrafted Box',
      description: 'Beautifully handcrafted wooden box',
      price: 1800,
      category: 'Traditional',
      isFavorite: false
    },
    {
      id: 'rg8',
      image: 'https://i.pinimg.com/474x/4c/3d/2b/4c3d2b1a0f9e8d7c6b5a4f3e2d1c0b9.jpg',
      name: 'Modern Vase',
      description: 'Contemporary ceramic vase with unique design',
      price: 950,
      category: 'Modern',
      isFavorite: false
    },
    {
      id: 'rg9',
      image: 'https://i.pinimg.com/474x/3b/2c/1a/3b2c1a0f9e8d7c6b5a4f3e2d1c0b9a8.jpg',
      name: 'Luxury Perfume',
      description: 'Premium perfume in elegant packaging',
      price: 2500,
      category: 'Luxury',
      isFavorite: false
    }
  ]);

  // To Load wishlist state from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update items with saved wishlist state
    setItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === item.id && wishlistItem.collection === 'return-gift'
        )
      }))
    );
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setItems(updatedItems);

    
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const item = items.find(item => item.id === id);
    
    if (item) {
      if (!item.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...item,
          collection: 'return-gift',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'return-gift')
        );
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-6">Return Gifts</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Choose from our collection of elegant return gifts to show your appreciation to your guests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={(e) => toggleFavorite(item.id, e)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-amber-800 font-semibold">₹{item.price.toLocaleString()}</p>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mt-2 inline-block">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnGiftsPage; 