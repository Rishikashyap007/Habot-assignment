import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="md:h-20 flex items-center justify-between px-4 border-b border-gray-300 bg-white shadow-md">
            <div className="flex items-center">
                <img
                    src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O-lkHZh5JqjTONAG7GLS9JDDq9ulXy8So3ojZRhYAWq015ZKkfeUBHJ5NDS0vhVo3-uSUZRD7jeb5qG3oCXxMtRS10ZkK3dRWIZjN7y7YXXFlivTs7WP67ELBoVtkuyfymL9Tq9OxkBW8j3Bu2~Uvn0fg8y7MvumygZQsgd-MNTQFCzKwIIgO5eT0ECJnsrItqp8UMctopelJ2pwPaD9GVS4zRYqk34G~h4mDt2djmOMoRkopgD2KkmLzWypqdHeqmv79X37OxaakXHj9x1rfQJ-HLiXqBZrcQkzaLTgNN9cMDRJvKysq1qBxk-~19uPVfkIKT49SFQFuTgt-peTsw__"
                    alt="Logo"
                    className="h-16 w-auto"
                />
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div className={`fixed top-0 right-0 h-full bg-blue-50 p-8 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex md:items-center md:space-x-4 shadow-lg md:shadow-none `}>
                <button onClick={closeMenu} className="mb-4 md:hidden focus:outline-none">
                    <svg
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <a href="#find-suppliers" className="block text-gray-700 font-bold hover:text-blue-500 mb-4 md:mb-0 md:ml-4">
                    Find Suppliers
                </a>
                <div className="relative block mb-4 md:mb-0 md:ml-4">
                    <button className="text-gray-700 font-bold hover:text-blue-500">Find Service Tags</button>
                </div>
                <button className="block w-full text-center px-4 py-2 text-green-700 font-bold border border-green-700 rounded hover:bg-green-700 hover:text-white md:w-auto md:ml-4">
                    Login / Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
