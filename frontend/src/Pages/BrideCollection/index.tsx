import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BrideCollection = () => {
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
      <h1 className="text-3xl font-bold mb-12 text-amber-800">Bride Collection</h1>
      
      {/* Main Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Bridal Wear */}
        {renderCategoryCard(
          'images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear5.jpg',
          'Bridal Wear', 
          'Exclusive collection of designer bridal lehengas and sarees',
          '/bride-collection/wear'
        )}

        {/* Bridal Accessories */}
        {renderCategoryCard(
          'images/bridal_collection/Bridal Accessories/bridal_accessory5.jpg',
          'Bridal Accessories',
          'Complete your bridal look with our stunning accessories',
          '/bride-collection/accessories'
        )}

        {/* Bridal Mehendi */}
        {renderCategoryCard(
          'images/bridal_collection/bridal_mehendi/bridal16.jpg',
          'Bridal Mehendi',
          'Traditional and contemporary mehendi designs',
          '/bride-collection/mehendi'
        )}

        {/* Bridal Footwear */}
        {renderCategoryCard(
          'images/bridal_collection/bridal_footwears/bridal_footwear1.jpg',
          'Bridal Footwear',
          'Designer footwear for your special day',
          '/bride-collection/footwear'
        )}

        
        {/* Bridal Outfit Heritage */}
        {renderCategoryCard(
          'images/bridal_collection/bridal_wear/bridal_state_wear/bengali/bengali7.jpg',
          'Bridal Outfit Heritage',
          'Explore traditional bridal wear from different states of India',
          '/bride-collection/heritage'
        )}
      </div>
    </div>
  );
};

export default BrideCollection; 