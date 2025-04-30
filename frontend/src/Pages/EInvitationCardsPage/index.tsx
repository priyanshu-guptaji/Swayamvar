import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import './EInvitationCardsPage.css';

interface EInvitationCard {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  features: string[];
  isFavorite: boolean;
}

const EInvitationCardsPage: React.FC = () => {
  const [eInvitationCards, setEInvitationCards] = useState<EInvitationCard[]>([
    {
      id: "ei1",
      name: "Animated Wedding Story",
      image: "https://i.pinimg.com/736x/25/54/92/25549276cbbd297d2031039aa025af8b.jpg",
      price: "₹5,000 - ₹8,000",
      description: "Beautiful animated story of your journey together",
      features: ["Customizable Animation", "Music Integration", "RSVP Management"],
      isFavorite: false
    },
    {
      id: "ei2",
      name: "Digital Photo Album",
      image: "https://i.pinimg.com/736x/02/50/69/0250697f2c19e07e2c2255107b83e0d6.jpg",
      price: "₹3,000 - ₹6,000",
      description: "Interactive digital photo album with your memories",
      features: ["Photo Gallery", "Share on Social Media", "Online Viewing"],
      isFavorite: false
    },
    {
      id: "ei3",
      name: "Video Invitation",
      image: "https://i.pinimg.com/474x/fb/e1/94/fbe1949e9ace7c5f3ecca501fd91982c.jpg",
      price: "₹7,000 - ₹12,000",
      description: "Professional video invitation with cinematic effects",
      features: ["HD Quality", "Background Music", "Motion Graphics"],
      isFavorite: false
    },
    {
      id: "ei4",
      name: "Smart E-Card",
      image: "https://i.pinimg.com/736x/ce/eb/4f/ceeb4f8826514e8ade42116b2aff9b74.jpg",
      price: "₹2,000 - ₹4,000",
      description: "Interactive digital card with smart features",
      features: ["Digital RSVP", "Guest List Management", "Event Updates"],
      isFavorite: false
    },
    {
      id: "ei5",
      name: "Multimedia Package",
      image: "https://i.pinimg.com/736x/33/58/91/33589192542f0a892f6493d2f65b3773.jpg",
      price: "₹10,000 - ₹15,000",
      description: "Complete digital invitation package",
      features: ["Video + Photos", "Website Integration", "Guest Management"],
      isFavorite: false
    },
    {
      id: "ei6",
      name: "AR Invitation",
      image: "https://i.pinimg.com/474x/bf/49/c6/bf49c6d15ea4cab09ea7f90d1a40abbf.jpg",
      price: "₹8,000 - ₹12,000",
      description: "Augmented Reality enhanced invitation experience",
      features: ["AR Effects", "Interactive Elements", "Mobile App Support"],
      isFavorite: false
    }
  ]);

  // Load wishlist state from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update cards with saved wishlist state
    setEInvitationCards(prevCards => 
      prevCards.map(card => ({
        ...card,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === card.id && wishlistItem.collection === 'e-invitation'
        )
      }))
    );
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const updatedCards = eInvitationCards.map(card =>
      card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
    );
    setEInvitationCards(updatedCards);

    // Update wishlist in localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const card = eInvitationCards.find(card => card.id === id);
    
    if (card) {
      if (!card.isFavorite) {
        // Add to wishlist
        const wishlistItem = {
          ...card,
          collection: 'e-invitation',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'e-invitation')
        );
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }
    }
  };

  return (
    <div className="e-invitation-page">
      <div className="page-header">
        <h1>Digital Wedding Invitations</h1>
        <p>Modern invitations for the digital age</p>
      </div>
      <div className="cards-grid">
        {eInvitationCards.map((card) => (
          <div key={card.id} className="card-item">
            <div className="card-image">
              <img src={card.image} alt={card.name} />
              <button
                onClick={(e) => toggleFavorite(card.id, e)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHeart className={`text-xl ${card.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
            <div className="card-content">
              <h3>{card.name}</h3>
              <p className="price">{card.price}</p>
              <p className="description">{card.description}</p>
              <div className="features">
                {card.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EInvitationCardsPage; 