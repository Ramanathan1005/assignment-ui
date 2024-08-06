import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import DashboardCards from "./components/DashboardCards";
import NetProfit from "./components/NetProfit";
import ActivityChart from "./components/ActivityChart";
import MenuList from "./components/MenuList";
import RecentOrders from "./components/RecentOrders";
import CustomerFeedback from "./components/CustomerFeedback";

const App = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  document.documentElement.style.setProperty("--height", `${height}px`);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <div className="content-area">
          <h1>Dashboard</h1>
          <div className="Dash-net">
            <DashboardCards />
            <NetProfit />
          </div>
          <div className="Activity-menu">
            <ActivityChart />
            <MenuList />
          </div>
          <div className="Recent-customer">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
