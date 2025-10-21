import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-yellow-400">
            MyShop
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="hover:text-yellow-400 transition">
              Home
            </NavLink>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCategory}
                className="hover:text-yellow-400 transition flex items-center gap-1"
              >
                Categories
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isCategoryOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCategoryOpen && (
                <div className="absolute top-10 left-0 bg-white text-gray-800 rounded-lg shadow-lg w-40 py-2 z-50">
                  <Link
                    to="/category/electronics"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/category/fashion"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fashion
                  </Link>
                  <Link
                    to="/category/groceries"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Groceries
                  </Link>
                  <Link
                    to="/category/home"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Home & Living
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/register" className="hover:text-yellow-400 transition">
              Register
            </NavLink>
            <NavLink to="/login" className="hover:text-yellow-400 transition">
              Login
            </NavLink>

            <NavLink to="/cart" className="hover:text-yellow-400 transition flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </NavLink>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link to="/" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>
            Home
          </Link>

          {/* Mobile Categories */}
          <div>
            <button
              onClick={toggleCategory}
              className="flex items-center justify-between w-full py-2 hover:text-yellow-400"
            >
              Categories
              <svg
                className={`w-4 h-4 transition-transform ${
                  isCategoryOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="pl-4 text-gray-300">
                <Link
                  to="/category/electronics"
                  className="block py-1 hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Electronics
                </Link>
                <Link
                  to="/category/fashion"
                  className="block py-1 hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Fashion
                </Link>
                <Link
                  to="/category/groceries"
                  className="block py-1 hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Groceries
                </Link>
                <Link
                  to="/category/home"
                  className="block py-1 hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Home & Living
                </Link>
              </div>
            )}
          </div>

          <Link to="/register" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>
            Register
          </Link>
          <Link to="/login" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>
            Login
          </Link>
          <Link to="/cart" className="block py-2 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};
