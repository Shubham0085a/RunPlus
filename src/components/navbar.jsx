import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/product" className="text-white">Product</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;