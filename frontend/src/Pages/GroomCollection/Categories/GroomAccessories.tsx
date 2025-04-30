import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface AccessoryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'Pagdi' | 'Cufflinks' | 'Jewelry' | 'Watches' | 'Other';
}

const categories = [
  'Pagdi',
  'Cufflinks',
  'Jewelry',
  'Watches',
  'Other'
];

const GroomAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<AccessoryItem[]>([
    // Pagdi Category
    {
      id: 'p1',
      image: '/images/groom_collection/groom accessories/groom_pagdi1.jpg',
      title: 'Royal Maroon Safa',
      description: 'Traditional maroon safa with golden border and pearl work',
      price: 15999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p2',
      image: '/images/groom_collection/groom accessories/groom_pagdi2.jpg',
      title: 'Classic Cream Pagdi',
      description: 'Elegant cream pagdi with intricate zari work',
      price: 12999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p3',
      image: '/images/groom_collection/groom accessories/groom_pagdi3.jpg',
      title: 'Designer Pink Safa',
      description: 'Modern pink safa with traditional motifs',
      price: 13999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p4',
      image: '/images/groom_collection/groom accessories/groom_pagdi4.jpg',
      title: 'Golden Heritage Pagdi',
      description: 'Royal golden pagdi with mirror work',
      price: 18999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p5',
      image: '/images/groom_collection/groom accessories/groom_pagdi5.jpg',
      title: 'Red Royal Turban',
      description: 'Traditional red turban with golden brooch',
      price: 16999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p6',
      image: '/images/groom_collection/groom accessories/groom_pagdi6.jpg',
      title: 'Beige Classic Safa',
      description: 'Classic beige safa with pearl embellishments',
      price: 14999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p7',
      image: '/images/groom_collection/groom accessories/groom_pagdi7.jpg',
      title: 'Emerald Green Pagdi',
      description: 'Rich emerald green pagdi with golden work',
      price: 17999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p8',
      image: '/images/groom_collection/groom accessories/groom_pagdi8.jpg',
      title: 'White Pearl Safa',
      description: 'Elegant white safa with pearl and crystal work',
      price: 19999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p9',
      image: '/images/groom_collection/groom accessories/groom_pagdi9.jpg',
      title: 'Royal Blue Turban',
      description: 'Majestic blue turban with silver work',
      price: 16999,
      isFavorite: false,
      category: 'Pagdi'
    },
    {
      id: 'p10',
      image: '/images/groom_collection/groom accessories/groom_pagdi10.jpg',
      title: 'Gold Embellished Safa',
      description: 'Luxurious gold-toned safa with kundan work',
      price: 21999,
      isFavorite: false,
      category: 'Pagdi'
    },

    // Cufflinks Category
    {
      id: 'c1',
      image: '/images/groom_collection/groom accessories/groom_cufflinks1.jpg',
      title: 'Royal Gold Cufflinks',
      description: 'Premium gold-plated cufflinks with crystal details',
      price: 8999,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c2',
      image: '/images/groom_collection/groom accessories/groom_cufflinks2.jpg',
      title: 'Silver Crystal Set',
      description: 'Elegant silver cufflinks with crystal inlay',
      price: 7999,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c3',
      image: '/images/groom_collection/groom accessories/groom_cufflinks3.jpg',
      title: 'Pearl Accent Cufflinks',
      description: 'Classic design with pearl accents',
      price: 6999,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c4',
      image: '/images/groom_collection/groom accessories/groom_cufflinks4.jpg',
      title: 'Diamond Cut Cufflinks',
      description: 'Premium cufflinks with diamond-cut pattern',
      price: 9999,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c5',
      image: '/images/groom_collection/groom accessories/groom_cufflinks5.jpg',
      title: 'Antique Gold Design',
      description: 'Vintage-inspired antique gold cufflinks',
      price: 7499,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c6',
      image: '/images/groom_collection/groom accessories/groom_cufflinks6.jpg',
      title: 'Modern Geometric Set',
      description: 'Contemporary geometric pattern cufflinks',
      price: 6499,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c7',
      image: '/images/groom_collection/groom accessories/groom_cufflinks7.jpg',
      title: 'Royal Blue Crystal',
      description: 'Blue crystal-studded elegant cufflinks',
      price: 8499,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c8',
      image: '/images/groom_collection/groom accessories/groom_cufflinks8.jpg',
      title: 'Classic Silver Square',
      description: 'Traditional silver square cufflinks',
      price: 5999,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c9',
      image: '/images/groom_collection/groom accessories/groom_cufflinks9.jpg',
      title: 'Premium Gold Set',
      description: 'Premium gold-plated designer cufflinks',
      price: 9499,
      isFavorite: false,
      category: 'Cufflinks'
    },
    {
      id: 'c10',
      image: '/images/groom_collection/groom accessories/groom_cufflinks10.jpg',
      title: 'Platinum Finish',
      description: 'Luxury platinum-finish cufflinks',
      price: 10999,
      isFavorite: false,
      category: 'Cufflinks'
    },

    // Jewelry Category
    {
      id: 'j1',
      image: '/images/groom_collection/groom accessories/groom_jewelry1.jpg',
      title: 'Diamond Brooch Set',
      description: 'Exquisite diamond-studded brooch for wedding sherwani',
      price: 25999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j2',
      image: '/images/groom_collection/groom accessories/groom_jewelry2.jpg',
      title: 'Gold Chain Set',
      description: 'Traditional gold chain with intricate design',
      price: 35999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j3',
      image: '/images/groom_collection/groom accessories/groom_jewelry3.jpg',
      title: 'Pearl Brooch',
      description: 'Classic pearl brooch with gold accents',
      price: 18999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j4',
      image: '/images/groom_collection/groom accessories/groom_jewelry4.jpg',
      title: 'Ruby Brooch',
      description: 'Royal ruby-studded brooch with diamond details',
      price: 28999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j5',
      image: '/images/groom_collection/groom accessories/groom_jewelry5.jpg',
      title: 'Emerald Brooch Set',
      description: 'Luxurious emerald and gold brooch set',
      price: 32999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j6',
      image: '/images/groom_collection/groom accessories/groom_jewelry6.jpg',
      title: 'Sapphire Brooch',
      description: 'Elegant sapphire brooch with pearl border',
      price: 27999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j7',
      image: '/images/groom_collection/groom accessories/groom_jewelry7.jpg',
      title: 'Antique Gold Set',
      description: 'Vintage-inspired gold jewelry set',
      price: 42999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j8',
      image: '/images/groom_collection/groom accessories/groom_jewelry8.jpg',
      title: 'Crystal Brooch',
      description: 'Modern crystal-studded brooch design',
      price: 22999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j9',
      image: '/images/groom_collection/groom accessories/groom_jewelry9.jpg',
      title: 'Platinum Chain',
      description: 'Premium platinum chain with pendant',
      price: 45999,
      isFavorite: false,
      category: 'Jewelry'
    },
    {
      id: 'j10',
      image: '/images/groom_collection/groom accessories/groom_jewelry10.jpg',
      title: 'Diamond Chain Set',
      description: 'Luxurious diamond-studded chain set',
      price: 52999,
      isFavorite: false,
      category: 'Jewelry'
    },

    // Watches Category
    {
      id: 'w1',
      image: '/images/groom_collection/groom accessories/groom_watches1.jpg',
      title: 'Royal Gold Watch',
      description: 'Premium gold-plated luxury watch',
      price: 45999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w2',
      image: '/images/groom_collection/groom accessories/groom_watches2.jpg',
      title: 'Diamond Bezel Watch',
      description: 'Elegant watch with diamond-studded bezel',
      price: 52999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w3',
      image: '/images/groom_collection/groom accessories/groom_watches3.jpg',
      title: 'Classic Silver Watch',
      description: 'Traditional silver watch with leather strap',
      price: 38999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w4',
      image: '/images/groom_collection/groom accessories/groom_watches4.jpg',
      title: 'Rose Gold Watch',
      description: 'Modern rose gold watch with chronograph',
      price: 42999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w5',
      image: '/images/groom_collection/groom accessories/groom_watches5.jpg',
      title: 'Platinum Watch',
      description: 'Premium platinum watch with sapphire crystal',
      price: 58999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w6',
      image: '/images/groom_collection/groom accessories/groom_watches6.jpg',
      title: 'Designer Watch',
      description: 'Limited edition designer watch',
      price: 48999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w7',
      image: '/images/groom_collection/groom accessories/groom_watches7.jpg',
      title: 'Crystal Watch',
      description: 'Crystal-embellished luxury timepiece',
      price: 44999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w8',
      image: '/images/groom_collection/groom accessories/groom_watches8.jpg',
      title: 'Vintage Watch',
      description: 'Classic vintage-style watch',
      price: 35999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w9',
      image: '/images/groom_collection/groom accessories/groom_watches9.jpg',
      title: 'Modern Watch',
      description: 'Contemporary design with smart features',
      price: 46999,
      isFavorite: false,
      category: 'Watches'
    },
    {
      id: 'w10',
      image: '/images/groom_collection/groom accessories/groom_watches10.jpg',
      title: 'Premium Watch',
      description: 'Premium watch with gold accents',
      price: 49999,
      isFavorite: false,
      category: 'Watches'
    },

    // Other Accessories
    {
      id: 'o1',
      image: '/images/groom_collection/groom accessories/groom_other1.jpg',
      title: 'Designer Pocket Square',
      description: 'Premium silk pocket square with embroidery',
      price: 4999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o2',
      image: '/images/groom_collection/groom accessories/groom_other2.jpg',
      title: 'Wedding Stole',
      description: 'Luxurious wedding stole with zari work',
      price: 8999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o3',
      image: '/images/groom_collection/groom accessories/groom_other3.jpg',
      title: 'Groom Belt',
      description: 'Designer leather belt with gold buckle',
      price: 6999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o4',
      image: '/images/groom_collection/groom accessories/groom_other4.jpg',
      title: 'Silk Scarf',
      description: 'Pure silk scarf with traditional motifs',
      price: 5999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o5',
      image: '/images/groom_collection/groom accessories/groom_other5.jpg',
      title: 'Wedding Kalgi',
      description: 'Royal kalgi with pearl and crystal work',
      price: 7999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o6',
      image: '/images/groom_collection/groom accessories/groom_other6.jpg',
      title: 'Designer Buttons',
      description: 'Gold-plated designer button set',
      price: 3999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o7',
      image: '/images/groom_collection/groom accessories/groom_other7.jpg',
      title: 'Wedding Sarpech',
      description: 'Traditional sarpech with kundan work',
      price: 9999,
      isFavorite: false,
      category: 'Other'
    },
    {
      id: 'o8',
      image: '/images/groom_collection/groom accessories/groom_other8.jpg',
      title: 'Groom Dupatta',
      description: 'Designer dupatta with embroidery',
      price: 7499,
      isFavorite: false,
      category: 'Other'
    }
  ]);

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  const toggleFavorite = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
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
          Groom Accessories Collection
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our exclusive collection of traditional and modern accessories for the groom. 
          From royal pagdis to elegant cufflinks, find the perfect accessories for your special day.
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

export default GroomAccessories; 