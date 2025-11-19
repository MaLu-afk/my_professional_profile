export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Acerca de Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información Personal */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Información Personal</h3>
            <p className="text-lg mb-4">
              <strong>Nombre completo:</strong> [Tu Nombre Completo]
            </p>
            <p className="text-gray-700 mb-6">
              [Breve descripción del propósito del portafolio - Ej: "Este portafolio muestra 
              mi crecimiento profesional en Ingeniería Informática, destacando proyectos 
              académicos y competencias desarrolladas durante mi formación universitaria."]
            </p>
            
            {/* Plan de Carrera */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Plan de Carrera</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>[Objetivo profesional 1]</li>
                <li>[Objetivo profesional 2]</li>
                <li>[Áreas de especialización]</li>
              </ul>
            </div>
          </div>
          
          {/* Pasatiempos */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pasatiempos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <span className="font-medium">[Pasatiempo 1]</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <span className="font-medium">[Pasatiempo 2]</span>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <span className="font-medium">[Pasatiempo 3]</span>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <span className="font-medium">[Pasatiempo 4]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}