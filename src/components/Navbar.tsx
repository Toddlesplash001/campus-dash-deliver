
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserCircle, Package, Bike, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">CampusDash</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/become-courier" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Become a Courier
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Login
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/become-courier"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
              onClick={toggleMenu}
            >
              Become a Courier
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-x-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Login
                </Button>
              </div>
              <div className="mt-3 px-3">
                <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
