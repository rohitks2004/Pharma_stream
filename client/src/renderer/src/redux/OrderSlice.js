import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderHistory: [
    { id: '1', date: '2023-08-01', status: 'Completed', total: 150.5 },
    { id: '2', date: '2023-08-03', status: 'Completed', total: 200.75 },
  ],
  pendingOrders: [
    { id: '3', date: '2023-08-05', status: 'Pending', total: 300.0 },
    { id: '4', date: '2023-08-07', status: 'Pending', total: 120.25 },
  ],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.pendingOrders.find((order) => order.id === orderId);
      if (order) {
        order.status = status;
        if (status === 'Completed') {
          state.orderHistory.push(order);
          state.pendingOrders = state.pendingOrders.filter(
            (order) => order.id !== orderId
          );
        }
      }
    },
  },
});

export const { updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;

