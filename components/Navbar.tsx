'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold text-blue-600">
              IA-Profe Fácil
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/dashboard" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/modulos" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith('/modulos') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Módulos
            </Link>
            <Link 
              href="/caja-de-herramientas" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/caja-de-herramientas' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mi Caja de Herramientas
            </Link>
            <Link 
              href="/perfil" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/perfil' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Perfil
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Dashboard</Link>
              <Link href="/modulos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Módulos</Link>
              <Link href="/caja-de-herramientas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Mi Caja de Herramientas</Link>
              <Link href="/perfil" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Perfil</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; // <-- ¡ESTA LÍNEA ESENCIAL!