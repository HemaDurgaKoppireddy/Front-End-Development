import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { createRoot } from "react-dom/client";
import moment from "moment"; // Make sure moment is installed
import "./ApexCharts.css";

// Utility function to generate bubble chart data
function generateData(baseval, count, { min, max }) {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = baseval;
    const y = Math.floor(Math.random() * (max - min + 1)) + min;
    const z = Math.floor(Math.random() * 75) + 15;

    series.push([x, y, z]);
    baseval += 86400000; // increment by one day
  }
  return series;
}

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Product1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Product2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Product3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Product4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      title: {
        text: "3D Bubble Chart",
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 70,
      },
      theme: {
        palette: "palette2",
      },
    },
  });

  return (
    <div className="parent">
      <div id="chart" className="chart_">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bubble"
          height={350}
        />
      </div>
    </div>
  );
};

// React 18 rendering
const domContainer = document.getElementById("app");
if (domContainer) {
  const root = createRoot(domContainer);
  root.render(<ApexChart />);
} else {
  console.error("No DOM element with id 'app' found.");
}

export default ApexChart;