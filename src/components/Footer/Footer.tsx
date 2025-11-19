// src/components/Footer/Footer.tsx
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <span>tu.email@universidad.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-400" />
                <span>Tu Ciudad, País</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                Acerca de Mí
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Proyectos
              </a>
              <a href="#professional" className="text-gray-300 hover:text-white transition-colors">
                Desarrollo Prof.
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Competencias
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Conectemos</h3>
            <div className="flex space-x-4">
              <a
                href="[tu-linkedin]"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="[tu-github]"
                className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:tu.email@universidad.edu"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} [Tu Nombre]. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>
                Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Información académica */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Portafolio académico para el curso de Desarrollo Profesional 2 - 
            Ingeniería Informática {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};