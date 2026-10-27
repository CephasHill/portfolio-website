export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.thumbnail && (
        <div className="project-preview">
          <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" />
          <span className="project-preview-label">Featured project</span>
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-topline">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Role:</strong> {project.role}
      </p>
        <a className="card-link" href={`/projects/${project.slug}`}>
          <span>View project details</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
