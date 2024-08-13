import React from 'react';

import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="bg-blue-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="/admin" className="text-2xl font-bold text-white">Employee Management</a>
            </div>
            <div className="hidden md:flex md:space-x-8 md:ml-10">
              <a href="/admin" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</a>
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700" ><Link to={'/getEmployee'}>Employee list  </Link></a>
              <a href="/departments" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Departments</a>
              <a href="/reports" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Reports</a>
            </div>
          </div>
         
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
