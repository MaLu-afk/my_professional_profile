// src/components/Annexes/Annexes.tsx
export const Annexes = () => {
  return (
    <section id="annexes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Anexos</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonios */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Testimonios</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "[Testimonio de compañero o mentor sobre tu trabajo o habilidades]"
                </p>
                <p className="font-medium">- [Nombre del compañero/mentor]</p>
              </div>
              {/* Agregar más testimonios si los tienes */}
            </div>
          </div>
          
          {/* Reconocimientos */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Reconocimientos Adicionales</h3>
            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-lg">
                <strong>[Reconocimiento 1]</strong> - [Descripción breve]
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                <strong>[Reconocimiento 2]</strong> - [Descripción breve]
              </li>
              {/* Agregar más reconocimientos */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}