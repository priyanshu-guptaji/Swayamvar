import React from 'react';
import { useNavigate } from 'react-router';

const PopularSearch = () => {
  const navigate = useNavigate();

  const collections = [
    {
      image: "/images/bridal_collection/bridal_wear/bridal_lehenga/bridalwear9.jpg",
      title: "Bride Collection",
      description: "Explore our exclusive bridal collection",
      path: "/bride-collection"
    },
    {
      image: "/images/groom_collection/groom_wear/groomwear78.jpg",
      title: "Groom Collection",
      description: "Discover premium groom wear",
      path: "/groom-collection"
    }
  ];

  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="text-start font-poppins-[Regular] text-3xl mb-8 text-amber-800 font-semibold">Popular Collections</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((item, i) => (
          <div 
            key={i} 
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300"
            onClick={() => navigate(item.path)}
          >
            <div className="h-[500px] overflow-hidden">
              <img 
                src={item.image} 
                className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110' 
                alt={item.title}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/50 to-transparent flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-amber-100">{item.description}</p>
              <button className="mt-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold transform transition-all duration-300 hover:from-amber-700 hover:to-yellow-600 border border-amber-400 shadow-md">
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSearch;