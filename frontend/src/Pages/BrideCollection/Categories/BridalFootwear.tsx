import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface FootwearItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
}

const BridalFootwear = () => {
  const [items, setItems] = useState<FootwearItem[]>([
    {
      id: 'f1',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear1.jpg',
      title: 'Golden Pearl Embellished Heels',
      description: 'Designer block heels with hand embroidery and pearl work',
      price: 12000,
      isFavorite: false
    },
    {
      id: 'f2',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear2.jpg',
      title: 'Traditional Heel Jutti',
      description: 'Handcrafted Punjabi jutti with comfortable heel design',
      price: 15000,
      isFavorite: false
    },
    {
      id: 'f3',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear3.jpg',
      title: 'Kundan Khussa with Anklet',
      description: 'Personalized wedding day khussa with matching anklet',
      price: 18500,
      isFavorite: false
    },
    {
      id: 'f4',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear4.jpg',
      title: 'Gold Bridal Dancing Jutti',
      description: 'Comfortable slip-on jutti perfect for dancing',
      price: 14500,
      isFavorite: false
    },
    {
      id: 'f5',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear5.jpg',
      title: 'Heer Green Designer Jutti',
      description: 'Elegant green jutti with traditional embroidery',
      price: 16000,
      isFavorite: false
    },
    {
      id: 'f6',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear6.jpg',
      title: 'Party Wear Jutti',
      description: 'Stylish jutti perfect for wedding celebrations',
      price: 13500,
      isFavorite: false
    },
    {
      id: 'f7',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear7.jpg',
      title: 'Trending Bridal Jutti',
      description: 'Latest designer jutti with modern patterns',
      price: 17500,
      isFavorite: false
    },
    {
      id: 'f8',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear8.jpg',
      title: 'Exclusive Block Heels',
      description: 'Designer block heels for modern bride',
      price: 19500,
      isFavorite: false
    },
    {
      id: 'f9',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear9.jpg',
      title: 'Liliana Designer Heels',
      description: 'Couture footwear for the elegant bride',
      price: 22000,
      isFavorite: false
    },
    {
      id: 'f10',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear10.jpg',
      title: 'Golden Glamour Heels',
      description: 'Luxurious golden heels for reception',
      price: 20500,
      isFavorite: false
    },
    {
      id: 'f11',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear11.jpg',
      title: 'Traditional Punjabi Jutti',
      description: 'Classic Punjabi jutti with modern twist',
      price: 12500,
      isFavorite: false
    },
    {
      id: 'f12',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear12.jpg',
      title: 'Shahi Kolhapuri',
      description: 'Intricate traditional Kolhapuri design',
      price: 11500,
      isFavorite: false
    },
    {
      id: 'f13',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear13.jpg',
      title: 'Dancing Queen Heels',
      description: 'Super comfortable heels for all-day wear',
      price: 16500,
      isFavorite: false
    },
    {
      id: 'f14',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear14.jpg',
      title: 'Contemporary Bridal Heels',
      description: 'Modern heels with traditional elements',
      price: 18000,
      isFavorite: false
    },
    {
      id: 'f15',
      image: '/images/bridal_collection/bridal_footwears/bridal_footwear15.jpg',
      title: 'Elegant Bridal Collection',
      description: 'Stunning bridal footwear for your special day',
      price: 21000,
      isFavorite: false
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

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#FDF8F3',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2rem',
    },
    headerTitle: {
      fontSize: '2.8rem',
      color: '#B8860B',
      marginBottom: '0.5rem',
      fontFamily: 'Playfair Display, serif',
    },
    headerDescription: {
      fontSize: '1.2rem',
      color: '#6B4423',
    },
    categoryButtons: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      border: '2px solid #D4AF37',
      borderRadius: '25px',
      background: 'transparent',
      color: '#D4AF37',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      '&:hover': {
        background: '#FDF5E6',
      },
    },
    activeButton: {
      background: '#D4AF37',
      color: 'white',
      borderColor: '#D4AF37',
      boxShadow: '0 2px 4px rgba(212,175,55,0.2)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2rem',
    },
    item: {
      border: '1px solid rgba(212,175,55,0.2)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      background: 'white',
      boxShadow: '0 4px 6px rgba(212,175,55,0.1)',
      '&:hover': {
        boxShadow: '0 8px 12px rgba(212,175,55,0.15)',
      },
    },
    imageContainer: {
      position: 'relative' as const,
      height: '400px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      cursor: 'pointer',
    },
    favoriteButton: {
      position: 'absolute' as const,
      top: '1rem',
      right: '1rem',
      background: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(212,175,55,0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 4px 6px rgba(212,175,55,0.15)',
      },
    },
    favoriteIcon: {
      fontSize: '1.2rem',
      color: '#D4AF37',
    },
    info: {
      padding: '1.5rem',
    },
    title: {
      margin: '0 0 0.5rem',
      fontSize: '1.3rem',
      color: '#8B4513',
      fontFamily: 'Playfair Display, serif',
    },
    description: {
      margin: '0 0 1rem',
      color: '#6B4423',
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    price: {
      fontSize: '1.3rem',
      color: '#B8860B',
      fontWeight: 'bold',
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
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Bridal Footwear Collection</h1>
        <p style={styles.headerDescription}>Step into elegance with our curated collection of bridal footwear</p>
      </div>
      
      <div style={styles.grid}>
        {items.map(item => (
          <div key={item.id} style={styles.item}>
            <div style={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={styles.image}
              />
              <button
                onClick={() => toggleFavorite(item.id)}
                style={styles.favoriteButton}
              >
                {item.isFavorite ? (
                  <FaHeart style={{ ...styles.favoriteIcon, color: '#ff4d4d' }} />
                ) : (
                  <FaRegHeart style={styles.favoriteIcon} />
                )}
              </button>
            </div>
            <div style={styles.info}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={styles.price}>₹{item.price.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridalFootwear; 