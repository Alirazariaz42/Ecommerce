import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">MyShop</h2>
          <p className="text-sm">
            Your one-stop destination for electronics, fashion, and more. Shop
            with confidence and enjoy fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-400 transition">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/category/electronics"
                className="hover:text-yellow-400 transition"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                to="/category/fashion"
                className="hover:text-yellow-400 transition"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/category/groceries"
                className="hover:text-yellow-400 transition"
              >
                Groceries
              </Link>
            </li>
            <li>
              <Link
                to="/category/home"
                className="hover:text-yellow-400 transition"
              >
                Home & Living
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-yellow-400" />
            support@myshop.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone className="w-4 h-4 text-yellow-400" />
            +92 300 1234567
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};
