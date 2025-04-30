import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface HeritageItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: string;
}

const Heritage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [items, setItems] = useState<HeritageItem[]>([
    // Bengali Category Items
    {
      id: 'b1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali1.jpg',
      title: 'Bengali Bridal Collection',
      description: 'Traditional Bengali bridal wear with intricate designs',
      price: 25000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali2.jpg',
      title: 'Bengali Wedding Special',
      description: 'Special Bengali wedding collection with traditional elements',
      price: 28000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali3.jpg',
      title: 'Bengali Bridal Elegance',
      description: 'Elegant Bengali bridal wear with modern touch',
      price: 30000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali4.jpg',
      title: 'Contemporary Bengali Bride',
      description: 'Modern take on traditional Bengali bridal attire',
      price: 32000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali5.jpg',
      title: 'Royal Bengali Bridal',
      description: 'Luxurious Bengali bridal ensemble with royal touch',
      price: 35000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali6.jpg',
      title: 'Traditional Red Bengali',
      description: 'Classic red Bengali bridal saree with gold work',
      price: 33000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali7.jpg',
      title: 'Bengali Silk Bridal',
      description: 'Pure silk Bengali bridal wear with traditional motifs',
      price: 36000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali8.jpg',
      title: 'Designer Bengali Collection',
      description: 'Designer Bengali bridal wear with contemporary elements',
      price: 38000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali9.jpg',
      title: 'Premium Bengali Bridal',
      description: 'Premium quality Bengali bridal wear with fine detailing',
      price: 40000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali10.jpg',
      title: 'Exclusive Bengali Design',
      description: 'Exclusive Bengali bridal design with unique patterns',
      price: 42000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali11.jpg',
      title: 'Heritage Bengali Collection',
      description: 'Heritage inspired Bengali bridal wear with rich embroidery',
      price: 45000,
      isFavorite: false,
      category: 'bengali'
    },
    {
      id: 'b12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali12.jpg',
      title: 'Luxury Bengali Ensemble',
      description: 'Luxury Bengali bridal ensemble with intricate work',
      price: 48000,
      isFavorite: false,
      category: 'bengali'
    },
    
    // Jammu & Kashmir Category Items
    {
      id: 'jk1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir1.jpg',
      title: 'Kashmiri Bridal Collection',
      description: 'Traditional Kashmiri bridal wear with intricate embroidery',
      price: 32000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir2.jpg',
      title: 'Kashmiri Wedding Special',
      description: 'Special Kashmiri wedding collection with traditional elements',
      price: 35000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir3.jpg',
      title: 'Kashmiri Bridal Elegance',
      description: 'Elegant Kashmiri bridal wear with modern touch',
      price: 38000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir4.jpg',
      title: 'Royal Kashmiri Bridal',
      description: 'Royal Kashmiri bridal ensemble with rich embroidery',
      price: 42000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir5.jpg',
      title: 'Premium Kashmiri Collection',
      description: 'Premium Kashmiri bridal wear with exquisite details',
      price: 45000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir6.jpg',
      title: 'Designer Kashmiri Bridal',
      description: 'Designer Kashmiri bridal wear with contemporary elements',
      price: 48000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir7.jpg',
      title: 'Traditional Kashmiri Ensemble',
      description: 'Traditional Kashmiri bridal ensemble with heritage touch',
      price: 40000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir8.jpg',
      title: 'Luxury Kashmiri Collection',
      description: 'Luxury Kashmiri bridal collection with fine craftsmanship',
      price: 52000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir9.jpg',
      title: 'Modern Kashmiri Bridal',
      description: 'Modern interpretation of Kashmiri bridal traditions',
      price: 44000,
      isFavorite: false,
      category: 'jammu'
    },
    {
      id: 'jk10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/jammu & kashmir/jammu & kashmir10.jpg',
      title: 'Exclusive Kashmiri Design',
      description: 'Exclusive Kashmiri bridal design with unique patterns',
      price: 50000,
      isFavorite: false,
      category: 'jammu'
    },
    
    // Assamese Category Items
    {
      id: 'a1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/assamese/assamese1.jpg',
      title: 'Assamese Bridal Collection',
      description: 'Traditional Assamese bridal wear with intricate designs',
      price: 26000,
      isFavorite: false,
      category: 'assamese'
    },
    {
      id: 'a2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/assamese/assamese2.jpg',
      title: 'Assamese Wedding Special',
      description: 'Special Assamese wedding collection with traditional elements',
      price: 29000,
      isFavorite: false,
      category: 'assamese'
    },
    {
      id: 'a3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/assamese/assamese3.jpg',
      title: 'Assamese Bridal Elegance',
      description: 'Elegant Assamese bridal wear with modern touch',
      price: 31000,
      isFavorite: false,
      category: 'assamese'
    },
    
    // Telugu Category Items
    {
      id: 't1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/telugu/ec30f942e0d9926fadf3dc86ff7f8716.jpg',
      title: 'Telugu Bridal Collection',
      description: 'Traditional Telugu bridal wear with intricate designs',
      price: 27000,
      isFavorite: false,
      category: 'telugu'
    },
    {
      id: 't2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/telugu/9e12dc97a230581803e0afeebb3dc367.jpg',
      title: 'Telugu Wedding Special',
      description: 'Special Telugu wedding collection with traditional elements',
      price: 30000,
      isFavorite: false,
      category: 'telugu'
    },
    {
      id: 't3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/telugu/506031221a2d85878134e59a3d17b98a.jpg',
      title: 'Telugu Bridal Elegance',
      description: 'Elegant Telugu bridal wear with modern touch',
      price: 33000,
      isFavorite: false,
      category: 'telugu'
    },
    
    // Tamil Category Items
    {
      id: 'tm1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/fad54d7a7f6489200e1c7770db7de761.jpg',
      title: 'Tamil Bridal Collection',
      description: 'Traditional Tamil bridal wear with intricate designs',
      price: 26000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/1f00b14fc03d1800459e39e12b7ae174.jpg',
      title: 'Tamil Wedding Special',
      description: 'Special Tamil wedding collection with traditional elements',
      price: 29000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/e00018161fbbba31c170c433c480d71c.jpg',
      title: 'Tamil Bridal Elegance',
      description: 'Elegant Tamil bridal wear with modern touch',
      price: 32000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/43cd6293c33f337ea8b8f337f844cfe7.jpg',
      title: 'Royal Tamil Bridal',
      description: 'Royal Tamil bridal ensemble with rich embroidery',
      price: 35000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/a8f3eec0cf79d831b3d66b77767bc024.jpg',
      title: 'Premium Tamil Collection',
      description: 'Premium Tamil bridal wear with exquisite details',
      price: 38000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/be14eddb9909e19e1db2e8df501ec4d5.jpg',
      title: 'Designer Tamil Bridal',
      description: 'Designer Tamil bridal wear with contemporary elements',
      price: 40000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/53bfd394a6dadad96486f6370adbb03d.jpg',
      title: 'Traditional Tamil Ensemble',
      description: 'Traditional Tamil bridal ensemble with heritage touch',
      price: 33000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/b68feac3619fb88a0a4607a86298258a.jpg',
      title: 'Luxury Tamil Collection',
      description: 'Luxury Tamil bridal collection with fine craftsmanship',
      price: 42000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/30135b7369910f77481dc5c57d991f12.jpg',
      title: 'Modern Tamil Bridal',
      description: 'Modern interpretation of Tamil bridal traditions',
      price: 37000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/833bfff1fd5ddcdd7146f6ca4083969f.jpg',
      title: 'Exclusive Tamil Design',
      description: 'Exclusive Tamil bridal design with unique patterns',
      price: 44000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/0cb980345c355ec35381b224d86f98d6.jpg',
      title: 'Heritage Tamil Collection',
      description: 'Heritage inspired Tamil bridal wear with rich embroidery',
      price: 46000,
      isFavorite: false,
      category: 'tamil'
    },
    {
      id: 'tm12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/tamil/b4678f6f943ec771fead3a46008ab72f.jpg',
      title: 'Classic Tamil Bridal',
      description: 'Classic Tamil bridal wear with traditional motifs',
      price: 39000,
      isFavorite: false,
      category: 'tamil'
    },
    
    // Rajasthani Category Items
    {
      id: 'r1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/89c28afc0e5f957b1450041a1b89af02.jpg',
      title: 'Rajasthani Bridal Collection',
      description: 'Traditional Rajasthani bridal wear with intricate designs',
      price: 28000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/282083a27e467d9d3620ea9730f0a2db.jpg',
      title: 'Rajasthani Wedding Special',
      description: 'Special Rajasthani wedding collection with traditional elements',
      price: 31000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/9730fb1e1458b35a47a154da4c523233.jpg',
      title: 'Rajasthani Bridal Elegance',
      description: 'Elegant Rajasthani bridal wear with modern touch',
      price: 34000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/91c87fd79de712db049dcdb487d3ea15.jpg',
      title: 'Royal Rajasthani Bridal',
      description: 'Royal Rajasthani bridal ensemble with rich embroidery',
      price: 37000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/25531eae44c13b84ed5951bf8c81e0b2.jpg',
      title: 'Premium Rajasthani Collection',
      description: 'Premium Rajasthani bridal wear with exquisite details',
      price: 40000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/ff988f39c78c36b041107c03a07dac77.jpg',
      title: 'Designer Rajasthani Bridal',
      description: 'Designer Rajasthani bridal wear with contemporary elements',
      price: 43000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/d3d5a01c4bc0e82393a1d6e610f0c5a1.jpg',
      title: 'Traditional Rajasthani Ensemble',
      description: 'Traditional Rajasthani bridal ensemble with heritage touch',
      price: 36000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/e0cd0f0e9740d0f119afdd6f1ba15879.jpg',
      title: 'Luxury Rajasthani Collection',
      description: 'Luxury Rajasthani bridal collection with fine craftsmanship',
      price: 46000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/542f5fb80a44c12358467e117ee18c6a.jpg',
      title: 'Modern Rajasthani Bridal',
      description: 'Modern interpretation of Rajasthani bridal traditions',
      price: 39000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/535e292ef6e7517d0f5612b9738481fa.jpg',
      title: 'Exclusive Rajasthani Design',
      description: 'Exclusive Rajasthani bridal design with unique patterns',
      price: 42000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/93132bed88d9bc8398f220d121bae2ec.jpg',
      title: 'Heritage Rajasthani Collection',
      description: 'Heritage inspired Rajasthani bridal wear with rich embroidery',
      price: 45000,
      isFavorite: false,
      category: 'rajasthani'
    },
    {
      id: 'r12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/rajasthani/35ed190ce28b21cbf2d218fa31684d69.jpg',
      title: 'Classic Rajasthani Bridal',
      description: 'Classic Rajasthani bridal wear with traditional motifs',
      price: 38000,
      isFavorite: false,
      category: 'rajasthani'
    },
    
    // Punjabi Category Items
    {
      id: 'p1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/fe5bd1086afb15e180aac334dc348d4e.jpg',
      title: 'Traditional Punjabi Bridal',
      description: 'Classic Punjabi bridal wear with intricate embroidery',
      price: 45000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/0368f95d7deb29adda29c7a2c32efa5f.jpg',
      title: 'Punjabi Wedding Special',
      description: 'Elegant Punjabi bridal ensemble with traditional motifs',
      price: 48000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/0135d2006e1bec9ad2bbbf9f2e9665f4.jpg',
      title: 'Modern Punjabi Bridal',
      description: 'Contemporary take on traditional Punjabi bridal wear',
      price: 52000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/505a4b6230ca6b862b0eb3248a30db6a.jpg',
      title: 'Royal Punjabi Bridal',
      description: 'Royal Punjabi bridal ensemble with rich embroidery',
      price: 55000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/7b498980c1713a73df88ada353b77196.jpg',
      title: 'Premium Punjabi Collection',
      description: 'Premium Punjabi bridal wear with exquisite details',
      price: 58000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/a4a87ffd7e39c7d30ccdf04b9c6bf350.jpg',
      title: 'Designer Punjabi Bridal',
      description: 'Designer Punjabi bridal wear with contemporary elements',
      price: 60000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/8667bccb1d49906f2894f5080afe1034.jpg',
      title: 'Traditional Punjabi Ensemble',
      description: 'Traditional Punjabi bridal ensemble with heritage touch',
      price: 50000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/1d50fff2e64afbeee95acb5b1d6dad83.jpg',
      title: 'Luxury Punjabi Collection',
      description: 'Luxury Punjabi bridal collection with fine craftsmanship',
      price: 62000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/cc0bf7e8961ddd57346555315a6da1e0.jpg',
      title: 'Modern Punjabi Design',
      description: 'Modern interpretation of Punjabi bridal traditions',
      price: 54000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/a14679247cf2861c5c748e0ab0547f2b.jpg',
      title: 'Exclusive Punjabi Bridal',
      description: 'Exclusive Punjabi bridal design with unique patterns',
      price: 65000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/c65c1254bb3274bc9062a1ed605a1871.jpg',
      title: 'Heritage Punjabi Collection',
      description: 'Heritage inspired Punjabi bridal wear with rich embroidery',
      price: 56000,
      isFavorite: false,
      category: 'punjabi'
    },
    {
      id: 'p12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/punjabi/2d3ba846ecda862c7677f40a45e171e2.jpg',
      title: 'Classic Punjabi Bridal',
      description: 'Classic Punjabi bridal wear with traditional motifs',
      price: 53000,
      isFavorite: false,
      category: 'punjabi'
    },
    
    // Pahadi Category Items
    {
      id: 'ph1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi1.jpg',
      title: 'Pahadi Bridal Collection',
      description: 'Traditional Pahadi bridal wear with intricate designs',
      price: 25000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi2.jpg',
      title: 'Pahadi Wedding Special',
      description: 'Special Pahadi wedding collection with traditional elements',
      price: 28000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi3.jpg',
      title: 'Pahadi Bridal Elegance',
      description: 'Elegant Pahadi bridal wear with modern touch',
      price: 31000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi4.jpg',
      title: 'Royal Pahadi Bridal',
      description: 'Royal Pahadi bridal ensemble with rich embroidery',
      price: 34000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi5.jpg',
      title: 'Premium Pahadi Collection',
      description: 'Premium Pahadi bridal wear with exquisite details',
      price: 37000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi6.jpg',
      title: 'Designer Pahadi Bridal',
      description: 'Designer Pahadi bridal wear with contemporary elements',
      price: 40000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi7.jpg',
      title: 'Traditional Pahadi Ensemble',
      description: 'Traditional Pahadi bridal ensemble with heritage touch',
      price: 33000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi8.jpg',
      title: 'Luxury Pahadi Collection',
      description: 'Luxury Pahadi bridal collection with fine craftsmanship',
      price: 43000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi9.jpg',
      title: 'Modern Pahadi Bridal',
      description: 'Modern interpretation of Pahadi bridal traditions',
      price: 36000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi10.jpg',
      title: 'Exclusive Pahadi Design',
      description: 'Exclusive Pahadi bridal design with unique patterns',
      price: 39000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi11.jpg',
      title: 'Heritage Pahadi Collection',
      description: 'Heritage inspired Pahadi bridal wear with rich embroidery',
      price: 42000,
      isFavorite: false,
      category: 'pahadi'
    },
    {
      id: 'ph12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/pahadi/pahadi12.jpg',
      title: 'Classic Pahadi Bridal',
      description: 'Classic Pahadi bridal wear with traditional motifs',
      price: 35000,
      isFavorite: false,
      category: 'pahadi'
    },
    
    // Odia Category Items
    {
      id: 'o1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia1.jpg',
      title: 'Odia Bridal Collection',
      description: 'Traditional Odia bridal wear with intricate designs',
      price: 26000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia2.jpg',
      title: 'Odia Wedding Special',
      description: 'Special Odia wedding collection with traditional elements',
      price: 29000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia3.jpg',
      title: 'Odia Bridal Elegance',
      description: 'Elegant Odia bridal wear with modern touch',
      price: 32000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia4.jpg',
      title: 'Royal Odia Bridal',
      description: 'Royal Odia bridal ensemble with rich embroidery',
      price: 35000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia5.jpg',
      title: 'Premium Odia Collection',
      description: 'Premium Odia bridal wear with exquisite details',
      price: 38000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia6.jpg',
      title: 'Designer Odia Bridal',
      description: 'Designer Odia bridal wear with contemporary elements',
      price: 41000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia7.jpg',
      title: 'Traditional Odia Ensemble',
      description: 'Traditional Odia bridal ensemble with heritage touch',
      price: 34000,
      isFavorite: false,
      category: 'odia'
    },
    {
      id: 'o8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/odia/odia8.jpg',
      title: 'Luxury Odia Collection',
      description: 'Luxury Odia bridal collection with fine craftsmanship',
      price: 44000,
      isFavorite: false,
      category: 'odia'
    },
    
    // Marathi Category Items
    {
      id: 'm1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi1.jpg',
      title: 'Marathi Bridal Collection',
      description: 'Traditional Marathi bridal wear with intricate designs',
      price: 27000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi2.jpg',
      title: 'Marathi Wedding Special',
      description: 'Special Marathi wedding collection with traditional elements',
      price: 30000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi3.jpg',
      title: 'Marathi Bridal Elegance',
      description: 'Elegant Marathi bridal wear with modern touch',
      price: 33000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi4.jpg',
      title: 'Royal Marathi Bridal',
      description: 'Royal Marathi bridal ensemble with rich embroidery',
      price: 36000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi5.jpg',
      title: 'Premium Marathi Collection',
      description: 'Premium Marathi bridal wear with exquisite details',
      price: 39000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi6.jpg',
      title: 'Designer Marathi Bridal',
      description: 'Designer Marathi bridal wear with contemporary elements',
      price: 42000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi7.jpg',
      title: 'Traditional Marathi Ensemble',
      description: 'Traditional Marathi bridal ensemble with heritage touch',
      price: 35000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi8.jpg',
      title: 'Luxury Marathi Collection',
      description: 'Luxury Marathi bridal collection with fine craftsmanship',
      price: 45000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi9.jpg',
      title: 'Modern Marathi Bridal',
      description: 'Modern interpretation of Marathi bridal traditions',
      price: 38000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi10.jpg',
      title: 'Exclusive Marathi Design',
      description: 'Exclusive Marathi bridal design with unique patterns',
      price: 41000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi11.jpg',
      title: 'Heritage Marathi Collection',
      description: 'Heritage inspired Marathi bridal wear with rich embroidery',
      price: 44000,
      isFavorite: false,
      category: 'marathi'
    },
    {
      id: 'm12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/marathi/marathi12.jpg',
      title: 'Classic Marathi Bridal',
      description: 'Classic Marathi bridal wear with traditional motifs',
      price: 37000,
      isFavorite: false,
      category: 'marathi'
    },
    
    // Kerala Category Items
    {
      id: 'k1',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela1.jpg',
      title: 'Kerala Bridal Collection',
      description: 'Traditional Kerala bridal wear with intricate designs',
      price: 28000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k2',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela2.jpg',
      title: 'Kerala Wedding Special',
      description: 'Special Kerala wedding collection with traditional elements',
      price: 31000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k3',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela3.jpg',
      title: 'Kerala Bridal Elegance',
      description: 'Elegant Kerala bridal wear with modern touch',
      price: 34000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k4',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela4.jpg',
      title: 'Royal Kerala Bridal',
      description: 'Royal Kerala bridal ensemble with rich embroidery',
      price: 37000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k5',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela5.jpg',
      title: 'Premium Kerala Collection',
      description: 'Premium Kerala bridal wear with exquisite details',
      price: 40000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k6',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela6.jpg',
      title: 'Designer Kerala Bridal',
      description: 'Designer Kerala bridal wear with contemporary elements',
      price: 43000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k7',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela7.jpg',
      title: 'Traditional Kerala Ensemble',
      description: 'Traditional Kerala bridal ensemble with heritage touch',
      price: 36000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k8',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela8.jpg',
      title: 'Luxury Kerala Collection',
      description: 'Luxury Kerala bridal collection with fine craftsmanship',
      price: 46000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k9',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela9.jpg',
      title: 'Modern Kerala Bridal',
      description: 'Modern interpretation of Kerala bridal traditions',
      price: 39000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k10',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela10.jpg',
      title: 'Exclusive Kerala Design',
      description: 'Exclusive Kerala bridal design with unique patterns',
      price: 42000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k11',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela11.jpg',
      title: 'Heritage Kerala Collection',
      description: 'Heritage inspired Kerala bridal wear with rich embroidery',
      price: 45000,
      isFavorite: false,
      category: 'kerala'
    },
    {
      id: 'k12',
      image: '/images/bridal_collection/bridal_wear/bridal_state_wear/kerela/kerela12.jpg',
      title: 'Classic Kerala Bridal',
      description: 'Classic Kerala bridal wear with traditional motifs',
      price: 38000,
      isFavorite: false,
      category: 'kerala'
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
          wishlistItem.id === item.id && wishlistItem.collection === 'bride'
        )
      }))
    );
  }, []);

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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Bridal Outfit Heritage</h1>
        <p style={styles.headerDescription}>Explore traditional bridal wear from different states of India</p>
      </div>

      <div style={styles.categoryButtons}>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'all' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'bengali' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('bengali')}
        >
          Bengali
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'jammu' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('jammu')}
        >
          Jammu & Kashmir
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'assamese' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('assamese')}
        >
          Assamese
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'telugu' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('telugu')}
        >
          Telugu
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'tamil' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('tamil')}
        >
          Tamil
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'rajasthani' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('rajasthani')}
        >
          Rajasthani
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'punjabi' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('punjabi')}
        >
          Punjabi
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'pahadi' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('pahadi')}
        >
          Pahadi
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'odia' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('odia')}
        >
          Odia
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'marathi' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('marathi')}
        >
          Marathi
        </button>
        <button
          style={{ ...styles.button, ...(selectedCategory === 'kerala' ? styles.activeButton : {}) }}
          onClick={() => setSelectedCategory('kerala')}
        >
          Kerala
        </button>
      </div>

      <div style={styles.grid}>
        {filteredItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <div style={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.title} 
                onClick={() => handleImageClick(item.image)}
                style={styles.image}
              />
              <button
                style={styles.favoriteButton}
                onClick={() => toggleFavorite(item.id)}
              >
                {item.isFavorite ? (
                  <FaHeart style={styles.favoriteIcon} />
                ) : (
                  <FaRegHeart style={styles.favoriteIcon} />
                )}
              </button>
            </div>
            <div style={styles.info}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
              <p style={styles.price}>₹{item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.fullImageOverlay} onClick={closeFullImage}>
          <div style={styles.fullImageContainer}>
            <button style={styles.closeButton} onClick={closeFullImage}>
              <IoMdClose />
            </button>
            <img src={selectedImage} alt="Full size" style={styles.fullImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Heritage; 