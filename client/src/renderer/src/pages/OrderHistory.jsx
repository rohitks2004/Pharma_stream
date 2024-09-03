import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const orderHistory = useSelector((state) => state.orders.orderHistory);

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <table className="order-history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.status}</td>
              <td>${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
