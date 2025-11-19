// src/components/Professional/Professional.tsx
export const Professional = () => {
  return (
    <section id="professional" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Desarrollo Profesional</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* CV */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Currículum Vitae</h3>
            <p className="mb-4">CV actualizado para posiciones en Ingeniería Informática</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Descargar CV (PDF)
            </button>
          </div>
          
          {/* LinkedIn */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">LinkedIn</h3>
            <p className="mb-4">Perfil profesional optimizado</p>
            <a href="[tu-linkedin]" className="text-blue-600 hover:text-blue-800 font-medium">
              Ver perfil de LinkedIn →
            </a>
          </div>
          
          {/* Certificaciones */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Certificaciones</h3>
            <ul className="space-y-2">
              <li>• [Certificación 1]</li>
              <li>• [Certificación 2]</li>
              <li>• [Certificación 3]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}