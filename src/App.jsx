import { projects } from './data/projects'
import AboutPage from './pages/AboutPage'
import DemoReelPage from './pages/DemoReelPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ResumePage from './pages/ResumePage'

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const publishedProjects = projects.filter((project) => project.published)
  const featuredProjects = publishedProjects.filter((project) => project.featured)

  if (pathname.startsWith('/projects/')) {
    const slug = decodeURIComponent(pathname.replace('/projects/', ''))
    const project = publishedProjects.find((item) => item.slug === slug)
    return <ProjectDetailPage project={project} />
  }

  if (pathname === '/portfolio') return <PortfolioPage projects={publishedProjects} />
  if (pathname === '/demo-reel') return <DemoReelPage />
  if (pathname === '/resume') return <ResumePage />
  if (pathname === '/about') return <AboutPage />

  return <HomePage projects={featuredProjects.slice(0, 1)} />
}

export default App
