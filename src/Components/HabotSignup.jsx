import React from 'react';

const HabotSignup = () => {
  const locations = [
    'Abu Dhabi', 'Dubai',
    'Sharjah & Ajman', 'Fujairah',
    'Ras Al Khaimah', 'Umm Al Quwain'
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div className="md:w-1/2 pr-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to dive into <span className="text-indigo-700">HABOT</span>?
        </h1>
        
        <p className="text-sm md:text-base mb-6 max-w-2xl">
          Signing up with HABOT opens the door to a world of new opportunities 
          and potential for business growth. Gain access to a vibrant community 
          of like-minded individuals, unlock valuable resources, and take the first 
          step towards realizing your entrepreneurial dreams.
        </p>
        
        <button className="bg-green-600 text-white px-6 py-2 rounded-md flex items-center mb-8 hover:bg-green-700 transition-colors">
          Sign up Today ! 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
        {locations.map((location, index) => (
          <div key={index} className="border border-orange-300 rounded-md px-8 py-4 text-center hover:bg-gray-100 transition-colors text-md font-medium">
            {location}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabotSignup;
