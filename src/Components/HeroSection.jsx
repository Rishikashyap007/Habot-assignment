import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const SupplierSearch = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl">Are You a Supplier?</h1>
        <p className="mb-8 text-xl text-center">Explore Matching Opportunities.</p>

        <div className="w-full max-w-3xl space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
          <div className="relative w-full">
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"></i>
            <input
              type="text"
              placeholder="Search your required service here"
              className="w-full pl-10 pr-4 py-2 text-black rounded-md sm:flex-1"
            />
          </div>
          <div className="relative w-full">
            <i className="fa-solid fa-location-pin absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"></i>
            <input
              type="text"
              placeholder="Search your desired location here"
              className="w-full pl-10 pr-4 py-2 text-black rounded-md sm:flex-1"
            />
          </div>
          <button className="w-full px-6 py-2 font-semibold text-white bg-green-500 rounded-md sm:w-auto hover:bg-green-600">
            Search
          </button>
        </div>

        <p className="mt-8 text-sm">
          Are you a buyer?{' '}
          <a href="#" className="underline">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
    </div>
  );
};

export default SupplierSearch;
