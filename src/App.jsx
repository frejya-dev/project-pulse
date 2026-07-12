import "./App.css";

const projects = [
  {
    id: 1,
    name: "Downtown Rail Modernization",
    category: "Rail",
    status: "On Schedule",
    priority: "High",
    progress: 68,
  },
  {
    id: 2,
    name: "Harbor Bridge Rehabilitation",
    category: "Bridge",
    status: "Delayed",
    priority: "High",
    progress: 45,
  },
  {
    id: 3,
    name: "Smart Traffic Signal Upgrade",
    category: "Traffic",
    status: "On Schedule",
    priority: "Medium",
    progress: 82,
  },
];

const systemConditions = [
  { name: "Transit Network", status: "Stable" },
  { name: "Bridge Systems", status: "Monitor" },
  { name: "Road Operations", status: "Stable" },
  { name: "Utility Assets", status: "Stable" },
];

function App() {
  return (
    <div className="app">
      <div className="status-bar">
        <span>Project Pulse</span>

        <div className="system-status">
          <span className="status-dot"></span>
          System operational
        </div>
      </div>

      <main className="dashboard">
        <header className="dashboard-header">
          <p className="eyebrow">Operations Overview</p>
          <h1>Infrastructure Operations</h1>
          <p className="dashboard-intro">
            Monitor active projects, delivery performance, system conditions,
            and operational alerts.
          </p>
        </header>

        <section className="overview-grid">
          <article className="overview-panel">
            <div className="section-heading">
              <div>
                <p className="section-label">Network overview</p>
                <h2>Current performance</h2>
              </div>

              <span className="reporting-period">July 2026</span>
            </div>

            <div className="metrics-row">
              <div className="metric">
                <strong>6</strong>
                <span>Active projects</span>
              </div>

              <div className="metric">
                <strong>2</strong>
                <span>Delayed</span>
              </div>

              <div className="metric">
                <strong>3</strong>
                <span>Critical alerts</span>
              </div>
            </div>

            <div className="delivery-summary">
              <div className="delivery-heading">
                <span>On-time delivery</span>
                <strong>82%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </article>

          <aside className="conditions-panel">
            <p className="section-label">Current conditions</p>
            <h2>System status</h2>

            <div className="conditions-list">
              {systemConditions.map((system) => (
                <div className="condition-row" key={system.name}>
                  <span>{system.name}</span>
                  <span
                    className={`condition-status ${
                      system.status === "Monitor" ? "monitor" : ""
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="projects-section">
          <div className="projects-header">
            <div>
              <p className="section-label">Project delivery</p>
              <h2>Active projects</h2>
            </div>

            <button type="button">View all projects</button>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.id}>
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
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;