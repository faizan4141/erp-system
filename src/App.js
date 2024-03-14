import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import OrdersManagement from "./components/OrdersManagement";
import ProductsManagement from "./components/ProductsManagement";
import OrdersCalendarView from "./components/OrdersCalendarView";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
