import "../css/OrdersCalendarView.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

const mockOrders = [
  {
    id: 1,
    customerName: "Customer 1",
    expectedDeliveryDate: new Date("2024-03-11"),
  },
  {
    id: 2,
    customerName: "Customer 2",
    expectedDeliveryDate: new Date("2024-03-11"),
  },
  {
    id: 3,
    customerName: "Customer 3",
    expectedDeliveryDate: new Date("2024-03-11"),
  },
];

const OrdersCalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    const filteredOrders = mockOrders.filter((order) => {
      const orderDate = new Date(order.expectedDeliveryDate);
      return (
        orderDate.getFullYear() === selectedDate.getFullYear() &&
        orderDate.getMonth() === selectedDate.getMonth() &&
        orderDate.getDate() === selectedDate.getDate()
      );
    });
    setSelectedOrders(filteredOrders);
  };

  return (
    <div className="orders-calendar-container">
      <h2 className="orders-calendar-heading">Orders Calendar</h2>
      <div className="calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
      <div className="selected-orders">
        <h3>Orders Due for Delivery on {date.toDateString()}</h3>
        {selectedOrders.length === 0 ? (
          <p className="message">! No orders found !</p>
        ) : (
          <ul>
            {selectedOrders.map((order) => (
              <li key={order.id}>{order.customerName}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersCalendarView;
