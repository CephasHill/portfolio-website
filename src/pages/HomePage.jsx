import ProjectCard from '../components/ProjectCard'
import { HeaderLink, SocialLinks } from '../components/PageShell'
import { siteLinks } from '../data/siteLinks'

export default function HomePage({ projects }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="header-bar">
          <a className="brand-mark" href="/" aria-label="Peter Hill home">PH<span>.</span></a>
          <nav aria-label="Primary" className="site-nav">
            <a href="/">Home</a>
            <a href="/demo-reel">Demo reel</a>
            <HeaderLink href={siteLinks.resumeUrl || '/resume'} label="Resume" />
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About</a>
          </nav>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">VFX / Animation Technical Director</p>
          <h1>Peter Hill</h1>
          <p className="hero-intro">I build practical workflows, artist-friendly tools, and visual experiences for animation and VFX productions.</p>
          <SocialLinks />
        </div>
        <div className="hero-nav">
          <span className="scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></span>
        </div>
      </header>
      <main id="main-content">
        <section aria-labelledby="featured-heading" className="section">
          <div className="section-heading section-heading-row">
            <div><p className="section-number">FEATURED</p><h2 id="featured-heading">Featured work</h2></div>
            <span className="section-aside">01 — {String(projects.length).padStart(2, '0')}</span>
          </div>
          {projects.length > 0 ? <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p>No featured projects yet.</p>}
        </section>
        <section aria-labelledby="contact-heading" className="section home-contact">
          <div className="section-heading">
            <p className="section-number">CONTACT ME</p>
            <h2 id="contact-heading">Let&apos;s work together</h2>
          </div>
          <p>Recruiters and collaborators can reach out directly:</p>
          <HeaderLink
            href={siteLinks.contactEmail && `mailto:${siteLinks.contactEmail}`}
            label={siteLinks.contactEmail || 'TODO: Add contact email'}
            todoText="TODO: Add contact email"
          />
        </section>
      </main>
    </>
  )
}
