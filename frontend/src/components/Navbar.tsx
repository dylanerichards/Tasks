// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full h-16 z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white text-xl font-bold">
          <Link to="/">Tasks</Link>
        </div>
        <Link to="/tasks/new" className="text-white hover:text-gray-300 ml-3">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            New Task +
    </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
