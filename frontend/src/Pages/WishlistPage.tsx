import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

interface WishlistItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price?: number;
  category?: string;
  collection: 'bride' | 'groom' | 'decoration' | 'venue' | 'gift' | 'invitation';
  isFavorite: boolean;
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Load wishlist items from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Helper function to get collection display name
  const getCollectionDisplayName = (collection: string) => {
    switch (collection) {
      case 'bride':
        return 'Bridal Collection';
      case 'groom':
        return 'Groom Collection';
      case 'decoration':
        return 'Decoration';
      case 'venue':
        return 'Venue';
      case 'gift':
        return 'Gift';
      case 'invitation':
        return 'Invitation';
      default:
        return collection;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8 text-center font-playfair">
          My Wishlist
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Your collection of favorite wedding items
        </p>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <p className="text-xl mb-4">Your wishlist is empty</p>
            <p>Like items from our collections to add them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                  >
                    <FaHeart className="text-[#FF69B4] text-xl" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  {item.price && (
                    <p className="text-[#B8860B] font-semibold">₹{item.price.toLocaleString()}</p>
                  )}
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {getCollectionDisplayName(item.collection)}
                    </span>
                    {item.category && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage; 