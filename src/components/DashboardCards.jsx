import React from "react";
import "../scss/DashboardCards.scss";
import AddToCart from "../assets/images/add-to-cart.png";
import AddCart from "../assets/images/add-cart.png";
import RemoveCart from "../assets/images/remove-cart.png";
import Revenue from "../assets/images/revenue.png";

const DashboardCards = () => {
  const data = [
    {
      icon: AddToCart,
      label: "Total Orders",
      value: "75",
      change: "3%",
      positive: true,
      color: "#293368",
    },
    {
      icon: AddCart,
      label: "Total Delivered",
      value: "70",
      change: "3%",
      positive: false,
      color: "#165246",
    },
    {
      icon: RemoveCart,
      label: "Total Cancelled",
      value: "05",
      change: "3%",
      positive: true,
      color: "#5E3234",
    },
    {
      icon: Revenue,
      label: "Total Revenue",
      value: "$12k",
      change: "3%",
      positive: false,
      color: "#5B2A4A",
    },
  ];

  return (
    <div className="dashboard-cards">
      <div className="cards-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item?.icon}
              className="card-icon"
              style={{ backgroundColor: item?.color }}
            />
            <div className="card-content">
              <div className="card-label">{item.label}</div>
              <div className="card-center">
                <div className="card-value">{item.value}</div>
                <div
                  className={`card-change ${
                    item.positive ? "positive" : "negative"
                  }`}
                >
                  {item.positive ? "▲" : "▼"} {item.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
