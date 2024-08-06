import React from "react";
import "../scss/MenuList.scss";
import { AiOutlineAim } from "react-icons/ai";
import { PiHamburger } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";

const MenuList = () => {
  const menuItems = [
    { icon: <AiOutlineAim color="#ff0000" />, label: "Goals" },
    { icon: <PiHamburger color="#1500ff" />, label: "Popular Dishes" },
    { icon: <BiDish color="#0699e2" />, label: "Menus" },
  ];

  return (
    <div className="menu-card">
      <div className="menu-card-content">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card-item">
            <div
              className="menu-card-icon"
              style={{ backgroundColor: getItemColor(index) }}
            >
              {item.icon}
            </div>
            <div className="menu-card-label">{item.label}</div>
            <div className="menu-arrow">
              <FaChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to assign colors to icons
const getItemColor = (index) => {
  const colors = ["#5E3237", "#293368", "#20495E"];
  return colors[index % colors.length];
};

export default MenuList;
