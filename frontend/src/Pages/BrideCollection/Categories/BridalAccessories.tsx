import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface AccessoryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: string;
}

const BridalAccessories: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<AccessoryItem[]>([
    {
      id: 'n1',
      image: '/images/bridal_collection/bridal_accessories/necklace1.jpg',
      title: 'Royal Necklace Set',
      description: 'Elegant necklace set with matching earrings',
      price: 25000,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n2',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory2.jpg',
      title: 'Premium CZ Diamond Bridal Set',
      description: 'Heavy premium quality choker necklace with matching long earrings',
      price: 15999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n3',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory3.jpg',
      title: 'Khushi Bridal Set',
      description: 'Antique maroon and green complete set with necklace, earrings, and tikka jhumar',
      price: 18999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n4',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory4.jpg',
      title: 'Traditional Kaleera Set',
      description: 'Exquisite bridal kaleera with intricate detailing and pearl embellishments',
      price: 8999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n5',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory5.jpg',
      title: 'Nauratan Bridal Collection',
      description: 'Nine-gem studded complete bridal set with matching accessories',
      price: 22999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n6',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory6.jpg',
      title: 'Pink Kundan Choker Set',
      description: 'Premium quality elegant kundan choker with matching jewelry pieces',
      price: 16999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n7',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory7.jpg',
      title: 'Complete Bridal Jewelry Set',
      description: '6-piece red and yellow gold-plated set including choker, bangles, and accessories',
      price: 25999,
      isFavorite: false,
      category: 'Necklace'
    },
    {
      id: 'n8',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory8.jpg',
      title: 'Mirror Chandbali Earrings',
      description: 'Statement kundan earrings with pearl drops and mirror work',
      price: 6999,
      isFavorite: false,
      category: 'Earrings'
    },
    {
      id: 'n9',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory9.jpg',
      title: 'Rajputi Kundan Matha Patti',
      description: 'Traditional Bollywood style bridal headpiece with kundan work',
      price: 9999,
      isFavorite: false,
      category: 'Headpiece'
    },
    {
      id: 'n10',
      image: '/images/bridal_collection/Bridal Accessories/bridal_accessory10.jpg',
      title: 'Antique Gold Kaleerey',
      description: 'Pearl-studded Punjabi kaleerey with antique gold finish',
      price: 7999,
      isFavorite: false,
      category: 'Necklace'
    }
  ]);

  useEffect(() => {
    // Load wishlist state from localStorage
    const savedWishlist = localStorage.getItem('wishlist') || '[]';
    const wishlistItems = JSON.parse(savedWishlist);
    
    // Update items with saved wishlist state
    setItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isFavorite: wishlistItems.some((wishlistItem: any) => 
          wishlistItem.id === item.id && wishlistItem.collection === 'bride'
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
          collection: 'bride',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'bride')
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

  const styles = {
    container: {
      backgroundColor: '#FDF8F3',
      padding: '2rem',
      minHeight: '100vh'
    },
    header: {
      color: '#B8860B',
      fontSize: '2.5rem',
      textAlign: 'center' as const,
      marginBottom: '2rem',
      fontFamily: 'Playfair Display, serif'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '1rem'
    },
    item: {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover' as const
    },
    content: {
      padding: '1rem'
    },
    title: {
      color: '#8B4513',
      fontSize: '1.25rem',
      marginBottom: '0.5rem',
      fontWeight: 'bold'
    },
    description: {
      color: '#666',
      fontSize: '0.875rem',
      marginBottom: '1rem'
    },
    price: {
      color: '#B8860B',
      fontSize: '1.125rem',
      fontWeight: 'bold'
    },
    favoriteButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#D4AF37',
      fontSize: '1.25rem',
      padding: '0.5rem',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#FF69B4'
      }
    },
    fullImageOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    fullImageContainer: {
      position: 'relative' as const,
      maxWidth: '90%',
      maxHeight: '90%',
    },
    fullImage: {
      maxWidth: '100%',
      maxHeight: '90vh',
      objectFit: 'contain' as const,
    },
    closeButton: {
      position: 'absolute' as const,
      top: '-2rem',
      right: '-2rem',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#D4AF37',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bridal Accessories Collection</h1>
      <div style={styles.grid}>
        {items.map(item => (
          <div key={item.id} style={styles.item}>
            <img 
              src={item.image} 
              alt={item.title} 
              style={styles.image} 
              onClick={() => handleImageClick(item.image)}
            />
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={styles.price}>{item.price}</span>
                <button
                  style={styles.favoriteButton}
                  onClick={() => toggleFavorite(item.id)}
                >
                  <FaHeart color={item.isFavorite ? '#FF69B4' : '#D4AF37'} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.fullImageOverlay} onClick={closeModal}>
          <div style={styles.fullImageContainer} onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size view" style={styles.fullImage} />
            <button style={styles.closeButton} onClick={closeModal}>
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BridalAccessories; 