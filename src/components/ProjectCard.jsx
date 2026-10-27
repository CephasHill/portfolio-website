export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-card-link" href={`/projects/${project.slug}`}>
        {project.thumbnail ? (
          <div className="project-preview">
            <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" />
            <span className="project-preview-label">View project <span aria-hidden="true">↗</span></span>
          </div>
        ) : (
          <div className="project-preview project-preview-empty">
            <span>No preview image</span>
          </div>
        )}
        <div className="project-card-content">
          <div className="project-card-topline">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      </a>
    </article>
  )
}
