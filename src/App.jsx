import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

const siteLinks = {
  resumeUrl: '',
  reelUrl: '',
  contactEmail: '',
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const publishedProjects = projects.filter((project) => project.published)
  const featuredProjects = publishedProjects.filter((project) => project.featured)

  if (pathname.startsWith('/projects/')) {
    const slug = decodeURIComponent(pathname.replace('/projects/', ''))
    const project = publishedProjects.find((item) => item.slug === slug)

    return <ProjectDetailPage project={project} />
  }

  return <HomePage projects={featuredProjects} />
}

function HomePage({ projects }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <p className="eyebrow">VFX / Animation Technical Director</p>
        <h1>Peter Hill</h1>
        <p>
          Building practical workflows, tools, and visuals for animation and VFX
          productions.
        </p>
        <nav aria-label="Primary">
          <ul className="inline-links">
            <li>
              <HeaderLink
                href={siteLinks.resumeUrl}
                label="Resume"
                todoText="TODO: Add resume URL"
              />
            </li>
            <li>
              <HeaderLink
                href={siteLinks.contactEmail && `mailto:${siteLinks.contactEmail}`}
                label="Contact"
                todoText="TODO: Add contact email"
              />
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section aria-labelledby="reel-heading" className="section">
          <h2 id="reel-heading">Demo Reel</h2>
          <div className="reel-panel">
            <p>
              Add your reel link or embedded video here. Keep autoplay disabled and
              sound off by default.
            </p>
            <HeaderLink
              href={siteLinks.reelUrl}
              label="Watch reel"
              todoText="TODO: Add demo reel URL"
            />
          </div>
        </section>

        <section aria-labelledby="featured-heading" className="section">
          <h2 id="featured-heading">Featured Work</h2>
          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p>
              No featured projects yet. Set a published project&apos;s featured field
              to true.
            </p>
          )}
        </section>

        <section aria-labelledby="about-heading" className="section">
          <h2 id="about-heading">About</h2>
          <p>
            I&apos;m a VFX/Animation Technical Director focused on reliable pipelines,
            artist-friendly tooling, and clear visual communication.
          </p>
          <p>
            TODO: Add your approved short bio, location, and the type of roles you are
            targeting.
          </p>
        </section>

        <section aria-labelledby="contact-heading" className="section">
          <h2 id="contact-heading">Contact</h2>
          <p>
            Recruiters and collaborators can reach out directly:
            <br />
            <HeaderLink
              href={siteLinks.contactEmail && `mailto:${siteLinks.contactEmail}`}
              label={siteLinks.contactEmail || 'TODO: Add contact email'}
              todoText="TODO: Add contact email"
            />
          </p>
        </section>
      </main>
    </>
  )
}

function ProjectDetailPage({ project }) {
  if (!project) {
    return (
      <main className="section">
        <h1>Project not found</h1>
        <p>
          This project is missing or unpublished. Make sure published is true in
          src/data/projects.js.
        </p>
        <a className="text-link" href="/">
          Back to home
        </a>
      </main>
    )
  }

  return (
    <main className="section project-page">
      <a className="text-link" href="/">
        ← Back to home
      </a>
      <h1>{project.title}</h1>
      <p className="project-meta">
        <span>{project.year}</span>
        <span aria-hidden="true">•</span>
        <span>{project.category}</span>
        <span aria-hidden="true">•</span>
        <span>{project.role}</span>
      </p>
      <p>{project.description}</p>

      <section aria-labelledby="tools-heading">
        <h2 id="tools-heading">Tools</h2>
        <ul className="tag-list">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="media-heading">
        <h2 id="media-heading">Media</h2>
        <div className="media-grid">
          {project.media.map((item) => (
            <figure key={`${item.type}-${item.src}`} className="media-card">
              {item.type === 'video' ? (
                <video controls preload="metadata" aria-label={item.alt}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="credits-heading">
        <h2 id="credits-heading">Credits</h2>
        <ul>
          {project.credits.map((credit) => (
            <li key={`${credit.label}-${credit.name}`}>
              <strong>{credit.label}:</strong> {credit.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

function HeaderLink({ href, label, todoText }) {
  if (!href) {
    return <span className="todo">{todoText || label}</span>
  }

  return (
    <a className="text-link" href={href}>
      {label}
    </a>
  )
}

export default App
