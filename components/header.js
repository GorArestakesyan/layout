import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import en from "../images/en_flag.jpg";
import profileImage from "../images/profile_image.jpg";
function Header() {
  return (
    <div className="header">
      <div>
        <AiOutlineMenuFold className="ic" />
      </div>
      <div className="profileDiv">
        <img src={en} className="en" alt="en"></img>
        <img src={profileImage} className="profileImg" alt="profilePhoto"></img>
        <div className="profileInfo">
          <p>Hello Max!</p>
          <p>Last login: Thu Mar 20 2014</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
