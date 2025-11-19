import { Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 from-blue-50 via-white to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        {/* Avatar/Foto Profesional */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-lg">
          {/* Reemplaza con tu foto */}
          <div className="w-full h-full from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
            Tu Foto
          </div>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hola, soy <span className="text-blue-600">[Tu Nombre]</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Estudiante de <span className="font-semibold text-blue-500">Ingeniería Informática</span> 
          {' '}apasionado por el desarrollo de software, la innovación tecnológica y la creación 
          de soluciones que impacten positivamente en la sociedad.
        </p>

        {/* Estadísticas rápidas */}
        <div className="flex justify-center gap-8 mb-12 text-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">3+</div>
            <div className="text-sm">Proyectos Destacados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2+</div>
            <div className="text-sm">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">5+</div>
            <div className="text-sm">Tecnologías Dominadas</div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Ver Mis Proyectos
            <ArrowRight size={20} />
          </a>
          
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2">
            Descargar CV
            <Download size={20} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a 
            href="#about" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Conoce más</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};