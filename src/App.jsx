import "./App.css";

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Project Pulse</p>
          <h1>Infrastructure Operations</h1>
          <p className="dashboard-intro">
            Monitor active projects, delivery status, alerts, and remaining budget.
          </p>
        </div>
      </header>

      <section className="metrics-grid" aria-label="Project summary">
        <article className="metric-card">
          <p>Active Projects</p>
          <strong>6</strong>
        </article>

        <article className="metric-card">
          <p>Delayed Projects</p>
          <strong>2</strong>
        </article>

        <article className="metric-card">
          <p>Critical Alerts</p>
          <strong>3</strong>
        </article>

        <article className="metric-card">
          <p>Budget Remaining</p>
          <strong>68%</strong>
        </article>
      </section>
    </main>
  );
}

export default App;