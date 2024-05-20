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
          <div className="md:flex space-x-4 text-white">
            New Task
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
