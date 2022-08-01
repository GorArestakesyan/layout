import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import DoughnutChart from "../charts/doughnutChart";
import LineChart from "../charts/lineChart";
import MapChart from "../charts/mapChart";
import Prices from "./prices";
function Body() {
  return (
    <div className="body">
      <div className="dash">
        <div className="dashText">Dashboard</div>
        <div className="favPage">
          <p>
            <BsFillHeartFill />
            ADD THIS PAGE TO FAVORITES
          </p>
        </div>
      </div>
      <Prices />
      <div className="charts">
        <LineChart />
        <DoughnutChart />
        <MapChart />
      </div>
      <div className="statistics">
        <div>
          <ul className="chartStats">
            <li>Top Affiliates</li>
            <li>Signups</li>
            <li>Pending Commissions</li>
          </ul>
        </div>
        <div className="tables">
          <table className="table">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Profit($)</th>
              <th>Commission($)</th>
              <th>View</th>
            </tr>
            <tr>
              <td>1007</td>
              <td>Simona</td>
              <td>55</td>
              <td>Simona</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1008</td>
              <td>Ariana</td>
              <td>45</td>
              <td>Adelina</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1009</td>
              <td>Adam</td>
              <td>35</td>
              <td>Adam</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1010</td>
              <td>John</td>
              <td>25</td>
              <td>John</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1011</td>
              <td>Garry</td>
              <td>15</td>
              <td>Garry</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Profit($)</th>
              <th>Commission($)</th>
              <th>View</th>
            </tr>
            <tr>
              <td>1007</td>
              <td>Simona</td>
              <td>55</td>
              <td>Simona</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1008</td>
              <td>Ariana</td>
              <td>45</td>
              <td>Adelina</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1009</td>
              <td>Adam</td>
              <td>35</td>
              <td>Adam</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1010</td>
              <td>John</td>
              <td>25</td>
              <td>John</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1011</td>
              <td>Garry</td>
              <td>15</td>
              <td>Garry</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Profit($)</th>
              <th>Commission($)</th>
              <th>View</th>
            </tr>
            <tr>
              <td>1007</td>
              <td>Simona</td>
              <td>55</td>
              <td>Simona</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1008</td>
              <td>Ariana</td>
              <td>45</td>
              <td>Adelina</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1009</td>
              <td>Adam</td>
              <td>35</td>
              <td>Adam</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1010</td>
              <td>John</td>
              <td>25</td>
              <td>John</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
            <tr>
              <td>1011</td>
              <td>Garry</td>
              <td>15</td>
              <td>Garry</td>
              <td>
                <AiOutlineBars />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Body;
