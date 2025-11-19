// src/components/Projects/Projects.tsx
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  image?: string
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "[Nombre Proyecto 1]",
      description: "[Descripción detallada del proyecto, tecnologías usadas y objetivos]",
      technologies: ["React", "TypeScript", "Node.js"],
      githubUrl: "[enlace-github]"
    },
    // ... mínimo 3 proyectos
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos Académicos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-blue-600 hover:text-blue-800 font-medium">
                    Ver en GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}