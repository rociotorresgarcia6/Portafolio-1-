export type ProjectCategory = 'posters' | 'photography' | 'branding-identity'

export interface ProjectItem {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel?: string
  year: string
  tool: string
  summary: string
  image: string
  featured?: boolean
}

export interface ProjectCategoryItem {
  id: ProjectCategory
  title: string
  description: string
  path: string
}

export const projectCategories: ProjectCategoryItem[] = [
  {
    id: 'photography',
    title: 'Photography',
    description: 'Retrato, calle y series visuales con edicion editorial.',
    path: '/projects/photography',
  },
  {
    id: 'posters',
    title: 'Posters',
    description: 'Carteleria experimental para musica, eventos y cultura visual.',
    path: '/projects/posters',
  },
  {
    id: 'branding-identity',
    title: 'Branding and Identity',
    description: 'Sistemas de marca, logotipos y aplicaciones graficas.',
    path: '/projects/branding-identity',
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'street-portraits',
    title: 'Street Portraits',
    category: 'photography',
    year: '2025',
    tool: 'Lightroom + Fujifilm XT-30',
    summary: 'Serie de retratos urbanos con luz dura y contraste alto.',
    image: '/images/OBJ30.png',
  },
  {
    id: 'night-shapes',
    title: 'Night Shapes',
    category: 'photography',
    year: '2024',
    tool: 'Lightroom + Sony A7',
    summary: 'Arquitectura nocturna y movimiento con enfoque cinematografico.',
    image: '/images/OBJ29.png',
  },
  {
    id: 'mediterranean-fashion-week',
    title: 'Mediterranean Fashion Week',
    category: 'photography',
    year: '2025',
    tool: 'Canon + Photoshop + Lightroom',
    summary: "Runway photo session for MFW '25 in Valencia.",
    image: '/images/mfw/mfw4.png',
    featured: true,
  },
  {
    id: 'neon-festival-poster',
    title: 'Neon Festival Poster',
    category: 'posters',
    year: '2025',
    tool: 'Illustrator + Photoshop',
    summary: 'Cartel principal y adaptaciones para campana digital.',
    image: '/images/Parental advisory.PNG',
  },
  {
    id: 'sonic-series',
    title: 'Sonic Series',
    category: 'posters',
    year: '2025',
    tool: 'InDesign + Illustrator',
    summary: 'Sistema modular de carteles para ciclo de conciertos.',
    image: '/images/home/parental-advisory.png',
  },
  {
    id: 'lo-que-nos-jode-nos-une',
    title: 'Lo que nos jode nos une',
    category: 'branding-identity',
    categoryLabel: 'Advertising campaign',
    year: '2025',
    tool: 'Illustrator + Photoshop + Premiere + After Effects + InDesign + Others',
    summary: 'Advertising campaign about relationships between young and older people.',
    image: '/images/lo que nos jode nos une/Mockup_Poster_mockupgratis copia.png',
    featured: true,
  },
  {
    id: 'crefad-2026',
    title: 'CREFAD 2026',
    category: 'branding-identity',
    year: '2025',
    tool: 'Illustrator + Photoshop',
    summary: 'Sistema grafico para congreso iberoamericano y serie de posters.',
    image: '/images/crefad/WhatsApp Image 2025-11-24 at 19.10.51.jpeg',
    featured: true,
  },
  {
    id: 'marea-brand-kit',
    title: 'Marea Brand Kit',
    category: 'branding-identity',
    year: '2025',
    tool: 'Illustrator + Figma',
    summary: 'Identidad visual completa para estudio creativo emergente.',
    image: '/images/OBJ11.png',
  },
  {
    id: 'sola-cafe-identity',
    title: 'Sola Cafe Identity',
    category: 'branding-identity',
    year: '2024',
    tool: 'Illustrator + After Effects',
    summary: 'Logotipo, packaging y piezas de lanzamiento para redes.',
    image: '/images/OBJ17.png',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category)

export const projectsCountByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category).length

export const findProjectById = (id: string) =>
  projects.find((project) => project.id === id)
