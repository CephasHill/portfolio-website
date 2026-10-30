import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import PageShell from '../components/PageShell'

const projectTypes = ['All', 'VFX / TD', 'Game Programming', 'Training Videos', '2D Animation', 'Software']

export default function PortfolioPage({ projects }) {
  const [activeType, setActiveType] = useState('All')
  const visibleProjects = activeType === 'All' ? projects : projects.filter((project) => project.type === activeType)

  return (
    <PageShell eyebrow="02 / Selected work" title="Portfolio">
      <section className="section portfolio-section" aria-labelledby="portfolio-heading">
        <div className="section-heading section-heading-row">
          <div><p className="section-number">BROWSE BY DISCIPLINE</p><h2 id="portfolio-heading">All projects</h2></div>
          <span className="section-aside">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
        </div>
        <nav className="project-filters" aria-label="Filter projects by type">
          {projectTypes.map((type) => <button key={type} className={activeType === type ? 'active' : ''} type="button" aria-pressed={activeType === type} onClick={() => setActiveType(type)}>{type}</button>)}
        </nav>
        {visibleProjects.length > 0 ? <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p>No projects in this category yet.</p>}
      </section>
    </PageShell>
  )
}
