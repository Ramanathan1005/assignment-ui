import React from "react";
import "../scss/Sidebar.scss";
import { IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { TbWallet } from "react-icons/tb";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MdWindow } from "react-icons/md";

const icons = [
  { component: <IoMdHome />, id: "home" },
  { component: <MdInsertChartOutlined />, id: "chart" },
  { component: <IoBagCheckSharp />, id: "check" },
  { component: <TbWallet />, id: "wallet" },
  { component: <IoBagCheckSharp />, id: "check2" },
];

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <MdWindow className="icon-Style" />
      {icons.map((icon) => (
        <div key={icon.id} className="icon">
          {icon.component}
        </div>
      ))}
      <IoMdLogOut className="logout-icon" />
    </div>
  );
};

export default Sidebar;
