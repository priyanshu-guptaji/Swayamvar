import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import ImageModal from '../../components/ImageModal';
import './EInvitationPage.css';

interface EInvitationItem {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isFavorite: boolean;
}

const EInvitationPage: React.FC = () => {
  const [items, setItems] = useState<EInvitationItem[]>([
    {
      id: 'ei1',
      image: 'https://i.pinimg.com/474x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5.jpg',
      name: 'Animated Wedding Card',
      description: 'Beautiful animated wedding invitation with elegant transitions and music',
      price: '₹1,500',
      category: 'Animated',
      isFavorite: false
    },
    {
      id: 'ei2',
      image: 'https://i.pinimg.com/474x/b2/c3/d4/b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.jpg',
      name: 'Video Invitation',
      description: 'Professional video invitation with custom music and transitions',
      price: '₹2,500',
      category: 'Video',
      isFavorite: false
    },
    {
      id: 'ei3',
      image: 'https://i.pinimg.com/474x/c3/d4/e5/c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7.jpg',
      name: 'Interactive Digital Card',
      description: 'Interactive digital invitation with games and animations',
      price: '₹3,000',
      category: 'Interactive',
      isFavorite: false
    },
    {
      id: 'ei4',
      image: 'https://i.pinimg.com/474x/d4/e5/f6/d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8.jpg',
      name: 'Classic Digital Card',
      description: 'Elegant digital invitation with traditional design elements',
      price: '₹1,000',
      category: 'Classic',
      isFavorite: false
    },
    {
      id: 'ei5',
      image: 'https://i.pinimg.com/474x/e5/f6/g7/e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9.jpg',
      name: 'Minimalist E-Card',
      description: 'Clean and modern design with minimalist aesthetics',
      price: '₹1,200',
      category: 'Minimalist',
      isFavorite: false
    },
    {
      id: 'ei6',
      image: 'https://i.pinimg.com/474x/f6/g7/h8/f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0.jpg',
      name: '3D Wedding Card',
      description: 'Stunning 3D effects with depth and dimension',
      price: '₹2,000',
      category: '3D',
      isFavorite: false
    }
  ]);

  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistItems = JSON.parse(savedWishlist);
      setItems(prevItems => 
        prevItems.map(item => ({
          ...item,
          isFavorite: wishlistItems.some((wishlistItem: any) => 
            wishlistItem.id === item.id && wishlistItem.collection === 'e-invitation'
          )
        }))
      );
    }
  }, []);

  const toggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems(prevItems => {
      const updatedItems = prevItems.map(item => 
        item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
      );
      
      const savedWishlist = localStorage.getItem('wishlist');
      let wishlistItems = savedWishlist ? JSON.parse(savedWishlist) : [];
      
      const itemToToggle = updatedItems.find(item => item.id === itemId);
      if (itemToToggle) {
        if (itemToToggle.isFavorite) {
          wishlistItems.push({
            id: itemToToggle.id,
            image: itemToToggle.image,
            name: itemToToggle.name,
            description: itemToToggle.description,
            price: itemToToggle.price,
            category: itemToToggle.category,
            collection: 'e-invitation',
            isFavorite: true
          });
        } else {
          wishlistItems = wishlistItems.filter((item: any) => 
            !(item.id === itemId && item.collection === 'e-invitation')
          );
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      }
      
      return updatedItems;
    });
  };

  const openImageModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
  };

  const closeImageModal = () => {
    setModalImage(null);
    setModalTitle(null);
  };

  return (
    <div className="e-invitation-page">
      <div className="page-header">
        <h1>E-Invitation Cards</h1>
        <p>Choose from our collection of beautiful digital wedding invitations</p>
      </div>
      
      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <div 
              className="item-image"
              onClick={() => openImageModal(item.image, item.name)}
            >
              <img src={item.image} alt={item.name} />
              <div className="category-tag">{item.category}</div>
              <button
                className={`favorite-btn ${item.isFavorite ? 'favorite-active' : ''}`}
                onClick={(e) => toggleFavorite(item.id, e)}
              >
                <FaHeart />
              </button>
            </div>
            <div className="item-content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          imageUrl={modalImage}
          title={modalTitle || ''}
          onClose={closeImageModal}
        />
      )}
    </div>
  );
};

export default EInvitationPage; 