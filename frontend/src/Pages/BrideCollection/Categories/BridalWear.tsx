import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface BridalItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'lehenga' | 'mehendi' | 'haldi' | 'sangeet';
}

const BridalWear = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<BridalItem['category'] | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<BridalItem[]>([
    // Lehenga Category Items
    {
      id: 'l1',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear1.jpg',
      title: 'Traditional Lehenga',
      description: 'Classic bridal lehenga with intricate embroidery',
      price: 45000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l2',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear2.jpg',
      title: 'Modern Lehenga',
      description: 'Contemporary bridal lehenga with modern designs',
      price: 48000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l3',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear3.jpg',
      title: 'Designer Lehenga',
      description: 'Exclusive designer bridal lehenga collection',
      price: 52000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l4',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear4.jpg',
      title: 'Royal Lehenga',
      description: 'Royal bridal lehenga with premium work',
      price: 55000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l5',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear5.jpg',
      title: 'Bridal Lehenga Special',
      description: 'Special collection of bridal lehengas',
      price: 50000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l6',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear6.jpg',
      title: 'Contemporary Lehenga',
      description: 'Modern bridal lehenga with traditional touch',
      price: 47000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l7',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear7.jpg',
      title: 'Elegant Lehenga',
      description: 'Elegant bridal lehenga collection',
      price: 49000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l8',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear8.jpg',
      title: 'Premium Lehenga',
      description: 'Premium bridal lehenga with designer work',
      price: 53000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l9',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear9.jpg',
      title: 'Traditional Special',
      description: 'Special collection of traditional lehengas',
      price: 48000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l10',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear10.jpg',
      title: 'Modern Collection',
      description: 'Modern bridal lehenga collection',
      price: 51000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l11',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear11.jpg',
      title: 'Designer Special',
      description: 'Special designer bridal lehenga collection',
      price: 54000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l12',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear12.jpg',
      title: 'Royal Collection',
      description: 'Royal bridal lehenga collection',
      price: 56000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l13',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear13.jpg',
      title: 'Bridal Couture',
      description: 'Exclusive bridal lehenga couture collection',
      price: 57000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l14',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear14.jpg',
      title: 'Traditional Elegance',
      description: 'Elegant traditional bridal lehenga collection',
      price: 52000,
      isFavorite: false,
      category: 'lehenga'
    },
    {
      id: 'l15',
      image: '/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear15.jpg',
      title: 'Modern Elegance',
      description: 'Elegant modern bridal lehenga collection',
      price: 53000,
      isFavorite: false,
      category: 'lehenga'
    },
    // Mehendi Category Items
    {
      id: 'm1',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi1.jpg',
      title: 'Traditional Mehendi',
      description: 'Classic mehendi designs for brides',
      price: 5000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm2',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi4.jpg',
      title: 'Modern Mehendi',
      description: 'Contemporary mehendi designs',
      price: 5500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm3',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi5.jpg',
      title: 'Designer Mehendi',
      description: 'Exclusive designer mehendi collection',
      price: 6000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm4',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi6.jpg',
      title: 'Royal Mehendi',
      description: 'Royal mehendi designs with premium work',
      price: 6500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm5',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi7.jpg',
      title: 'Bridal Mehendi Special',
      description: 'Special collection of bridal mehendi designs',
      price: 7000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm6',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi8.jpg',
      title: 'Contemporary Mehendi',
      description: 'Modern mehendi designs with traditional touch',
      price: 5500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm7',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi9.jpg',
      title: 'Elegant Mehendi',
      description: 'Elegant mehendi collection',
      price: 6000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm8',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi35.jpg',
      title: 'Premium Mehendi',
      description: 'Premium mehendi designs with designer work',
      price: 6500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm9',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi36.jpg',
      title: 'Traditional Special',
      description: 'Special collection of traditional mehendi designs',
      price: 5500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm10',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi37.jpg',
      title: 'Modern Collection',
      description: 'Modern mehendi collection',
      price: 6000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm11',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi38.jpg',
      title: 'Designer Special',
      description: 'Special designer mehendi collection',
      price: 6500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm12',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi39.jpg',
      title: 'Royal Collection',
      description: 'Royal mehendi collection',
      price: 7000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm13',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi40.jpg',
      title: 'Bridal Couture',
      description: 'Exclusive bridal mehendi couture collection',
      price: 7500,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm14',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi41.jpg',
      title: 'Traditional Elegance',
      description: 'Elegant traditional mehendi collection',
      price: 6000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm15',
      image: '/images/bridal_collection/bridal_wear/bridal_mehendi_wear/mehendi42.jpg',
      title: 'Modern Elegance',
      description: 'Elegant modern mehendi collection',
      price: 6500,
      isFavorite: false,
      category: 'mehendi'
    },
    // Haldi Category Items
    {
      id: 'h1',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi1.jpg',
      title: 'Traditional Haldi',
      description: 'Classic haldi ceremony designs',
      price: 4000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h2',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi2.jpg',
      title: 'Modern Haldi',
      description: 'Contemporary haldi ceremony designs',
      price: 4500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h3',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi3.jpg',
      title: 'Designer Haldi',
      description: 'Exclusive designer haldi collection',
      price: 5000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h4',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi4.jpg',
      title: 'Royal Haldi',
      description: 'Royal haldi ceremony designs',
      price: 5500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h5',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi5.jpg',
      title: 'Bridal Haldi Special',
      description: 'Special collection of bridal haldi designs',
      price: 6000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h6',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi6.jpg',
      title: 'Contemporary Haldi',
      description: 'Modern haldi designs with traditional touch',
      price: 4500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h7',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi7.jpg',
      title: 'Elegant Haldi',
      description: 'Elegant haldi collection',
      price: 5000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h8',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi8.jpg',
      title: 'Premium Haldi',
      description: 'Premium haldi designs with designer work',
      price: 5500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h9',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi9.jpg',
      title: 'Traditional Special',
      description: 'Special collection of traditional haldi designs',
      price: 4500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h10',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi10.jpg',
      title: 'Modern Collection',
      description: 'Modern haldi collection',
      price: 5000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h11',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi11.jpg',
      title: 'Designer Special',
      description: 'Special designer haldi collection',
      price: 5500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h12',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi12.jpg',
      title: 'Royal Collection',
      description: 'Royal haldi collection',
      price: 6000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h13',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi13.jpg',
      title: 'Bridal Couture',
      description: 'Exclusive bridal haldi couture collection',
      price: 6500,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h14',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi14.jpg',
      title: 'Traditional Elegance',
      description: 'Elegant traditional haldi collection',
      price: 5000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h15',
      image: '/images/bridal_collection/bridal_wear/bridal_haldi_wear/haldi15.jpg',
      title: 'Modern Elegance',
      description: 'Elegant modern haldi collection',
      price: 5500,
      isFavorite: false,
      category: 'haldi'
    },
    // Sangeet Category Items
    {
      id: 's1',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet1.jpg',
      title: 'Traditional Sangeet',
      description: 'Classic sangeet ceremony designs',
      price: 3500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's2',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet2.jpg',
      title: 'Modern Sangeet',
      description: 'Contemporary sangeet ceremony designs',
      price: 4000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's3',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet3.jpg',
      title: 'Designer Sangeet',
      description: 'Exclusive designer sangeet collection',
      price: 4500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's4',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet4.jpg',
      title: 'Royal Sangeet',
      description: 'Royal sangeet ceremony designs',
      price: 5000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's5',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet5.jpg',
      title: 'Bridal Sangeet Special',
      description: 'Special collection of bridal sangeet designs',
      price: 5500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's6',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet6.jpg',
      title: 'Contemporary Sangeet',
      description: 'Modern sangeet designs with traditional touch',
      price: 4000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's7',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet7.jpg',
      title: 'Elegant Sangeet',
      description: 'Elegant sangeet collection',
      price: 4500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's8',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet8.jpg',
      title: 'Premium Sangeet',
      description: 'Premium sangeet designs with designer work',
      price: 5000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's9',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet9.jpg',
      title: 'Traditional Special',
      description: 'Special collection of traditional sangeet designs',
      price: 4000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's10',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet10.jpg',
      title: 'Modern Collection',
      description: 'Modern sangeet collection',
      price: 4500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's11',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet11.jpg',
      title: 'Designer Special',
      description: 'Special designer sangeet collection',
      price: 5000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's12',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet12.jpg',
      title: 'Royal Collection',
      description: 'Royal sangeet collection',
      price: 5500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's13',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet13.jpg',
      title: 'Bridal Couture',
      description: 'Exclusive bridal sangeet couture collection',
      price: 6000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's14',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet14.jpg',
      title: 'Traditional Elegance',
      description: 'Elegant traditional sangeet collection',
      price: 4500,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's15',
      image: '/images/bridal_collection/bridal_wear/bridal_sangeet_wear/sangeet15.jpg',
      title: 'Modern Elegance',
      description: 'Elegant modern sangeet collection',
      price: 5000,
      isFavorite: false,
      category: 'sangeet'
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

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  // New color theme styles
  const styles = {
    container: {
      width: '80%',
      margin: '0 auto',
      padding: '2.5rem 0',
      backgroundColor: '#FDF8F3', // Light cream background
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem',
      color: '#B8860B', // Dark golden color
      fontFamily: '"Playfair Display", serif',
    },
    categoryButton: (isActive: boolean) => ({
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: '2px solid #D4AF37',
      backgroundColor: isActive ? '#D4AF37' : 'transparent',
      color: isActive ? '#FFF' : '#D4AF37',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: isActive ? '#D4AF37' : '#FDF5E6',
      },
    }),
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px rgba(212, 175, 55, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      border: '1px solid rgba(212, 175, 55, 0.2)',
    },
    imageContainer: {
      position: 'relative' as const,
      height: '400px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    favoriteButton: {
      position: 'absolute' as const,
      top: '1rem',
      right: '1rem',
      backgroundColor: '#FFFFFF',
      borderRadius: '50%',
      padding: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    cardContent: {
      padding: '1.5rem',
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#8B4513', // Saddle brown for titles
      marginBottom: '0.5rem',
      fontFamily: '"Playfair Display", serif',
    },
    description: {
      color: '#6B4423', // Lighter brown for descriptions
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#B8860B', // Dark golden color
    },
  };

  return (
    <div style={{ backgroundColor: '#FDF8F3', minHeight: '100vh', padding: '2rem 0' }}>
      <div style={styles.container}>
        <h1 style={styles.header} className="text-4xl font-bold">
          Bridal Wear Collection
        </h1>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            style={styles.categoryButton(selectedCategory === 'all')}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            style={styles.categoryButton(selectedCategory === 'lehenga')}
            onClick={() => setSelectedCategory('lehenga')}
          >
            Lehenga
          </button>
          <button
            style={styles.categoryButton(selectedCategory === 'mehendi')}
            onClick={() => setSelectedCategory('mehendi')}
          >
            Mehendi
          </button>
          <button
            style={styles.categoryButton(selectedCategory === 'haldi')}
            onClick={() => setSelectedCategory('haldi')}
          >
            Haldi
          </button>
          <button
            style={styles.categoryButton(selectedCategory === 'sangeet')}
            onClick={() => setSelectedCategory('sangeet')}
          >
            Sangeet
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                  onClick={() => handleImageClick(item.image)}
                />
                <button
                  style={styles.favoriteButton}
                  onClick={() => toggleFavorite(item.id)}
                >
                  {item.isFavorite ? (
                    <FaHeart style={{ color: '#FF1493' }} size={20} />
                  ) : (
                    <FaRegHeart style={{ color: '#D4AF37' }} size={20} />
                  )}
                </button>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
                <div className="flex justify-between items-center">
                  <span style={styles.price}>₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Image View */}
        {selectedImage && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
            onClick={closeFullImage}
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <div className="relative max-w-[90%] max-h-[90%]">
              <button 
                className="absolute -top-10 -right-10 text-white text-3xl hover:text-golden transition-colors"
                onClick={closeFullImage}
                style={{ color: '#D4AF37' }}
              >
                <IoMdClose />
              </button>
              <img 
                src={selectedImage} 
                alt="Full size" 
                className="max-w-full max-h-[90vh] object-contain"
                style={{ boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BridalWear; 