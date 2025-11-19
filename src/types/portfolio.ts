export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
}

export interface Certification {
  name: string
  institution: string
  year: number
  url?: string
}

export interface Testimonial {
  id: number
  text: string
  author: string
  position: string
}