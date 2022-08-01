import React from "react";
import {
  BsSpeedometer2,
  BsKey,
  BsArrowLeftRight,
  BsHeartFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiSpeakerphone } from "react-icons/hi";
import {
  AiOutlineAreaChart,
  AiFillSetting,
  AiOutlineEye,
} from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import logo from "../images/logo.png";
function Sidebar() {
  return (
    <div>
      <div className="sideBar">
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo"></img>
            <BsSpeedometer2 className="icons" />
            <BsKey className="icons" />
            <CgProfile className="icons" />
            <HiSpeakerphone className="icons" />
            <AiOutlineAreaChart className="icons" />
            <BsArrowLeftRight className="icons" />
            <AiFillSetting className="icons" />
          </li>
          <li>
            <BsHeartFill className="icons" />
            <BiTimeFive className="icons" />
            <AiOutlineEye className="icons" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
