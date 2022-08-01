import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const data = {
  labels: ["", "Blue", "", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 22, 48],
      backgroundColor: [
        "rgb(31, 123, 182)",
        "rgb(0, 172, 172)",
        "rgb(251, 207, 113)",
      ],
      borderWidth: 0,
    },
  ],
};
function DoughnutChart() {
  return (
    <div className="doughnutDiv">
      <p className="fifty">50</p>
      <div className="chartTopText">
        <p>Active Medias</p>
      </div>
      <Doughnut data={data} options={options} className="doughnut" />

      <div className="doughnutStatsDiv">
        <div>
          <ul className="doughnutChartFooter">
            <li>
              <p></p>
              <span>CTR</span>
            </li>
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
        <div>
          <ul className="doughnutStats">
            <li>
              <p></p>
              <span>25%</span>
            </li>
            <li>
              <p></p>
              <span>200</span>
            </li>
            <li>
              <p></p>
              <span>65</span>
            </li>
            <li>
              <p></p>
              <span>22</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
