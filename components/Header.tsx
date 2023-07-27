import React from 'react';

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/reshot-icon-clock-document-QXNHG5Y3LD.svg" // Provide the relative path to your SVG file here
            alt="Logo"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          />
          <span className="ml-3 text-xl">DocSign</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* Your navigation links go here */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
