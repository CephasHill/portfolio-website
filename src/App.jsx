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
        <div className="header-bar">
          <a className="brand-mark" href="/" aria-label="Peter Hill home">
            PH<span>.</span>
          </a>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">VFX / Animation Technical Director</p>
          <h1>Peter Hill</h1>
          <p className="hero-intro">
            I build practical workflows, artist-friendly tools, and visual experiences
            for animation and VFX productions.
          </p>
        </div>
        <nav aria-label="Primary" className="hero-nav">
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
          <span className="scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></span>
        </nav>
      </header>

      <main id="main-content">
        <section aria-labelledby="reel-heading" className="section">
          <div className="section-heading">
            <p className="section-number">01 / INTRO</p>
            <h2 id="reel-heading">Demo Reel</h2>
          </div>
          <div className="reel-panel">
            <div className="reel-icon" aria-hidden="true">▶</div>
            <p className="reel-copy">
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
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-number">02 / SELECTED WORK</p>
              <h2 id="featured-heading">Featured Work</h2>
            </div>
            <span className="section-aside">01 — {String(projects.length).padStart(2, '0')}</span>
          </div>
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
          <div className="section-heading">
            <p className="section-number">03 / APPROACH</p>
            <h2 id="about-heading">About</h2>
          </div>
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
          <div className="section-heading">
            <p className="section-number">04 / NEXT STEP</p>
            <h2 id="contact-heading">Contact</h2>
          </div>
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
      <div className="project-back">
        <a className="text-link" href="/">
          <span aria-hidden="true">←</span> Back to home
        </a>
        <p className="section-number">PROJECT / {project.year}</p>
      </div>
      <h1>{project.title}</h1>
      <p className="project-meta">
        <span>{project.year}</span>
        <span aria-hidden="true">•</span>
        <span>{project.category}</span>
        <span aria-hidden="true">•</span>
        <span>{project.role}</span>
      </p>
      <div className="project-overview">
        <div className="project-description">
          <p className="section-number">ABOUT THE PROJECT</p>
          {project.description.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <section aria-labelledby="tools-heading" className="project-tools">
          <p className="section-number">SOFTWARE</p>
          <h2 id="tools-heading">Tools</h2>
          <ul className="tag-list">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>
      </div>

      <section aria-labelledby="media-heading">
        <div className="media-heading">
          <div>
            <p className="section-number">PROJECT MEDIA</p>
            <h2 id="media-heading">The work</h2>
          </div>
          <p className="media-heading-note">Finals, breakdowns &amp; process</p>
        </div>
        <div className="media-feed">
          {project.media.map((item, index) => (
            <figure
              key={`${item.type}-${item.src}`}
              className={`media-card ${item.type === 'embed' ? 'media-card-video' : 'media-card-still'}`}
            >
              {item.type === 'embed' ? (
                <iframe
                  src={item.src}
                  title={item.alt}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : item.type === 'video' ? (
                <video controls preload="metadata" aria-label={item.alt}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
              <figcaption>
                <span className="media-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="credits-heading">
        <h2 id="credits-heading">Credits</h2>
        <ul>
          {project.credits.map((credit) => (
            <li key={`${credit.label}-${credit.name}`}>
              <strong>{credit.label}:</strong>{' '}
              {credit.url ? (
                <a className="text-link" href={credit.url} target="_blank" rel="noreferrer">
                  {credit.name}
                </a>
              ) : (
                credit.name
              )}
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
