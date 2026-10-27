import { siteLinks } from '../data/siteLinks'

export function HeaderLink({ href, label, todoText }) {
  if (!href) return <span className="todo">{todoText || label}</span>
  return <a className="text-link" href={href}>{label}</a>
}

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social profiles">
      <a href={siteLinks.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href={siteLinks.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </nav>
  )
}

export function SiteHeader() {
  return (
    <header className="page-header">
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
    </header>
  )
}

export default function PageShell({ eyebrow, title, children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <div className="page-title page-title-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <main id="main-content">{children}</main>
    </>
  )
}
