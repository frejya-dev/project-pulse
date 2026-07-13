function ProjectRow({ project }) {
  return (
    <article className="project-row">
      <div className="project-main">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <strong>{project.progress}%</strong>
        </div>

        <div className="project-details">
          <span>{project.category}</span>
          <span>{project.priority} priority</span>

          <span
            className={
              project.status === "Delayed"
                ? "project-status delayed"
                : "project-status"
            }
          >
            {project.status}
          </span>
        </div>

        <div className="progress-track project-progress">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
    </article>
  );
}

export default ProjectRow;