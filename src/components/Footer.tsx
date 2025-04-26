
import { Link } from 'react-router-dom';
import { Package, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">CampusDash</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Campus deliveries made simple. The fastest way to get food, groceries, and packages delivered on campus.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-base text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/services/food-delivery" className="text-base text-gray-400 hover:text-white">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link to="/services/package-pickup" className="text-base text-gray-400 hover:text-white">
                  Package Pickup
                </Link>
              </li>
              <li>
                <Link to="/services/grocery-delivery" className="text-base text-gray-400 hover:text-white">
                  Grocery Delivery
                </Link>
              </li>
              <li>
                <Link to="/become-courier" className="text-base text-gray-400 hover:text-white">
                  Become a Courier
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-base text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CampusDash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
