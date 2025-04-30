import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GroomCollection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCategoryCard = (
    image: string,
    title: string,
    description: string,
    path: string
  ) => (
    <div 
      className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg shadow-md border border-amber-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-amber-800">{title}</h3>
        <p className="text-amber-700 mb-4">{description}</p>
        <div className="flex justify-end items-center">
          <button 
            className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 shadow-md border border-amber-400"
            onClick={(e) => {
              e.stopPropagation();
              navigate(path);
            }}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="text-4xl font-bold mb-12 text-amber-800 text-center font-playfair">Groom Collection</h1>
      
      {/* Main Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Groom Wear */}
        {renderCategoryCard(
          '/images/groom_collection/groom_wear/groom_sangeet_wear/groom_sangeet16.jpg',
          'Groom Wear', 
          'Exclusive collection of designer sherwanis and suits',
          '/groom-collection/wear'
        )}

        {/* Groom Accessories */}
        {renderCategoryCard(
          '/images/groom_collection/groom accessories/groom_watches3.jpg',
          'Groom Accessories',
          'Complete your groom look with our stunning accessories',
          '/groom-collection/accessories'
        )}

        {/* Groom Mehendi */}
        {renderCategoryCard(
          '/images/groom_collection/groom_mehendi/groom_mehendi19.jpg',
          'Groom Mehendi',
          'Exclusive mehendi designs for the modern groom',
          '/groom-collection/mehendi'
        )}

        {/* Groom Footwear */}
        {renderCategoryCard(
          '/images/groom_collection/groom_footwear/groom_traditional4.jpg',
          'Groom Footwear',
          'Designer footwear for your special day',
          '/groom-collection/footwear'
        )}

        {/* Groom Outfit Heritage */}
        {renderCategoryCard(
          '/images/groom_collection/groom_state_wear/RAJASTHANI/rajasthani14.jpg',
          'Groom Outfit Heritage',
          'Explore traditional groom wear from different states of India',
          '/groom-collection/heritage'
        )}
      </div>
    </div>
  );
};

export default GroomCollection; 