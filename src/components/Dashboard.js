import "../css/Dashboard.css";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-content">
        <p>Total number of products: 100</p>
        <p>Total number of orders: 50</p>
      </div>
      <div className="dashboard-content button">
        <Link to="/products">
          <button>Products Management</button>
        </Link>
        <Link to="/orders">
          <button>Orders Management</button>
        </Link>
        <Link to="/calendar">
          <button>View Orders Calendar</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
