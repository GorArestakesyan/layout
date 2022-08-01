import React from "react";
import { BsCheckLg, BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
function Prices() {
  return (
    <div className="prices">
      <ul>
        <li>
          <p>25</p>
          <span>
            <BsCheckLg />
            SIGNUPS
          </span>
        </li>
        <li>
          <p>$1000</p>
          <span>
            <AiOutlineLineChart />
            PROFIT
          </span>
        </li>
        <li>
          <p>$350</p>
          <span>
            <FaMoneyBillAlt />
            COMMISSIONS
          </span>
        </li>
        <li>
          <p>$300</p>
          <span>
            <BsFillQuestionCircleFill />
            PENDING COMMISSION
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Prices;
