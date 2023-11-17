import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import cartReducer from './features/cart/CartSlice';

// Tạo nơi lưu trữ trạng thái toàn cầu, đưa các trạng thái cần lữu trữ vào store
const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
