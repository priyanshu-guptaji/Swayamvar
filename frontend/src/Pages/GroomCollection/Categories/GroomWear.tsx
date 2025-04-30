import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface GroomItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: 'mehendi' | 'reception' | 'haldi' | 'sangeet';
}

const GroomWear = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<GroomItem[]>([
    // Mehendi Category Items
    {
      id: 'm1',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi1.jpg',
      title: 'Traditional Mehendi Kurta',
      description: 'Classic mehendi ceremony kurta with intricate embroidery',
      price: 15000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm2',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi2.jpg',
      title: 'Modern Mehendi Collection',
      description: 'Contemporary mehendi wear with traditional touch',
      price: 18000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm3',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi3.jpg',
      title: 'Designer Mehendi Wear',
      description: 'Designer collection for mehendi ceremony',
      price: 20000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm4',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi4.jpg',
      title: 'Royal Mehendi Attire',
      description: 'Royal collection for mehendi celebration',
      price: 22000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm5',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi5.jpg',
      title: 'Premium Mehendi Collection',
      description: 'Premium quality mehendi wear with detailed work',
      price: 25000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm6',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi6.jpg',
      title: 'Elegant Mehendi Ensemble',
      description: 'Elegant mehendi wear with contemporary design',
      price: 23000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm7',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi7.jpg',
      title: 'Designer Mehendi Special',
      description: 'Special designer collection for mehendi ceremony',
      price: 24000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm8',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi8.jpg',
      title: 'Modern Mehendi Fusion',
      description: 'Fusion of modern and traditional mehendi wear',
      price: 21000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm9',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi9.jpg',
      title: 'Classic Mehendi Collection',
      description: 'Classic mehendi wear with traditional elements',
      price: 19000,
      isFavorite: false,
      category: 'mehendi'
    },
    {
      id: 'm10',
      image: '/images/groom_collection/groom_wear/groom_mehendi_wear/groom_mehendi10.jpg',
      title: 'Premium Mehendi Special',
      description: 'Special premium collection for mehendi ceremony',
      price: 26000,
      isFavorite: false,
      category: 'mehendi'
    },
    // Haldi Category Items
    {
      id: 'h1',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi1.jpg',
      title: 'Traditional Haldi Kurta',
      description: 'Classic yellow kurta with intricate embroidery for haldi ceremony',
      price: 12000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h2',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi2.jpg',
      title: 'Designer Haldi Collection',
      description: 'Designer yellow ensemble perfect for haldi celebration',
      price: 15000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h3',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi3.jpg',
      title: 'Royal Haldi Attire',
      description: 'Royal yellow sherwani with golden work for haldi function',
      price: 18000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h4',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi4.jpg',
      title: 'Modern Haldi Wear',
      description: 'Contemporary yellow kurta set with modern design elements',
      price: 14000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h5',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi5.jpg',
      title: 'Premium Haldi Collection',
      description: 'Premium quality yellow ensemble with detailed embroidery',
      price: 20000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h6',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi6.jpg',
      title: 'Elegant Haldi Kurta',
      description: 'Elegant yellow kurta with traditional motifs',
      price: 16000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h7',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi7.jpg',
      title: 'Designer Haldi Special',
      description: 'Special designer yellow outfit for haldi ceremony',
      price: 22000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h8',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi8.jpg',
      title: 'Traditional Haldi Set',
      description: 'Complete traditional yellow kurta set for haldi',
      price: 17000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h9',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi9.jpg',
      title: 'Luxury Haldi Collection',
      description: 'Luxury yellow ensemble with rich embellishments',
      price: 25000,
      isFavorite: false,
      category: 'haldi'
    },
    {
      id: 'h10',
      image: '/images/groom_collection/groom_wear/groom_haldi_wear/groom_haldi10.jpg',
      title: 'Classic Haldi Wear',
      description: 'Classic yellow kurta with contemporary styling',
      price: 19000,
      isFavorite: false,
      category: 'haldi'
    },
    // Sangeet Category Items
    {
      id: 's1',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet1.jpg',
      title: 'Royal Sangeet Sherwani',
      description: 'Elegant sherwani with intricate embroidery perfect for sangeet',
      price: 35000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's2',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet2.jpg',
      title: 'Modern Sangeet Collection',
      description: 'Contemporary sangeet wear with traditional elements',
      price: 32000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's3',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet3.jpg',
      title: 'Designer Sangeet Ensemble',
      description: 'Designer collection for a memorable sangeet celebration',
      price: 38000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's4',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet4.jpg',
      title: 'Classic Sangeet Attire',
      description: 'Timeless sangeet wear with modern touches',
      price: 34000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's5',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet5.jpg',
      title: 'Premium Sangeet Collection',
      description: 'Premium quality sangeet wear with detailed embroidery',
      price: 40000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's6',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet6.jpg',
      title: 'Elegant Evening Sherwani',
      description: 'Perfect for sangeet evening celebrations',
      price: 36000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's7',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet7.jpg',
      title: 'Contemporary Sangeet Style',
      description: 'Modern take on traditional sangeet wear',
      price: 33000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's8',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet8.jpg',
      title: 'Luxurious Sangeet Sherwani',
      description: 'Luxury collection for the perfect sangeet celebration',
      price: 42000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's9',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet9.jpg',
      title: 'Traditional Sangeet Wear',
      description: 'Traditional design with contemporary elements',
      price: 37000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's10',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet10.jpg',
      title: 'Designer Evening Collection',
      description: 'Designer wear perfect for sangeet celebrations',
      price: 39000,
      isFavorite: false,
      category: 'sangeet'
    },
    // Add more sangeet items
    {
      id: 's11',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet11.jpg',
      title: 'Signature Sangeet Sherwani',
      description: 'Signature collection with unique design patterns',
      price: 41000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's12',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet12.jpg',
      title: 'Heritage Sangeet Wear',
      description: 'Heritage-inspired design for modern celebrations',
      price: 43000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's13',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet13.jpg',
      title: 'Elite Sangeet Collection',
      description: 'Elite sherwani with premium craftsmanship',
      price: 44000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's14',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet14.jpg',
      title: 'Regal Sangeet Attire',
      description: 'Regal design for the perfect sangeet look',
      price: 45000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's15',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet15.jpg',
      title: 'Exclusive Sangeet Ensemble',
      description: 'Exclusive collection with detailed embellishments',
      price: 46000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's16',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet16.jpg',
      title: 'Premium Designer Sangeet',
      description: 'Premium designer wear with exquisite detailing',
      price: 47000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's17',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet17.jpg',
      title: 'Luxury Sangeet Collection',
      description: 'Luxury sherwani with intricate handwork',
      price: 48000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's18',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet18.jpg',
      title: 'Royal Heritage Sangeet',
      description: 'Heritage-inspired luxury sangeet wear',
      price: 49000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's19',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet19.jpg',
      title: 'Contemporary Luxury Sangeet',
      description: 'Modern luxury design for sangeet',
      price: 50000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's20',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet20.jpg',
      title: 'Elite Designer Sangeet',
      description: 'Elite designer wear for special celebrations',
      price: 51000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's21',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet21.jpg',
      title: 'Signature Luxury Sangeet',
      description: 'Signature collection with premium finish',
      price: 52000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's22',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet22.jpg',
      title: 'Premium Evening Sangeet',
      description: 'Premium evening collection for sangeet',
      price: 53000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's23',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet23.jpg',
      title: 'Designer Fusion Sangeet',
      description: 'Fusion of traditional and modern designs',
      price: 54000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's24',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet24.jpg',
      title: 'Royal Celebration Sangeet',
      description: 'Royal collection for sangeet celebrations',
      price: 55000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's25',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet25.jpg',
      title: 'Premium Festive Sangeet',
      description: 'Premium festive wear for sangeet',
      price: 56000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's26',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet26.jpg',
      title: 'Luxury Designer Sangeet',
      description: 'Luxury designer wear with intricate details',
      price: 57000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's27',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet27.jpg',
      title: 'Classic Heritage Sangeet',
      description: 'Classic heritage design for sangeet',
      price: 58000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's28',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet28.jpg',
      title: 'Premium Royal Sangeet',
      description: 'Premium royal collection for sangeet',
      price: 59000,
      isFavorite: false,
      category: 'sangeet'
    },
    {
      id: 's29',
      image: '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet29.jpg',
      title: 'Exclusive Designer Sangeet',
      description: 'Exclusive designer wear for sangeet',
      price: 60000,
      isFavorite: false,
      category: 'sangeet'
    },
    // Reception Category Items
    {
      id: 'r1',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception1.jpg',
      title: 'Royal Reception Sherwani',
      description: 'Luxurious sherwani with intricate golden embroidery',
      price: 45000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r2',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception2.jpg',
      title: 'Modern Reception Collection',
      description: 'Contemporary sherwani with elegant design elements',
      price: 42000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r3',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception3.jpg',
      title: 'Designer Reception Ensemble',
      description: 'Designer collection for a grand reception celebration',
      price: 48000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r4',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception4.jpg',
      title: 'Classic Reception Attire',
      description: 'Timeless sherwani with royal touches',
      price: 44000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r5',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception5.jpg',
      title: 'Premium Reception Collection',
      description: 'Premium quality sherwani with detailed handwork',
      price: 50000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r6',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception6.jpg',
      title: 'Elegant Evening Sherwani',
      description: 'Perfect for grand reception celebrations',
      price: 46000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r7',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception7.jpg',
      title: 'Contemporary Reception Style',
      description: 'Modern take on traditional reception wear',
      price: 43000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r8',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception8.jpg',
      title: 'Luxurious Reception Sherwani',
      description: 'Luxury collection for the perfect reception',
      price: 52000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r9',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception9.jpg',
      title: 'Traditional Reception Wear',
      description: 'Traditional design with contemporary elements',
      price: 47000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r10',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception10.jpg',
      title: 'Designer Evening Collection',
      description: 'Designer wear perfect for reception celebrations',
      price: 49000,
      isFavorite: false,
      category: 'reception'
    },
    // Add more reception items
    {
      id: 'r11',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception11.jpg',
      title: 'Signature Reception Sherwani',
      description: 'Signature collection with unique design patterns',
      price: 51000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r12',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception12.jpg',
      title: 'Heritage Reception Wear',
      description: 'Heritage-inspired design for modern celebrations',
      price: 53000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r13',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception13.jpg',
      title: 'Elite Reception Collection',
      description: 'Elite sherwani with premium craftsmanship',
      price: 55000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r14',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception14.jpg',
      title: 'Regal Reception Attire',
      description: 'Regal design for the perfect reception look',
      price: 54000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r15',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception15.jpg',
      title: 'Exclusive Reception Ensemble',
      description: 'Exclusive collection with detailed embellishments',
      price: 56000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r16',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception16.jpg',
      title: 'Premium Designer Sherwani',
      description: 'Premium designer wear with exquisite detailing',
      price: 57000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r17',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception17.jpg',
      title: 'Luxury Reception Collection',
      description: 'Luxury sherwani with intricate handwork',
      price: 58000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r18',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception18.jpg',
      title: 'Royal Heritage Sherwani',
      description: 'Heritage-inspired luxury reception wear',
      price: 59000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r19',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception19.jpg',
      title: 'Contemporary Luxury Wear',
      description: 'Modern luxury design for reception',
      price: 54000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r20',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception20.jpg',
      title: 'Elite Designer Collection',
      description: 'Elite designer wear for special celebrations',
      price: 60000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r21',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception21.jpg',
      title: 'Signature Luxury Sherwani',
      description: 'Signature collection with premium finish',
      price: 62000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r22',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception22.jpg',
      title: 'Premium Evening Wear',
      description: 'Premium evening collection for reception',
      price: 56000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r23',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception23.jpg',
      title: 'Designer Fusion Sherwani',
      description: 'Fusion of traditional and modern designs',
      price: 58000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r24',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception24.jpg',
      title: 'Royal Celebration Wear',
      description: 'Royal collection for reception celebrations',
      price: 61000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r25',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception25.jpg',
      title: 'Premium Festive Collection',
      description: 'Premium festive wear for reception',
      price: 63000,
      isFavorite: false,
      category: 'reception'
    },
    {
      id: 'r26',
      image: '/images/groom_collection/groom_wear/groom_sherwani/groom_reception26.jpg',
      title: 'Luxury Designer Ensemble',
      description: 'Luxury designer wear with intricate details',
      price: 65000,
      isFavorite: false,
      category: 'reception'
    },
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
    fullImage: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      objectFit: 'contain' as const,
      borderRadius: '8px',
    },
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8 text-center font-playfair">
          Groom Wear Collection
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                : 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#FDF5E6]'
            }`}
          >
            All
          </button>
          {['mehendi', 'reception', 'haldi', 'sangeet'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                  : 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#FDF5E6]'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                  className="w-full h-[400px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(item.image)}
              />
              <button
                onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FaHeart className={`text-xl ${item.isFavorite ? 'text-[#FF69B4]' : 'text-[#D4AF37]'}`} />
              </button>
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
                style={styles.fullImage}
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

export default GroomWear; 