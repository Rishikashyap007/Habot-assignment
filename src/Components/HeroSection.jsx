import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const SupplierSearch = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2UxfnY58deGNulF4vJl83oTTTZS28rmChiUyqtpiF5AHzxD-o3qp3hK0DQH9fHppSd1uagHm9Z3O~s3UgniuwdiegAmaH4uXv5e1keDCq~Ta~SrJJc-H7LtLImtK6JmDSPiHq6KNpGBA~ouXn8Z6OqzjXnL6S6~CIeRcRiJaETe5OU51H1C~XzO-uXsTYsF-0lYRn7v8QC9PHwEozWD5LCCvkzVQcrncw0WdvIuIs2eBYu3Ka42uWrWvPceGXQL5RJcaApAwXQmKbEvfN3iSTXmtuWCahggwMD99OY5zZkKScztw7RJSvwTwoK3Odqepl-Vp-mDZlcgxkZH4B37IA__')]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-transparent to-blue-800 opacity-500"></div>
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
