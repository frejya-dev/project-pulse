import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function DeliveryChart({ data }) {
  return (
    <section className="chart-section">
      <div className="chart-header">
        <div>
          <p className="section-label">Performance Trend</p>
          <h2>Monthly Completion Rate</h2>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis domain={[60, 90]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="completion"
              stroke="#176c96"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DeliveryChart;