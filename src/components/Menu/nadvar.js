// Navbar.js
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; // Import icons from Lucide
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <nav className="bg-amber-800 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">Parroquia San Francisco de Asís</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsCertificateOpen(!isCertificateOpen)}
                  className="flex items-center hover:bg-amber-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Certificados
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCertificateOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/certificado-bautismal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 transition duration-150 ease-in-out" role="menuitem">Certificado Bautismal</Link>
                      <Link to="/certificado-matrimonio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 transition duration-150 ease-in-out" role="menuitem">Certificado de Matrimonio</Link>
                      <Link to="/certificado-confirmacion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 transition duration-150 ease-in-out" role="menuitem">Certificado de Confirmación</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/Auth_page" className="hover:bg-amber-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Iniciar Sesión</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-200 hover:text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-150 ease-in-out"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/certificados" className="hover:bg-amber-700 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">Certificados</Link>
            <Link to="/login" className="hover:bg-amber-700 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">Iniciar Sesión</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
