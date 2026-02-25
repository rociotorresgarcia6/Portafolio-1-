export type ProjectCategory = 'posters' | 'photography' | 'otros'

export interface ProjectItem {
  id: string
  title: string
  category: ProjectCategory
  year: string
  tool: string
  summary: string
  image: string
  featured?: boolean
}

export const projects: ProjectItem[] = [
  {
    id: 'poster-festival',
    title: 'Poster Festival Local',
    category: 'posters',
    year: '2025',
    tool: 'Illustrator + Photoshop',
    summary: 'Serie de carteles para evento cultural con estética tipográfica.',
    image: 'https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'poster-musica',
    title: 'Campaña Música Urbana',
    category: 'posters',
    year: '2025',
    tool: 'Figma + Photoshop',
    summary: 'Sistema visual para promoción de conciertos en redes y calle.',
    image: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'photo-street',
    title: 'Street Portraits',
    category: 'photography',
    year: '2024',
    tool: 'Lightroom + Cámara Mirrorless',
    summary: 'Retratos urbanos con luz natural y edición en tonos cálidos.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'photo-night',
    title: 'Noches en Ciudad',
    category: 'photography',
    year: '2024',
    tool: 'Lightroom',
    summary: 'Serie fotográfica de arquitectura nocturna y movimiento.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'brand-cafe',
    title: 'Identidad de Marca Café',
    category: 'otros',
    year: '2025',
    tool: 'Illustrator + InDesign',
    summary: 'Naming, logotipo y sistema de piezas para una marca local.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'ui-app',
    title: 'UI App de Eventos',
    category: 'otros',
    year: '2025',
    tool: 'Figma',
    summary: 'Prototipo de interfaz móvil para agenda de eventos culturales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category)

export const findProjectById = (id: string) =>
  projects.find((project) => project.id === id)
