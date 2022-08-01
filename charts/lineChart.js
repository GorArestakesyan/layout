import React from "react";
import { Line } from "react-chartjs-2";
import { AiOutlineCaretDown } from "react-icons/ai";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export default function LineChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [50, 71, 37, 1, 54, 68, 76],
        fill: false,
        tension: 0.5,
        borderColor: "rgba(0, 172, 172, 1)",
      },
      {
        data: [40, 72, 20, 2, 40, 69, 80],
        fill: false,
        tension: 0.5,
        borderColor: "rgba(251, 207, 113, 1)",
      },
      {
        data: [10, 50, 70, 6, 7, 60, 75],
        fill: false,
        tension: 0.5,
        borderColor: "rgba(31, 123, 182, 1)",
      },
    ],
  };

  return (
    <div className="lineChart">
      <div className="chartTopText">
        <p>Medias Staats</p>
        <span>
          Last Week <AiOutlineCaretDown />
        </span>
      </div>
      <Line data={data} options={options}></Line>
      <div>
        <ul className="lineChartFooter">
          <li>
            <p></p>
            <span>Clicks</span>
          </li>
          <li>
            <p></p>
            <span>Page View</span>
          </li>
          <li>
            <p></p>
            <span>Sign ups</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
