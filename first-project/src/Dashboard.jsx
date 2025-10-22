import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Dashboard.css"; // For custom dark styling
import coding from "./assets/web-programming.png"
import programmer from "./assets/programmer.png";
import games from "./assets/game.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTasks, faGamepad, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const cardData = [
  {
    title: "Coding",
    value: "8",
    change: "+80 coins",
    color: "#0c8086ff",
    icon: faCode,
  },
  {
    title: "Tasks",
    value: "12",
    change: "+70 coins",
    color: "#0c8086ff",
    icon: faTasks,
  },
  {
    title: "Games",
    value: "18",
    change: "+50 coins",
    color: "#0c8086ff",
    icon: faGamepad,
  },
  {
    title: "Tests",
    value: "5",
    change: "+90 coins",
    color: "#0c8086ff",
    icon: faFileAlt,
  },
];

const revenueChart = {
  options: {
    chart: { type: "line", background: "transparent" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    grid: { show: false },
    stroke: { curve: "smooth" },
    theme: { mode: "dark" },
  },
  series: [
    { name: "Revenue", data: [10, 85, 60, 95, 60, 80, 70, 60, 95, 39, 60, 90] },
    {
      name: "Secondary",
      data: [2, 3, 4, 6, 2, 4, 9, 10, 6, 4, 7, 9],
      type: "line",
      dashArray: 5,
    },
  ],
};

const expensesChart = {
  options: {
    chart: { type: "bar", background: "transparent" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    grid: { show: false },
    theme: { mode: "dark" },
    plotOptions: {
      bar: { horizontal: false, borderRadius: 4, columnWidth: "40%" },
    },
  },
  series: [
    {
      name: "Primary",
      data: [
        2000, 1700, 1800, 2200, 1300, 1500, 1100, 2500, 2000, 2200, 3000, 2000,
      ],
    },
    {
      name: "Secondary",
      data: [
        1000, 700, 600, 1100, 900, 1300, 600, 1800, 1600, 1400, 2000, 1000,
      ],
    },
  ],
};

function InfoCard({ title, value, change, color, icon }) {
  return (
    <div className="info-card">
      <div className="info-card-column">
        <div className="info-title">{title}</div>
        <div className="info-value">{value}</div>
        <span className="info-badge" style={{ background: color }}>
          {change}
        </span>
      </div>
      {/* <img className="info-image" src={image} alt="image" /> */}
      <FontAwesomeIcon icon={icon} className="info-icon" />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-dark">
      <div className="dashboard-cards">
        {cardData.map((cd) => (
          <InfoCard key={cd.title} {...cd} />
        ))}
      </div>
      <div className="dashboard-charts-row">
        <div className="dashboard-chart">
          <h3>Revenue</h3>
          <ReactApexChart
            options={revenueChart.options}
            series={revenueChart.series}
            type="line"
            height={250}
          />
        </div>
        <div className="dashboard-chart">
          <h3>Expenses</h3>
          <ReactApexChart
            options={expensesChart.options}
            series={expensesChart.series}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
