export default function ProjectDetailPage({ project }) {
  if (!project) {
    return (
      <main className="section">
        <h1>Project not found</h1>
        <p>This project is missing or unpublished. Make sure published is true in the project data.</p>
        <a className="text-link" href="/">Back to home</a>
      </main>
    )
  }

  return (
    <main className="section project-page">
      <div className="project-back">
        <a className="text-link" href="/"><span aria-hidden="true">←</span> Back to home</a>
        <p className="section-number">PROJECT / {project.year}</p>
      </div>
      <h1>{project.title}</h1>
      <p className="project-meta"><span>{project.year}</span><span aria-hidden="true">•</span><span>{project.category}</span><span aria-hidden="true">•</span><span>{project.role}</span></p>
      <div className="project-overview">
        <div className="project-description">
          <p className="section-number">ABOUT THE PROJECT</p>
          {project.description.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <section aria-labelledby="tools-heading" className="project-tools">
          <p className="section-number">SOFTWARE</p>
          <h2 id="tools-heading">Tools</h2>
          <ul className="tag-list">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </section>
      </div>
      <section aria-labelledby="media-heading">
        <div className="media-heading">
          <div><p className="section-number">PROJECT MEDIA</p><h2 id="media-heading">The work</h2></div>
          <p className="media-heading-note">Finals, breakdowns &amp; process</p>
        </div>
        <div className="media-feed">
          {project.media.map((item, index) => (
            <figure key={`${item.type}-${item.src}`} className={`media-card ${item.type === 'embed' ? 'media-card-video' : 'media-card-still'}`}>
              {item.type === 'embed' ? (
                <iframe src={item.src} title={item.alt} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              ) : item.type === 'video' ? (
                <video controls preload="metadata" aria-label={item.alt}><source src={item.src} type="video/mp4" />Your browser does not support the video tag.</video>
              ) : <img src={item.src} alt={item.alt} loading="lazy" />}
              <figcaption><span className="media-index">{String(index + 1).padStart(2, '0')}</span><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section aria-labelledby="credits-heading">
        <h2 id="credits-heading">Credits</h2>
        <ul>
          {project.credits.map((credit) => <li key={`${credit.label}-${credit.name}`}><strong>{credit.label}:</strong>{' '}{credit.url ? <a className="text-link" href={credit.url} target="_blank" rel="noreferrer">{credit.name}</a> : credit.name}</li>)}
        </ul>
      </section>
    </main>
  )
}
