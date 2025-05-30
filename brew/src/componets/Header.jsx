import logo from '../pics/logo.png'
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-blue-600 shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center hover:cursor-pointer"
          >
            <img src={logo} alt="brew logo" className='w-auto h-[90px]'/>
            <span className="ml-2 text-2xl font-bold text-white tracking-wide drop-shadow-md">Brew</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="Drinks" smooth={true} duration={500} className="text-white hover:text-yellow-300 font-medium capitalize">Drinks</Link>
          <Link to="Desserts" smooth={true} duration={500} className="text-white hover:text-yellow-300 font-medium capitalize">Season</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-6 py-4 space-y-4">
          <Link onClick={() => setIsOpen(false)} to="Drinks" smooth={true} duration={500} className="block text-white hover:text-yellow-300 font-medium capitalize">Drinks</Link>
          <Link onClick={() => setIsOpen(false)} to="Desserts" smooth={true} duration={500} className="block text-white hover:text-yellow-300 font-medium capitalize">Season</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
