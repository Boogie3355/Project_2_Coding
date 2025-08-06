import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              CareerPath.AI
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/assessment" className="text-gray-700 hover:text-blue-500">
              Career Assessment
            </Link>
            <Link to="/career-path" className="text-gray-700 hover:text-blue-500">
              Career Path
            </Link>
            <Link to="/practice" className="text-gray-700 hover:text-blue-500">
              Practice
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 