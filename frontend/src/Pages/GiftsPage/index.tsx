import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import ImageModal from '../../components/ImageModal';
import './GiftsPage.css';

interface GiftItem {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  isFavorite: boolean;
}

const GiftsPage: React.FC = () => {
  const [giftItems, setGiftItems] = useState<GiftItem[]>([
    {
      id: 'g1',
      name: "Luxury Watch Set",
      image: "https://i.pinimg.com/736x/72/da/db/72dadbe580eaa99950ebc47019e1c075.jpg",
      price: "₹15,000 - ₹25,000",
      description: "Elegant couple watch set for special occasions",
      category: "Wedding Gifts",
      isFavorite: false
    },
    {
      id: 'g2',
      name: "Crystal Showpiece",
      image: "https://i.pinimg.com/736x/81/fb/9f/81fb9f8a9433be3a40ca1ce65767baf0.jpg",
      price: "₹5,000 - ₹12,000",
      description: "Beautiful crystal decorative piece",
      category: "Anniversary Gifts",
      isFavorite: false
    },
    {
      id: 'g3',
      name: "Gold Plated Photo Frame",
      image: "https://i.pinimg.com/736x/37/4d/ff/374dffc5db864f4ba18e309feba37921.jpg",
      price: "₹3,000 - ₹8,000",
      description: "Elegant gold plated frame for cherished memories",
      category: "Wedding Gifts",
      isFavorite: false
    },
    {
      id: 'g4',
      name: "Premium Perfume Set",
      image: "https://i.pinimg.com/736x/96/b3/f8/96b3f8a82fee3054ee7bfb58d41f0059.jpg",
      price: "₹8,000 - ₹15,000",
      description: "Luxury perfume collection for couples",
      category: "Anniversary Gifts",
      isFavorite: false
    },
    {
      id: 'g5',
      name: "Silver Gift Set",
      image: "https://i.pinimg.com/736x/3d/7f/7a/3d7f7aeb355f3627e72ccccd7ebd0ed2.jpg",
      price: "₹20,000 - ₹35,000",
      description: "Pure silver decorative items set",
      category: "Wedding Gifts",
      isFavorite: false
    },
    {
      id: 'g6',
      name: "Digital Photo Frame",
      image: "https://i.pinimg.com/736x/e3/85/b4/e385b43bb527a871eb1ec274bd7c5511.jpg",
      price: "₹12,000 - ₹18,000",
      description: "Smart digital frame with cloud connectivity",
      category: "Anniversary Gifts",
      isFavorite: false
    }
  ]);

  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  // Load wishlist state from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update gift items with saved wishlist state
    setGiftItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === item.id && wishlistItem.collection === 'gift'
        )
      }))
    );
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    // Prevent event propagation to avoid triggering the image click
    e.stopPropagation();
    
    const updatedItems = giftItems.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setGiftItems(updatedItems);

    // Update wishlist in localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const item = giftItems.find(item => item.id === id);
    
    if (item) {
      if (!item.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...item,
          collection: 'gift',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'gift')
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
    <div className="gifts-page">
      <div className="page-header">
        <h1>Wedding Gifts</h1>
        <p>Find the perfect gift for your loved ones</p>
      </div>
      <div className="gifts-grid">
        {giftItems.map((item) => (
          <div key={item.id} className="gift-card">
            <div className="gift-image">
              <img 
                src={item.image} 
                alt={item.name} 
                onClick={() => openImageModal(item.image, item.name)}
                className="cursor-pointer"
              />
              <button
                onClick={(e) => toggleFavorite(item.id, e)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
            <div className="gift-content">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="description">{item.description}</p>
              <div className="category-tag">{item.category}</div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={!!modalImage}
        onClose={closeImageModal}
        imageUrl={modalImage || ''}
        title={modalTitle || ''}
      />
    </div>
  );
};

export default GiftsPage; 