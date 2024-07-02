import React from 'react';

const BuyerSupplierInfo = () => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <div className="bg-blue-950 text-white p-4 md:p-8 max-w-6xl mx-auto md:rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 justify-start items-center">
            <div className="w-full md:w-[623px]">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2909/031e/3307f64812ef70cd9d8e886864fad468?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGol2umGb7O0fI-68nFoEgmez4Udcb5Q42C5jrXYU-N-01ZcbtLkGYBQa3TSFpjEadqpL0tE9B1mTkcEjK~K0WHCZw0Xwkl9dYfwRhw8XASWNm6HZTvT2i~WhS91MRCzGGv-Rv~16MmO71WE9dckuklLxS72KouKfTxNgYr3bTghpqgnzEdCv5E6tptPvQMch6-JdRrJFKgliTZdO771wNhZ82vgMNGzhFpaEcgsiGz3KLUNfkwo7eXTDW9QuOp-O5Kc288Bl38dpe9PzOw7bjivjXb093w7sJu5dglwpTtUdFs7MD-W43Fsq7o0BdSXMyv8VY2bmhUYdk0-Y1~cnw__"
                  alt="Requirements listing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex mb-4 items-center rounded-2xl overflow-hidden">
                <div className="text-orange-400 text-md md:text-2xl font-semibold mr-8">Buyer</div>
                <div className="text-gray-400 text-md md:text-2xl">Supplier</div>
              </div>
              <ul className="space-y-2 text-md md:text-xl">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Post your requirements.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sit back for multiple suppliers to contact you.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Choose among the suppliers based on the ratings and reviews.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 md:p-8 flex flex-col md:flex-row justify-around items-center h-full md:h-[256px]">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold relative flex gap-2 items-center md:items-start">
              <span>Let Suppliers</span>
              <span className="relative inline-block">
                <span>Find You</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400"></span>
              </span>
            </h1>
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors">
            Get Verified
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyerSupplierInfo;
