import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; 

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 flex justify-center items-center">
      <div className="container w-full md:w-[80%] py-4 px-4 flex flex-col justify-center md:flex-row md:justify-between items-center md:border-t-2 md:border-b-2 border-slate-500 overflow-hidden  ">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O-lkHZh5JqjTONAG7GLS9JDDq9ulXy8So3ojZRhYAWq015ZKkfeUBHJ5NDS0vhVo3-uSUZRD7jeb5qG3oCXxMtRS10ZkK3dRWIZjN7y7YXXFlivTs7WP67ELBoVtkuyfymL9Tq9OxkBW8j3Bu2~Uvn0fg8y7MvumygZQsgd-MNTQFCzKwIIgO5eT0ECJnsrItqp8UMctopelJ2pwPaD9GVS4zRYqk34G~h4mDt2djmOMoRkopgD2KkmLzWypqdHeqmv79X37OxaakXHj9x1rfQJ-HLiXqBZrcQkzaLTgNN9cMDRJvKysq1qBxk-~19uPVfkIKT49SFQFuTgt-peTsw__"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-2">&copy; R Singhania</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-6 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold mb-2">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold mb-2">Terms</h2>
            <ul>
              <li><a href="#" className="hover:underline">Data privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold mb-2">Related</h2>
            <ul>
              <li><a href="#" className="hover:underline">Find Buyer</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 justify-center md:justify-end">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2"><i className="fab fa-linkedin fa-lg"></i></a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2"><i className="fab fa-facebook fa-lg"></i></a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2"><i className="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
