import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface FootwearItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'Traditional' | 'Formal' | 'Contemporary';
}

const categories = [
  'Traditional',
  'Formal',
  'Contemporary'
];

const GroomFootwear = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<FootwearItem[]>([
    // Traditional Category
    {
      id: 't1',
      image: '/images/groom_collection/groom_footwear/groom_traditional1.jpg',
      title: 'Royal Mojari',
      description: 'Traditional handcrafted mojari with intricate embroidery',
      price: 12999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't2',
      image: '/images/groom_collection/groom_footwear/groom_traditional2.jpg',
      title: 'Heritage Jutti',
      description: 'Classic heritage jutti with golden threadwork',
      price: 15999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't3',
      image: '/images/groom_collection/groom_footwear/groom_traditional3.jpg',
      title: 'Maharaja Collection',
      description: 'Premium handcrafted royal mojari',
      price: 18999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't4',
      image: '/images/groom_collection/groom_footwear/groom_traditional4.jpg',
      title: 'Ethnic Masterpiece',
      description: 'Traditional footwear with mirror work',
      price: 14999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't5',
      image: '/images/groom_collection/groom_footwear/groom_traditional5.jpg',
      title: 'Rajasthani Special',
      description: 'Authentic Rajasthani style wedding jutti',
      price: 16999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't6',
      image: '/images/groom_collection/groom_footwear/groom_traditional6.jpg',
      title: 'Golden Era',
      description: 'Traditional mojari with golden accents',
      price: 13999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't7',
      image: '/images/groom_collection/groom_footwear/groom_traditional7.jpg',
      title: 'Royal Comfort',
      description: 'Comfortable traditional wedding footwear',
      price: 11999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't8',
      image: '/images/groom_collection/groom_footwear/groom_traditional8.jpg',
      title: 'Heritage Elite',
      description: 'Premium traditional wedding collection',
      price: 19999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't9',
      image: '/images/groom_collection/groom_footwear/groom_traditional9.jpg',
      title: 'Mughal Inspiration',
      description: 'Mughal-inspired traditional footwear',
      price: 17999,
      isFavorite: false,
      category: 'Traditional'
    },
    {
      id: 't10',
      image: '/images/groom_collection/groom_footwear/groom_traditional10.jpg',
      title: 'Classic Elegance',
      description: 'Timeless traditional wedding mojari',
      price: 15999,
      isFavorite: false,
      category: 'Traditional'
    },

    // Formal Category
    {
      id: 'f1',
      image: '/images/groom_collection/groom_footwear/groom_contemporary1.jpg',
      title: 'Classic Oxford',
      description: 'Premium leather oxford shoes',
      price: 24999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f2',
      image: '/images/groom_collection/groom_footwear/groom_contemporary2.jpg',
      title: 'Luxury Derby',
      description: 'Handcrafted derby shoes in premium leather',
      price: 22999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f3',
      image: '/images/groom_collection/groom_footwear/groom_contemporary3.jpg',
      title: 'Patent Leather',
      description: 'Classic patent leather formal shoes',
      price: 26999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f4',
      image: '/images/groom_collection/groom_footwear/groom_contemporary4.jpg',
      title: 'Brogue Master',
      description: 'Elegant brogue pattern formal shoes',
      price: 23999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f5',
      image: '/images/groom_collection/groom_footwear/groom_contemporary5.jpg',
      title: 'Modern Classic',
      description: 'Contemporary take on classic formal shoes',
      price: 21999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f6',
      image: '/images/groom_collection/groom_footwear/groom_contemporary6.jpg',
      title: 'Premium Loafer',
      description: 'Luxury leather loafers for special occasions',
      price: 20999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f7',
      image: '/images/groom_collection/groom_footwear/groom_contemporary7.jpg',
      title: 'Dress Perfect',
      description: 'Perfect formal shoes for wedding day',
      price: 25999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f8',
      image: '/images/groom_collection/groom_footwear/groom_contemporary8.jpg',
      title: 'Elite Collection',
      description: 'Premium formal wedding collection',
      price: 28999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f9',
      image: '/images/groom_collection/groom_footwear/groom_contemporary9.jpg',
      title: 'Royal Formal',
      description: 'Luxurious formal shoes with golden accents',
      price: 27999,
      isFavorite: false,
      category: 'Formal'
    },
    {
      id: 'f10',
      image: '/images/groom_collection/groom_footwear/groom_contemporary10.jpg',
      title: 'Classic Charm',
      description: 'Timeless formal wedding shoes',
      price: 24999,
      isFavorite: false,
      category: 'Formal'
    },

    // Contemporary Category
    {
      id: 'c1',
      image: '/images/groom_collection/groom_footwear/groom_formal1.jpg',
      title: 'Modern Fusion',
      description: 'Contemporary fusion of traditional and modern',
      price: 16999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c2',
      image: '/images/groom_collection/groom_footwear/groom_formal2.jpg',
      title: 'Urban Style',
      description: 'Modern urban wedding footwear',
      price: 18999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c3',
      image: '/images/groom_collection/groom_footwear/groom_formal3.jpg',
      title: 'Trendy Edge',
      description: 'Contemporary design with a trendy twist',
      price: 17999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c4',
      image: '/images/groom_collection/groom_footwear/groom_formal4.jpg',
      title: 'Modern Elegance',
      description: 'Elegant contemporary wedding shoes',
      price: 19999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c5',
      image: '/images/groom_collection/groom_footwear/groom_formal5.jpg',
      title: 'Fashion Forward',
      description: 'Contemporary fashion statement piece',
      price: 21999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c6',
      image: '/images/groom_collection/groom_footwear/groom_formal6.jpg',
      title: 'Modern Classic',
      description: 'Contemporary take on classic designs',
      price: 20999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c7',
      image: '/images/groom_collection/groom_footwear/groom_formal7.jpg',
      title: 'Avant-Garde',
      description: 'Bold contemporary wedding footwear',
      price: 22999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c8',
      image: '/images/groom_collection/groom_footwear/groom_formal8.jpg',
      title: 'Modern Luxury',
      description: 'Luxurious contemporary design',
      price: 23999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c9',
      image: '/images/groom_collection/groom_footwear/groom_formal9.jpg',
      title: 'Style Icon',
      description: 'Trendsetting contemporary footwear',
      price: 21999,
      isFavorite: false,
      category: 'Contemporary'
    },
    {
      id: 'c10',
      image: '/images/groom_collection/groom_footwear/groom_formal10.jpg',
      title: 'Modern Heritage',
      description: 'Contemporary fusion with heritage elements',
      price: 19999,
      isFavorite: false,
      category: 'Contemporary'
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
          wishlistItem.id === item.id && wishlistItem.collection === 'groom'
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
          collection: 'groom',
          isFavorite: true
        };
        localStorage.setItem('wishlist', JSON.stringify([...savedWishlist, wishlistItem]));
      } else {
        // Remove from wishlist
        const updatedWishlist = savedWishlist.filter((wishlistItem: any) => 
          !(wishlistItem.id === id && wishlistItem.collection === 'groom')
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

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8 text-center font-playfair">
          Groom Footwear Collection
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our exclusive collection of wedding footwear for the modern groom. 
          From traditional mojaris to contemporary designs, find the perfect pair for your special day.
        </p>

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

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
                </button>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#8B4513] shadow-md">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-end items-center">
                  <span className="text-lg font-semibold text-[#B8860B]">₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-[#D4AF37] transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroomFootwear; 