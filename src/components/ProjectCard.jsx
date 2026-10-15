export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p className="project-meta">
        <span>{project.year}</span>
        <span aria-hidden="true">•</span>
        <span>{project.category}</span>
      </p>
      <p>{project.description}</p>
      <p>
        <strong>Role:</strong> {project.role}
      </p>
      <a className="text-link" href={`/projects/${project.slug}`}>
        View project details
      </a>
    </article>
  )
}
