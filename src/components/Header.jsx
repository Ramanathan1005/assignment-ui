import React from "react";
import "../scss/Header.scss";
import { IoIosSearch } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

import UserImage from "../assets/images/userImage.png";

const Header = () => {
  return (
    <div className="header">
      <div className="SearchBar">
        <label>
          <input type="text" placeholder="Search" />
          <IoIosSearch className="Search-icon" />
        </label>
      </div>
      <div className="icon-group">
        <div className="icon">
          <CiMail className="icon-item" />
        </div>
        <div className="icon">
          <IoSettingsOutline className="icon-item" />
        </div>
        <div className="icon">
          <FaRegBell className="icon-item" />
        </div>
        <div className="avatar">
          <img src={UserImage} alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
