import { useState } from "react";
import "./App.css";
import { projects } from "./data/projects";
import { systemConditions } from "./data/systemConditions";
import ProjectRow from "./components/ProjectRow";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="status-bar">
        <span>Project Pulse</span>

        <div className="system-status">
          <span className="status-dot"></span>
          System operational · Updated 2 min ago
        </div>
      </div>

      <main className="dashboard">
        <header className="dashboard-header">
          <p className="eyebrow">Operations Overview</p>

          <h1>Infrastructure Operations</h1>

          <p className="dashboard-intro">
            Monitor transportation projects, delivery performance, network
            conditions, and operational alerts.
          </p>
        </header>

        <section className="overview-grid">
          <article className="overview-panel">
            <div className="section-heading">
              <div>
                <p className="section-label">Transportation Network</p>
                <h2>Current Performance</h2>
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
            <p className="section-label">Current Conditions</p>
            <h2>System Status</h2>

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
              <p className="section-label">Capital Improvement Program</p>
              <h2>Active Projects</h2>
            </div>

            <button type="button">View all projects</button>
          </div>

          <div className="project-search">
            <label htmlFor="project-search">Search projects</label>

            <input
              id="project-search"
              type="search"
              placeholder="Search by project name"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="project-list">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))
            ) : (
              <p className="no-results">No projects found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;