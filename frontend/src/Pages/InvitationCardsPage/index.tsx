import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import ImageModal from '../../components/ImageModal';
import './InvitationCardsPage.css';

interface InvitationCard {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  style: string;
  isFavorite: boolean;
}

const InvitationCardsPage: React.FC = () => {
  const [invitationCards, setInvitationCards] = useState<InvitationCard[]>([
    {
      id: 'i1',
      name: "Royal Gold Foil Card",
      image: "https://i.pinimg.com/474x/cd/78/e1/cd78e1e1203a567347619d3620b58a00.jpg",
      price: "₹150 - ₹300 per card",
      description: "Elegant gold foil design with intricate patterns",
      style: "Traditional",
      isFavorite: false
    },
    {
      id: 'i2',
      name: "Modern Minimalist Card",
      image: "https://i.pinimg.com/474x/fd/3c/c3/fd3cc3f28c78ec4fe83947ce563469dd.jpg",
      price: "₹100 - ₹200 per card",
      description: "Clean and contemporary design",
      style: "Modern",
      isFavorite: false
    },
    {
      id: 'i3',
      name: "Floral Romance Card",
      image: "https://i.pinimg.com/736x/f9/6e/8b/f96e8bf8186eb90c408ec7bca38cfadb.jpg",
      price: "₹120 - ₹250 per card",
      description: "Beautiful floral patterns with watercolor effect",
      style: "Romantic",
      isFavorite: false
    },
    {
      id: 'i4',
      name: "Traditional Red Card",
      image: "https://i.pinimg.com/474x/44/89/16/44891692991b8327549451439b5f5d78.jpg",
      price: "₹180 - ₹350 per card",
      description: "Classic red design with traditional motifs",
      style: "Traditional",
      isFavorite: false
    },
    {
      id: 'i5',
      name: "Rustic Charm Card",
      image: "https://i.pinimg.com/474x/45/a9/1f/45a91f3de50a6546fcc01282330ccadc.jpg",
      price: "₹200 - ₹400 per card",
      description: "Handcrafted paper with botanical elements",
      style: "Rustic",
      isFavorite: false
    },
    {
      id: 'i6',
      name: "Premium Designer Card",
      image: "https://i.pinimg.com/474x/5c/ad/02/5cad022dbbbfc75207db76c4e221363c.jpg",
      price: "₹300 - ₹500 per card",
      description: "Premium design with metallic printing",
      style: "Luxury",
      isFavorite: false
    }
  ]);

  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  // Load wishlist state from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update invitation cards with saved wishlist state
    setInvitationCards(prevCards => 
      prevCards.map(card => ({
        ...card,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === card.id && wishlistItem.collection === 'invitation'
        )
      }))
    );
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    // Prevent event propagation to avoid triggering the image click
    e.stopPropagation();
    
    const updatedCards = invitationCards.map(card =>
      card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
    );
    setInvitationCards(updatedCards);

    // Update wishlist in localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const card = invitationCards.find(card => card.id === id);
    
    if (card) {
      if (!card.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...card,
          collection: 'invitation',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'invitation')
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
    <div className="invitation-cards-page">
      <div className="page-header">
        <h1>Wedding Invitation Cards</h1>
        <p>Make your special day more memorable with our exclusive collection</p>
      </div>
      <div className="cards-grid">
        {invitationCards.map((card) => (
          <div key={card.id} className="card-item">
            <div className="card-image">
              <img 
                src={card.image} 
                alt={card.name} 
                onClick={() => openImageModal(card.image, card.name)}
                className="cursor-pointer"
              />
              <button
                onClick={(e) => toggleFavorite(card.id, e)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${card.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
              <div className="style-tag">{card.style}</div>
            </div>
            <div className="card-content">
              <h3>{card.name}</h3>
              <p className="price">{card.price}</p>
              <p className="description">{card.description}</p>
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

export default InvitationCardsPage; 