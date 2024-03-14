import "../css/OrdersManagement.css";
import React, { useState } from "react";

const OrdersManagement = () => {
  const initialOrders = [
    {
      id: 1,
      customerName: "Customer 1",
      orderDate: "2024-03-08",
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Customer 2",
      orderDate: "2024-03-09",
      status: "Shipped",
    },
    {
      id: 3,
      customerName: "Customer 3",
      orderDate: "2024-03-10",
      status: "Delivered",
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  return (
    <div className="orders-container">
      <h1 className="orders-heading">OrdersManagement</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="orders-item">
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="view-details-button"
                  onClick={() => viewOrderDetails(order)}
                >
                  View Details
                </button>
                <button
                  className="update-status-button"
                  onClick={() => updateOrderStatus(order.id, "Shipped")}
                >
                  Update Status
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder !== null && (
        <div className="order-details">
          <h2>Order Details</h2>
          <table className="order-details-table">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{selectedOrder.id}</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td>{selectedOrder.customerName}</td>
              </tr>
              <tr>
                <td>Order Date:</td>
                <td>{selectedOrder.orderDate}</td>
              </tr>
              <tr>
                <td>status:</td>
                <td>{selectedOrder.status}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="close-details-button"
            onClick={() => setSelectedOrder(null)}
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
