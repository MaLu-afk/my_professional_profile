// src/components/Header/Header.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de Mí', href: '#about' },
    { name: 'Desarrollo Profesional', href: '#professional' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Competencias', href: '#skills' },
    { name: 'Anexos', href: '#annexes' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            MiPortafolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};