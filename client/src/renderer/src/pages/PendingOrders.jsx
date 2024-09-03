import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderStatus } from '../redux/OrderSlice';

const PendingOrders = () => {
  const dispatch = useDispatch();
  const pendingOrders = useSelector((state) => state.orders.pendingOrders);

  const handleUpdateStatus = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ orderId, status: newStatus }));
  };

  return (
    <div className="pending-orders">
      <h2>Pending Orders</h2>
      <table className="pending-orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.status}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>
                <button onClick={() => handleUpdateStatus(order.id, 'Completed')}>
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
