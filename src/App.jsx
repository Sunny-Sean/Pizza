import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';

//Tạo tuyến đường bằng cách truyền vào đối tượng trong mảng, Mỗi phần tử là mỗi đường dẫn
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // Chuyển đến đường dẫn Error khi sai đường dẫn hoặc không tải được dữ liệu từ api
    errorElement: <Error />,
    // Tạo tuyến đường con
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        // Khi truy cập vào URL của menu sẽ tự tìm nạp dữ liệu từ api
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
