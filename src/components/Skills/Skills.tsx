export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Competencias Blandas</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reflexión */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Reflexión Personal</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                [Reflexión profunda sobre habilidades interpersonales desarrolladas durante la carrera. 
                Ej: "Durante mi formación en Ingeniería Informática, he fortalecido mi capacidad de 
                trabajo en equipo mediante proyectos grupales, aprendiendo a comunicarme efectivamente 
                y resolver conflictos de manera constructiva..."]
              </p>
            </div>
          </div>
          
          {/* Ejemplo Práctico */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ejemplo Práctico</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3">Caso: [Nombre del proyecto o situación]</h4>
              <p className="text-gray-700 leading-relaxed">
                [Ejemplo concreto de cómo aplicaste competencias blandas. Ej: "En el proyecto de 
                base de datos del semestre anterior, asumí un rol de liderazgo cuando el equipo 
                enfrentaba dificultades de coordinación. Organicé reuniones de seguimiento y 
                establecí metas claras, lo que resultó en la entrega exitosa del proyecto..."]
              </p>
            </div>
          </div>
        </div>
        
        {/* Habilidades específicas */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Habilidades Desarrolladas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Liderazgo', 'Trabajo en equipo', 'Gestión del tiempo', 'Comunicación', 
              'Resolución de problemas', 'Adaptabilidad', 'Pensamiento crítico', 'Creatividad']
              .map(skill => (
              <div key={skill} className="bg-white p-4 rounded-lg text-center shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}