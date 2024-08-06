import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../scss/ActivityChart.scss";

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 28 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Activity",
        data: [
          4000, 3000, 7000, 10000, 4000, 5000, 7000, 6000, 10000, 12000, 8000,
          5000, 6000, 7000, 8000, 9000, 6000, 7000, 8000, 10000, 14000, 15000,
          12000, 10000, 11000, 13000, 12000, 10000,
        ],
        backgroundColor: "#5a99f8",
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 15000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="table-container">
        <div className="chart-header">
          <h2>Activity</h2>
          <div className="dropdown">
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>
        <div className="chart">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
