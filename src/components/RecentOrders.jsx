import React from "react";
import "../scss/RecentOrders.scss";
import UserImage from "../assets/images/userImage.png";

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      image: { UserImage },
    },
    {
      id: 2,
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      id: 3,
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      id: 4,
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      id: 5,
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      id: 6,
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "status-delivered";
      case "Pending":
        return "status-pending";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  return (
    <div className="recent-orders-container">
      <h2>Recent Orders</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="customer-info">
                  <img src={UserImage} alt="" />
                  <span>{order.customer}</span>
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td>
                  <p className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
