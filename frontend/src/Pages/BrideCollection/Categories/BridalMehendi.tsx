import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface MehendiItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: string;
}

const categories = [
  'Traditional',
  'Arabic',
  'Modern'
];

const BridalMehendi = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<MehendiItem[]>([
    {
      id: 't1',
      image: '/images/bridal_collection/bridal_mehendi/bridal1.jpg',
      title: 'Elegant Full Hand',
      description: 'Traditional full hand coverage with intricate details',
      price: 5000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't2',
      image: '/images/bridal_collection/bridal_mehendi/bridal2.jpg',
      title: 'Varmala Design',
      description: 'Traditional design with wedding motifs',
      price: 4500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't3',
      image: '/images/bridal_collection/bridal_mehendi/bridal3.jpg',
      title: 'Front Hand Pattern',
      description: 'Detailed front hand bridal design',
      price: 3500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't4',
      image: '/images/bridal_collection/bridal_mehendi/bridal4.jpg',
      title: 'Classic Bridal',
      description: 'Traditional full coverage design',
      price: 6000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't5',
      image: '/images/bridal_collection/bridal_mehendi/bridal11.jpg',
      title: 'Royal Rajasthani',
      description: 'Traditional Rajasthani bridal mehendi pattern',
      price: 7000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't6',
      image: '/images/bridal_collection/bridal_mehendi/bridal12.jpg',
      title: 'Heritage Design',
      description: 'Traditional heritage-inspired patterns',
      price: 5500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't7',
      image: '/images/bridal_collection/bridal_mehendi/bridal13.jpg',
      title: 'Mandala Magic',
      description: 'Intricate mandala-based traditional design',
      price: 6500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't8',
      image: '/images/bridal_collection/bridal_mehendi/bridal21.jpg',
      title: 'Dulhan Special',
      description: 'Complete bridal set with intricate peacock motifs',
      price: 8000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't9',
      image: '/images/bridal_collection/bridal_mehendi/bridal22.jpg',
      title: 'Temple Design',
      description: 'Traditional temple architecture inspired patterns',
      price: 7500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't10',
      image: '/images/bridal_collection/bridal_mehendi/bridal23.jpg',
      title: 'Mughal Pattern',
      description: 'Royal Mughal-inspired traditional design',
      price: 8500,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't11',
      image: '/images/bridal_collection/bridal_mehendi/bridal24.jpg',
      title: 'Wedding Story',
      description: 'Narrative-based traditional mehendi with wedding scenes',
      price: 9000,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't12',
      image: '/images/bridal_collection/bridal_mehendi/bridal25.jpg',
      title: 'Royal Bengal',
      description: 'Bengali traditional bridal mehendi pattern',
      price: 7800,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 'a1',
      image: '/images/bridal_collection/bridal_mehendi/bridal5.jpg',
      title: 'Modern Arabic Pattern',
      description: 'Contemporary Arabic design',
      price: 4000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a2',
      image: '/images/bridal_collection/bridal_mehendi/bridal6.jpg',
      title: 'Arabic Fusion',
      description: 'Indo-Arabic fusion design',
      price: 4500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a3',
      image: '/images/bridal_collection/bridal_mehendi/bridal7.jpg',
      title: 'Minimalist Arabic',
      description: 'Simple yet elegant Arabic pattern',
      price: 3500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a4',
      image: '/images/bridal_collection/bridal_mehendi/bridal14.jpg',
      title: 'Gulf Style',
      description: 'Traditional Gulf-inspired Arabic design',
      price: 5000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a5',
      image: '/images/bridal_collection/bridal_mehendi/bridal15.jpg',
      title: 'Contemporary Arabic',
      description: 'Modern take on classic Arabic patterns',
      price: 4800,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a6',
      image: '/images/bridal_collection/bridal_mehendi/bridal16.jpg',
      title: 'Geometric Arabic',
      description: 'Geometric patterns in Arabic style',
      price: 4200,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a7',
      image: '/images/bridal_collection/bridal_mehendi/bridal26.jpg',
      title: 'Dubai Special',
      description: 'Luxury Arabic design with premium details',
      price: 6000,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a8',
      image: '/images/bridal_collection/bridal_mehendi/bridal27.jpg',
      title: 'Persian Touch',
      description: 'Persian-inspired Arabic patterns',
      price: 5500,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a9',
      image: '/images/bridal_collection/bridal_mehendi/bridal28.jpg',
      title: 'Moroccan Magic',
      description: 'Moroccan-style Arabic mehendi design',
      price: 5800,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a10',
      image: '/images/bridal_collection/bridal_mehendi/bridal29.jpg',
      title: 'Arabian Nights',
      description: 'Elegant night-themed Arabic patterns',
      price: 6200,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'a11',
      image: '/images/bridal_collection/bridal_mehendi/bridal30.jpg',
      title: 'Desert Rose',
      description: 'Floral Arabic design with modern elements',
      price: 5900,
      isFavorite: false,
      category: 'Arabic'
    },
    {
      id: 'm1',
      image: '/images/bridal_collection/bridal_mehendi/bridal8.jpg',
      title: 'Contemporary Design',
      description: 'Modern minimalist pattern',
      price: 3000,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm2',
      image: '/images/bridal_collection/bridal_mehendi/bridal9.jpg',
      title: 'Fusion Pattern',
      description: 'Modern fusion design',
      price: 3500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm3',
      image: '/images/bridal_collection/bridal_mehendi/bridal10.jpg',
      title: 'Minimalist Modern',
      description: 'Simple modern design',
      price: 2500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm4',
      image: '/images/bridal_collection/bridal_mehendi/bridal17.jpg',
      title: 'Abstract Modern',
      description: 'Abstract patterns with modern elements',
      price: 4000,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm5',
      image: '/images/bridal_collection/bridal_mehendi/bridal18.jpg',
      title: 'Contemporary Fusion',
      description: 'Blend of modern and traditional elements',
      price: 4500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm6',
      image: '/images/bridal_collection/bridal_mehendi/bridal19.jpg',
      title: 'Bohemian Modern',
      description: 'Boho-inspired modern patterns',
      price: 3800,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm7',
      image: '/images/bridal_collection/bridal_mehendi/bridal20.jpg',
      title: 'Minimalist Chic',
      description: 'Ultra-modern minimalist design',
      price: 3200,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm8',
      image: '/images/bridal_collection/bridal_mehendi/bridal31.jpg',
      title: 'Geometric Glam',
      description: 'Modern geometric patterns with a twist',
      price: 4500,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm9',
      image: '/images/bridal_collection/bridal_mehendi/bridal32.jpg',
      title: 'Contemporary Chic',
      description: 'Stylish modern design for the trendy bride',
      price: 4800,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm10',
      image: '/images/bridal_collection/bridal_mehendi/bridal33.jpg',
      title: 'Minimalist Maven',
      description: 'Clean lines with modern aesthetic',
      price: 4200,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm11',
      image: '/images/bridal_collection/bridal_mehendi/bridal34.jpg',
      title: 'Urban Edge',
      description: 'City-inspired modern patterns',
      price: 4600,
      isFavorite: false,
      category: 'Modern'
    },
    {
      id: 'm12',
      image: '/images/bridal_collection/bridal_mehendi/bridal35.jpg',
      title: 'Fusion Fantasy',
      description: 'Perfect blend of modern and ethnic elements',
      price: 5000,
      isFavorite: false,
      category: 'Modern'
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

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

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
      maxWidth: '1400px',
      margin: '0 auto',
      background: '#FDF8F3',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2.5rem',
    },
    headerTitle: {
      fontSize: '3rem',
      color: '#B8860B',
      marginBottom: '0.75rem',
      fontFamily: 'Playfair Display, serif',
    },
    headerDescription: {
      fontSize: '1.3rem',
      color: '#6B4423',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '2.5rem',
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
      height: '500px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      cursor: 'pointer',
    },
    favoriteButton: {
      position: 'absolute' as const,
      top: '1.5rem',
      right: '1.5rem',
      background: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(212,175,55,0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 6px 8px rgba(212,175,55,0.15)',
      },
    },
    favoriteIcon: {
      fontSize: '1.4rem',
      color: '#D4AF37',
    },
    info: {
      padding: '2rem',
    },
    title: {
      margin: '0 0 0.75rem',
      fontSize: '1.5rem',
      color: '#8B4513',
      fontFamily: 'Playfair Display, serif',
    },
    description: {
      margin: '0 0 1.25rem',
      color: '#6B4423',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    categoryBadge: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(212,175,55,0.1)',
      color: '#B8860B',
      borderRadius: '20px',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8 text-center font-playfair">Bridal Mehendi Collection</h1>
        <p className="text-[#6B4423] text-center mb-12 text-lg">Discover our exquisite collection of traditional and modern mehendi designs</p>
        
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-[0_4px_6px_rgba(212,175,55,0.1)] overflow-hidden transition-transform duration-300 border border-[rgba(212,175,55,0.2)]">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[400px] object-cover cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-[0_2px_4px_rgba(212,175,55,0.1)] z-10"
                >
                  {item.isFavorite ? (
                    <FaHeart className="text-[#D4AF37] text-lg" />
                  ) : (
                    <FaRegHeart className="text-[#D4AF37] text-lg" />
                  )}
                </button>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#8B4513] shadow-[0_2px_4px_rgba(212,175,55,0.1)]">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513] font-playfair">{item.title}</h3>
                <p className="text-[#6B4423] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
              >
                <IoMdClose size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Mehendi Design Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BridalMehendi; 